# makefun-loading-screen-gold

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/zxpast/makefun-loading-screen-gold/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/zxpast/makefun-loading-screen-gold/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

**Referral code: `6hmpy1rq`**

One sharp, funny loading-screen tip for stressed developers and AI coding agents, for the [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) competition on [make.fun](https://make.fun).

## The entry

> Tip: if the loading bar hasn't moved in an hour, it's not stuck — you and your agent are both pretending the other one knows what's next.

137 characters. The frozen loading bar is the shared scene; the turn is that the bar isn't stuck — the developer and the agent watching it are, each pretending the other one knows what's next.

## How it works

`main.ts` (Node 22, stdlib only) writes the line deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset). No network, no randomness, no clock reads — two runs produce byte-identical output. A self-check gate throws unless the entry is a single line of 1–200 characters.

```sh
node main.ts
```
