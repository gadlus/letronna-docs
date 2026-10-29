---
title: "Tus datos"
description: "Lo que Letronna guarda en tu computadora, a dónde envía qué, y cómo añadir herramientas de servidores MCP."
---

Letronna guarda sus datos en una sola carpeta de tu computadora:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| Archivo | Contiene |
|---|---|
| `chats.json` y las sesiones | tus conversaciones, y el gateway y el modelo elegidos |
| `keys.json` | claves de API por gateway, en texto plano solo en tu disco |
| `account.json` | el inicio de sesión de Letronna en esta computadora |
| `SOUL.md` | quién es Letronna, con tus palabras (opcional) |
| `USER.md`, `MEMORY.md` | lo que sabe de ti y sus propias notas; edítalas cuando quieras |
| `mcp.json` | servidores MCP cuyas herramientas puede usar (opcional) |
| `media/` | imágenes, voz y video generados sin ningún proyecto asociado |

Si hay una carpeta de proyecto adjunta, su `AGENTS.md` se lee como las instrucciones del proyecto. El texto del chat va al gateway que elegiste y a ningún otro lugar; con el gateway de Letronna, ese lugar es api.letronna.ai, que registra el modelo y el costo de cada solicitud para tu página Usage. Una tarea que envías a [Letronna Cloud](/docs/cloud) se ejecuta en los servidores de Letronna, con solo lo que la propia tarea lleva consigo.

## Herramientas de servidores MCP

Enumera en `mcp.json` los servidores MCP que se ejecutan como un comando local, con la misma forma que usan Claude Desktop y Cursor:

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

Sus herramientas aparecen cuando los servidores responden. Cada llamada pregunta antes, salvo que la herramienta esté en `autoApprove`; `"disabled": true` deja un servidor apagado.
