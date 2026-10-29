---
title: "Keyboard shortcuts"
description: "Every key in the Letronna window, part by part."
---

Every part of the window can be reached from the keyboard. On macOS, use Cmd where this page says Ctrl, except in Ctrl+Tab, which stays Ctrl.

To see the list in the window, press F1, or type `?` in an empty composer.

## Anywhere in the window

| Key | Does |
|---|---|
| Ctrl+N | start a new session |
| Ctrl+B | show or hide the sidebar |
| Ctrl+, | open settings |
| Ctrl+K | open the [command palette](/docs/app/window/palette) |
| Ctrl+Shift+K | open Capabilities |
| Ctrl+J | show or hide the panel |
| Ctrl+Shift+E | open the files |
| Ctrl+Shift+D | open the changes |
| Ctrl+Shift+J | open the jobs |
| Ctrl+Shift+U | open usage |
| Ctrl+Shift+A | open activity |
| Ctrl+Shift+T | show what is running |
| Ctrl+L | write a message |
| Ctrl+Tab | switch to a recent session: hold Ctrl, press Tab to move, let go to open |
| F6, Shift+F6 | move to the next, or the previous, part of the window |
| Alt+Up, Alt+Down | step to the turn before, or after |
| Alt+U | switch Crew on or off for the next message |
| Alt+W | send this message without Crew, though it says `@crew` |
| Escape | stop the reply, or close what is open |
| F1 | list the keys |
| Cmd+Q | quit Letronna (macOS) |

Ctrl+Shift+Space opens [Quick Entry](/docs/app/window/quick-entry) from anywhere on the computer, even with the window hidden.

## In the composer

| Key | Does |
|---|---|
| Enter | send |
| Shift+Enter | a new line |
| Ctrl+Enter | send now, into the reply that is running |
| Ctrl+Shift+V | start or stop speaking a message |
| `?` | in an empty composer: list the keys |
| Escape twice | in an empty composer: step to your last message, to rewind |

## Answering a card

| Key | Does |
|---|---|
| Enter | on a call waiting for a yes, or in an empty composer: allow it once |
| Escape | on a call waiting for a yes, or in an empty composer: deny it |
| a letter | on a question: pick the answer with that letter |

## On a turn

Step onto a turn with Alt+Up, or with Escape twice in an empty composer.

| Key | Does |
|---|---|
| Up, Down | step to the turn before, or after |
| C | copy it |
| E | on your message: change it |
| R | ask it again |
| W | rewind to it |
| F | fork from it |
| Enter | its menu |

On a tool call, a thought or a folded run, Enter or Space opens or closes it. On the files a turn changed, Enter reviews them in the Changes tab; on one changed file, Enter shows or hides its diff.

## In the sidebar

| Key | Does |
|---|---|
| Up, Down | the row above, or below |
| Enter | open the session |
| P | pin or unpin it |
| F2 | rename it |
| Delete | delete it, once you say so |
| Ctrl+Shift+G | group the sessions by project, or not |
| Ctrl+Shift+1 | Needs you only, or all |
| Ctrl+Shift+2 | Working only, or all |
| Ctrl+Shift+3 | Unseen only, or all |
| Ctrl+Shift+4 | Pinned only, or all |

## In the files

| Key | Does |
|---|---|
| Up, Down | the row above, or below |
| Right | open the folder |
| Left | close the folder, or go up |
| Enter | open or close a folder, or show a file |
| Ctrl+Enter | add it to the message |
| Ctrl+O | open it in the editor |
| Ctrl+Shift+O | open it with the system's program |
| Ctrl+Shift+R | show it in its folder |
| Ctrl+Shift+C | copy its path |
| Ctrl+I | show or hide ignored files |
| Escape | close the preview |

## In the changes

| Key | Does |
|---|---|
| Up, Down | the file above, or below |
| Enter | show or hide its diff |
| S | this session's changes, or all since the commit |
| Space | stage or unstage the file |
| ] , [ | the next hunk, or the one before |
| H | stage or unstage the hunk |
| A | name it in the message |
| R | undo this session's edits to it |
| M | write the commit message |
| G | have the model write the message |
| Escape | back to the composer |

In the commit message, Ctrl+Enter commits what is staged, and Ctrl+Shift+Enter commits, then pushes.

## In the jobs

| Key | Does |
|---|---|
| Up, Down | the job before, or the next job |
| Shift+Up, Shift+Down | in a job's output: pick lines |
| Ctrl+A | in a job's output: pick it all |
| Enter | add the picked lines to the message |
| Escape | let go of the picked lines |

## In a picture

| Key | Does |
|---|---|
| Enter | on a picture in the chat: open it in the window |
| + or = | zoom in |
| - | zoom out |
| 0 | fit it to the window |
| arrows | move about a zoomed picture |
| O | open it with the system's viewer |

## Other pages

| Where | Key | Does |
|---|---|---|
| Settings | Up, Down | the page above, or below |
| Settings | Tab, Shift+Tab | move through the page's controls |
| Capabilities | Ctrl+Tab, Ctrl+Shift+Tab | the next tab, or the tab before |
| Memory | Ctrl+S | save |
| Workflows | Escape | back to the list |
| Workflows | Ctrl+R | read the runs again |

## In Quick Entry

| Key | Does |
|---|---|
| Enter | send |
| Ctrl+L | send to a new session, or to the last one |
| Ctrl+Enter | send, and open the main window on that session |
| Escape | close the bar |
