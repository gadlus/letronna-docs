---
title: "Title and notifications"
description: "How the terminal's tab title and desktop notifications tell you Letronna is working, done, or waiting for you."
---

## The window's title

The terminal's tab or window title leads with the session's name, then Letronna's:

- **Idle**: the name alone.
- **Working**: a turning mark in front of it.
- **Waiting for you**: it says "waiting for you" while a card or a question waits for an answer.

When you leave, the title the terminal had comes back, in terminals that keep one.

## Notifications

When a reply ends, or something needs you, while you are not looking at the terminal, Letronna tells you. They are on until you turn them off:

```sh
/notify off
```

`/notify on` turns them on again; `/notify` alone switches.

Letronna counts you as away when the terminal says it has lost focus. In a terminal that does not say, a minute with no key, paste or mouse counts as away.

## How they arrive

| Terminal | You get |
|---|---|
| iTerm2 | a desktop notification |
| kitty | a desktop notification, with a title and a body |
| Ghostty, WezTerm, foot | a desktop notification, with a title and a body |
| inside tmux or screen | the bell |
| any other | the bell |

The bell is whatever your terminal makes of it: a sound, a mark on the tab, or a badge on the dock icon.
