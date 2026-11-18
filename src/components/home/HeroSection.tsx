"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
const clamp=(v:number)=>Math.max(0,Math.min(1,v))
export function HeroSection(){
 const root=useRef<HTMLElement>(null)
 const [motion,setMotion]=useState(true)
 const [reduced,setReduced]=useState(false)
 useEffect(()=>{const mq=matchMedia("(prefers-reduced-motion: reduce)");const read=()=>setReduced(mq.matches);read();mq.addEventListener("change",read);return()=>mq.removeEventListener("change",read)},[])
 useEffect(()=>{if(!motion||reduced)return;let raf=0;const draw=()=>{raf=0;const el=root.current;if(!el)return;const rect=el.getBoundingClientRect();const p=clamp(-rect.top/Math.max(1,rect.height-innerHeight));el.style.setProperty("--progress",String(p));el.style.setProperty("--first-opacity",String(1-clamp((p-.12)/.2)));el.style.setProperty("--first-y",`${-p*260}px`);el.style.setProperty("--first-scale",String(1+p*.55));const second=clamp((p-.18)/.25)*(1-clamp((p-.64)/.22));el.style.setProperty("--second-opacity",String(second));el.style.setProperty("--art-x",`${(1-clamp((p-.18)/.3))*50}%`);el.style.setProperty("--art-scale",String(1.15-clamp((p-.18)/.45)*.15));el.style.setProperty("--third-opacity",String(clamp((p-.69)/.2)));el.style.setProperty("--third-y",`${(1-clamp((p-.69)/.2))*80}px`);el.style.setProperty("--curtain",`${(1-clamp((p-.67)/.23))*100}%`);el.dataset.progress=p.toFixed(3)};const schedule=()=>{if(!raf)raf=requestAnimationFrame(draw)};addEventListener("scroll",schedule,{passive:true});addEventListener("resize",schedule);draw();return()=>{removeEventListener("scroll",schedule);removeEventListener("resize",schedule);cancelAnimationFrame(raf)}},[motion,reduced])
 const isStatic=!motion||reduced
 return <section ref={root} className={`scroll-film ${isStatic?"film-static":""}`} aria-label="포트폴리오 인트로">
 <div className="film-stage">
 <div className="film-controls"><Link href="#explore-work" className="inline-flex min-h-11 items-center text-xs">소개 건너뛰기 ↓</Link><button type="button" disabled={reduced} onClick={()=>setMotion(!motion)} aria-pressed={isStatic} className="min-h-11 rounded-full border border-current/25 px-4 text-xs">{reduced?"동작 줄이기 적용됨":motion?"모션 끄기":"모션 켜기"}</button></div>
 <div className="film-scene film-first"><div className="system-plane" aria-hidden="true"><i/><i/><i/><span>C#</span><span>.NET</span><span>SQL</span></div><div className="film-copy"><p className="film-kicker">01 / ENGINEERING</p><h1>복잡함을<br/><span>구조로.</span></h1><p className="film-description">ASP.NET · MS SQL Server<br/>8년 6개월의 업무 시스템 개발 경험.</p></div><p className="film-scroll-hint">SCROLL TO EXPLORE <span>↓</span></p></div>
 <div className="film-scene film-second"><div className="film-art"><span className="art-word" aria-hidden="true">BEYOND</span><Image src="/projects/showroom/fullbody-reference.png" alt="ShowRoom 프로젝트의 여성 기사 기준 원화" width={223} height={628} priority sizes="(max-width:640px) 180px,223px" className="film-character"/><span className="film-art-label">SHOWROOM / 프로젝트 기준 원화</span></div><div className="film-copy"><p className="film-kicker">02 / EXPLORATION</p><h2>경험의<br/><span>다음 장면.</span></h2><p className="film-description">업무에서 쌓은 경험.<br/>개인 프로젝트로 이어가는 새로운 시도.</p></div></div>
 <div className="film-scene film-third"><div className="film-copy"><p className="film-kicker">03 / SELECTED WORK</p><h2>이제,<br/><span>결과를 봅니다.</span></h2><p className="film-description">경력, 업무 프로젝트, 개인 프로젝트.<br/>구현 범위와 남은 과제까지 구분했습니다.</p></div><span className="film-end-mark" aria-hidden="true">↘</span></div>
 <div className="film-progress" aria-hidden="true"><i/></div>
 </div></section>
}
