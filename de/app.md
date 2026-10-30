---
title: "Die App"
description: "Das Letronna-Fenster: Sitzungen, Modelle, Einstellungen und was unter Windows, Linux und macOS anders ist."
---

Das Fenster ist ein Chat mit einem Agenten darin. Links stehen die Sitzungen, mit Suche, Anheften und Gruppierung nach Datum; jede Sitzung ist eine eigene Datei auf deiner Festplatte, deshalb können zwei Instanzen von Letronna gleichzeitig laufen.

## Mit dem Agenten reden

- Antworten werden als Markdown gestreamt. Die Tools, die der Agent nutzt – Dateien lesen, Befehle ausführen, eine Webseite lesen, frühere Sitzungen durchsuchen –, erscheinen im Chat, und alles, was deinen Rechner verändert, fragt vorher nach.
- Wähle das Modell im Modellmenü. Es listet jedes Modell von Letronna und von jedem Gateway, das du eingerichtet hast, und eine Nachricht geht an das Gateway des gewählten Modells.
- Denkaufwand, sichtbares Nachdenken und Websuche lassen sich umschalten, wenn das Modell sie unterstützt.
- Wächst eine Unterhaltung über das Kontextfenster des Modells hinaus, werden ältere Beiträge zusammengefasst statt vergessen.

## Einstellungen

- **Accounts**: wo jedes steht – angemeldet, verbunden, nicht eingerichtet, läuft nicht – und sein Schlüssel.
- **Account**: wer angemeldet ist, dein Guthaben und wer gehostete Modelle bezahlt: du oder ein Team, in dem du bist.

Das Fenster ist auch über Telegram und Discord erreichbar, und zeitgesteuerte Aufgaben melden sich dort. Artifacts und Skills haben eigene Seiten.

## Auf jedem System

|  | Windows | Linux | macOS |
|---|---|---|---|
| Chat und Agenten-Tools | ja | ja | ja |
| Installiert und deinstalliert sich selbst | ja | ja | in „Programme“ ziehen |
| Nur ein Fenster gleichzeitig | ja, holt das offene nach vorn | ja | nein |
| Tray-Symbol | ja | ja (KDE; GNOME braucht AppIndicator) | nein |
| Unschärfe hinter Dialogen | ja | nein | nein |

Schließt du das Fenster, bleibt Letronna unter Windows und Linux im Infobereich (Tray): Ein Klick auf das Symbol holt es zurück, ein Rechtsklick beendet es. Deinstalliere es unter Windows über „Apps & Features“ oder mit `letronna --uninstall`.
