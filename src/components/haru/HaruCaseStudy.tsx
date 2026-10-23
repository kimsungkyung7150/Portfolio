import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, Download, FileCheck2, Fingerprint, GitBranch, Layers3, ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { haruComparison, haruProject } from "@/lib/haru"
import { HaruExperience } from "./HaruExperience"
import { HaruFlow } from "./HaruFlow"
import { HaruDemo } from "./HaruDemo"

function CaseSection({ id, eyebrow, title, description, children, soft = false }: {
  id: string; eyebrow: string; title: string; description?: string; children: ReactNode; soft?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-36 border-b border-border py-14 sm:py-20 ${soft ? "bg-backgroundSoft" : "bg-background"}`}>
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">{eyebrow}</p><h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight">{title}</h2></div>
          {description && <p className="max-w-[640px] text-sm leading-7 text-textSecondary lg:justify-self-end">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

const engineeringCases = [
  {
    number: "01", title: "잘 찾은 근거가 답변에서 빠지는 문제",
    problem: "검색 결과에 정답이 있어도 복합 질문의 일부 요구나 필수 첨부가 답변 문맥에서 누락됐습니다.",
    decision: "요구별 근거 검색과 후보 분산, 본문·개별 작업·필수 첨부의 우선 전달 경로를 연결했습니다. 원문 구절 ID를 선택하고 서버가 정확한 인용을 복원합니다.",
    boundary: "근거를 찾았다는 사실과 답변을 완성했다는 판정을 분리합니다.",
  },
  {
    number: "02", title: "색인 하나가 실패하면 회상도 멈추는 문제",
    problem: "과거 색인 실패가 새 질문의 전체 회상을 막고, 불완전한 검색 상태가 원문 부재처럼 전달됐습니다.",
    decision: "확정한 출처 범위로 검증 가능한 원문을 조회하도록 장애를 격리했습니다. 이번에 확인한 원문과 관련 기억 전체의 검색 상태를 나눠 안내합니다.",
    boundary: "부분 검색을 완전한 검색으로 승격하거나 기존 실패를 지우지 않습니다.",
  },
  {
    number: "03", title: "긴 인수인계가 연결 종료와 함께 중단되는 문제",
    problem: "인수인계는 답변보다 생성 시간이 길어, 클라이언트 연결 수명에 작업을 묶으면 결과를 잃기 쉬웠습니다.",
    decision: "요청을 먼저 영구 접수하고 서버에서 계속 생성하도록 분리했습니다. 같은 요청 ID로 상태를 확인하고 완료된 모든 문서 분할을 재조회합니다.",
    boundary: "결과를 모르는 호출을 새 ID로 재전송해 중복 생성하지 않습니다.",
  },
]

export function HaruCaseStudy() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="haru-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-14 pt-8 lg:px-8 lg:pb-20">
          <Link href="/projects" className="inline-flex min-h-10 items-center gap-2 text-xs text-textSecondary hover:text-primarySoft"><ArrowLeft className="size-3.5" aria-hidden="true" />전체 프로젝트</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <div className="flex flex-wrap gap-2"><Badge>AI / 업무 기억 시스템</Badge><Badge variant="info">개인 실사용 검증</Badge></div>
              <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-primarySoft">Haru · Memory OS</p>
              <h1 className="mt-3 text-[clamp(2.65rem,4.5vw,4rem)] font-semibold leading-[1.15] tracking-[-0.045em]">일이 끝나도,<br /><span className="text-primarySoft">맥락은 남도록.</span></h1>
              <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-textSecondary">여러 AI와 진행한 작업을 하나의 업무 기억으로 연결합니다. 무엇을 했는지부터 <strong className="font-medium text-textPrimary">왜 바꿨고, 무엇을 확인했고, 무엇이 남았는지</strong>까지 원본 근거로 다시 설명하는 비서입니다.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button href="#demo">실제 사용 영상 보기<ArrowDown className="ml-2 size-4" aria-hidden="true" /></Button><Button href="#difference" variant="outline">차별점 살펴보기</Button></div>
              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-border pt-5 text-xs leading-6">
                <dt className="text-textMuted">진행</dt><dd className="text-textSecondary">2026.10 · 개인 프로젝트</dd>
                <dt className="text-textMuted">역할</dt><dd className="text-textSecondary">{haruProject.role}</dd>
                <dt className="text-textMuted">구현</dt><dd className="text-textSecondary">Codex 협업 · C# / ASP.NET Core / SQL Server</dd>
              </dl>
            </div>
            <HaruExperience />
          </div>
        </div>
      </section>

      <nav aria-label="하루 사례 목차" className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1240px] gap-1 overflow-x-auto px-3 py-2 lg:px-6">
          {[["demo", "실사용 영상"], ["difference", "차별점"], ["pipeline", "기억 파이프라인"], ["engineering", "문제 해결"], ["verification", "검증 결과"]].map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 rounded-md px-3 py-2.5 text-xs text-textSecondary transition hover:bg-surface hover:text-primarySoft focus-visible:outline-2 focus-visible:outline-primarySoft">{label}</a>)}
        </div>
      </nav>

      <HaruDemo />

      <CaseSection id="difference" eyebrow="Why a memory system" title="기억의 기준을 서비스에 둡니다." description="프로젝트 공간의 편리한 맥락 공유 위에, 업무 기록의 출처·변경 이력·확인 상태를 관리하는 별도의 계층을 더했습니다." soft>
        <div className="mb-9 grid gap-6 sm:grid-cols-3">
          {[{ icon: Layers3, title: "AI가 달라도, 같은 업무 기억", text: "업무 AI의 제출 경로와 중앙 비서의 답변 경로를 분리합니다. 도구마다 흩어진 보고서를 같은 저장 계약으로 모읍니다." }, { icon: GitBranch, title: "결과와 함께, 바뀐 이유", text: "이전/이후 상태, 변경 이유, 작업자와 시각을 원문에 연결합니다. 당시 보고한 내용과 현재 확인한 상태를 구분합니다." }, { icon: Fingerprint, title: "답변 뒤에, 확인할 수 있는 원본", text: "요약은 원본을 대체하지 않습니다. 인용 구절과 바이트·해시를 확인하고 부족한 근거는 상태로 드러냅니다." }].map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-t border-primarySoft/40 pt-5"><Icon className="size-5 text-primarySoft" aria-hidden="true" /><h3 className="mt-4 text-base font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-textSecondary">{text}</p></article>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="hidden grid-cols-[0.8fr_1fr_1.2fr] gap-5 border-b border-border bg-surfaceElevated px-6 py-4 text-xs font-medium md:grid"><span className="text-textSecondary">업무에서 필요한 것</span><span className="text-textSecondary">프로젝트 맥락 공유</span><span className="text-primarySoft">하루가 추가로 관리하는 것</span></div>
          {haruComparison.map((row) => <div key={row.question} className="grid gap-4 border-b border-border px-5 py-5 last:border-0 md:grid-cols-[0.8fr_1fr_1.2fr] md:gap-5 md:px-6">
            <h3 className="text-sm font-semibold leading-6">{row.question}</h3>
            <p className="text-xs leading-6 text-textSecondary"><span className="mb-1 block text-[10px] text-textMuted md:hidden">프로젝트 맥락 공유</span>{row.context}</p>
            <p className="text-xs leading-6 text-textPrimary"><span className="mb-1 block text-[10px] text-primarySoft md:hidden">하루가 추가로 관리하는 것</span>{row.memory}</p>
          </div>)}
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-6 text-textMuted">ChatGPT도 프로젝트의 채팅·파일·지침·연결 자료를 공유하며 메모리 기능을 제공합니다. 위 비교는 기능의 유무나 성능 우열이 아니라, 하루에서 직접 구현·검증하는 업무 기록 관리 범위를 설명합니다. <a href="https://learn.chatgpt.com/docs/projects" target="_blank" rel="noreferrer" className="text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft">공식 프로젝트 문서</a> · <a href="https://learn.chatgpt.com/docs/personalize#carry-context-forward-with-memories" target="_blank" rel="noreferrer" className="text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft">메모리 문서</a> <span className="whitespace-nowrap">(2026.10.24 확인)</span></p>
      </CaseSection>

      <CaseSection id="pipeline" eyebrow="System architecture" title="저장부터 인수인계까지, 하나의 흐름." description="기억은 모델 내부가 아니라 Memory OS에 영속 저장합니다. 모델을 교체할 수 있도록 생성·임베딩·재랭킹 어댑터와 저장 계약을 분리했습니다.">
        <HaruFlow />
        <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {haruProject.architecture.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span className="font-mono text-[11px] text-primarySoft">0{index + 1}</span><h3 className="mt-3 text-base font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-textSecondary">{step.description}</p></li>)}
        </ol>
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-surface p-5"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-primarySoft" aria-hidden="true" /><p className="text-xs leading-6 text-textSecondary">일반적인 AI 대화 전체를 자동 수집하지 않습니다. 사용자가 저장을 요청해 제출한 업무 보고서·첨부가 기억의 출발점입니다. 업무 AI는 제출과 자기 영수증 조회만 허용하며, 하루는 현재 사용자 권한으로 읽습니다.</p></div>
      </CaseSection>

      <CaseSection id="engineering" eyebrow="Engineering decisions" title="실제 사용에서 드러난 문제를 풀었습니다." description="검색 모델 하나를 붙이는 것보다 어려웠던 것은, 수집부터 답변 저장까지 근거와 상태를 잃지 않게 연결하는 일이었습니다." soft>
        <div className="divide-y divide-border border-y border-border">
          {engineeringCases.map((item) => <article key={item.number} className="grid gap-5 py-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div><span className="font-mono text-[11px] text-primarySoft">{item.number}</span><h3 className="mt-3 max-w-[448px] text-xl font-semibold leading-8 tracking-tight">{item.title}</h3></div>
            <div><p className="text-sm leading-7 text-textMuted">{item.problem}</p><p className="mt-3 text-sm leading-7 text-textSecondary">{item.decision}</p><p className="mt-4 flex items-start gap-2 text-xs leading-6 text-primarySoft"><Check className="mt-1.5 size-3.5 shrink-0" aria-hidden="true" />{item.boundary}</p></div>
          </article>)}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {haruProject.techGroups.map((group) => <div key={group.name} className="rounded-xl border border-border bg-surface p-5"><h3 className="text-sm font-semibold">{group.name}</h3><ul className="mt-4 space-y-2 font-mono text-[11px] leading-5 text-textSecondary">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
        </div>
        <p className="mt-4 text-xs leading-6 text-textMuted">8GB VRAM 환경에서 임베딩과 재랭커를 순차 실행합니다. 로컬 임베딩과 Codex CLI 기반 생성을 함께 사용하며, 완전한 오프라인 시스템으로 소개하지 않습니다.</p>
      </CaseSection>

      <CaseSection id="verification" eyebrow="Observed, not assumed" title="어디까지 확인했는지 공개합니다." description="2026.10.23 본인 계정의 실제 개발 기록을 사용한 MCP·SQL 검수 결과입니다. 아래 수치는 특정 실행의 관측이며 전체 질문의 정확도나 운영 SLA를 뜻하지 않습니다.">
        <div className="grid divide-y divide-border rounded-xl border border-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[{ value: "35,692", unit: "기존 행 보존", detail: "27개 SQL 표 · 변경·소실 0건" }, { value: "109 / 109", unit: "신규 모델 호출 완료", detail: "원문 제출·자동 정리·회상 검수 1회" }, { value: "0", unit: "GPU 실행 중첩", detail: "해당 검수의 독점 임대 106회" }].map((item) => <div key={item.unit} className="p-6 sm:p-7"><p className="font-mono text-[clamp(1.8rem,3vw,2.4rem)] font-medium tracking-tight">{item.value}</p><p className="mt-3 text-sm font-semibold text-primarySoft">{item.unit}</p><p className="mt-2 text-xs leading-6 text-textSecondary">{item.detail}</p></div>)}
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl border border-border bg-surface p-6">
            <p className="flex items-center gap-2 text-sm font-semibold"><FileCheck2 className="size-4 text-success" aria-hidden="true" />개인 실사용 경로 확인</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-textSecondary">
              {["Writer 제출 → 원본·첨부 저장 → 자동 정리·색인", "하루 회상 → 같은 업무의 정상 후속 질문", "인수인계 Markdown 3부 전체 저장·재조회", "원문 바이트·해시·선택 인용 ID와 실제 SQL 대조"].map((item) => <li key={item} className="flex gap-2.5"><Check className="mt-1.5 size-4 shrink-0 text-success" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-6 text-textMuted">별도 회상·후속·인수인계 검수의 관측 시간: 35.7초 / 47.3초 / 약 125초. 인수인계 접수 응답은 약 2.9초였습니다.</p>
          </article>
          <article className="rounded-xl border border-border bg-backgroundSoft p-6">
            <p className="text-sm font-semibold text-warning">검증의 경계와 다음 단계</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-textSecondary">
              <li>현재 수정본의 독립 일반화 품질 합격은 아직 입증하지 않았습니다.</li>
              <li>과거 B43 v27은 <strong className="font-medium text-textPrimary">37/40 FAIL</strong>로 보존합니다. 기준 38/40과 14개 Gate를 변경하지 않았습니다.</li>
              <li>대상 벡터는 26/27 복구. 결과가 없는 미확정 1개와 과거 실패 기록은 남겨 둡니다.</li>
              <li>다른 팀원과의 권한·인수인계 검수, 새 장치 복구와 회사 운영 검증이 다음 단계입니다.</li>
            </ul>
          </article>
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-sm font-semibold">공개 검증 요약</p><p className="mt-1 text-xs leading-6 text-textSecondary">관측 범위·수치·한계를 담았습니다. 계정 정보와 내부 접속 정보는 포함하지 않습니다.</p></div>
          <a href="/projects/haru/verification-summary.md" download="haru-verification-summary.md" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-borderStrong px-4 text-xs font-medium transition hover:border-primarySoft focus-visible:outline-2 focus-visible:outline-primarySoft"><Download className="size-4" aria-hidden="true" />검증 요약 Markdown</a>
        </div>
      </CaseSection>

      <section className="bg-backgroundSoft py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 px-5 sm:flex-row sm:items-center lg:px-8"><div><p className="font-mono text-[10px] uppercase tracking-widest text-primarySoft">What this project demonstrates</p><p className="mt-3 max-w-2xl text-lg font-medium leading-8">AI 생성, 업무 데이터, 권한, 실패 복구를<br className="hidden sm:block" />검증 가능한 하나의 서비스로 연결하는 능력.</p></div><Button href="/projects" variant="outline" className="gap-2">다른 프로젝트 보기<ArrowUpRight className="size-4" aria-hidden="true" /></Button></div>
      </section>
    </div>
  )
}
