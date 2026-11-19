import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "연락 안내" }

const contactEmail = "f8989d@naver.com"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl font-semibold">채용·면접 문의</h1>
      <p className="mt-6 text-base leading-8 text-textSecondary">채용이나 포트폴리오에 관해 궁금한 점이 있으면 이메일로 연락해 주세요.</p>
      <a
        href={`mailto:${contactEmail}`}
        aria-label={`${contactEmail}로 문의 메일 쓰기`}
        className="mt-6 inline-flex min-h-11 max-w-full items-center break-all rounded-lg bg-primarySoft px-4 text-sm font-semibold text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primarySoft"
      >
        {contactEmail}
      </a>
      <div className="mt-8 flex flex-wrap gap-5">
        <Link href="/experience" className="inline-flex min-h-11 items-center text-primarySoft">경력 보기</Link>
        <Link href="/projects/haru" className="inline-flex min-h-11 items-center text-primarySoft">대표 사례 · 하루</Link>
        <Link href="/" className="inline-flex min-h-11 items-center text-primarySoft">처음으로</Link>
      </div>
    </section>
  )
}
