import { ArrowUpRight, BookOpen, FileText } from "lucide-react"
import { HaruReportPreview } from "./HaruReportPreview"

export function HaruDemo() {
  return (
    <section id="demo" className="scroll-mt-36 border-b border-border bg-backgroundSoft py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft"><BookOpen className="size-4" aria-hidden="true" />The work, handed over</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.3vw,2.65rem)] font-semibold leading-tight tracking-tight">대화가 끝나면,<br />인수인계가 남습니다.</h2>
          </div>
          <div>
            <p className="max-w-[550px] text-sm leading-7 text-textSecondary">왜 바꿨는지, 어디를 고쳤는지, 무엇을 확인했고 무엇이 남았는지. 실제 저장된 인수인계 3부를 다음 사람이 읽기 좋은 하나의 문서로 구성했습니다.</p>
            {/* Standalone public HTML needs a document navigation, not the App Router. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/projects/haru/report/index.html" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primarySoft underline decoration-primarySoft/30 underline-offset-4 hover:text-textPrimary">실제 내용으로 만든 보고서 읽기<ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </div>
        </div>
        <HaruReportPreview />
        <div className="mt-6 grid gap-5 border-b border-border pb-6 sm:grid-cols-3 sm:gap-8">
          <div><p className="text-sm font-medium">01 · 맥락부터 파악</p><p className="mt-2 text-xs leading-6 text-textMuted">변경 이유와 이전·이후 상태를 먼저 읽습니다.</p></div>
          <div><p className="text-sm font-medium">02 · 결과와 한계 구분</p><p className="mt-2 text-xs leading-6 text-textMuted">보고된 검사와 실제 저장 검증, 남은 일을 구분합니다.</p></div>
          <div><p className="text-sm font-medium">03 · 원문까지 확인</p><p className="mt-2 text-xs leading-6 text-textMuted">핵심 구절을 펼치거나 공개용 Markdown 사본을 읽습니다.</p></div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[780px] text-xs leading-6 text-textMuted">Memory OS에 저장된 Markdown을 바탕으로 별도 제작한 공개용 HTML 열람본과 실제 캡처입니다. 계정·내부 식별자는 가렸으며 내용은 2026년 10월 24일 원문 작성 시점 기준입니다.</p>
          <a href="/projects/haru/report/source.md" className="inline-flex min-h-10 shrink-0 items-center gap-2 text-xs text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft"><FileText className="size-4" aria-hidden="true" />공개용 원문 사본</a>
        </div>
      </div>
    </section>
  )
}
