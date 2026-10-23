"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, FileText } from "lucide-react"

const views = [
  { key: "overview", title: "핵심 요약", description: "작업의 배경과 변경 내용을 한눈에 읽습니다.", anchor: "top", image: "overview.png", alt: "하루 인수인계 HTML 보고서의 표지와 핵심 요약" },
  { key: "verification", title: "검증 결과", description: "작업 보고와 실제 저장·재조회 검증을 구분합니다.", anchor: "verification", image: "verification.png", alt: "하루 인수인계 HTML 보고서의 검증 결과와 확인 범위" },
  { key: "evidence", title: "원문 근거", description: "정리된 내용 뒤에 있는 원문을 펼쳐 확인합니다.", anchor: "source", image: "evidence.png", alt: "하루 인수인계 HTML 보고서의 원문 근거 펼침 화면" },
]

export function HaruReportPreview() {
  const [selected, setSelected] = useState(0)
  const view = views[selected]

  return (
    <div className="overflow-hidden rounded-xl border border-borderStrong bg-surface shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5"><FileText className="size-4 text-primarySoft" aria-hidden="true" /><span className="text-xs font-medium">하루 · 업무 인수인계</span><span className="hidden text-[10px] text-textMuted sm:inline">공개용 HTML 열람본</span></div>
        <div role="tablist" aria-label="보고서 캡처 미리보기" className="flex gap-1 rounded-lg bg-background/70 p-1">
          {views.map((item, index) => (
            <button key={item.key} id={`report-tab-${item.key}`} role="tab" aria-selected={index === selected} aria-controls="report-preview-panel" tabIndex={index === selected ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => {
              const target = event.key === "ArrowRight" ? (index + 1) % views.length : event.key === "ArrowLeft" ? (index + views.length - 1) % views.length : event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : null
              if (target !== null) { event.preventDefault(); setSelected(target); document.getElementById(`report-tab-${views[target].key}`)?.focus() }
            }} className={`min-h-9 rounded-md px-3 text-[11px] transition-colors ${index === selected ? "bg-surfaceElevated text-textPrimary shadow-sm" : "text-textMuted hover:text-textPrimary"}`}>{item.title}</button>
          ))}
        </div>
      </div>
      <div id="report-preview-panel" role="tabpanel" aria-labelledby={`report-tab-${view.key}`}>
        <a href={`/projects/haru/report/index.html#${view.anchor}`} className="group relative block bg-[#eeeef2]" aria-label={`${view.title} 보고서 직접 읽기`}>
          <Image src={`/projects/haru/report/${view.image}`} width={1265} height={712} unoptimized alt={view.alt} className="h-auto w-full" />
          <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#202337] px-4 py-2.5 text-xs font-medium text-white shadow-lg motion-safe:transition-transform motion-safe:group-hover:-translate-y-1">문서에서 읽기<ArrowUpRight className="size-3.5" aria-hidden="true" /></span>
        </a>
        <p className="flex items-center justify-between gap-4 px-4 py-3 text-[11px] text-textMuted sm:px-6"><span>{view.description}</span><span className="shrink-0 font-mono">0{selected + 1} / 03</span></p>
      </div>
    </div>
  )
}
