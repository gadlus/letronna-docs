---
title: "Lists and pickers"
description: "How lists, switches and sliders work in the terminal's box: picking a session, a model, a mode or an effort."
---

Commands that need a choice open it in the box, steered with the keys. The footer says which keys work.

## Lists

A list shows up to ten answers at once; longer lists scroll.

| Key | Does |
|---|---|
| ↑ and ↓ | move; past the end, back to the start |
| Page Up and Page Down | move ten at a time |
| Home and End | the first or the last |
| Enter | take the highlighted one |
| a digit | take that one outright |
| Esc, or Ctrl+C | leave it as it was |

Lists you open yourself, such as `/resume`, narrow as you type: only the answers holding the letters stay. Esc then shows them all again, and a second Esc leaves.

## Picking a session

`/resume` lists the sessions you can pick up, newest first, up to fifty:

```text
fix the login form  ·  web  ·  24 messages
```

Each row has the session's name, its project folder and how many messages it holds. Pick one to open it, or "Stay where I am". A word after `/resume` finds sessions by their name or by what was said. See [Sessions](/docs/app/sessions).

## Picking a model

`/model` lists the models of every gateway, with the one in use first and marked `(in use)`, then "Keep the one I have". A word after it narrows the list, as `/model <word>`.

`/model image`, `/model speech` and `/model video` list those models with what each costs, after "Auto · the cheapest working".

## Picking a mode

`/mode` lists the modes to pick from. Shift+Tab steps through them without a list; see [Asking first and modes](/docs/app/permissions).

## Going back

`/rewind`, or Esc twice on an empty box, lists the messages you sent, newest first, narrowed as you type. Picking one asks what to restore. See [Sessions](/docs/app/sessions).

## Switches

Skills, MCP servers and plugins can be listed as switches, each on or off; see `/skills`, `/mcp` and `/plugins`. A mark on each row says which.

| Key | Does |
|---|---|
| ↑ and ↓ | move |
| Space or Enter | switch the highlighted one at once |
| letters | narrow the list |
| Esc | show them all again, then leave |

## Sliders

`/effort` with nothing after it shows a slider: the levels spread along a track, filled up to the one picked.

| Key | Does |
|---|---|
| ← and → | slide; it stops at each end |
| Home and End | the first or the last |
| a digit | go to that stop |
| Enter | keep it |
| Esc | leave it as it was |

## Searching what you sent

Ctrl+R lists what you sent before, newest first, narrowed as you type. Enter puts the one picked in the box, where you can change it before sending. See [Keys in the terminal](/docs/terminal/keys).
