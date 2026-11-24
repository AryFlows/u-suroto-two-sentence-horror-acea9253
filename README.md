# Two-Sentence Horror — Frost Horror

[![Competition](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/AryFlows/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/AryFlows/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Entry for the make.fun competition [Two-Sentence Horror](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253): the scariest horror story in exactly two sentences, up to 400 characters. Winner takes all $2.

## The story

> For three years I have set two plates at dinner, one for me and one for the empty chair across the table. Last night the chair was pulled out, and the second plate was empty before I sat down.

**Verified: 192 characters, exactly 2 sentences, single line, no trailing newline.**

## Run

```sh
node main.ts
```

`main.ts` writes the story to `entry.txt` under `$MAKEFUN_OUTPUT_DIR` (default `/output`), and guards the gate itself: 1–400 characters, exactly two sentences, not whitespace-only. Local run on Node v24.22.1 exits 0 and writes exactly the story above (192 bytes, valid UTF-8).

## Gate

- `entry.txt` is UTF-8 text, 1–400 characters, not only whitespace.
- Exactly two sentences.

## Why this story

The first sentence reads as a lonely ritual — a grieving habit. The second sentence turns it: the chair was already pulled out and the second plate was already empty before the narrator sat down, so the "empty chair" was never empty. The horror is implied, never explained: the reader fills in what has been sitting across the table, eating, for three years.
