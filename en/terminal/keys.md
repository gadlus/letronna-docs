---
title: "Keys in the terminal"
description: "Typing, editing, history, copying and stopping in the terminal."
---

`?` on an empty line shows the keys over the box until the next key. `/help` lists them too, with the ones that work in your terminal.

## Sending and new lines

| Key | Does |
|---|---|
| Enter | send |
| `\` then Enter, or Ctrl+J | a new line |
| Shift+Enter | a new line, in terminals that can tell it from Enter |
| Ctrl+G | open what is in the box in your editor (`$VISUAL`, then `$EDITOR`); closing it puts the text back |

You can type while Letronna works: what you send reaches the model at the reply's next step, and shows as queued until then.

## Editing the line

| Key | Does |
|---|---|
| Option+arrows, or Alt+B and Alt+F | move a word |
| Alt+D, Alt+Backspace | delete a word |
| Ctrl+U, Ctrl+K, Ctrl+W | cut to the start, to the end, or a word |
| Ctrl+Y | put back what was last cut |
| Ctrl+_ | undo the last change to the line |

## History

What you send is kept for each project folder across sessions, so ↑ reaches yesterday's prompts.

| Key | Does |
|---|---|
| ↑ and ↓, or Ctrl+P and Ctrl+N | step through what you sent before |
| Ctrl+R | search what you sent, newest first, narrowed as you type |

Answers to questions, such as a key, are never kept, nor is anything typed in a private chat. The history is `prompt-history.jsonl` in your [data folder](/docs/data-and-privacy); delete it to forget it.

## Modes and stopping

| Key | Does |
|---|---|
| Shift+Tab, or Alt+M | step through the modes |
| Esc | stop a reply; turn down a card or a list; clear the line |
| Esc twice on an empty box | go back to an earlier message |
| Ctrl+C | stop a reply and stay; clear what is typed |
| Ctrl+C twice on an empty box, or Ctrl+D | leave |

A line cleared with Esc comes back with ↑. When you leave, Letronna says which session it was and how to come back to it.

## Output and the screen

| Key | Does |
|---|---|
| Ctrl+O, or a click | show all of a tool's output, or fold it again |
| Ctrl+L | clear the screen |
| End | go back to the bottom after scrolling up |
| Ctrl+V | attach the picture on the clipboard |

Selecting text with the mouse copies it. `/copy` copies the last reply as written.

## Running a command yourself

A line starting with `!` runs as a command in the session's folder, without asking, since you typed it. The model sees what it printed with your next message.

```sh
!npm test
```
