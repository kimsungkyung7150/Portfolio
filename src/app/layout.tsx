import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const description = "8년 6개월간 C#·SQL 업무 시스템을 개발한 경험과 업무 기억 비서 하루, 웹소설 플랫폼 Routoon의 설계·구현 사례를 소개합니다."

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-pied-70.vercel.app"),
  title: {
    default: ".NET Developer | Portfolio",
    template: "%s | Portfolio",
  },
  description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: ".NET Developer | Portfolio",
    description,
    siteName: "Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const bodyClassName = [geistSans.variable, geistMono.variable, "min-h-screen antialiased"].join(" ")

  return (
    <html lang="ko" className="dark">
      <body className={bodyClassName}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
