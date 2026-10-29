---
title: "Gateways"
description: "Woher Letronna seine Modelle bekommt: dein Letronna-Konto, OpenAI, OpenRouter, Ollama oder jeder OpenAI-kompatible Server."
---

Ein Gateway ist die Quelle der Modelle. Richte so viele ein, wie du willst: Das Modellmenü listet sie alle, und jede Nachricht geht an das Gateway des Modells, das du gewählt hast. Du siehst sie in der App unter Settings > Gateways oder im Terminal mit `/gateways`.

| Gateway | Adresse | Braucht |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | Anmeldung; Abrechnung über dein Guthaben |
| **OpenAI** | `https://api.openai.com/v1` | einen OpenAI-API-Schlüssel |
| **OpenRouter** | `https://openrouter.ai/api/v1` | einen OpenRouter-Schlüssel; Hunderte Modelle |
| **Ollama** | `http://localhost:11434/v1` | Ollama, das auf diesem Rechner läuft; funktioniert offline |
| **Benutzerdefiniert** | jeder OpenAI-kompatible Server | seine Adresse und einen Schlüssel, falls er einen verlangt |

Schlüssel liegen in `keys.json` in deinem Datenordner, nur auf deiner Festplatte, und erreichen das Modell nie. Für deine eigenen Schlüssel berechnet Letronna nichts: Du zahlst direkt beim Anbieter.
