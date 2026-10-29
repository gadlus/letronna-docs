---
title: "Plugins, hooks and more"
description: "Project instructions, plugins, hooks, language servers, and running Letronna inside Zed or JetBrains."
---

These files live in your [data folder](/docs/data-and-privacy). A project can bring its own instructions, skills and commands, but never servers, plugins or hooks: those are programs, and whoever wrote a repository may not be the person running it.

## Project instructions

`AGENTS.md` (or `CLAUDE.md`) in a project is read as that project's instructions. Letronna reads it from the project folder and every folder above it, up to the root of the repository, and a subfolder's own when it works there.

- `AGENTS.local.md` is read after it, for your own rules kept out of git.
- A line with `@path` pulls in another file.
- `/init` has the model write a first `AGENTS.md`, or fill in the one there is.

```sh
/init
```

## Plugins

A plugin is a git repository with a `plugin.json`. It can bring skills, slash commands, reply styles, MCP servers and model providers.

```sh
/plugins
```

`/plugins` adds plugins from git, switches them on or off, updates and removes them, and browses marketplaces. In the window, use the Plugins page.

Every plugin is checked before it is installed. Its MCP servers and providers are used only after you allow them, and you are asked again when an update changes them.

## Hooks

A hook is a command of your own that runs when something happens: before or after a tool call, at the end of a turn, or when an approval waits. List them in `hooks.json`, in the same shape as Claude Code's hooks, so existing scripts carry over.

- A hook reads JSON on stdin.
- Exit code `2` blocks the action, with what it printed to stderr as the reason.
- A hook can block an action or keep a turn going. It can never allow something the approvals stopped.

## Language servers

`lsp.json` lists language servers that check the files Letronna edits. Errors an edit brings in reach the model, so it can fix them without a build.

```json
{
  "servers": {
    "rust": {
      "command": "rust-analyzer",
      "extensions": ["rs"],
      "projects": ["/home/me/code/my-app"]
    }
  }
}
```

Each server runs only for the projects listed. Most language servers run the project's code, so list only projects you would build yourself. A server stops after ten minutes with nothing to do.

## Zed and JetBrains

Zed and JetBrains editors can run Letronna as their agent, over the Agent Client Protocol. Point the editor at this command:

```sh
letronna acp
```

The editor can pick the model and the mode, and reopen Letronna sessions.
