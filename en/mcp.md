---
title: "MCP servers"
description: "Giving Letronna more tools from MCP servers: adding them, signing in, and choosing which tools it may use."
---

An MCP server gives Letronna tools of its own: a database, an issue tracker, your notes. Letronna reaches servers that run as a command on your computer, and servers reached by URL. They are listed in `mcp.json` in your [data folder](/docs/data-and-privacy), in the same shape Claude Desktop and Cursor use, so you can copy a list across.

## Adding a server

From the terminal:

```sh
letronna mcp add files -- npx -y @modelcontextprotocol/server-filesystem ~/notes
letronna mcp add github -e GITHUB_TOKEN=... -- npx -y @modelcontextprotocol/server-github
letronna mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

| Option for add | Does |
|---|---|
| `-t`, `--transport <kind>` | `stdio` (a command run here) or `http`; a URL means `http` |
| `-e`, `--env <KEY=value>` | an environment variable for the command |
| `-H`, `--header <"K: v">` | a header sent to a server reached by URL |
| `--client-id <id>` | the app id a server that registers no apps gave you |
| `--callback-port <port>` | the port that app id was registered with |

| Command | Does |
|---|---|
| `letronna mcp list` | every server, started to see it answer |
| `letronna mcp get <name>` | one server in full |
| `letronna mcp remove <name>` | take one out |
| `letronna mcp login <name>` | sign in to a server reached by URL, in the browser |
| `letronna mcp logout <name>` | forget that sign-in |

In the window, the MCP tab on the Capabilities page lists the servers, with a switch for each tool.

## Writing mcp.json yourself

```json
{
  "mcpServers": {
    "everything": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everything"],
      "autoApprove": ["echo"]
    },
    "hosted": {
      "url": "https://example.com/mcp",
      "headers": { "Authorization": "Bearer ${HOSTED_KEY}" },
      "excludeTools": ["delete_*"]
    }
  }
}
```

- Every call asks first, unless the tool is in `autoApprove`. `"autoApprove": "readOnly"` trusts the server's own word on which tools only read.
- `includeTools` and `excludeTools` choose which tools Letronna sees.
- Any text can use `${VAR}`, or `${VAR:-default}` for a value when the variable is not set.
- `"disabled": true` leaves a server off.
- `cwd` sets the folder a command runs in, and `timeout_ms` and `startup_timeout_ms` how long Letronna waits.

Servers reached by URL use streamable HTTP; the older SSE transport is not supported. Servers restart when they stop, and the list is read again when `mcp.json` changes.

## In a session

```sh
/mcp
/mcp reload
/mcp reconnect github
```

`/mcp` shows the servers and how each is doing. It also takes `enable`, `disable`, `login`, `logout` and `log` (what a server printed). A server's prompts run as slash commands, and its resources can be read.

When servers bring many tools, Letronna looks them up when needed instead of sending all of them with every request.

## Letronna as an MCP server

Another agent can use Letronna's media and search tools over MCP:

```sh
letronna mcp serve
```

`--yes` runs tools that need a yes without one, and `--allow-turn` also offers a whole Letronna turn as a tool.
