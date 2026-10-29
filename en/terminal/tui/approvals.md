---
title: "Approving tool calls"
description: "The card that asks before Letronna acts in the terminal: the diff, the answers, and questions from the model."
---

When a tool call needs a yes, a card opens in the box: what Letronna wants to do, then the answers. Which calls ask depends on the mode; see [Asking first and modes](/docs/app/permissions).

## What the card shows

The card's question says what the call will do, such as "Letronna wants to run a command" or "Letronna wants to edit src/main.rs".

- **A change to a file** shows as a diff over the card: removed lines in red, added lines in green, two unchanged lines either side, and long unchanged stretches folded to `… 12 unchanged`. Past 28 rows the rest is counted, as `… 40 more lines`. A very long file shows as a straight replacement.
- **Anything else**, such as a command, shows its preview inside the card. A preview cut short says so.

Code in a diff is coloured: strings, comments, numbers and common keywords.

## The answers

| Answer | Does |
|---|---|
| Yes | run it this once |
| Yes, and stop asking for this | run it, and allow calls like it for the rest of the session |
| Yes, and always allow `…` here | run it, and keep a rule that allows calls like it in this project |
| No, tell it why not | turn it down, and type a reason for the model |
| No, and stop here | turn it down and end the turn |

The second and third answers show only where they apply. A call that asks every time, such as a sign-in, offers neither.

A card asking to save to memory offers where to keep it instead of Yes: Save everywhere, Save for this project only, or Save for this chat only.

## Answering

| Key | Does |
|---|---|
| ↑ and ↓ | move between answers |
| Enter | take the highlighted answer |
| 1 to 9 | take that answer outright |
| Esc, or Ctrl+C | turn it down and stop the turn |

While the card waits, the window's title says "waiting for you", and you are told if you have looked away. See [Title and notifications](/docs/terminal/tui/notifications).

## When you are typing

A card can come up while you are typing a message. It does not take your keys:

- Letters go on into the box behind the card.
- An Enter or a digit pressed while you are still typing sends your line, not an answer. Only one pressed half a second after you stop answers the card.
- A line you sent while Letronna worked never answers a question asked after it.

## Plans

In plan mode, a finished plan is printed and the card asks "Carry out this plan?":

| Answer | Does |
|---|---|
| Yes, carry it out | turn plan mode off and start |
| No, keep planning | stay in plan mode |
| No, and stop here | end the turn |

## Questions from the model

The model can ask you a question with answers to pick from. Pick one as on a card, or pick "Answer in my own words" and type them. Esc turns the question down and stops the turn.

## Helpers

A helper's call that needs a yes asks in the same box, as "Helper … wants to …":

| Answer | Does |
|---|---|
| Yes | run it this once |
| Yes, and stop asking it for `…` | run it, and allow calls like it for the rest of that helper's run |
| No | turn it down |

See [Helpers](/docs/app/helpers).
