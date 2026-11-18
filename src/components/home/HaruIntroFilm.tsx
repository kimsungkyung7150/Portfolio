"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
const moments = [
  { title: "변경 이유를 묻고", label: "실제 질문 장면 · 확대", start: 18 },
  { title: "저장된 근거로 답하고", label: "실제 원문 조회·답변 장면 · 확대", start: 25 },
  { title: "다음 작업으로 이어집니다", label: "저장 문서를 편집한 공개용 HTML · 자동 생성 UI 아님", start: 57 },
]
export function HaruIntroFilm({ active, staticMode }: { active:boolean; staticMode:boolean }) {
  const video = useRef<HTMLVideoElement>(null)
  const [moment, setMoment] = useState(0)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const v=video.current;if(!v)return
    const start=()=>{v.currentTime=18;v.playbackRate=1.25;v.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false))}
    if(active&&!staticMode&&!document.hidden){if(v.readyState>=1)start();else v.addEventListener("loadedmetadata",start,{once:true})}else{v.pause()}
    const visibility=()=>{if(document.hidden){v.pause();setPlaying(false)}}
    document.addEventListener("visibilitychange",visibility)
    return()=>{v.pause();v.removeEventListener("loadedmetadata",start);document.removeEventListener("visibilitychange",visibility)}
  },[active,staticMode])
  const select=(i:number)=>{const v=video.current;if(!v)return;v.pause();v.currentTime=moments[i].start;setMoment(i);setPlaying(false)}
  return <div className={`haru-intro-film moment-${moment} ${staticMode?"is-static":""}`}>
    <div className="haru-film-caption"><span>HARU / WORK MEMORY</span><strong key={moment}>{moments[moment].title}</strong></div>
    <div className="haru-film-window"><video ref={video} onLoadedMetadata={()=>{if(staticMode&&video.current)video.current.currentTime=25}} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} muted playsInline preload="metadata" poster="/projects/haru/demo-v2/recall-screen.png" aria-label="하루 실제 공개 시연 발췌" onTimeUpdate={()=>{const v=video.current;if(!v)return;if(v.currentTime>=63){v.pause();setPlaying(false)}else if(v.currentTime>=31&&v.currentTime<57){v.currentTime=57;setMoment(2)}else setMoment(v.currentTime>=57?2:v.currentTime>=25?1:0)}}><source src="/projects/haru/demo-v2/haru-workflow-motion.mp4" type="video/mp4" /></video></div>
    <p className="haru-film-source">{moments[moment].label}</p>
    <div className="haru-film-navigation">{["질문","근거 답변","공개 문서"].map((title,i)=><button key={title} type="button" aria-pressed={moment===i} onClick={()=>select(i)}>{title}</button>)}<button type="button" onClick={()=>{const v=video.current;if(!v)return;if(playing){v.pause();setPlaying(false)}else{if(v.currentTime>=63)v.currentTime=18;v.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false))}}}>{playing?"일시정지":"재생"}</button><Link href="/projects/haru#haru-workflow-video">전체 시연</Link></div>
  </div>
}
