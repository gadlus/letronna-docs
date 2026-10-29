---
title: "내 데이터"
description: "Letronna가 내 컴퓨터에 보관하는 것, 무엇을 어디로 보내는지, 그리고 MCP 서버의 도구 추가하기."
---

Letronna는 데이터를 내 컴퓨터의 폴더 하나에 보관합니다:

- Windows: `%LOCALAPPDATA%\Letronna\`
- macOS: `~/Library/Application Support/Letronna/`
- Linux: `~/.local/share/Letronna/`

| 파일 | 내용 |
|---|---|
| `chats.json`과 세션 | 내 대화, 그리고 고른 게이트웨이와 모델 |
| `keys.json` | 게이트웨이별 API 키, 내 디스크에만 일반 텍스트로 |
| `account.json` | 이 컴퓨터의 Letronna 로그인 정보 |
| `SOUL.md` | Letronna가 누구인지, 내 말로(선택 사항) |
| `USER.md`, `MEMORY.md` | 나에 대해 아는 것과 자체 메모. 언제든 편집 가능 |
| `mcp.json` | 도구를 쓸 수 있는 MCP 서버(선택 사항) |
| `media/` | 프로젝트 없이 만든 이미지, 음성, 동영상 |

프로젝트 폴더를 연결하면 그 폴더의 `AGENTS.md`가 프로젝트 지침으로 읽힙니다. 채팅 텍스트는 고른 게이트웨이로만 가고 다른 곳으로는 가지 않습니다. Letronna 게이트웨이라면 그곳은 api.letronna.ai이며, 사용량 페이지를 위해 각 요청의 모델과 비용을 기록합니다. [Letronna Cloud](/docs/cloud)로 보낸 작업은 작업 자체에 담긴 것만 가지고 Letronna 서버에서 실행됩니다.

## MCP 서버의 도구

로컬 명령으로 실행되는 MCP 서버를 Claude Desktop과 Cursor가 쓰는 것과 같은 형식으로 `mcp.json`에 적으세요:

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

서버가 응답하면 그 도구들이 나타납니다. 도구가 `autoApprove`에 없으면 호출마다 먼저 묻고, `"disabled": true`는 서버를 꺼 둡니다.
