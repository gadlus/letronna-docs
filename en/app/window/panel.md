---
title: "The side panel"
description: "The Files, Changes and Jobs tabs beside the chat."
---

The panel sits on the right of the chat. Ctrl+J shows or hides it, and **Hide the panel** closes it. Each tab also has its own key.

| Tab | Key | Shows |
|---|---|---|
| **Files** | Ctrl+Shift+E | the project's files |
| **Changes** | Ctrl+Shift+D | the files this session changed, or all changes since the last commit |
| **Jobs** | Ctrl+Shift+J | commands running in the background |

On macOS, use Cmd where this page says Ctrl.

A tab needs a project folder. With none, it says so and offers to pick one.

## Files

The project as a tree. Click a file to preview it.

| Button | Key | Does |
|---|---|---|
| **Add to message** | Ctrl+Enter | names the file in your message |
| **Open in editor** | Ctrl+O | opens it in your editor |
| **Open with system** | Ctrl+Shift+O | opens it with the program the system uses for it |
| **Show in folder** | Ctrl+Shift+R | shows it in its folder |
| **Copy path** | Ctrl+Shift+C | copies its path |
| **Show ignored files**, **Hide ignored files** | Ctrl+I | shows or hides files git ignores |
| **Close the preview** | Escape | closes the preview |

In the tree, Up and Down move, Right opens a folder, Left closes it or goes up, and Enter opens a folder or shows a file.

## Changes

Two lists at the top: **This session**, the files this session changed, and **Working tree**, everything changed since the last commit. S switches between them.

For each file:

| Button | Key | Does |
|---|---|---|
| open the file | Enter | shows or hides its diff |
| **Stage**, **Unstage** | Space | puts the whole file in the next commit, or takes it out |
| **Stage hunk**, **Unstage hunk** | H | the same for one hunk |
| **Revert** | R | undoes this session's edits to it |
| **Add to message** | A | names it in the message |

] and [ step to the next hunk and the one before.

To commit:

1. Stage what you want in the commit.
2. Press M to write the message in **Commit message**, or G (**Suggest**) to have the model write it.
3. Press Ctrl+Enter to **Commit**, or Ctrl+Shift+Enter to **Commit and push**.

Escape goes back to the composer. A revert tells the model which files went back, so it reads them again before it changes them.

## Jobs

Commands the agent left running in the background, and yours. See [What the agent can do](/docs/app/tools).

- **Run a command in the background** starts one of your own in the project folder. It asks first where the session's rules say to.
- **Stop** stops a job. **Open a terminal here** opens a terminal in the project folder.
- Up and Down pick a job. Its output follows as it prints.

To send some of the output to the model:

1. In the output, pick lines with Shift+Up or Shift+Down, or all of it with Ctrl+A.
2. Press Enter, or **Add selection to message**.

While lines are picked, the output holds still. Escape lets go, and it follows again.
