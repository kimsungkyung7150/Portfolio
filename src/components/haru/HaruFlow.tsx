import { ArrowRight, Database, MessagesSquare, Upload } from "lucide-react"

const roles = [
  { label: "Writer", detail: "작업 보고서 · 실제 첨부", responsibility: "제출 전용", icon: Upload },
  { label: "Memory OS", detail: "원본 · 정리된 기억 · 색인", responsibility: "보존과 연결", icon: Database },
  { label: "하루", detail: "회상 · 후속 질문 · 인수인계", responsibility: "검색과 근거 답변", icon: MessagesSquare },
]

export function HaruFlow() {
  return (
    <div className="grid gap-3 sm:grid-cols-3" aria-label="Writer에서 Memory OS를 거쳐 하루로 이어지는 역할 분리">
      {roles.map(({ label, detail, responsibility, icon: Icon }, index) => (
        <div key={label} className="relative rounded-xl border border-border bg-backgroundSoft p-4 sm:py-5">
          <div className="flex items-center justify-between text-primarySoft"><Icon className="size-5" aria-hidden="true" /><span className="font-mono text-[9px] text-textMuted">0{index + 1}</span></div>
          <p className="mt-4 text-base font-semibold">{label}</p>
          <p className="mt-1 text-[11px] leading-5 text-textSecondary">{detail}</p>
          <p className="mt-4 text-[10px] text-primarySoft">{responsibility}</p>
          {index < 2 && <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden size-4 rounded bg-surface text-textMuted sm:block" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
