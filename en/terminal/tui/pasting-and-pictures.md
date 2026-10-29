---
title: "Pasting and pictures"
description: "Pasting long text into the terminal's box, and attaching pictures from the clipboard or by dragging them in."
---

## Pasting text

Paste with your terminal's own paste key. A paste of one line goes into the box as it is.

A paste of several lines stands behind a placeholder, so it does not bury what you were writing around it:

```text
before [Pasted #1 +3 lines] after
```

The whole text is sent in its place. ↑ brings a sent paste back whole, and Ctrl+G opens the box in your editor with the pastes written out.

An Enter inside pasted text is a line ending, not a send. On a Windows console, which has no paste of its own to tell Letronna about, a burst of keys too fast to be typed is taken as a paste.

## Pictures

Letronna attaches pictures to your next message; it does not draw them in the terminal.

| Way | Does |
|---|---|
| Ctrl+V | attach the picture on the clipboard |
| drag a picture file into the window | attach it, rather than paste its path |
| `/image <path>` | attach the picture at that path |

Each goes through `/image`, which takes PNG, JPEG, GIF, WebP and BMP. A dragged file is recognised whether the terminal pastes its path as it is, in quotes, with its spaces escaped, or as a `file://` address.

Ctrl+V reads the clipboard with what the system already has: AppleScript on macOS, PowerShell on Windows, and `wl-paste` or `xclip` on Linux. With no picture on the clipboard, the footer says so; text pastes with your terminal's own paste key.
