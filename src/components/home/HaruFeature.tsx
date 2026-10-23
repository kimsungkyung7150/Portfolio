import Link from "next/link"
import { ArrowUpRight, Fingerprint, GitBranch, Play, ShieldCheck } from "lucide-react"
import { HaruFlow } from "@/components/haru/HaruFlow"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export function HaruFeature() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-primarySoft/25 bg-surface shadow-card">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2"><Badge>AI / 업무 기억</Badge><Badge variant="info">개인 실사용 검증</Badge></div>
          <h3 className="mt-5 text-4xl font-semibold tracking-tight">하루 <span className="text-lg font-normal text-textMuted">Memory OS</span></h3>
          <p className="mt-3 text-lg font-medium leading-7 text-textPrimary">AI와 한 일을,<br />다음 사람이 이어갈 수 있도록.</p>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-textSecondary">여러 AI의 업무 보고서를 모아 변경 이유, 수정 파일, 확인 결과와 남은 일을 기억합니다. 원본 근거가 연결된 답변과 인수인계로 다시 꺼내 씁니다.</p>
          <p className="mt-5 font-mono text-[10px] leading-5 text-textMuted">C# · ASP.NET Core · SQL Server · MCP · Hybrid RAG</p>
          <Button href="/projects/haru" className="mt-6 gap-2">설계와 실사용 검증 보기<ArrowUpRight className="size-4" aria-hidden="true" /></Button>
          <Link href="/projects/haru#demo" className="mt-3 flex min-h-11 w-fit items-center gap-2 text-xs text-primarySoft underline decoration-primarySoft/30 underline-offset-4 hover:text-textPrimary"><Play className="size-3.5" aria-hidden="true" />저장부터 인수인계까지 · 실제 사용 영상</Link>
        </div>
        <div className="flex flex-col justify-center gap-6 border-t border-border p-6 sm:p-8 lg:border-l lg:border-t-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primarySoft">One memory. Clear responsibilities.</p>
          <HaruFlow />
          <div className="grid gap-3 text-xs text-textSecondary sm:grid-cols-3">
            {[{ icon: Fingerprint, text: "원문 바이트·해시 보존" }, { icon: GitBranch, text: "이유·이력·작성 주체" }, { icon: ShieldCheck, text: "서버에서 인용 검증" }].map(({ icon: Icon, text }) => <p key={text} className="flex items-center gap-2 leading-5"><Icon className="size-4 shrink-0 text-primarySoft" aria-hidden="true" />{text}</p>)}
          </div>
        </div>
      </div>
    </article>
  )
}
