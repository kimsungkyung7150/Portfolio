export type ProjectStatusVariant = "default" | "info" | "success" | "warning"

export type ProjectScreenshot = {
  src: string
  alt: string
  caption: string
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
  tags: string[]
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
    summary: "정본(Canon), 캐릭터 보이스, 회차 맥락을 기반으로 집필부터 검수·발행까지 연결하는 AI 웹소설 플랫폼입니다.",
    description: "작가와 AI가 대화를 통해 작품의 정본을 만들고, Writer·Critic·품질 검증 계층을 거쳐 회차 후보를 생성하는 구조를 개발하고 있습니다. 독자 서비스와 작가 작업실을 하나의 제품 안에서 운영하며 생성 품질, 세계관 일관성, 문체 자연스러움과 발행 안전성을 지속적으로 고도화하고 있습니다.",
    tags: ["AI", "LLM", "ASP.NET Core", "React", "Neo4j", "MS SQL Server", "MCP"],
    highlights: [
      "정본(Canon)·캐릭터 보이스·회차 맥락을 집필 입력으로 연결",
      "Writer → Critic → 품질 검증 → 발행 후보 파이프라인",
      "독자 화면과 작가 작업실을 하나의 서비스로 통합",
      "세계관·사건·관계 데이터를 구조화해 장편 연재 일관성 강화",
    ],
    screenshots: [
      { src: "/projects/routoon/home.png", alt: "Routoon 독자 서비스 메인 화면", caption: "Routoon 독자 서비스 메인" },
      { src: "/projects/routoon/works.png", alt: "Routoon 작품 목록 화면", caption: "공개 작품 목록" },
      { src: "/projects/routoon/work-detail.png", alt: "Routoon 공개 작품 상세 화면", caption: "공개 작품 상세" },
    ],
    liveUrl: "https://reader.routoon.com/",
    liveLabel: "Routoon 접속",
  },
  {
    slug: "showroom",
    title: "ShowRoom",
    type: "AI / 게임 에셋",
    status: "개발 중",
    statusVariant: "warning",
    subtitle: "AI 기반 2D 스프라이트·게임 에셋 제작 파이프라인",
    summary: "캐릭터 원화를 방향·액션별 게임 에셋으로 변환하고 검증해 Unity로 전달하는 Asset Foundry입니다.",
    description: "2D PNG 스프라이트와 모션 프레임 생성·검증 경로는 실제 산출물을 만들 수 있는 단계까지 진행했습니다. 다만 원화를 안정적으로 보존하면서 8방향과 전체 액션을 자동 생산하는 최종 파이프라인, 그리고 제품 수준의 3D 캐릭터 경로는 아직 품질 게이트를 통과하지 못해 개발 중입니다.",
    tags: ["AI", "2D Sprite", "Unity", "Blender", "ComfyUI", "MCP"],
    highlights: [
      "원화 입력과 결과물의 해시·버전·검증 이력 관리",
      "방향별·액션별 PNG 모션 프레임 생성 및 품질 검토",
      "Unity 게임 자산으로 넘기기 위한 패키징·전달 구조",
      "3D/2.5D 경로는 품질 기준 미달 상태를 명시하고 계속 실험 중",
    ],
    screenshots: [
      { src: "/projects/showroom/workspace.png", alt: "ShowRoom 캐릭터 제작 워크스페이스", caption: "캐릭터 제작 워크스페이스" },
      { src: "/projects/showroom/pipeline-running.png", alt: "ShowRoom 캐릭터 제작 파이프라인 실행 화면", caption: "제작 파이프라인 실행 상태" },
      { src: "/projects/showroom/directional-review.png", alt: "ShowRoom 방향별 캐릭터 결과 검토 화면", caption: "방향별 스프라이트·모션 결과 검토" },
    ],
  },
  {
    slug: "random-defense",
    title: "랜덤 디펜스 게임",
    type: "AI / 게임",
    status: "개발 중",
    statusVariant: "warning",
    subtitle: "AI 에셋 파이프라인과 결정론 전투 코어를 결합한 Unity WebGL 게임",
    summary: "140종 몬스터 도감과 3마리 조합을 중심으로 서버 권위·결정론 전투를 구현하는 랜덤 디펜스 게임입니다.",
    description: "결정론 tick/PRNG, 서버 발급 BattleTicket, 서버 재시뮬레이션과 보상 위변조 방지를 적용해 전투 코어를 구축했습니다. 2D 전투 표현과 몬스터·캐릭터 자산 파이프라인을 연결하고 있으며, ShowRoom의 대량 자산 생산 경로가 아직 완성되지 않아 전체 게임도 개발 중입니다.",
    tags: ["Unity WebGL", "C#", ".NET", "Deterministic", "Server Authority", "AI Asset Pipeline"],
    highlights: [
      "결정론 전투 코어와 Unity/.NET 재현 일치 구조",
      "서버 권위 BattleTicket·재시뮬레이션·보상 위변조 방지",
      "140종 몬스터 도감과 3마리 조합 기반 전투 설계",
      "ShowRoom과 연동해 대량 2D 캐릭터/몬스터 자산 공급을 목표",
    ],
    screenshots: [
      { src: "/projects/random-defense/ui-layout-reference.png", alt: "랜덤 디펜스 게임 UI 설계 기준 이미지", caption: "게임 UI 설계 기준" },
      { src: "/projects/random-defense/battle-quality-reference.png", alt: "랜덤 디펜스 게임 전투 품질 기준 이미지", caption: "전투 품질 기준" },
      { src: "/projects/random-defense/character-production-reference.png", alt: "랜덤 디펜스 게임 캐릭터 제작 검증 이미지", caption: "캐릭터 제작·검증 자료" },
    ],
    screenshotNote: "현재 운영 게임 경로는 비활성화 상태라 위 이미지는 실제 운영 화면 캡처가 아니라 현재 보존된 UI·전투·캐릭터 설계/검증 자료입니다.",
  },
  {
    slug: "impactsuite",
    title: "ImpactSuite",
    type: "AI / 레거시 분석",
    status: "주요 AI 프로젝트",
    statusVariant: "default",
    subtitle: "비침습형 레거시 시스템 분석 도구",
    summary: "운영 시스템을 직접 수정하지 않고 실행 흐름을 수집해 변경 영향과 병목을 구조적으로 분석하는 도구입니다.",
    description: "사용자 행동, API 호출, SQL 실행 흐름을 수집하고 Neo4j 그래프와 AI(MCP)를 결합해 레거시 시스템의 구조와 변경 영향을 탐색하는 프로젝트입니다. 현재 포트폴리오의 주요 AI 프로젝트로 유지하되, 최신 개발 중심은 Routoon·ShowRoom·랜덤 디펜스 게임입니다.",
    tags: ["C#", "ASP.NET Core", "Playwright", "Neo4j", "GraphRAG", "MCP"],
    highlights: [
      "애플리케이션 코드를 직접 수정하지 않는 비침습 분석 방식",
      "브라우저 행동 → API → SQL 실행 흐름 추적",
      "Neo4j 그래프로 의존성과 변경 영향 시각화",
      "AI(MCP)를 이용한 구조 탐색·원인 분석 자동화",
    ],
    screenshots: [],
    screenshotNote: "현재 이 저장소에 공개용으로 정리된 ImpactSuite 실제 화면 캡처는 없습니다. 화면을 임의로 만들어 실제 제품처럼 보이게 하지 않고, 확보된 캡처가 추가되면 이 영역에 연결하도록 구성했습니다.",
  },
]

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug)
}