---
title: "Das Terminal"
description: "letronna im Terminal: wie du es startest, seine Optionen und jeder Slash-Befehl."
---

Derselbe Agent im Terminal, mit demselben Konto, denselben Sitzungen und Einstellungen wie die App.

## Starten

| Befehl | Wirkung |
|---|---|
| `letronna` | eine Unterhaltung öffnen |
| `letronna -p "question"` | einmal fragen, die Antwort ausgeben und beenden |
| `letronna --continue` | die letzte Sitzung fortsetzen |
| `letronna --resume` | aus den letzten Sitzungen wählen; mit einer ID genau diese öffnen |
| `letronna gui` | stattdessen das Fenster öffnen |
| `letronna setup` | Name, Anmeldung, Gateway, Modell, Installation |
| `letronna --uninstall` | wieder entfernen |

`--plan` startet im Planmodus: nur lesen und suchen, nie schreiben oder ausführen. `--yes` führt Tools ohne Rückfrage aus – nutze es nur dort, wo das sicher ist.

## Slash-Befehle

Tipp `/` in einer Unterhaltung, um diese zu sehen:

| Befehl | Wirkung |
|---|---|
| `/help` | was Letronna hier kann |
| `/new` | eine neue Sitzung beginnen |
| `/plan` | nur lesen und suchen, nie schreiben oder ausführen |
| `/model` | das Modell anzeigen oder wechseln; mit image, speech oder video dahinter das Modell für Bild, Sprache oder Video |
| `/gateways` | Gateways anzeigen, hinzufügen oder entfernen |
| `/team` | gehostete Modelle über ein Team oder über dich selbst abrechnen |
| `/login` | bei Letronna anmelden |
| `/logout` | auf diesem Rechner abmelden |
| `/whoami` | wer angemeldet ist |
| `/effort` | wie intensiv das Modell nachdenken soll |
| `/thinking` | das Nachdenken des Modells anzeigen oder ausblenden |
| `/search` | das Modell im Web suchen lassen |
| `/jobs` | Befehle, die noch im Hintergrund laufen |
| `/skills` | gespeicherte Anweisungen, die du dem Modell geben kannst |
| `/resume` | eine frühere Sitzung fortsetzen |
| `/where` | Projektordner und Sitzungsdatei anzeigen |
| `/clear` | den Bildschirm leeren |
| `/exit` | beenden |
