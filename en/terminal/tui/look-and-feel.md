---
title: "Colours and text"
description: "The terminal's colours, what each means, turning colour off, and how wide text is laid out."
---

The terminal has one look, drawn in your terminal's own font and background. There are no themes to pick.

## What the colours mean

| Colour | Used for |
|---|---|
| blue | marks such as `›` and `●`, the waiting line, plan mode |
| green | lines a change adds |
| red | lines a change removes, errors, Bypass mode, a full context |
| amber | modes that run things without asking, a context filling up, a wait longer than usual |
| dim | details, hints, the footer, the box's edges |

The mode in the footer is coloured by how much runs without asking: dim for Ask, blue for Plan, amber for Edits and Auto, red for Bypass.

## No colour

Set `NO_COLOR` to turn colours off. The box, the caret and selecting still work.

```sh
NO_COLOR=1 letronna
```

With output piped, or in a terminal whose `TERM` is `dumb`, Letronna draws no box and asks its questions on plain numbered lines instead.

## Wide text

Chinese, Japanese and Korean text and emoji take the two columns they fill, so replies wrap whole, and the box, lists and selections line up with them. Tabs show as four spaces.

## What text can do to the terminal

A reply, a file or a command's output can carry codes that drive the terminal: retitle the window, write the clipboard, move the cursor. Letronna lets only colour and style through; anything else shows as text without its codes.
