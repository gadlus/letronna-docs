---
title: "Serving your accounts to other tools"
description: "The Local endpoint: an OpenAI-compatible address on this computer that other tools can use your connected models through."
---

The Local endpoint lets other programs on this computer, such as an editor plugin or a script, use the models connected in Letronna through one OpenAI-compatible address and one token, instead of each needing its own keys.

## Switch it on

Settings > Accounts, under **Local endpoint**: switch on "Serve these accounts on this computer". It is off by default. Once on, it shows its address and token, each with a button to copy it.

| | |
|---|---|
| Address | `http://127.0.0.1:8642/v1` |
| Token | sent as `Authorization: Bearer <token>`; kept in the system's keychain |

Set `local_port` in `settings.json` to use another port.

## What it answers

- `GET /v1/models` lists the models of every connected gateway, each once, local ones included.
- `POST /v1/chat/completions` sends a chat to the first gateway that lists the model. If that account is rate-limited, the request is handed on as a session's would be.

Nothing else is served. It listens on `127.0.0.1` only, so other computers cannot reach it, and it answers nothing without the token. Requests through it are paid as your own would be: from your credit on the Letronna gateway, or by the provider whose key it is.
