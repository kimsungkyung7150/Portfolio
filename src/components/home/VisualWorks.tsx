import Image from "next/image"
import Link from "next/link"
const works=[
 {title:"Routoon",label:"실제 독자 서비스 화면",src:"/projects/routoon/home.png",href:"/projects/routoon",fit:"object-cover object-top"},
 {title:"ShowRoom",label:"기준 원화 · 방향별 결과는 상세에서",src:"/projects/showroom/fullbody-reference.png",href:"/projects/showroom",fit:"object-contain"},
 {title:"웹 방치형 게임",label:"UI 방향 시안",src:"/projects/idle-game/ui-concept.png",href:"/projects/idle-game",fit:"object-contain"},
 {title:"랜덤 디펜스",label:"실제 보스 전투 화면",src:"/projects/random-defense/boss-fight.png",href:"/projects/random-defense",fit:"object-contain"},
]
export function VisualWorks(){return <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs tracking-widest text-primarySoft">VISUAL INDEX</p><h2 className="mt-3 text-2xl font-semibold">만들어 온 화면과 장면들.</h2></div><Link href="/projects" className="inline-flex min-h-11 items-center text-sm text-primarySoft">개인 프로젝트 전체 ↗</Link></div><div className="grid grid-cols-2 gap-4 lg:grid-cols-[1.4fr_.8fr_1.3fr_.8fr]">{works.map(w=><Link key={w.title} href={w.href} className="group min-w-0"><div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface sm:aspect-[4/3] lg:aspect-[4/5]"><Image src={w.src} alt={w.title+" · "+w.label} fill sizes="(max-width:1024px) 50vw,400px" className={`${w.fit} transition-transform duration-500 motion-safe:group-hover:scale-[1.04]`} /></div><h3 className="mt-4 text-base font-semibold">{w.title} ↗</h3><p className="mt-1 text-xs leading-6 text-textSecondary">{w.label}</p></Link>)}</div></section>}
