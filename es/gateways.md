---
title: "Gateways"
description: "De dónde obtiene Letronna sus modelos: tu cuenta de Letronna, OpenAI, OpenRouter, Ollama o cualquier servidor compatible con OpenAI."
---

Un gateway es el lugar de donde vienen los modelos. Configura cuantos quieras: el menú de modelos los muestra todos, y cada mensaje va al gateway del modelo que elegiste. Mira los gateways en Settings > Gateways en la app, o con `/gateways` en la terminal.

| Gateway | Dirección | Necesita |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | iniciar sesión; se paga con tu crédito |
| **OpenAI** | `https://api.openai.com/v1` | una clave de API de OpenAI |
| **OpenRouter** | `https://openrouter.ai/api/v1` | una clave de OpenRouter; cientos de modelos |
| **Ollama** | `http://localhost:11434/v1` | Ollama en ejecución en esta computadora; funciona sin conexión |
| **Personalizado** | cualquier servidor compatible con OpenAI | su dirección, y una clave si la pide |

Las claves se guardan en `keys.json`, en tu carpeta de datos, solo en tu disco, y nunca llegan al modelo. Tus propias claves no tienen ningún costo para Letronna: pagas directamente al proveedor.
