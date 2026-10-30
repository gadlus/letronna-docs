---
title: "La app"
description: "La ventana de Letronna: sesiones, modelos, configuración, y lo que cambia en Windows, Linux y macOS."
---

La ventana es un chat con un agente dentro. Las sesiones aparecen a la izquierda, con búsqueda, opción de fijarlas y grupos por fecha; cada sesión es su propio archivo en tu disco, así que dos copias de Letronna pueden funcionar a la vez.

## Hablar con el agente

- Las respuestas llegan en tiempo real, en markdown. Las herramientas que usa el agente (leer archivos, ejecutar comandos, leer una página web, buscar en sesiones anteriores) aparecen en el chat, y todo lo que cambie tu computadora pregunta antes.
- Elige el modelo en el menú de modelos. Aparecen todos los modelos de Letronna y de cada gateway que hayas configurado, y cada mensaje va al gateway del modelo que elijas.
- El esfuerzo, la visibilidad del razonamiento y la búsqueda web se pueden cambiar si el modelo los admite.
- Cuando una conversación supera la ventana de contexto del modelo, los turnos más antiguos se resumen en lugar de olvidarse.

## Configuración (Settings)

- **Accounts**: el estado de cada uno (con sesión iniciada, conectado, sin configurar, sin ejecutarse) y su clave.
- **Account**: quién ha iniciado sesión, tu crédito y quién paga los modelos alojados: tú, o un equipo del que formas parte.

También se puede acceder a la ventana desde Telegram y Discord, y las tareas programadas envían allí sus avisos. Artifacts y Skills tienen sus propias páginas.

## En cada sistema

|  | Windows | Linux | macOS |
|---|---|---|---|
| Chat y herramientas del agente | sí | sí | sí |
| Se instala y se desinstala solo | sí | sí | arrastrar a Aplicaciones |
| Una sola ventana a la vez | sí, enfoca la que está abierta | sí | no |
| Icono en la bandeja del sistema | sí | sí (KDE; GNOME necesita AppIndicator) | no |
| Fondo desenfocado detrás de los diálogos | sí | no | no |

Al cerrar la ventana, Letronna sigue en la bandeja del sistema en Windows y Linux: haz clic en el icono para volver a mostrarla, o haz clic derecho para salir. Desinstálalo desde Aplicaciones y características en Windows, o con `letronna --uninstall`.
