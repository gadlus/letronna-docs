---
title: "你的数据"
description: "Letronna 在你的电脑上保存什么、把什么发送到哪里，以及如何添加 MCP 服务器的工具。"
---

Letronna 把数据保存在你电脑上的一个文件夹中：

- Windows：`%LOCALAPPDATA%\Letronna\`
- macOS：`~/Library/Application Support/Letronna/`
- Linux：`~/.local/share/Letronna/`

| 文件 | 内容 |
|---|---|
| `chats.json` 和各个会话 | 你的对话，以及所选的网关和模型 |
| `keys.json` | 各网关的 API 密钥，以纯文本形式只保存在你的磁盘上 |
| `account.json` | 这台电脑的 Letronna 登录信息 |
| `SOUL.md` | 用你自己的话描述 Letronna 是谁（可选） |
| `USER.md`、`MEMORY.md` | 它对你的了解，以及它自己的笔记；可随时编辑 |
| `mcp.json` | 它可以使用其工具的 MCP 服务器（可选） |
| `media/` | 未关联项目时生成的图片、语音和视频 |

关联了项目文件夹时，其中的 `AGENTS.md` 会作为项目指令被读取。聊天内容只发送到你选择的网关，不会发往任何其他地方；使用 Letronna 网关时，也就是发送到 api.letronna.ai，它会记录每个请求的模型和费用，用于你的用量页面。你发送到 [Letronna Cloud](/docs/cloud) 的任务在 Letronna 的服务器上运行，只带有任务本身携带的内容。

## 来自 MCP 服务器的工具

在 `mcp.json` 中列出以本地命令方式运行的 MCP 服务器，格式与 Claude Desktop 和 Cursor 使用的相同：

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

服务器响应后，它们的工具就会出现。除非工具列在 `autoApprove` 中，否则每次调用都会先询问；`"disabled": true` 会让某个服务器保持关闭。
