
import { experiences } from "@/lib/experienceTimeline"

export function ExperienceContent({ embedded = false }: { embedded?: boolean }) { const Title = embedded ? "h2" : "h1";
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Experience</p>
          <Title className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            8년 6개월의 업무 시스템 경험
          </Title>
        </div>
        <div className="max-w-[36rem]">
          <p className="text-[1.05rem] leading-8 text-textSecondary">
            
            대신 맡았던 문제의 범위, 역할, 기술적 판단과 사용 기술을 중심으로 정리했습니다.
          </p>
        </div>
      </header>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {experiences.slice(2).map((item) => (
          <article key={item.period + item.title} className="grid gap-5 py-8 lg:grid-cols-[150px_1fr] lg:gap-10">
            <div>
              <p className="font-mono text-xs text-primarySoft">{item.period}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-textMuted">{item.role}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-textPrimary">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-textSecondary">{item.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm text-textSecondary">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primarySoft" aria-hidden="true">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-[11px] text-textMuted">{item.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
