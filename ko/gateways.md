---
title: "게이트웨이"
description: "Letronna가 모델을 가져오는 곳: 내 Letronna 계정, OpenAI, OpenRouter, Ollama 또는 OpenAI 호환 서버."
---

게이트웨이는 모델이 오는 곳입니다. 원하는 만큼 설정하세요. 모델 메뉴에 모두 나열되고, 메시지는 각각 고른 모델의 게이트웨이로 갑니다. 앱의 Settings > Accounts 또는 터미널의 `/gateways`에서 볼 수 있습니다.

| 게이트웨이 | 주소 | 필요한 것 |
|---|---|---|
| **Letronna** | `https://api.letronna.ai/v1` | 로그인. 비용은 크레딧에서 차감 |
| **OpenAI** | `https://api.openai.com/v1` | OpenAI API 키 |
| **OpenRouter** | `https://openrouter.ai/api/v1` | OpenRouter 키. 수백 개의 모델 |
| **Ollama** | `http://localhost:11434/v1` | 이 컴퓨터에서 실행 중인 Ollama. 오프라인에서도 작동 |
| **사용자 지정** | OpenAI 호환 서버라면 무엇이든 | 서버 주소, 그리고 서버가 요구하면 키 |

키는 데이터 폴더의 `keys.json`에, 내 디스크에만 보관되며 모델에는 절대 전달되지 않습니다. 본인의 키를 쓰면 Letronna 쪽 비용은 없습니다. 요금은 그 제공업체에 직접 냅니다.
