import { FileText } from "lucide-react"

export function HaruWorkflowVideo() {
  return (
    <figure className="mb-10 overflow-hidden rounded-xl border border-borderStrong bg-surface shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-6">
        <p className="text-xs font-medium">실제 사용 시연 · 작업이 문서로 이어지는 과정</p>
        <span className="font-mono text-[10px] text-textMuted">1:38 · CHATGPT × MEMORY OS</span>
      </div>
      <video className="aspect-video w-full bg-[#090d16]" controls playsInline preload="none" poster="/projects/haru/demo-v2/poster.jpg" aria-label="하루 업무 저장·회상·후속 질문·인수인계 실제 동작 시연" aria-describedby="haru-video-caption">
        <source src="/projects/haru/demo-v2/haru-workflow-motion.mp4" type="video/mp4" />
        <track src="/projects/haru/demo-v2/haru-workflow-motion.ko.vtt" kind="captions" srcLang="ko" label="한국어" />
        브라우저에서 영상을 재생할 수 없습니다. 아래 시연 설명으로 내용을 확인할 수 있습니다.
      </video>
      <figcaption id="haru-video-caption" className="flex flex-col gap-3 border-t border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <p className="max-w-[850px] text-xs leading-6 text-textMuted">실제 화면의 입력·전송·답변 확인과 보고서 탐색을 촬영했습니다. 처리 대기는 편집했으며, 회상은 색인 대기 중 저장된 원문 조회를 사용했습니다. 계정과 내부 식별자는 가렸습니다. 음성 없이 화면 설명으로 볼 수 있습니다.</p>
        <div className="flex shrink-0 flex-wrap gap-x-5 sm:flex-col sm:gap-1">
          {/* Separate public HTML document, not an App Router route. */}
          <a href="/projects/haru/report/demo.html" className="inline-flex min-h-10 items-center gap-2 text-xs text-primarySoft underline decoration-borderStrong underline-offset-4 hover:text-textPrimary"><FileText className="size-3.5" aria-hidden="true" />영상 속 보고서 읽기</a>
          <a href="/projects/haru/demo-v2/transcript.md" className="inline-flex min-h-10 items-center gap-2 text-xs text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft">시연 설명 읽기</a>
        </div>
      </figcaption>
    </figure>
  )
}
