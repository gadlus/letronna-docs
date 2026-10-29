---
title: "Deine Daten"
description: "Was Letronna auf deinem Rechner speichert, was es wohin schickt, und Tools von MCP-Servern hinzufügen."
---

Letronna speichert seine Daten in einem einzigen Ordner auf deinem Rechner:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| Datei | Enthält |
|---|---|
| `chats.json` und die Sitzungen | deine Unterhaltungen sowie das gewählte Gateway und Modell |
| `keys.json` | API-Schlüssel pro Gateway, als reiner Text und nur auf deiner Festplatte |
| `account.json` | die Letronna-Anmeldung für diesen Rechner |
| `SOUL.md` | wer Letronna ist, in deinen Worten (optional) |
| `USER.md`, `MEMORY.md` | was es über dich weiß und seine eigenen Notizen; bearbeite sie jederzeit |
| `mcp.json` | MCP-Server, deren Tools es nutzen darf (optional) |
| `media/` | Bilder, Sprache und Video, die ohne verknüpftes Projekt erzeugt wurden |

Ist ein Projektordner verknüpft, wird dessen `AGENTS.md` als Anweisungen des Projekts gelesen. Chat-Text geht an das Gateway, das du gewählt hast, und nirgendwo sonst; beim Letronna-Gateway ist das api.letronna.ai, das Modell und Kosten jeder Anfrage für deine Usage-Seite festhält. Eine Aufgabe, die du an [Letronna Cloud](/docs/cloud) schickst, läuft auf Letronnas Servern, nur mit dem, was die Aufgabe selbst mitbringt.

## Tools von MCP-Servern

Trage MCP-Server, die als lokaler Befehl laufen, in `mcp.json` ein, in derselben Form, die Claude Desktop und Cursor verwenden:

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

Die Tools der Server erscheinen, sobald die Server antworten. Jeder Aufruf fragt vorher nach, es sei denn, das Tool steht in `autoApprove`; `"disabled": true` lässt einen Server ausgeschaltet.
