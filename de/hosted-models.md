---
title: "Gehostete Modelle und Guthaben"
description: "Letronnas eigene Modelle: wie das Guthaben funktioniert, was Pro ändert, und Bilder, Sprache und Video erzeugen."
---

Angemeldet liefert dir das Letronna-Gateway Chat-Modelle von Anthropic, OpenAI, Google und anderen – von Letronna gehostet, ohne einen Schlüssel einzufügen. Jede Anfrage bezahlst du aus deinem Guthaben, zum Preis auf der Seite [Modelle](/dashboard/models).

## Guthaben und Tarife

- **Guthaben** kaufst du ab 1 $; es verfällt an keinem Datum und gilt in jedem Tarif. Ist es aufgebraucht, wird eine Anfrage mit einem Hinweis darauf abgelehnt; deine eigenen Schlüssel funktionieren weiter.
- **Pro** (20 $ pro Monat oder 199,20 $ pro Jahr) schreibt dir jeden Monat 20 $ Guthaben gut, berechnet für jedes gehostete Modell weniger und erlaubt dreimal so viele Anfragen pro Minute.
- **Team** stellt einer Gruppe ein gemeinsames Guthaben bereit: siehe [Teams](/docs/teams).
- Jeder Rechner und jedes Konto hat ein Limit an Anfragen pro Minute, deutlich über dem normalen Gebrauch; darüber hinaus sagt dir Letronna, wie lange du warten musst.

Die Seite [Nutzung](/dashboard/usage) zeigt, was du für Text, Medien und [Letronna Cloud](/docs/cloud) ausgegeben hast, dreißig Tage Tag für Tag, den Listenpreis jedes Modells neben dem, was du bezahlt hast, und wie viel du damit gespart hast.

## Bilder, Sprache und Video

Egal, welches Gateway der Chat nutzt: Der Agent kann auf den gehosteten Modellen auch Folgendes erzeugen, und jedes Tool fragt vorher, weil es Guthaben verbraucht:

| Tool | Erzeugt | Abgerechnet pro |
|---|---|---|
| `make_image` | ein Bild aus einer Beschreibung | Bild |
| `speak` | vorgelesenen Text | Zeichen |
| `transcribe` | das Gesprochene aus einer Audio- oder Videodatei, bis 25 MB | Minute |
| `make_video` | ein kurzes Video aus einer Beschreibung, in wenigen Minuten | Sekunde |

Solange du kein Modell nennst (`/model image`, `/model speech`, `/model video`), wird das günstigste verwendet, das gerade funktioniert. Erzeugtes landet in `media/` im Projektordner.
