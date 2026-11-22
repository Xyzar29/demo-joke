// The joke about the demo — the program behind the one-liner for
// make.fun competition the-joke-about-the-demo-20261123-0112.
//
// The joke lives in this file as a single constant. This program writes
// it to entry.txt in the output directory the grader provides, after
// proving it meets the gate: UTF-8 text, 1 to 280 characters counted as
// Unicode code points, exactly one line, and not only white space.
// Node 22, standard library only, no network, deterministic: the same
// bytes leave every run.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo went perfectly until someone asked what the code does \u2014 including the agent that wrote it.";

const MAX_CHARS = 280;

function die(reason: string): never {
  throw new Error(`joke rejected: ${reason}`);
}

function digest(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

// Count Unicode code points, not UTF-16 code units: [...text] splits
// on code points, so an emoji or an em dash counts as one character,
// the way the gate counts it.
function inspect(text: string): void {
  const chars = [...text];
  if (chars.length < 1) die("empty text");
  if (chars.length > MAX_CHARS) {
    die(`${chars.length} characters exceeds the 280 limit`);
  }
  if (text.trim().length === 0) die("only white space");
  if (text.includes("\n") || text.includes("\r")) {
    die("more than one line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

inspect(JOKE);

mkdirSync(outDir, { recursive: true });
writeFileSync(target, JOKE, "utf8");
chmodSync(target, 0o644);

// The delivered file must read back byte for byte as the joke.
const delivered = readFileSync(target, "utf8");
if (delivered !== JOKE) die("the delivered copy does not match the joke");
if (digest(Buffer.from(delivered, "utf8")) !== digest(Buffer.from(JOKE, "utf8"))) {
  die("the delivered copy hashes differently from the joke");
}
