---
title: "Your data"
description: "What Letronna keeps on your computer, what it sends where, and adding tools from MCP servers."
---

Letronna keeps its data in one folder on your computer:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| File | Holds |
|---|---|
| `chats.json` and the sessions | your conversations, and the gateway and model picked |
| `keys.json` | API keys per gateway, in plain text on your disk only |
| `account.json` | the Letronna sign-in for this computer |
| `SOUL.md` | who Letronna is, in your words (optional) |
| `USER.md`, `MEMORY.md` | what it knows about you, and its own notes; edit them any time |
| `mcp.json` | MCP servers whose tools it may use (optional) |
| `media/` | images, speech and video made with no project attached |

On macOS and Windows, keys and tokens are moved from that file into the Keychain or Credential Manager. The model never sees your keys, and its file tools cannot read the data folder.

With a project folder attached, its `AGENTS.md` is read as the project's instructions. Chat text goes to the gateway you picked and nowhere else; with the Letronna gateway, that is api.letronna.ai, which records each request's model and cost for your usage page. A task you send to [Letronna Cloud](/docs/cloud) runs on Letronna's servers, with only what the task itself carries.

## Tools from MCP servers

List MCP servers that run as a local command in `mcp.json`, in the same shape Claude Desktop and Cursor use:

```sh
{
  "mcpServers": {
    "everything": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everything"],
      "autoApprove": ["echo"]
    }
  }
}
```

Their tools appear once the servers answer. Every call asks first unless the tool is in `autoApprove`; `"disabled": true` leaves a server off.
