# 하루 포트폴리오 반영 근거

2026-10-24. 포트폴리오 설명을 위한 읽기 전용 조사이며 Memory OS의 제품·DB·호출 상태는 변경하지 않았다.

## 읽은 원본

Memory OS 저장소의 다음 자료와 소스를 대조했다.

- `docs/Final_Usage_Review_2026-10-23.md`: 회상 35.742초, 후속 47.342초, 인수인계 3부·약 125초. 다른 검수의 모델 호출 수와 합산하지 않는다.
- `docs/Vector_Closeout_Writer_Recall_2026-10-23.md`: 새 제출·자동 정리·회상, 기존 SQL 35,692행 보존, 신규 모델 호출 109건, GPU 임대 106회·중첩 0건. 모두 특정 검수 1회의 관측이다.
- `docs/Index_Backlog_Closeout_2026-10-23.md`: 26/27 벡터 복구, UNKNOWN 1개 미복구, B43 v27 37/40 FAIL 및 기존 기준 보존.
- `src/MemoryOs.Api/MemoryOs.Api.csproj`: .NET 10, ASP.NET Core, EF Core SQL Server, MCP, OAuth/OIDC 관련 의존성.
- `src/MemoryOs.Api/Mcp/WriterAuthoringGuidance.cs`: 한 문장 저장 요청, 현재 대화와 접근 가능한 증거만 사용, 작성 주체 구분, 업무 보고 계약.
- `src/MemoryOs.Api/Query/QueryRetrieval.cs`: 현재 권한·출처·색인 세대 검증 경로.

이 변경에서 기존 실사용 결과를 설명하기 위해 보고서와 소스를 읽었으며, 새 모델 호출이나 새 SQL 품질 검증을 실행한 것으로 주장하지 않는다.

## 비교 근거

공식 문서를 실제로 조회했다.

- [Projects and chats](https://learn.chatgpt.com/docs/projects): 프로젝트 내 공유 채팅·파일·지침·연결 자료.
- [Personalize ChatGPT](https://learn.chatgpt.com/docs/personalize#carry-context-forward-with-memories): 이전 대화의 유용한 맥락을 이후 작업에 반영하는 메모리.

경쟁 제품에 기억·검색·권한 기능이 없다고 주장하지 않는다. 비교는 하루에서 직접 구현하는 업무 기록의 저장 단위·작성자 구분·근거 검증·인수인계 보존 계약에 한정한다. 모델 우월성·보편적 정확도·완전한 오프라인·회사 운영 완료는 주장하지 않는다.

## 화면 원칙

- 기존 DESIGN.md의 다크 테마·색상 토큰·공통 Button/Badge를 유지한다.
- 하루를 홈의 대표 프로젝트와 프로젝트 목록 첫 항목으로 추가한다. 기존 프로젝트 상세와 이미지는 유지한다.
- 탭과 원문 발췌는 검수 내용을 재구성한 예시임을 표시한다. 새 모델 실행이나 업무 DB 저장을 하지 않는다.
- 공개 다운로드는 선별한 검증 요약만 제공한다. 개인 계정·인증 값·접속 주소·원본 로그를 복사하지 않는다.
- 현재 개인 사용 확인과 역사적 품질 FAIL·팀 운영 미검증을 분리한다.

## 구현 확인

2026-10-24 로컬 프로덕션 빌드 검수:

- `npm run lint` PASS, `npm run build` PASS. 하루를 포함한 6개 프로젝트 상세 정적 경로 생성.
- 홈·프로젝트 목록·6개 상세·소개·경력·공개 검증 Markdown의 11개 경로 HTTP 200.
- 1440×1000 데스크톱과 390×844 모바일에서 검수. 모바일 본문이 24/32px로 좁아지는 기존 spacing 토큰과 `max-w-lg/xl` 이름 충돌을 확인해 새 컴포넌트의 본문 폭을 명시적으로 수정했다.
- 수정 후 홈·하루 상세 모바일의 문서 폭과 뷰포트 폭이 모두 375px로 일치하며 가로 넘침 없음. 데스크톱도 1425px로 일치.
- 저장·회상·후속·인수인계 예시 전환, 방향키 탭 이동, 인용 발췌 펼치기, 상세 진입·목차 이동 확인. 탭의 `aria-controls` 대상 존재 확인.
- 다운로드한 검증 요약과 저장소 원본의 SHA256 일치. 브라우저 오류·경고 로그 0건.
- 공개 신규 소스·문서에서 계정 이메일, 개발 접속 주소, 로컬 경로, 원본 제출 ID를 포함하지 않았음을 확인.

검수 화면: [데스크톱](previews/haru-desktop.jpg), [모바일](previews/haru-mobile.jpg).
