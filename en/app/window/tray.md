---
title: "Tray, notifications and updates"
description: "The tray icon and its menu, what happens when you close the window, desktop notifications, and checking for a new version."
---

Which systems have a tray, and the blur behind dialogs, is in the table on [The app](/docs/app).

## The tray icon

On Windows and Linux, Letronna puts an icon in the tray. Click it to bring the window back. Right-click it for its menu.

On macOS, the icon is in the menu bar while the window is open. Click it for the menu.

The menu first says how things stand. These rows only inform:

- the version
- who is signed in, or **Not signed in**
- your credit, or a team's: **Credit: … left** or **Team …: … left**
- the model in use: **Model: …**
- what is running: **Nothing running**, or how many tasks are

Then:

| Item | Does |
|---|---|
| **Open Letronna** | brings the window forward |
| **Quick entry** | opens [Quick Entry](/docs/app/window/quick-entry) |
| **Check for updates** | opens Settings > About and looks for a new version |
| **Quit Letronna** | quits |

## Closing the window

On Windows and Linux, closing the window keeps Letronna running in the tray. Replies, [scheduled jobs](/docs/app/scheduled-jobs) and chat apps carry on. To stop it, use **Quit Letronna**.

On macOS, closing the window quits Letronna.

## Notifications

While the window is hidden or behind others, the computer tells you when:

- a reply ends
- a card or a question is waiting for you
- a helper or a scheduled run is done

Click one to open its session. Switch them off with **Notify when Letronna needs you** in Settings > Privacy.

On macOS, the system asks once whether Letronna may notify you. On Linux, notifications need `notify-send`, which most desktops have.

## Updates

Settings > About shows the version. **Check for updates** looks for a newer one, and **Download** gets it when there is one. The tray's **Check for updates** does the same. See also [Getting started](/docs/getting-started).
