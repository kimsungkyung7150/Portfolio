"use client"

import { useEffect, useRef, useState } from "react"
import { Captions, FileText, Maximize } from "lucide-react"

export function HaruWorkflowVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [captionsEnabled, setCaptionsEnabled] = useState(false)
  const [fullscreenMessage, setFullscreenMessage] = useState("")

  function toggleCaptions() {
    const track = videoRef.current?.textTracks[0]
    if (track) track.mode = track.mode === "showing" ? "disabled" : "showing"
  }

  async function openFullscreen() {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null
    if (!video) return
    setFullscreenMessage("")
    try {
      if (video.requestFullscreen) await video.requestFullscreen()
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen()
      else setFullscreenMessage("영상 안의 전체화면 버튼을 사용해 주세요.")
    } catch {
      setFullscreenMessage("영상을 재생한 뒤 영상 안의 전체화면 버튼을 사용해 주세요.")
    }
  }

  useEffect(() => {
    const tracks = videoRef.current?.textTracks
    if (!tracks) return
    const syncCaptions = () => setCaptionsEnabled(Array.from(tracks).some((track) => track.mode === "showing"))
    tracks.addEventListener("change", syncCaptions)
    return () => tracks.removeEventListener("change", syncCaptions)
  }, [])

  return (
    <figure className="mb-10 overflow-hidden rounded-xl border border-borderStrong bg-surface shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-6">
        <p className="text-xs font-medium">실제 사용 시연 · 작업이 문서로 이어지는 과정</p>
        <span className="font-mono text-[10px] text-textMuted">1:38 · CHATGPT × MEMORY OS</span>
      </div>
      <video ref={videoRef} id="haru-workflow-video" className="haru-workflow-video aspect-video w-full bg-[#090d16]" controls playsInline preload="none" poster="/projects/haru/demo-v2/poster.jpg" aria-label="하루 업무 저장·회상·후속 질문·인수인계 실제 동작 시연" aria-describedby="haru-video-caption haru-video-help">
        <source src="/projects/haru/demo-v2/haru-workflow-motion.mp4" type="video/mp4" />
        <track src="/projects/haru/demo-v2/haru-workflow-motion.ko.vtt" kind="captions" srcLang="ko" label="한국어" />
        브라우저에서 영상을 재생할 수 없습니다. 아래 시연 설명으로 내용을 확인할 수 있습니다.
      </video>
      <div className="border-t border-border px-4 py-3 sm:px-6">
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-controls="haru-workflow-video" aria-pressed={captionsEnabled} onClick={toggleCaptions} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-borderStrong px-3 text-sm text-textSecondary hover:bg-surfaceElevated aria-pressed:border-primarySoft aria-pressed:text-primarySoft"><Captions className="size-4" aria-hidden="true" />한국어 자막 {captionsEnabled ? "켜짐" : "꺼짐"}</button>
          <button type="button" aria-controls="haru-workflow-video" onClick={openFullscreen} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-borderStrong px-3 text-sm text-textSecondary hover:bg-surfaceElevated"><Maximize className="size-4" aria-hidden="true" />전체화면</button>
        </div>
        <p id="haru-video-help" className="mt-2 text-xs leading-6 text-textMuted">작은 화면에서는 전체화면·가로 방향으로 보면 내용을 더 쉽게 읽을 수 있습니다.</p>
        {fullscreenMessage && <p role="status" className="mt-2 text-sm text-textSecondary">{fullscreenMessage}</p>}
      </div>
      <figcaption id="haru-video-caption" className="flex flex-col gap-3 border-t border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <p className="max-w-[850px] text-sm leading-7 text-textMuted sm:text-xs sm:leading-6">실제 화면의 입력·전송·답변 확인과 보고서 탐색을 촬영했습니다. 처리 대기는 편집했으며, 회상은 색인 대기 중 저장된 원문 조회를 사용했습니다. 계정과 내부 식별자는 가렸습니다. 음성 없이 화면 설명으로 볼 수 있습니다.</p>
        <div className="flex shrink-0 flex-wrap gap-x-5 sm:flex-col sm:gap-1">
          {/* Separate public HTML document, not an App Router route. */}
          <a href="/projects/haru/report/demo.html" className="inline-flex min-h-11 items-center gap-2 text-sm text-primarySoft underline decoration-borderStrong underline-offset-4 hover:text-textPrimary sm:text-xs"><FileText className="size-3.5" aria-hidden="true" />영상 속 보고서 읽기</a>
          <a href="/projects/haru/demo-v2/transcript.md" className="inline-flex min-h-11 items-center gap-2 text-sm text-textSecondary underline decoration-borderStrong underline-offset-4 hover:text-primarySoft sm:text-xs">시연 설명 읽기</a>
        </div>
      </figcaption>
    </figure>
  )
}
