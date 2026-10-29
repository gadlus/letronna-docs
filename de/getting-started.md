---
title: "Erste Schritte"
description: "Konto anlegen, Letronna installieren, anmelden und die erste Frage stellen."
---

Letronna ist ein KI-Agent, der bereitsteht, während du arbeitest: ein Fenster und derselbe Agent im Terminal. Er liest und schreibt Dateien, führt Befehle aus (nach Rückfrage), macht sich auf deiner Festplatte Notizen über dich und spricht mit den Modellen, die du auswählst.

## 1. Konto anlegen

[Registriere dich](/signup) auf letronna.ai. Solange Letronna in der Alpha ist, ist der Download an ein Konto gebunden; das Konto trägt außerdem dein Guthaben für die von Letronna gehosteten Modelle, deinen Tarif und deine Teams.

## 2. Installieren

Öffne [Download](/dashboard/download) im Dashboard. Die Seite bietet zuerst dein eigenes System an:

- **macOS** (13 oder neuer, Apple Silicon): Öffne die .dmg und zieh Letronna in den Ordner „Programme“.
- **Windows** (11, x64): Lade die .zip herunter, entpacke sie und führe `letronna.exe setup` aus – oder kopiere den Einzeiler und füge ihn in PowerShell ein; er erledigt beides.
- **Linux** (x64, glibc 2.31 oder neuer): Lade die .tar.gz herunter, entpacke sie und führe `./letronna setup` aus – oder füge den Einzeiler in ein Terminal ein.

Der Einzeiler enthält einen Download-Link, der nur einige Minuten lang gültig ist; danach kopierst du ihn einfach neu. Nichts braucht Administratorrechte, und nichts landet außerhalb deines eigenen Benutzerkontos auf dem Rechner.

## 3. Einrichten

`letronna setup` fragt, wie es dich nennen soll, meldet dich an, wählt ein Gateway und ein Modell und installiert das Fenster, das Terminal oder beides dort, wo du willst. Führe es jederzeit erneut aus, um die Antworten zu ändern. Unter Windows und Linux erscheint die App danach im Startmenü bzw. im Anwendungsmenü.

## 4. Anmelden

Die Anmeldung läuft über letronna.ai: Die App öffnet die Seite für dich, oder du führst `/login` im Terminal aus. Der Rechner erscheint danach unter [Geräte](/dashboard/devices).

## 5. Etwas fragen

Schreib eine Nachricht. Letronna antwortet mit dem Modell, das du gewählt hast, und fragt, bevor es einen Befehl ausführt oder eine Datei ändert. Die Kosten gehosteter Modelle werden von deinem Guthaben abgebucht; wie du stattdessen deine eigenen API-Schlüssel nutzt, steht unter [Gateways](/docs/gateways).
