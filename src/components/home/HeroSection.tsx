"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
const showcases=[
 {name:"ShowRoom",kind:"실제 WPF 화면 · 입력 원화 확인 단계",src:"/projects/showroom/pipeline-running.png",alt:"ShowRoom WPF에서 입력 원화를 확인하는 실제 화면",slug:"showroom"},
 {name:"Routoon",kind:"실제 독자 서비스 화면",src:"/projects/routoon/home.png",alt:"Routoon 실제 메인 화면",slug:"routoon"},
 {name:"모바일 방치형 · 빛의 기사단",kind:"개발 중 · UI 디자인 시안",src:"/projects/idle-game/ui-concept.png",alt:"빛의 기사단 모바일 방치형 게임 UI 디자인 시안",slug:"idle-game"},
 {name:"하루 · Memory OS",kind:"개인 환경 테스트 · 데모 화면",src:"/projects/haru/demo-v2/poster.jpg",alt:"하루 작업 기록과 인수인계 데모",slug:"haru"},
 {name:"ImpactSuite",kind:"개발 중 · 설계 흐름",src:"",alt:"",slug:"impactsuite"},
]
const clamp=(v:number)=>Math.max(0,Math.min(1,v))
export function HeroSection(){
 const root=useRef<HTMLElement>(null)
 const [scene,setScene]=useState(0)
 const [motion,setMotion]=useState(true)
 const [reduced,setReduced]=useState(false)
 useEffect(()=>{const mq=matchMedia("(prefers-reduced-motion: reduce)");const read=()=>setReduced(mq.matches);read();mq.addEventListener("change",read);return()=>mq.removeEventListener("change",read)},[])
 useEffect(()=>{if(!motion||reduced)return;let raf=0;const draw=()=>{raf=0;const el=root.current;if(!el)return;const rect=el.getBoundingClientRect();const p=clamp(-rect.top/Math.max(1,rect.height-innerHeight));el.style.setProperty("--progress",String(p));el.style.setProperty("--first-opacity",String(1-clamp((p-.12)/.2)));el.style.setProperty("--first-y",`${-p*260}px`);el.style.setProperty("--first-scale",String(1+p*.55));const second=clamp((p-.18)/.25)*(1-clamp((p-.64)/.22));el.style.setProperty("--second-opacity",String(second));el.style.setProperty("--second-reveal",`${(1-clamp((p-.15)/.3))*100}%`);el.style.setProperty("--second-copy-x",`${(1-clamp((p-.29)/.18))*80}px`);el.style.setProperty("--art-x",`${(1-clamp((p-.18)/.3))*50}%`);el.style.setProperty("--art-scale",String(1.15-clamp((p-.18)/.45)*.15));el.style.setProperty("--third-opacity",String(clamp((p-.69)/.2)));el.style.setProperty("--third-y",`${(1-clamp((p-.69)/.2))*80}px`);el.style.setProperty("--curtain",`${(1-clamp((p-.67)/.23))*100}%`);el.dataset.progress=p.toFixed(3);setScene(Math.round(p*showcases.length))};const schedule=()=>{if(!raf)raf=requestAnimationFrame(draw)};addEventListener("scroll",schedule,{passive:true});addEventListener("resize",schedule);draw();return()=>{removeEventListener("scroll",schedule);removeEventListener("resize",schedule);cancelAnimationFrame(raf)}},[motion,reduced])
 useEffect(()=>{
  if(!motion||reduced)return
  let frame=0, busy=false, lastWheel=0, total=0, consumed=false, touchY=0, touchX=0, touching=false
  const positions=()=>{const el=root.current!;const start=el.offsetTop;const span=Math.max(1,el.offsetHeight-innerHeight);return [0,...showcases.map((_,i)=>start+span*(i+1)/showcases.length),Math.max(start+span+50, (document.getElementById("explore-work")?.offsetTop??start+el.offsetHeight)-100)]}
  const within=()=>{const el=root.current;if(!el)return false;const pos=positions();return scrollY>=pos[0]-110&&scrollY<pos[pos.length-1]-15}
  const move=(direction:number)=>{if(busy)return;const stops=positions();const y=scrollY;const target=direction>0?stops.find(v=>v>y+25):[...stops].reverse().find(v=>v<y-25);if(target===undefined)return;busy=true;const start=performance.now();const from=y;const step=(now:number)=>{const t=Math.min(1,(now-start)/680);const ease=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;window.scrollTo({top:from+(target-from)*ease,behavior:"instant"});if(t<1)frame=requestAnimationFrame(step);else busy=false};frame=requestAnimationFrame(step)}
  const interactive=(target:EventTarget|null)=>target instanceof Element&&!!target.closest("input,textarea,select,[contenteditable=true],button,a")
  const wheel=(e:WheelEvent)=>{if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!within())return;const now=performance.now();const fresh=now-lastWheel>220;lastWheel=now;e.preventDefault();if(fresh){total=0;consumed=false}if(busy||consumed)return;total+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);if(Math.abs(total)>=24){consumed=true;move(Math.sign(total));total=0}}
  const key=(e:KeyboardEvent)=>{if(!within()||interactive(e.target)||e.altKey||e.ctrlKey||e.metaKey)return;const d=["ArrowDown","PageDown"," "].includes(e.key)?1:["ArrowUp","PageUp"].includes(e.key)?-1:0;if(d){e.preventDefault();move(e.shiftKey&&e.key===" "?-1:d)}}
  const start=(e:TouchEvent)=>{touching=within()&&!interactive(e.target)&&e.touches.length===1;if(touching){touchY=e.touches[0].clientY;touchX=e.touches[0].clientX}}
  const drag=(e:TouchEvent)=>{if(touching&&e.touches.length===1&&Math.abs(e.touches[0].clientY-touchY)>Math.abs(e.touches[0].clientX-touchX))e.preventDefault()}
  const end=(e:TouchEvent)=>{if(!touching)return;touching=false;const dy=touchY-e.changedTouches[0].clientY;if(Math.abs(dy)>40)move(Math.sign(dy))}
  addEventListener("wheel",wheel,{passive:false});addEventListener("keydown",key);addEventListener("touchstart",start,{passive:true});addEventListener("touchmove",drag,{passive:false});addEventListener("touchend",end,{passive:true})
  return()=>{cancelAnimationFrame(frame);removeEventListener("wheel",wheel);removeEventListener("keydown",key);removeEventListener("touchstart",start);removeEventListener("touchmove",drag);removeEventListener("touchend",end)}
 },[motion,reduced])
 const isStatic=!motion||reduced
 return <section ref={root} data-scene={scene} className={`scroll-film film-showcase ${isStatic?"film-static":""}`} aria-label="포트폴리오 인트로">
 <div className="film-stage">
 <div className="film-controls"><Link href="#explore-work" className="sr-only focus:not-sr-only focus:inline-flex focus:min-h-11 focus:items-center">본문 바로가기</Link><button type="button" disabled={reduced} onClick={()=>setMotion(!motion)} aria-pressed={isStatic} className="min-h-11 rounded-full border border-current/25 px-4 text-xs">{reduced?"동작 줄이기 적용됨":motion?"모션 끄기":"모션 켜기"}</button></div>
 <div className="film-scene film-first"><div className="system-plane" aria-hidden="true"><i/><i/><i/><span>C#</span><span>.NET</span><span>SQL</span></div><div className="film-copy"><p className="film-kicker">ENGINEERING</p><h1 className="film-personal-copy">복잡한 업무를 이해하고,<br/><span>구조적으로 풀어내기 위해<br/>노력합니다.</span></h1><p className="film-description">ASP.NET · MS SQL Server<br/>8년 6개월의 업무 시스템 개발 경험.</p></div></div>
 {showcases.map((item,index)=><div key={item.slug} aria-hidden={!isStatic&&scene!==index+1} className={`showcase-panel ${scene===index+1?"is-active":""}`}>
 <div className="showcase-copy"><p className="film-kicker">EXPLORATION · {String(index+1).padStart(2,"0")} / {String(showcases.length).padStart(2,"0")}</p><h2>실무 경험을 바탕으로<br/><span>새로운 기술을<br/>탐색하고 시도합니다.</span></h2><div className="showcase-project"><h3>{item.name}</h3><p>{item.kind}</p></div></div>
 <div className={`showcase-visual visual-${item.slug}`}><span className="showcase-word" aria-hidden="true">EXPLORE</span>
 {item.src?<div className="showcase-screen"><Image src={item.src} alt={item.alt} width={1400} height={900} sizes="(max-width:640px) 90vw,60vw" className="showcase-capture" priority={index===0}/></div>:<div className="showcase-diagram"><span>사용자 행동</span><i/><span>API · SQL 실행 흐름</span><i/><span>의존성 그래프</span><p>ImpactSuite 설계 흐름</p></div>}
 </div></div>)}
 <div className="film-progress" aria-hidden="true"><i/></div>
 </div></section>
}
