---
title: "Terminals that work"
description: "Which terminals Letronna's screen works in on Windows, macOS and Linux, and what differs between them."
---

Letronna's screen works in any terminal that takes the usual escape codes: Windows Terminal and the Windows console, Terminal.app and iTerm2 on macOS, and kitty, Ghostty, WezTerm and foot. It works inside tmux and screen, and over ssh.

What differs is below. Start with `/help`: it lists the keys that work in the terminal you are in.

## Shift+Enter

Most terminals send Shift+Enter as a plain Enter. Letronna asks terminals that can tell them apart to do so, and the Windows console always can. Everywhere, `\` then Enter, or Ctrl+J, starts a new line. The opening screen names the keys that work in yours.

## Shift+Tab

Where a terminal keeps Shift+Tab for itself, Alt+M steps through the modes instead.

## Option and Alt

Option+arrows reach Letronna as Alt+B and Alt+F in Terminal.app and iTerm2, and move a word. On Windows, AltGr types its character.

## Ctrl+Enter

Most terminals send Ctrl+Enter as a plain Enter, so it sends. To send what is queued without waiting, use Ctrl+S.

## Copying

Terminal.app ignores the way programs ask a terminal to copy, and iTerm2 and tmux take it only with a setting. Letronna copies through the system's clipboard command there as well. Over ssh it is left to your terminal. See [Selecting and copying](/docs/terminal/tui/selecting-and-copying).

## Notifications

iTerm2, kitty, Ghostty, WezTerm and foot show a desktop notification. Every other terminal, and tmux and screen, get the bell. See [Title and notifications](/docs/terminal/tui/notifications).

## Pasting on Windows

The Windows console has no paste of its own to tell Letronna about, so pasted text arrives as keys. Letronna takes a burst of keys too fast to be typed as a paste, so its line endings do not send it. See [Pasting and pictures](/docs/terminal/tui/pasting-and-pictures).

## Your terminal's own scrollback and selection

While Letronna runs, it holds the conversation itself, on a screen of its own. Your terminal's scrollbar and its own selection do not reach it: use the wheel and the keys to scroll, and drag to copy. When you leave, the terminal shows what it showed before you started. See [Scrolling](/docs/terminal/tui/scrolling).

## Signals

Closing the terminal, or a `SIGTERM`, ends the session as leaving does: the terminal is given back as it was, and the session is saved.
