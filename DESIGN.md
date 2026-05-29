---
name: Kim Sungkyung Portfolio Design System
version: 1.0.0
description: Design system for a professional developer portfolio focused on legacy systems, AI-assisted engineering, and practical architecture.
colors:
  background: "#080B12"
  backgroundSoft: "#0E1320"
  surface: "#121827"
  surfaceElevated: "#182033"
  border: "#263248"
  textPrimary: "#F8FAFC"
  textSecondary: "#A7B0C0"
  textMuted: "#6B7280"
  primary: "#7C3AED"
  primarySoft: "#A78BFA"
  info: "#38BDF8"
  success: "#22C55E"
  warning: "#F59E0B"
typography:
  fontFamily-sans: "Inter, Pretendard, system-ui, sans-serif"
  fontFamily-mono: "JetBrains Mono, Consolas, monospace"
  h1-fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
  h1-lineHeight: "0.95"
  h1-fontWeight: "800"
  h1-letterSpacing: "-0.06em"
  h2-fontSize: "clamp(2rem, 4vw, 3.25rem)"
  h2-lineHeight: "1.05"
  h2-fontWeight: "750"
  h2-letterSpacing: "-0.04em"
  h3-fontSize: "1.5rem"
  h3-lineHeight: "1.25"
  h3-fontWeight: "700"
  body-fontSize: "1rem"
  body-lineHeight: "1.75"
  body-fontWeight: "400"
  small-fontSize: "0.875rem"
  small-lineHeight: "1.5"
  small-fontWeight: "400"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "xxl": "3rem"
  "xxxl": "4rem"
  "xxxxl": "6rem"
radius:
  sm: "0.5rem"
  md: "0.875rem"
  lg: "1.25rem"
  xl: "1.75rem"
  full: "9999px"
shadow:
  card: "0 24px 80px rgba(0, 0, 0, 0.28)"
  glow: "0 0 40px rgba(124, 58, 237, 0.28)"
motion:
  durationFast: "160ms"
  durationNormal: "260ms"
  durationSlow: "520ms"
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# Portfolio Design System

이 DESIGN.md는 김성경 포트폴리오 사이트의 디자인 기준이다.  
AI 에이전트는 UI를 수정하기 전에 반드시 이 문서를 읽고, 색상/여백/반경/컴포넌트 스타일을 이 기준에 맞춰야 한다.

---

## 1. Design Direction

이 포트폴리오는 화려한 개인 홈페이지가 아니라, 실무형 개발자의 문제 해결 능력을 보여주는 사이트다.

핵심 분위기:

- Professional
- Technical
- Trustworthy
- Structured
- Interactive but not noisy
- Dark-first

사이트의 핵심 메시지:

> Legacy Systems into Intelligent Engineering Tools

---

## 2. Visual Mood

전체 배경은 어두운 네이비/블랙 계열을 사용한다.  
보라색과 하늘색 계열은 중요한 흐름, CTA, 시스템 연결선, 데이터 흐름 강조에만 사용한다.

Glassmorphism은 사용할 수 있지만, 모든 카드에 남발하지 않는다.  
카드는 어두운 surface 위에 subtle border와 soft shadow를 조합한다.

---

## 3. Layout Principles

- 섹션 간 여백은 넓게 둔다.
- 텍스트 폭은 너무 넓지 않게 제한한다.
- 정보는 카드와 흐름도로 구조화한다.
- 모바일에서는 모든 섹션이 자연스럽게 세로 스택으로 전환되어야 한다.
- Hero는 강한 인상을 주되, 텍스트 가독성을 방해하면 안 된다.

---

## 4. Component Guidelines

### Primary Button

- Background: `primary`
- Text: `textPrimary`
- Radius: `full`
- Padding: horizontal `lg`, vertical `sm`
- Hover: subtle glow or slight translateY
- Use only for main CTA.

### Secondary Button

- Background: transparent or `surface`
- Border: `border`
- Text: `textPrimary`
- Hover: `surfaceElevated`

### Card

- Background: `surface`
- Border: `border`
- Radius: `xl`
- Padding: `xl`
- Shadow: `card`
- Hover: border becomes slightly brighter; card can move upward 2px.

### Badge

- Background: rgba version of `primary` or `info`
- Text: `primarySoft` or `info`
- Radius: `full`
- Font size: `small`

### Section

- Max width: 1200px
- Horizontal padding: responsive
- Vertical padding: `4xl` desktop, `3xl` mobile

---

## 5. Motion Guidelines

Framer Motion을 사용할 때 애니메이션은 정보 이해를 돕는 수준으로 제한한다.

권장:

- Section fade-up on scroll
- Project card hover reveal
- Architecture flow line animation
- Tech stack badge subtle hover

금지:

- 과도한 회전
- 읽기 어려운 텍스트 애니메이션
- 모바일 성능을 떨어뜨리는 복잡한 3D 효과

---

## 6. Content Tone

문장은 과장하지 않는다.  
“최고”, “완벽”, “모든 문제 해결” 같은 표현은 피한다.

좋은 톤:

- 문제를 어떻게 봤는지
- 어떤 제약이 있었는지
- 어떤 구조로 해결했는지
- 무엇을 배웠는지

예시:

> 복잡한 업무 흐름을 추적 가능한 구조로 바꾸는 데 집중했습니다.

> 장애 원인을 추측하지 않고, 실행 로그와 데이터 흐름을 기반으로 분석했습니다.

---

## 7. Project Card Pattern

프로젝트 카드는 다음 구조를 따른다.

```txt
[Badge: Project Type]
Title
One-line summary
Key points 3개
Tech stack badges
CTA: View Case Study
```

예시:

```txt
[AI / Legacy Analysis]
ImpactSuite
레거시 시스템을 수정하지 않고 외부에서 사용 흐름, API, DB 실행을 수집해 변경 영향과 병목을 분석하는 도구

- Browser-level trace
- API / SQL flow mapping
- Neo4j graph analysis
```

---

## 8. Page Priority

우선 구현 순서:

1. Home
2. Projects
3. ImpactSuite detail
4. SmartFarm detail
5. About
6. Skills
7. Contact

---

## 9. AI Agent Rules

AI 에이전트는 다음 규칙을 반드시 따른다.

1. UI 작업 전에 이 DESIGN.md를 읽는다.
2. 새로운 색상값을 임의로 만들지 않는다.
3. Card, Button, Badge, Section 스타일은 재사용 컴포넌트로 만든다.
4. Tailwind class가 길어지면 공통 컴포넌 분리한다.
5. 모든 페이지는 모바일 대응을 포함한다.
6. 포트폴리오의 핵심 메시지는 “레거시 분석 + 문제 추적 + AI/자동화 확장”이다.
