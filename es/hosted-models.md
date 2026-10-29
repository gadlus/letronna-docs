---
title: "Modelos alojados y crédito"
description: "Los modelos alojados por Letronna: cómo funciona el crédito, qué cambia con Pro, y cómo generar imágenes, voz y video."
---

Si has iniciado sesión, el gateway de Letronna te da modelos de chat de Anthropic, OpenAI, Google y otros, sin clave que pegar. Cada solicitud se paga con tu crédito, al precio que aparece en la página [Modelos](/dashboard/models).

## Crédito y planes

- **Crédito** se compra desde 1 USD, nunca caduca en una fecha y funciona en todos los planes. Cuando se agota, una solicitud se rechaza con un mensaje que lo indica; tus propias claves siguen funcionando.
- **Pro** (20 USD al mes, o 199,20 USD al año) añade 20 USD de crédito cada mes, cobra menos por cada modelo alojado y permite el triple de solicitudes por minuto.
- **Team** reúne un solo fondo de crédito para un grupo: consulta [Equipos](/docs/teams).
- Cada computadora y cada cuenta tiene un límite de solicitudes por minuto, muy por encima del uso normal; si lo supera, Letronna dice cuánto hay que esperar.

La página [Uso](/dashboard/usage) muestra lo que gastaste en texto, imágenes, voz y video y en [Letronna Cloud](/docs/cloud), día por día durante los últimos treinta días, el precio publicado de cada modelo junto a lo que pagaste y cuánto te ahorró eso.

## Imágenes, voz y video

Sea cual sea el gateway del chat, el agente también puede generar contenido con los modelos alojados. Cada uso pregunta antes, porque gasta crédito:

| Herramienta | Genera | Se paga por |
|---|---|---|
| `make_image` | una imagen a partir de una descripción | imagen |
| `speak` | texto leído en voz alta | carácter |
| `transcribe` | las palabras de un archivo de audio o video, de hasta 25 MB | minuto |
| `make_video` | un video corto a partir de una descripción, en unos minutos | segundo |

Si no nombras un modelo (`/model image`, `/model speech`, `/model video`), se usa el más barato que esté funcionando. Lo que se genera se guarda en `media/` dentro de la carpeta del proyecto.
