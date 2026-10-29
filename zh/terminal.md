---
title: "终端"
description: "在终端中使用 letronna：如何启动、有哪些选项，以及每一条斜杠命令。"
---

同一个智能体，在终端中运行，与应用共用同一个账户、同样的会话和设置。

## 启动

| 命令 | 作用 |
|---|---|
| `letronna` | 打开一个对话 |
| `letronna -p "question"` | 提问一次，打印回答后退出 |
| `letronna --continue` | 接着最近的会话继续 |
| `letronna --resume` | 从最近的会话中选择；带 id 时直接打开该会话 |
| `letronna gui` | 改为打开窗口 |
| `letronna setup` | 名字、登录、提供方、模型、安装 |
| `letronna --uninstall` | 卸载 |

`--plan` 以计划模式启动：只读取和搜索，绝不写入或运行。`--yes` 让工具不经询问直接运行，只在确认安全的场合使用。

## 斜杠命令

在对话中输入 `/` 即可看到这些命令：

| 命令 | 作用 |
|---|---|
| `/help` | Letronna 在这里能做什么 |
| `/new` | 开始一个新会话 |
| `/plan` | 只读取和搜索，绝不写入或运行 |
| `/model` | 显示或更改模型；加上 image、speech 或 video 则针对图片、语音或视频模型 |
| `/gateways` | 查看、添加或移除网关 |
| `/team` | 把托管模型的费用记到团队或你自己名下 |
| `/login` | 登录 Letronna |
| `/logout` | 在这台机器上退出登录 |
| `/whoami` | 当前登录的是谁 |
| `/effort` | 模型应该思考多深 |
| `/thinking` | 显示或隐藏模型的思考过程 |
| `/search` | 允许模型搜索网页 |
| `/jobs` | 仍在后台运行的命令 |
| `/skills` | 可以交给模型的已保存指令 |
| `/resume` | 接着之前的某个会话继续 |
| `/where` | 显示项目文件夹和会话文件 |
| `/clear` | 清屏 |
| `/exit` | 退出 |
