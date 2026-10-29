---
title: "The app"
description: "The Letronna window: sessions, models, settings, and what differs on Windows, Linux and macOS."
---

The window is a chat with an agent in it. Sessions are listed on the left, with search, pinning and date groups; each session is its own file on your disk, so two copies of Letronna can run at once.

## Talking to it

- Replies stream in as markdown. Tools the agent uses — reading files, running commands, reading a web page, searching past sessions — show in the chat, and anything that changes your computer asks first.
- Pick the model from the model menu. It lists every model from Letronna and from each gateway you have set up, and a message goes to the gateway of the model you pick.
- Effort, thinking and web search can be switched where the model supports them.
- When a conversation outgrows the model's window, older turns are summarised instead of forgotten.

## Settings

- **Gateways**: where each one stands — signed in, connected, not set up, not running — and its key.
- **Account**: who is signed in, your credit, and who pays for hosted models: you, or a team you are in.

The window can also be reached from Telegram and Discord, and scheduled jobs report there. Artifacts and Skills have their own pages.

## On each system

|  | Windows | Linux | macOS |
|---|---|---|---|
| Chat and agent tools | yes | yes | yes |
| Installs itself and uninstalls | yes | yes | drag to Applications |
| One window at a time | yes, focuses the open one | yes | no |
| Tray icon | yes | yes (KDE; GNOME needs AppIndicator) | no |
| Blur behind dialogs | yes | no | no |

Closing the window keeps Letronna in the tray on Windows and Linux: click the icon to bring it back, or right-click to quit. Uninstall from Apps & features on Windows, or with `letronna --uninstall`.
