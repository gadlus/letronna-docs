---
title: "ゲートウェイ"
description: "Letronna のモデルの提供元：Letronna アカウント、OpenAI、OpenRouter、Ollama、または OpenAI 互換の任意のサーバー。"
---

ゲートウェイとは、モデルの提供元です。いくつでも設定でき、モデルメニューにはそのすべてのモデルが並び、各メッセージは選んだモデルのゲートウェイに送られます。一覧はアプリの Settings > Accounts、またはターミナルの `/gateways` で確認できます。

| ゲートウェイ | アドレス | 必要なもの |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | ログイン（料金はクレジットから差し引き） |
| **OpenAI** | `https://api.openai.com/v1` | OpenAI の API キー |
| **OpenRouter** | `https://openrouter.ai/api/v1` | OpenRouter のキー（数百のモデルが使える） |
| **Ollama** | `http://localhost:11434/v1` | このコンピュータで動作中の Ollama（オフラインでも使える） |
| **カスタム** | OpenAI 互換の任意のサーバー | そのアドレスと、求められればキー |

キーはデータフォルダー内の `keys.json` に保存されます。保存先はお使いのディスクだけで、モデルに送られることはありません。自分のキーを使う場合、Letronna 側の費用はかかりません。支払いはプロバイダーに直接行います。
