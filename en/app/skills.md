---
title: "Skills and your own commands"
description: "Saved instructions Letronna can follow, and prompts you run as slash commands."
---

A skill is a set of instructions Letronna can follow when a task needs it, with any files those instructions use. Letronna sees each skill's name and description, and reads the rest only when it uses one.

## Where skills come from

- **Built in**: a few come with Letronna, including one that explains Letronna's own commands and settings.
- **Yours**: in the `skills` folder of your [data folder](/docs/data-and-privacy).
- **The project's**: in `.agents/skills` or `.claude/skills` in the project folder.
- **Learned**: skills the model saves from work that went well. They start switched off until you switch them on.
- **From plugins**: see [Plugins, hooks and more](/docs/plugins).

When two skills have the same name, yours wins.

## Writing one

A skill is a folder with a `SKILL.md` in it: frontmatter with its name and description, then the instructions. It is the same layout Claude's skills use, so those work here too.

```md
---
name: release-notes
description: Write release notes from the git log since the last tag.
---

1. Find the last tag with `git describe --tags --abbrev=0`.
2. ...
```

In the window, open Capabilities and choose New skill to write one there. A built-in skill can be copied with Copy to edit.

## Adding and switching skills

In the terminal:

```sh
/skills
/skills add owner/repo
/skills on release-notes
/skills off release-notes
```

`/skills` lists every skill and uses one; `/skills add` adds skills from a GitHub repository, a link or a folder. In the window, the same is on the Capabilities page.

Every skill that is switched on also runs as a slash command by its name, such as `/release-notes`.

## Your own commands

A command is a prompt kept in a Markdown file, run as `/name`. Whatever you type after the name goes into the text. A subfolder makes `folder:name`.

- Yours go in the `commands` folder of your data folder.
- A project's go in `.letronna/commands` or `.claude/commands`.

The files are the same as Claude Code's: `name.md`, with an optional `description` and `argument-hint` in the frontmatter.

When you run a command, its text is put in the box for you to read before you send it. If a project's command has the same name as yours, yours wins.

Saved [workflows](/docs/app/helpers) run as slash commands too, and `/review` comes built in.
