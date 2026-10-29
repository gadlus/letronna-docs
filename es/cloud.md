---
title: "Letronna Cloud"
description: "Ejecuta una tarea en los servidores de Letronna, mantén un servicio en marcha o aloja una aplicación web con su propio enlace, todo desde el chat."
---

Letronna Cloud es el mismo agente de Letronna, pero funciona en los servidores de Letronna en lugar de en tu computadora. Una tarea enviada allí sigue en marcha aunque cierres la app o la laptop, y lo que construye puede seguir en línea: una aplicación web obtiene su propio enlace, y un servicio puede seguir funcionando. Está disponible con [Pro](/dashboard/billing) y se paga con tu crédito.

## Ejecutar una tarea allí

Basta con pedirlo en el chat, en la ventana o en la terminal: «ejecútalo en la nube», o cualquier cosa que esta computadora no haga bien, como una compilación larga. Letronna pregunta antes de enviar una tarea, porque gasta crédito. La nube no ve nada de tu computadora, así que la tarea lleva todo lo que necesita, o un repositorio git por https para clonar.

- Cada tarea se ejecuta en su propio contenedor, con la RAM y el tiempo que corresponden a su tamaño: **light** 512 MB durante 15 minutos, **normal** 1 GB durante 30 y **heavy** 2 GB durante una hora.
- Su progreso se muestra mientras avanza, y cerrar la app no la detiene; solo Stop la detiene.
- Una conversación allí conserva su carpeta y su historial, así que el siguiente mensaje continúa donde terminó el anterior.
- Lo que genera se puede abrir desde un enlace de vista previa en su respuesta.

Desde la terminal también puedes enviar una tarea de inmediato: `letronna cloud "task"`, con `--repo <url>`, `--tier light|normal|heavy` y `--thread <id>` para continuar el hilo.

## Servicios que siguen en línea

Pide algo que deba seguir en marcha, como «vigila cada hora el stock de mi tienda, envíame un correo cuando algo se esté agotando y **mantenlo en marcha**». Un planificador, un receptor de webhooks o un bot de chat funcionan igual. Letronna lo construye y lo prueba, y luego lo deja en marcha como **worker**. Di «mantenlo en marcha» (o «mantenlo en línea») solo cuando lo quieras: cualquier otra cosa se ejecuta una vez y se detiene.

- Un worker se reinicia si se detiene, y se detiene definitivamente después de fallar cinco veces en diez minutos, y se indica el motivo.
- Recibe 256 MB, salvo que necesite más (de 128 a 512 MB), y una cuenta puede mantener tres en marcha a la vez.
- Se cobra por hora, con cargo a tu crédito, y se detiene si el crédito se agota. Un servicio de 128 MB en línea todo el mes cuesta unos 0,75 USD; uno de 256 MB, unos 1,50 USD.
- Las claves que necesita, como un token de API, van en `/work/.env` dentro de su carpeta, no en su código.

## Aplicaciones web con enlace propio

Una aplicación web que Letronna construye allí puede seguir en línea en su propia dirección, `https://lc-<id>.letronna.si`. Se despierta con la primera visita, se duerme tras diez minutos sin visitas y está despierta como máximo ocho horas al día. Solo pagas mientras está despierta.

## Cómo gestionarlos

La página [Cloud](/dashboard/cloud) enumera lo que alojas, con lo último que mostró cada uno, los botones Stop, Start y Restart, y cuánto ha costado cada cosa, además de las tareas que enviaste, con su propio costo. O pregúntale en el chat («¿cómo va mi monitor de stock?», «deténlo»): Letronna los lee sin preguntar y pregunta antes de detener o iniciar uno.

## Cuánto cuesta

| Concepto | Precio |
|---|---|
| Cómputo (tareas, workers, aplicaciones web despiertas) | unos 6 USD por GB de RAM al mes, cobrados por segundo |
| Los modelos que usa una tarea | como cualquier solicitud a modelos alojados, en la página [Modelos](/dashboard/models) |
| Un servicio de 256 MB en línea todo el mes | unos 1,50 USD |

Cada cargo aparece en Cloud, en la página [Uso](/dashboard/usage).

## Lo que no está permitido

La minería de criptomonedas, el envío masivo de tráfico a otras máquinas y todo lo que prohíban los [términos](/terms). Un control contra abusos vigila cada contenedor: un minero o un envío masivo se detiene de inmediato, y el equipo de Letronna recibe aviso de cualquier otra cosa que parezca irregular. Solo el tráfico web llega a la nube, así que los servidores de juegos y otros puertos abiertos aún no son posibles.

## Tus datos en la nube

La carpeta de una conversación y lo que Letronna guarda para ella permanecen en los servidores de Letronna mientras los uses, y se borran tras 14 días sin uso, a menos que siga en marcha un worker dentro de ella. Soporte solo puede leer una tarea y su respuesta si tú lo permites, y cada acceso queda registrado.
