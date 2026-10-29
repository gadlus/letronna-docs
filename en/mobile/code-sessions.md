---
title: "Code sessions"
description: "Changing a GitHub repo from the phone: each message runs in Letronna Cloud and opens a pull request."
---

On the **Code** side, a session works on a GitHub repo. Each message runs in [Letronna Cloud](/docs/cloud), on a branch of its own, which Letronna pushes and opens as a pull request. Nothing is pushed to your main branch.

## Connecting GitHub

1. Open Settings > **GitHub**.
2. Choose **Connect GitHub**, and install the Letronna app on GitHub, on the repos you choose.
3. The repos show under **Your repos**. To add more, choose **Choose repos on GitHub**.

If the repo belongs to an organization, an owner has to approve the Letronna app first.

Letronna pushes only the session's own branch. Protect your main branch on GitHub as well: that is what really keeps it safe.

## Starting a session

1. Open the chats, choose **Code**, then **New session**.
2. **Choose a repository**.
3. Describe a change, and send it.

The chat shows the run starting, waiting for a container, then working. Reply with **Ask for more** to carry on in the same branch.

## Steps

An answer lists what the run did, such as "Ran 3 commands, edited 2 files". Tap it to open **Steps**: each command with its output, each file with its changes, and each tool used. A step that failed is marked.

## Letronna as co-author

With **Letronna as co-author** on, in Settings > **GitHub**, a session's commits end with "Co-authored-by: Letronna", and its pull request with Letronna's mark. Off, they are yours alone. This holds wherever the session starts, on the phone or a computer.

## Disconnecting

**Disconnect GitHub** makes Letronna forget the link; sessions can no longer push. To take the app off your repos, uninstall it on GitHub.
