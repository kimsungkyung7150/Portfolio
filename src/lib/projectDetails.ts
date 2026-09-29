export type ProjectStatusVariant = "default" | "info" | "success" | "warning"

export type ProjectScreenshot = {
  src: string
  alt: string
  caption: string
}

export type TechGroup = {
  name: string
  items: string[]
}

export type ArchitectureStep = {
  title: string
  description: string
}

export type ProjectDecision = {
  title: string
  reason: string
}

export type ProjectDetail = {
  slug: string
  title: string
  type: string
  status: string
  statusVariant: ProjectStatusVariant
  subtitle: string
  summary: string
  description: string
  role: string
  problem: string
  constraints: string[]
  decisions: ProjectDecision[]
  tags: string[]
  techGroups: TechGroup[]
  architecture: ArchitectureStep[]
  architectureNotes: string[]
  currentScope: string[]
  highlights: string[]
  screenshots: ProjectScreenshot[]
  liveUrl?: string
  liveLabel?: string
  screenshotNote?: string
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "routoon",
    title: "Routoon",
    type: "AI / 웹소설 플랫폼",
    status: "고도화 중",
    statusVariant: "info",
    subtitle: "AI 웹소설 생성·품질 검증·독자 서비스 플랫폼",
    summary:
      "정본(Canon), 캐릭터 보이스, 회차 맥락을 기반으로 집필부터 검수·발행까지 연결하는 AI 웹소설 플랫폼입니다.",
    description:
      "작가와 AI가 대화를 통해 작품의 정본을 만들고, 회차 생성·비평·품질 검증·발행 후보 선정을 하나의 제품 흐름으로 연결합니다. 독자 서비스와 작가 작업실을 함께 운영하면서 장편 문맥 유지, 세계관 일관성, 문체 자연스러움과 발행 안전성을 지속적으로 고도화하고 있습니다.",
    role: "Product Architecture · Backend · AI Pipeline · Frontend",
    problem:
      "장편 웹소설 생성은 한 번의 프롬프트로 끝나지 않습니다. 설정이 밀리고, 캐릭터 보이스가 흔들리고, 회차가 길어질수록 이전 사건과의 연결이 약해지며, 생성 결과를 그대로 발행하기도 어렵습니다. 그래서 생성 자체보다 ‘어떤 맥락을 어떤 순서로 공급하고 어떻게 검증할 것인가’를 제품 구조로 풀어야 했습니다.",
    constraints: [
      "장편 연재에서 세계관·인물·사건의 연속성을 장기간 유지해야 함",
      "AI 생성 후보와 실제 공개 원고를 분리해 발행 안전성을 지켜야 함",
      "작가의 의도와 캐릭터 보이스를 모델 입력에 지속적으로 반영해야 함",
      "품질 개선이 다른 회차나 기존 운영 흐름을 깨뜨리지 않도록 회귀 검증이 필요함",
    ],
    decisions: [
      {
        title: "정본(Canon)을 프롬프트 밖의 제품 상태로 관리",
        reason:
          "세계관과 인물 설정을 매번 긴 프롬프트로만 전달하지 않고 구조화된 상태로 관리해 장편 문맥의 기준점을 유지합니다.",
      },
      {
        title: "Writer와 Critic·품질 검증 계층을 분리",
        reason:
          "생성과 평가를 한 단계에 섞지 않고 서로 다른 책임으로 분리해 원고 품질 문제의 원인을 추적하기 쉽게 만들었습니다.",
      },
      {
        title: "Candidate와 Publish를 분리",
        reason:
          "AI가 만든 결과가 곧바로 독자에게 공개되지 않도록 후보와 공개 상태를 나눠 검토·복구·감사가 가능한 흐름을 유지합니다.",
      },
    ],
    tags: ["React", "TypeScript", "ASP.NET Core", "MS SQL Server", "Neo4j", "LLM", "MCP"],
    techGroups: [
      { name: "Frontend", items: ["React 19", "TypeScript", "Vite", "TanStack Query"] },
      { name: "Backend", items: [".NET / ASP.NET Core", "C#", "REST API", "SignalR"] },
      { name: "Data", items: ["MS SQL Server", "Neo4j", "Canon / Episode State"] },
      { name: "AI", items: ["LLM Orchestration", "Writer / Critic", "MCP", "Quality Gates"] },
    ],
    architecture: [
      { title: "Reader / Creator UI", description: "독자 화면과 작가 작업실을 React 애플리케이션으로 제공" },
      { title: "ASP.NET Core API", description: "인증·작품·회차·생성 요청을 서버 권위로 처리" },
      { title: "Application / Domain", description: "정본, 회차 상태, 발행 규칙과 생성 오케스트레이션을 분리" },
      { title: "MS SQL + Neo4j", description: "운영 상태와 세계관·관계 그래프를 역할에 맞게 저장" },
      { title: "AI Pipeline", description: "정본·보이스·회차 맥락 → Writer → Critic → 품질 검증" },
      { title: "Candidate / Publish", description: "검증된 후보만 작가 검토와 발행 흐름으로 전달" },
    ],
    architectureNotes: [
      "AI가 데이터베이스를 직접 수정하지 않고 애플리케이션 계층을 통해 상태를 변경합니다.",
      "정본, 생성 후보, 공개 원고를 분리해 생성 실패가 독자 공개 상태를 바로 훼손하지 않도록 설계합니다.",
      "장편 웹소설의 설정·인물·사건 관계를 단순 프롬프트가 아니라 구조화된 컨텍스트로 유지합니다.",
      "품질 검증은 자연스러움·문체·개연성·설정 일관성 등을 별도 계층으로 분리해 회귀 가능성을 낮춥니다.",
    ],
    currentScope: [
      "정본을 대화로 만들어 가는 Authorial Context 흐름 고도화",
      "회차 생성 품질·개연성·문체·자연스러움 검증 파이프라인 개선",
      "독자 서비스와 작가 작업실 실제 운영",
    ],
    highlights: [
      "정본(Canon)·캐릭터 보이스·회차 맥락을 집필 입력으로 연결",
      "Writer → Critic → 품질 검증 → 발행 후보 파이프라인",
      "독자 화면과 작가 작업실을 하나의 서비스로 통합",
      "세계관·사건·관계 데이터를 구조화해 장편 연재 일관성 강화",
    ],
    screenshots: [
      { src: "/projects/routoon/home.png", alt: "Routoon 메인 화면과 작품 슬라이드", caption: "메인 화면 · 실제 작품 슬라이드가 표시된 상태" },
      { src: "/projects/routoon/works.png", alt: "Routoon 공개 작품 목록 화면", caption: "공개 작품 목록" },
      { src: "/projects/routoon/work-detail.png", alt: "Routoon 공개 작품 상세 화면", caption: "공개 작품 상세" },
      { src: "/projects/routoon/reader.png", alt: "Routoon 실제 회차 읽기 화면", caption: "실제 공개 회차 읽기 화면" },
    ],
    liveUrl: "https://reader.routoon.com/",
    liveLabel: "Routoon 접속",
    screenshotNote: "실제 공개 서비스에서 캡처한 화면입니다.",
  },
  {
    slug: "showroom",
    title: "ShowRoom",
    type: "AI / 게임 에셋",
    status: "개발 중",
    statusVariant: "warning",
    subtitle: "WPF 기반 AI 게임 에셋 제작·검수·전달 도구",
    summary:
      "WPF 데스크톱 앱에서 캐릭터 원화를 입력하고 AI·Blender·로컬 도구를 오케스트레이션해 게임용 2D 스프라이트와 모션 자산을 생성·검증하는 Asset Foundry입니다.",
    description:
      "ShowRoom은 단순 이미지 생성기가 아니라 게임 에셋 제작 Orchestrator입니다. WPF Studio가 사용자 작업 화면을 제공하고 Foundry Host가 작업·상태·후보 버전의 권위를 관리합니다. SQLite와 CAS/Vault에는 작업 이력과 불변 Candidate를 저장하고, 전문 Worker를 단계별로 호출한 뒤 QA를 통과한 결과만 Unity 전달 대상으로 만듭니다.",
    role: "Desktop Product Architecture · WPF UI · Pipeline / Tooling",
    problem:
      "게임 캐릭터 하나를 실제 제품 자산으로 쓰려면 원화 한 장을 만드는 것보다 방향, 액션, 모션 프레임, 품질 비교, 버전 관리와 Unity 전달까지 반복 가능한 제작 파이프라인이 필요합니다. 생성 도구마다 결과 형식과 품질이 달라 작업자가 수동으로 관리하면 재현성과 추적성이 쉽게 무너집니다.",
    constraints: [
      "원화의 인상과 캐릭터 정체성을 여러 방향·액션에서도 유지해야 함",
      "로컬 GPU와 도구 제약 안에서 생성·검수 과정을 반복 가능하게 만들어야 함",
      "AI, Blender, ComfyUI 등 서로 다른 전문 도구의 실패와 재시도를 통제해야 함",
      "2D 제품 경로와 3D/2.5D 실험 경로를 분리하면서 동일한 작업 이력을 유지해야 함",
    ],
    decisions: [
      {
        title: "WPF Studio와 Foundry Host를 분리",
        reason:
          "UI가 작업 상태의 권위를 직접 갖지 않도록 하고, 명령·Job·Candidate 상태는 Host에서 관리해 도구 교체와 복구를 쉽게 했습니다.",
      },
      {
        title: "Candidate를 불변 버전으로 관리",
        reason:
          "결과물을 덮어쓰지 않고 새 Candidate로 남겨 원화와 결과 비교, 재현, 승인 이력과 품질 회귀를 추적할 수 있게 했습니다.",
      },
      {
        title: "전문 Worker + QA Gate 구조",
        reason:
          "생성, 방향, 모션, Blender 작업을 한 프로세스에 묶지 않고 전문 Worker로 나누고 검증을 통과한 결과만 다음 단계로 전달합니다.",
      },
    ],
    tags: [".NET 10", "WPF", "C#", "WebView2", "SQLite", "MCP", "Unity", "Blender", "ComfyUI"],
    techGroups: [
      { name: "Desktop UI", items: [".NET 10 Windows", "WPF / XAML", "WebView2", "Workspace / Review UI"] },
      { name: "Core", items: ["C#", "Microsoft.Extensions.Hosting", "Application / Domain / Contracts", "IPC Client"] },
      { name: "Persistence", items: ["Microsoft.Data.Sqlite", "SQLite", "CAS / Vault", "SHA-256 Lineage"] },
      { name: "AI / Toolchain", items: ["MCP Gateway", "Generation CLI", "ComfyUI", "Blender", "SAM 계열 도구"] },
      { name: "Delivery", items: ["Unity 6000.5.8f1", "PNG Sequence", "Sprite / Atlas", "2D / 2.5D / 3D Profiles"] },
    ],
    architecture: [
      { title: "WPF Studio", description: "원화 입력, 작업 계획, 진행 상태, 비교·검수와 승인 UI" },
      { title: "Client / IPC", description: "WPF UI와 Host를 분리하고 명령·조회 계약으로 통신" },
      { title: "Foundry Host", description: "Command, Job, BuildRun, 예산·재시도·취소의 단일 권위" },
      { title: "SQLite + CAS / Vault", description: "작업 상태와 불변 Candidate·증거·provenance를 영속화" },
      { title: "Specialist Workers", description: "이미지·ComfyUI·Blender·2D Rig·모션 작업을 전문 Worker로 분리" },
      { title: "QA / Candidate", description: "방향·외형·알파·모션 연속성 검증 후 후보 버전을 봉인" },
      { title: "Unity Delivery", description: "검증된 PNG/Atlas/패키지만 Unity Importer와 Runtime으로 전달" },
    ],
    architectureNotes: [
      "WPF나 AI Worker가 SQLite/CAS를 직접 수정하지 않고 Foundry Host가 상태 권위를 가집니다.",
      "Candidate는 불변으로 관리하며 수정은 새 Candidate를 생성해 비교·복구·감사가 가능하도록 합니다.",
      "생성 모델과 검수 모델을 분리하고 기술 검증·시각 검수·사용자 승인을 서로 다른 단계로 기록합니다.",
      "2D Sprite가 현재 주 제품 경로이며 3D/2.5D는 동일한 권위 모델을 공유하지만 별도 품질 게이트를 통과해야 합니다.",
    ],
    currentScope: [
      "WPF 기반 제작·검수 Workspace 실제 구현",
      "2D PNG 스프라이트와 모션 프레임 생성·검증 산출물 확보",
      "원화 품질을 유지한 8방향 전체 액션 자동 생산은 개발 중",
      "제품 수준 3D 캐릭터 경로는 아직 최종 품질 게이트 미통과",
    ],
    highlights: [
      "WPF 데스크톱 제작·검수 UI와 Host 실행 계층 분리",
      "원화·결과물·Candidate의 해시·버전·검증 이력 관리",
      "방향별·액션별 PNG 모션 프레임 생성과 품질 검토",
      "Unity 게임 자산으로 넘기기 위한 패키징·전달 구조",
    ],
    screenshots: [
      { src: "/projects/showroom/direction-lab.png", alt: "ShowRoom WPF Direction Lab 화면", caption: "WPF Direction Lab · 방향별 결과 검토" },
      { src: "/projects/showroom/motion-lab.png", alt: "ShowRoom WPF Motion Lab 화면", caption: "WPF Motion Lab · 모션 프레임 검토" },
      { src: "/projects/showroom/comparison-final.png", alt: "ShowRoom 원화와 결과 비교 화면", caption: "원화(왼쪽)와 결과(오른쪽) 고해상도 비교" },
    ],
    screenshotNote: "서로 다른 WPF 작업 화면과 원화/결과 비교 화면으로 구성했습니다.",
  },
  {
    slug: "random-defense",
    title: "랜덤 디펜스 게임",
    type: "게임 / Unity",
    status: "개발 중",
    statusVariant: "warning",
    subtitle: "140종 몬스터·3마리 조합·웨이브 전투를 구현하는 Unity WebGL 랜덤 디펜스",
    summary:
      "140종 몬스터, 115개 조합 데이터와 5개 권역을 기반으로 소환·3마리 조합·웨이브 전투를 구현하는 별도 Unity 프로젝트입니다.",
    description:
      "Feature Modular Clean Architecture를 적용해 Unity 표현 계층과 게임 규칙을 분리했습니다. 소환, 전장/보관함 배치, 3마리 조합, 웨이브와 전투 규칙은 Application/Domain 계층에서 처리하고, Unity Presentation은 해당 상태를 모바일 전투 화면으로 표현합니다. 현재 REG-01 전투 슬라이스와 WebGL 검증이 완료됐으며 전체 5권역 제품화와 대량 아트 확장은 진행 중입니다.",
    role: "Game Architecture · Unity Client · Deterministic Game Core",
    problem:
      "랜덤 디펜스는 단순히 화면에 유닛을 배치하는 게임이 아니라 140종 몬스터, 115개 조합, 5개 권역과 웨이브 규칙이 함께 움직여야 합니다. 콘텐츠가 늘어나도 규칙이 코드 분기로 폭발하지 않고, 모바일 WebGL에서 동일한 게임 상태를 재현할 수 있는 구조가 필요했습니다.",
    constraints: [
      "140종 몬스터와 115개 조합 규칙을 데이터 중심으로 확장해야 함",
      "Unity Presentation과 게임 규칙을 분리해 테스트 가능성을 유지해야 함",
      "모바일 430×844 화면에서 전투 정보와 조작성을 동시에 확보해야 함",
      "ShowRoom의 대량 아트 파이프라인이 미완성이라 게임 구조와 자산 공급 경계를 분리해야 함",
    ],
    decisions: [
      {
        title: "Feature Modular Clean Architecture",
        reason:
          "Battle, Combination, Storage 등의 기능 경계를 분리해 특정 UI나 MonoBehaviour가 전체 게임 규칙을 소유하지 않도록 했습니다.",
      },
      {
        title: "결정론 RNG와 Golden Scenario",
        reason:
          "리팩터링이나 WebGL 빌드 이후에도 동일한 규칙과 결과가 유지되는지 테스트 가능한 기준선을 만들었습니다.",
      },
      {
        title: "콘텐츠 정의와 표현 자산을 분리",
        reason:
          "몬스터·조합 규칙은 데이터로 유지하고 ShowRoom에서 공급되는 스프라이트는 Presentation 계층에서 교체할 수 있도록 설계했습니다.",
      },
    ],
    tags: ["Unity 6", "C#", "WebGL", "Clean Architecture", "Deterministic RNG", "140 Monsters"],
    techGroups: [
      { name: "Engine", items: ["Unity 6000.5.8f1", "URP", "WebGL", "430×844 Mobile UI"] },
      { name: "Architecture", items: ["C#", "Feature Modular Clean Architecture", "asmdef Boundaries", "Application / Domain / Presentation"] },
      { name: "Game Core", items: ["Deterministic RNG", "Summon", "3-Monster Combination", "Wave / Battle"] },
      { name: "Content", items: ["140 Monsters", "115 Recipes", "5 Regions", "Data-driven Definitions"] },
      { name: "Validation", items: ["EditMode / PlayMode", "Golden Scenarios", "Browser Parity", "Python Validators"] },
    ],
    architecture: [
      { title: "Unity Presentation", description: "모바일 UI와 몬스터·적 전투 표현을 담당" },
      { title: "Feature Modules", description: "Battle, Combination, Storage 등 기능 단위 경계를 asmdef로 분리" },
      { title: "Application Use Cases", description: "소환·배치·판매·조합 같은 사용자 행동을 유스케이스로 처리" },
      { title: "Domain Core", description: "RNG, BattleWorld, Wave, Combination 규칙을 Unity 표현과 독립적으로 유지" },
      { title: "Content Definitions", description: "140종 몬스터·115 조합·5권역을 데이터로 관리" },
      { title: "Validation / WebGL", description: "골든 시나리오·테스트·브라우저 검증 후 WebGL 빌드" },
    ],
    architectureNotes: [
      "게임 규칙을 MonoBehaviour 안에 직접 넣지 않고 Domain/Application과 Presentation을 분리합니다.",
      "콘텐츠 수가 140종까지 늘어나도 코드 분기 대신 데이터 정의와 규칙 계층으로 확장하도록 설계했습니다.",
      "결정론 RNG와 Golden Scenario를 이용해 리팩터링 후에도 동일 규칙이 유지되는지 검증합니다.",
      "ShowRoom이 대량 스프라이트 공급 파이프라인으로 안정화되면 Presentation 자산만 교체할 수 있도록 게임 규칙과 아트 경계를 분리했습니다.",
    ],
    currentScope: [
      "REG-01 28종 전투용 로스터와 모바일 전투 슬라이스 구현",
      "140종 / 115 조합 / 5권역 데이터 구조 검증",
      "WebGL 빌드와 PlayMode/브라우저 검증 통과",
      "나머지 권역·대량 애니메이션 자산·완성형 메타 시스템은 개발 중",
    ],
    highlights: [
      "140종 몬스터 · 115개 조합 · 5개 권역 데이터 구조",
      "소환 → 보관함/전장 배치 → 3마리 조합 → 웨이브 전투 흐름",
      "모바일 430×844 기준 REG-01 전투 슬라이스와 WebGL 검증",
      "보스전·골드 몬스터·실패 조합 기록 등 게임 규칙 확장 중",
    ],
    screenshots: [
      { src: "/projects/random-defense/gold-active.png", alt: "랜덤 디펜스 게임 골드 몬스터 전투 화면", caption: "골드 몬스터 활성 전투" },
      { src: "/projects/random-defense/wave-deployed.png", alt: "랜덤 디펜스 게임 웨이브 전개 화면", caption: "웨이브 전개 및 전장 배치" },
      { src: "/projects/random-defense/boss-fight.png", alt: "랜덤 디펜스 게임 보스 전투 화면", caption: "보스 전투" },
      { src: "/projects/random-defense/victory.png", alt: "랜덤 디펜스 게임 승리 화면", caption: "전투 승리 상태" },
    ],
  },
  {
    slug: "impactsuite",
    title: "ImpactSuite",
    type: "AI / 레거시 분석",
    status: "주요 AI 프로젝트",
    statusVariant: "default",
    subtitle: "비침습형 레거시 시스템 실행 흐름 분석 도구",
    summary:
      "운영 시스템을 직접 수정하지 않고 브라우저 행동·API·SQL 실행 흐름을 수집해 변경 영향과 병목을 구조적으로 분석하는 도구입니다.",
    description:
      "문서가 부족한 레거시 시스템에서도 추측이 아니라 실제 실행 흐름을 근거로 분석하는 것을 목표로 합니다. 브라우저 사용자 행동과 API 호출, SQL 실행을 하나의 흐름으로 연결하고 Neo4j에 의존성 그래프를 구성한 뒤, AI(MCP)가 해당 증거를 바탕으로 변경 영향과 병목 원인을 탐색하도록 설계했습니다.",
    role: "Architecture · Trace Capture · Graph Analysis · MCP",
    problem:
      "오래 운영된 업무 시스템은 문서와 실제 동작이 다르거나, 화면 하나의 변경이 어떤 API와 SQL에 영향을 주는지 사람이 기억에 의존해야 하는 경우가 많습니다. 소스를 읽는 것만으로는 실제 런타임 흐름을 놓칠 수 있어 ‘실제로 실행된 증거’를 중심으로 구조를 복원할 필요가 있었습니다.",
    constraints: [
      "분석 대상 시스템 코드를 직접 수정하지 않는 비침습 방식이 필요함",
      "브라우저·API·SQL처럼 서로 다른 증거를 하나의 흐름으로 연결해야 함",
      "AI가 추측이 아니라 실제 실행 증거를 우선 사용하도록 해야 함",
      "관계형 로그의 나열을 변경 영향 탐색이 가능한 그래프로 전환해야 함",
    ],
    decisions: [
      {
        title: "Browser → API → SQL 실행 흐름을 하나의 Trace로 연결",
        reason:
          "사용자 행동과 서버·데이터베이스 사이의 인과 관계를 실제 실행 순서로 따라갈 수 있게 했습니다.",
      },
      {
        title: "Neo4j로 의존성 그래프 구성",
        reason:
          "화면·API·서비스·SQL의 관계를 단순 로그가 아니라 탐색 가능한 그래프로 만들어 변경 영향 범위를 빠르게 좁힐 수 있게 했습니다.",
      },
      {
        title: "MCP를 분석 인터페이스로 사용",
        reason:
          "AI가 시스템을 임의로 추측하지 않고 수집된 Trace와 그래프를 근거로 질의·탐색하도록 연결했습니다.",
      },
    ],
    tags: ["C#", "ASP.NET Core", "Playwright", "Neo4j", "GraphRAG", "MCP"],
    techGroups: [
      { name: "Capture", items: ["Playwright", "Browser Trace", "API Capture", "SQL Execution Trace"] },
      { name: "Backend", items: ["C#", "ASP.NET Core", ".NET", "Analysis Services"] },
      { name: "Graph", items: ["Neo4j", "Dependency Graph", "Impact Graph", "GraphRAG"] },
      { name: "AI", items: ["MCP", "LLM-assisted Analysis", "Evidence-grounded Exploration"] },
    ],
    architecture: [
      { title: "Browser Trace", description: "사용자 행동과 화면 이동을 수집" },
      { title: "API / SQL Capture", description: "행동에 연결된 서버 호출과 SQL 실행을 추적" },
      { title: "Normalization", description: "서로 다른 실행 증거를 공통 분석 모델로 정규화" },
      { title: "Neo4j Graph", description: "화면·API·서비스·SQL 간 의존성을 그래프로 구축" },
      { title: "AI / MCP Analysis", description: "그래프와 실행 증거를 기반으로 영향 범위·병목·원인을 탐색" },
      { title: "Report / Investigation", description: "사람이 검토할 수 있는 근거와 분석 결과로 제공" },
    ],
    architectureNotes: [
      "분석 대상 애플리케이션의 소스 코드를 직접 계측 수정하는 방식보다 비침습 수집을 우선합니다.",
      "AI가 임의로 구조를 추측하기보다 수집된 Browser/API/SQL 실행 증거를 우선 근거로 사용합니다.",
      "관계형 로그를 단순 나열하지 않고 Neo4j 그래프로 연결해 변경 영향 탐색을 가능하게 합니다.",
    ],
    currentScope: [
      "브라우저 행동·API·SQL 실행 흐름 연결",
      "Neo4j 기반 의존성 그래프와 영향 분석",
      "MCP를 통한 AI 탐색 인터페이스",
    ],
    highlights: [
      "애플리케이션 코드를 직접 수정하지 않는 비침습 분석 방식",
      "브라우저 행동 → API → SQL 실행 흐름 추적",
      "Neo4j 그래프로 의존성과 변경 영향 시각화",
      "AI(MCP)를 이용한 구조 탐색·원인 분석 자동화",
    ],
    screenshots: [],
    screenshotNote: "공개 가능한 실제 UI 캡처가 없어 임의 화면을 만들지 않고 구조와 분석 흐름으로 설명합니다.",
  },
]

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug)
}
