---
title: "Selecting and copying"
description: "Marking text with the mouse in the terminal, where the copy goes, and copying over ssh."
---

Letronna draws its own conversation, so it does its own selecting too. Drag with the mouse; no Shift is needed.

## Selecting

1. Press the left button where the text starts.
2. Drag to where it ends.
3. Let go. The text is copied, and the footer says how many lines.

A click with no drag clears the selection. A click on folded tool output or thinking opens it instead.

What is copied is the text as written: a line wrapped over several rows is one line again, without the indent or the mark in front of it.

## Keys with a selection

| Key | Does |
|---|---|
| Ctrl+C | copy what is marked again |
| Esc | drop the selection; while a reply runs, also stop it |

Without a selection, Ctrl+C does what it always does; see [Keys in the terminal](/docs/terminal/keys).

## Where the copy goes

Letronna hands the text to your terminal, which puts it on the clipboard where it can. It also gives it to the system's clipboard command:

| System | Command |
|---|---|
| macOS | `pbcopy` |
| Windows | `clip` |
| Linux | `wl-copy`, `xclip` or `xsel`, the first that is there |

The footer says "copied" only when the system's command took it. When only the terminal had it, it says "sent to the terminal's clipboard": the terminal may or may not have kept it. Terminal.app ignores the terminal's way, and iTerm2 and tmux take it only with a setting; there, the system's command is what copies.

## Over ssh

Over ssh, the copy is left to the terminal at your end, since the system's command would fill the far machine's clipboard. Your terminal has to allow programs to set the clipboard.

## Copying a whole reply

`/copy` copies the last reply as written, Markdown and all; `/copy 2` the one before it. See [Sessions](/docs/app/sessions).
