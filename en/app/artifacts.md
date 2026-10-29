---
title: "Artifacts and previews"
description: "The files Letronna makes for you, and previewing pages and pictures."
---

When you ask for a page, a chart or a small app, Letronna first makes it as one file you can preview. It moves to a project on your computer only when the work needs one, and to [Letronna Cloud](/docs/cloud) only when your computer cannot do it, and then with your yes.

## The Artifacts page

In the window, Artifacts lists the files Letronna writes, newest first. For each one:

- **Preview** shows it in the window. HTML and SVG files are drawn as pages.
- **Show in folder** opens the folder it is in.
- **Open in your browser** opens it in your own browser, on this computer only.

Previews open by themselves when a file is made, unless you turn that off.

## Previewing from the terminal

`/preview` serves an HTML or SVG file to your browser. `--open` opens it at once.

```sh
/preview --open chart.html
```

## Files a turn changed

At the end of a turn, the window lists the files it changed. The Changes tab beside the chat shows every edit of the session: review or revert them, then stage, commit and push. The Files tab browses and previews the project. In the terminal, `/diff` shows what changed in the project, and `/diff session` only this session's files.

## Pictures, speech and video

What Letronna makes with [hosted models](/docs/hosted-models) is saved in `media/` in the project folder, or in your data folder when no project is attached. Pictures open in the window's own viewer.
