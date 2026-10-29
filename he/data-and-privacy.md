---
title: "הנתונים שלכם"
description: "מה Letronna שומר על המחשב שלכם, מה הוא שולח לאן, והוספת כלים מתוך שרתי MCP."
---

Letronna שומר את הנתונים שלו בתיקייה אחת על המחשב שלכם:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| קובץ | מכיל |
|---|---|
| `chats.json` והסשנים | השיחות שלכם, והשער והמודל שנבחרו |
| `keys.json` | מפתחות API לכל שער, בטקסט פשוט, רק על הדיסק שלכם |
| `account.json` | ההתחברות ל-Letronna במחשב הזה |
| `SOUL.md` | מי Letronna הוא, במילים שלכם (אופציונלי) |
| `USER.md`, `MEMORY.md` | מה הוא יודע עליכם, וההערות שלו; אפשר לערוך אותם בכל עת |
| `mcp.json` | שרתי MCP שמותר להשתמש בכלים שלהם (אופציונלי) |
| `media/` | תמונות, דיבור וסרטונים שנוצרו בלי פרויקט מקושר |

כשמצורפת תיקיית פרויקט, הקובץ `AGENTS.md` שבה נקרא כהוראות הפרויקט. טקסט הצ'אט נשלח לשער שבחרתם ולשום מקום אחר; בשער Letronna, זה api.letronna.ai, שרושם לכל בקשה את המודל ואת העלות לעמוד השימוש שלכם. משימה ששולחים ל-[Letronna Cloud](/docs/cloud) רצה על השרתים של Letronna, ורק עם מה שהמשימה עצמה נושאת איתה.

## כלים מתוך שרתי MCP

רשמו את שרתי MCP שרצים כפקודה מקומית ב-`mcp.json`, באותה צורה שבה Claude Desktop ו-Cursor משתמשים:

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

הכלים שלהם מופיעים כשהשרתים עונים. כל קריאה שואלת קודם, אלא אם הכלי נמצא ב-`autoApprove`; `"disabled": true` משאיר שרת כבוי.
