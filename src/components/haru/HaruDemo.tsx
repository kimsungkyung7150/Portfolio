import { Film, FileText } from "lucide-react"

export function HaruDemo() {
  return (
    <section id="demo" className="scroll-mt-36 border-b border-border bg-backgroundSoft py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-7 grid gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft"><Film className="size-4" aria-hidden="true" />Actual workflow</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight">1분 42초로 보는, 업무 기억의 흐름.</h2>
          </div>
          <p className="max-w-[640px] text-sm leading-7 text-textSecondary">실제 업무 기록을 Writer에 제출하고, 하루에게 이유와 남은 일을 물은 뒤 인수인계로 남기는 흐름입니다. 실제 실행 화면을 편집했으며 대기 구간은 생략했습니다.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-black">
          <video controls playsInline preload="none" poster="/projects/haru/demo/haru-demo-poster.jpg" width={1920} height={1080} className="aspect-video w-full" aria-label="하루 업무 저장, 회상, 후속 질문과 인수인계 실제 동작 데모" aria-describedby="haru-demo-note">
            <source src="/projects/haru/demo/haru-workflow.mp4" type="video/mp4" />
            <track src="/projects/haru/demo/haru-workflow.ko.vtt" kind="captions" srcLang="ko" label="한국어" />
            <p>동영상을 재생할 수 없습니다. <a href="/projects/haru/demo/haru-workflow.mp4">MP4 영상 열기</a></p>
          </video>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p id="haru-demo-note" className="max-w-[760px] text-xs leading-6 text-textMuted">한국어 화면 자막 · 개인정보·내부 식별자 비공개 · 실제 화면을 편집한 영상입니다. 첫 회상은 색인 대기 중 원문 직접 조회이며, 후속 질문은 색인 완료 후 실행했습니다. 영상 속 업무 상태는 원문 작성 시점 기준입니다. 특정 업무 1건의 사례로, 전체 품질·회사 운영 완료나 실시간 응답 속도를 뜻하지 않습니다.</p>
          <a href="/projects/haru/demo/transcript.md" className="inline-flex min-h-10 shrink-0 items-center gap-2 text-xs text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft"><FileText className="size-4" aria-hidden="true" />텍스트로 읽기</a>
        </div>
      </div>
    </section>
  )
}
