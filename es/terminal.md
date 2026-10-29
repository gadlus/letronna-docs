---
title: "La terminal"
description: "letronna en una terminal: cómo iniciarlo, sus opciones y cada comando con barra."
---

El mismo agente, en una terminal, con la misma cuenta, sesiones y configuración que la app.

## Iniciarlo

| Comando | Hace |
|---|---|
| `letronna` | abre una conversación |
| `letronna -p "question"` | pregunta una vez, imprime la respuesta y sale |
| `letronna --continue` | retoma la sesión más reciente |
| `letronna --resume` | elige entre las sesiones recientes; con un id, abre esa |
| `letronna gui` | abre la ventana en su lugar |
| `letronna setup` | nombre, inicio de sesión, proveedor, modelo, instalación |
| `letronna --uninstall` | lo desinstala |

`--plan` inicia en modo plan: solo lectura y búsqueda, nunca escritura ni ejecución. `--yes` ejecuta herramientas sin preguntar antes; úsalo solo donde sea seguro.

## Comandos con barra

Escribe `/` en una conversación para ver estos:

| Comando | Hace |
|---|---|
| `/help` | qué puede hacer Letronna aquí |
| `/new` | inicia una sesión nueva |
| `/plan` | solo lectura y búsqueda, nunca escritura ni ejecución |
| `/model` | muestra o cambia el modelo; añade image, speech o video para esos tipos de modelo |
| `/gateways` | ver, añadir o quitar gateways |
| `/team` | cobra los modelos alojados a un equipo o a ti mismo |
| `/login` | inicia sesión en Letronna |
| `/logout` | cierra la sesión en esta computadora |
| `/whoami` | quién ha iniciado sesión |
| `/effort` | el esfuerzo con que razona el modelo |
| `/thinking` | muestra el razonamiento del modelo, o lo oculta |
| `/search` | deja que el modelo busque en la web |
| `/jobs` | comandos que siguen ejecutándose en segundo plano |
| `/skills` | instrucciones guardadas que puedes dar al modelo |
| `/resume` | retoma una sesión anterior |
| `/where` | muestra la carpeta del proyecto y el archivo de la sesión |
| `/clear` | limpia la pantalla |
| `/exit` | sale |
