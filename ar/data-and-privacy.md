---
title: "بياناتك"
description: "ما يحتفظ به Letronna على حاسوبك، وما يُرسل إلى أين، وإضافة الأدوات من خوادم MCP."
---

يحتفظ Letronna ببياناته في مجلد واحد على حاسوبك:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| الملف | يحتوي على |
|---|---|
| `chats.json` والجلسات | محادثاتك، والبوابة والنموذج اللذان اخترتهما |
| `keys.json` | مفاتيح API لكل بوابة، بنص عادي على قرصك وحده |
| `account.json` | تسجيل دخول Letronna على هذا الحاسوب |
| `SOUL.md` | هوية Letronna، بكلماتك (اختياري) |
| `USER.md`, `MEMORY.md` | ما يعرفه عنك، وملاحظاته الخاصة؛ عدّلها في أي وقت |
| `mcp.json` | خوادم MCP التي يجوز له استخدام أدواتها (اختياري) |
| `media/` | الصور والكلام والفيديو التي أُنشئت دون مشروع مرتبط بها |

إذا أرفقت مجلد مشروع، يُقرأ ملفه `AGENTS.md` بوصفه تعليمات المشروع. يذهب نص المحادثة إلى البوابة التي اخترتها ولا يذهب إلى أي مكان آخر؛ وعند استخدام بوابة Letronna، يكون ذلك api.letronna.ai، الذي يسجّل النموذج وتكلفة كل طلب لصفحة الاستخدام الخاصة بك. والمهمة التي ترسلها إلى [Letronna Cloud](/docs/cloud) تعمل على خوادم Letronna، بما تحمله المهمة نفسها فقط.

## الأدوات من خوادم MCP

اذكر خوادم MCP التي تعمل كأمر محلي في `mcp.json`، بالصيغة نفسها التي يستخدمها Claude Desktop وكذلك Cursor:

```sh
{
  "mcpServers": {
    "everything": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everything"],
      "autoApprove": ["echo"]
    }
  }
}
```

تظهر أدواتها حين تردّ الخوادم. يسأل Letronna قبل كل استدعاء ما لم تكن الأداة في `autoApprove`؛ أما `"disabled": true` فيُبقي الخادم معطّلاً.
