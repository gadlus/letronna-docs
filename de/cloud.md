---
title: "Letronna Cloud"
description: "Eine Aufgabe auf Letronnas Servern ausführen, einen Dienst laufen lassen oder eine Web-App mit eigenem Link hosten – alles aus dem Chat."
---

Letronna Cloud ist derselbe Letronna-Agent, nur läuft er auf Letronnas Servern statt auf deinem Rechner. Eine Aufgabe, die du dorthin schickst, läuft weiter, wenn du die App oder den Laptop schließt, und was sie baut, kann online bleiben: Eine Web-App bekommt einen eigenen Link, und ein Dienst kann dauerhaft laufen. Du nutzt Letronna Cloud mit [Pro](/dashboard/billing) und bezahlst sie von deinem Guthaben.

## Eine Aufgabe dort ausführen

Bitte einfach im Chat darum, im Fenster oder im Terminal: „Führ das in der Cloud aus“ – oder um alles, was dieser Rechner nicht gut kann, etwa einen langen Build. Letronna fragt, bevor es eine Aufgabe abschickt, denn das kostet Guthaben. Die Cloud sieht nichts von deinem Rechner, deshalb nimmt die Aufgabe alles mit, was sie braucht, oder ein Git-Repository über https zum Klonen.

- Jede Aufgabe läuft in einem eigenen Container, mit Arbeitsspeicher und Zeit je nach Größe: **light** 512 MB für 15 Minuten, **normal** 1 GB für 30 Minuten, **heavy** 2 GB für eine Stunde.
- Der Fortschritt wird laufend angezeigt, und das Schließen der App stoppt die Aufgabe nicht; nur Stop tut das.
- Eine Unterhaltung dort behält ihren Ordner und ihren Verlauf, deshalb macht die nächste Nachricht da weiter, wo die letzte aufgehört hat.
- Was die Aufgabe erzeugt hat, lässt sich über einen Vorschau-Link in ihrer Antwort öffnen.

Aus dem Terminal kannst du eine Aufgabe auch direkt abschicken: `letronna cloud "task"`, mit `--repo <url>`, `--tier light|normal|heavy` und `--thread <id>` zum Fortsetzen.

## Dienste, die online bleiben

Bitte um etwas, das dauerhaft laufen muss, etwa: „Behalte stündlich den Lagerbestand meines Shops im Blick, schick mir eine E-Mail, sobald etwas knapp wird, und **lass es laufen**“. Ein Scheduler, ein Webhook-Empfänger oder ein Chat-Bot funktionieren alle gleich. Letronna baut und testet es und lässt es dann als **Worker** laufen. Sag „Lass es laufen“ (oder „Lass es online“) nur, wenn du genau das willst: Alles andere läuft einmal und stoppt.

- Ein Worker wird neu gestartet, wenn er stoppt, und endgültig gestoppt, wenn er fünfmal in zehn Minuten abstürzt – mit Angabe des Grundes.
- Er bekommt 256 MB Arbeitsspeicher, es sei denn, er braucht mehr (128 bis 512 MB), und pro Konto dürfen drei laufen.
- Abgerechnet wird stundengenau; die Kosten werden von deinem Guthaben abgebucht, und ist das Guthaben aufgebraucht, wird der Worker gestoppt. Ein Dienst mit 128 MB, der den ganzen Monat online ist, kostet etwa 0,75 $, einer mit 256 MB etwa 1,50 $.
- Schlüssel, die er braucht, etwa ein API-Token, gehören in `/work/.env` in seinem Ordner, nicht in seinen Code.

## Web-Apps mit eigenem Link

Eine Web-App, die Letronna dort baut, kann unter einer eigenen Adresse online bleiben: `https://lc-<id>.letronna.si`. Die App wacht beim ersten Besuch auf, schläft nach zehn Minuten ohne Besuch ein und ist höchstens acht Stunden am Tag wach. Du zahlst nur, solange sie wach ist.

## Verwalten

Die Seite [Cloud](/dashboard/cloud) listet alles, was du hostest – mit der jeweils letzten Ausgabe, Stop, Start und Restart und den bisherigen Kosten – sowie die Aufgaben, die du geschickt hast, mit ihren eigenen Kosten. Oder frag im Chat („Wie läuft meine Lagerbestandsüberwachung?“, „Stopp sie“): Letronna liest sie ohne Rückfrage aus und fragt, bevor es einen Dienst stoppt oder startet.

## Was es kostet

| Was | Preis |
|---|---|
| Rechenleistung (Aufgaben, Worker, wache Web-Apps) | etwa 6 $ pro GB Arbeitsspeicher und Monat, sekundengenau abgerechnet |
| Die Modelle, die eine Aufgabe nutzt | wie jede Anfrage an gehostete Modelle, siehe Seite [Modelle](/dashboard/models) |
| Ein Dienst mit 256 MB, den ganzen Monat online | etwa 1,50 $ |

Jede Abbuchung steht unter Cloud auf der Seite [Nutzung](/dashboard/usage).

## Was nicht erlaubt ist

Mining, das Fluten anderer Rechner und alles, was die [Nutzungsbedingungen](/terms) verbieten. Ein Missbrauchsschutz überwacht jeden Container: Ein Miner oder ein Flooding wird sofort gestoppt, und bei allem anderen, was falsch aussieht, wird das Letronna-Team informiert. Nur Web-Traffic erreicht die Cloud, deshalb sind Game-Server und andere offene Ports noch nicht möglich.

## Deine Daten dort

Der Ordner einer Unterhaltung und das, was Letronna dazu aufbewahrt, bleiben auf Letronnas Servern, solange du sie nutzt, und werden nach 14 Tagen ohne Nutzung gelöscht, es sei denn, ein Worker darin läuft noch. Der Support kann eine Aufgabe und ihre Antwort nur lesen, wenn du es erlaubst, und jeder Zugriff wird protokolliert.
