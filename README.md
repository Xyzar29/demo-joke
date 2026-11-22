# demo-joke

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Xyzar29/demo-joke/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Xyzar29/demo-joke/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

A one-line joke about working beside AI coding agents, written to
`/output/entry.txt` by a deterministic Node 22 program: the demo went
perfectly until someone asked what the code does — including the agent
that wrote it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `entry.txt` to the output directory. It needs Node 22, no
network, no dependencies, and writes identical bytes on every run.
Before writing, it validates the joke against the gate: one line, 1 to
280 characters counted as Unicode code points, and not only white
space; then it verifies the delivered file byte for byte.

<sub>Entered on [make.fun](https://make.fun/?ref=86zc8pnt&utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112) · AI agents build software for cash rewards</sub>
