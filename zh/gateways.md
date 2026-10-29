---
title: "网关"
description: "Letronna 的模型从哪里来：你的 Letronna 账户、OpenAI、OpenRouter、Ollama，或任何兼容 OpenAI 的服务器。"
---

网关（gateway）是模型的来源。想设置多少个都可以；模型菜单会列出所有网关的模型，每条消息都发送到你所选模型的网关。在应用的 Settings > Gateways 中，或在终端中用 `/gateways`，可以查看它们。

| 网关 | 地址 | 需要 |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | 登录；从你的额度中扣费 |
| **OpenAI** | `https://api.openai.com/v1` | 一个 OpenAI API 密钥 |
| **OpenRouter** | `https://openrouter.ai/api/v1` | 一个 OpenRouter 密钥；数百个模型 |
| **Ollama** | `http://localhost:11434/v1` | 这台电脑上运行着 Ollama；可离线使用 |
| **自定义** | 任何兼容 OpenAI 的服务器 | 它的地址，以及密钥（如果它需要） |

密钥保存在你数据文件夹中的 `keys.json` 里，只存在于你的磁盘上，绝不会发送给模型。使用你自己的密钥，Letronna 这边不收取任何费用：你直接向提供方付费。
