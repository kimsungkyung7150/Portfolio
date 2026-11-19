"use client"

import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

import { routoonReaderUrl } from "@/lib/routoon"

const statusDisplay = {
  checking: { label: "확인 중", dot: "bg-textMuted", color: "border-borderStrong bg-surface text-textSecondary" },
  online: { label: "접속 가능", dot: "bg-blue-400", color: "border-blue-400/40 bg-blue-400/10 text-blue-200" },
  offline: { label: "접속 불가", dot: "bg-red-400", color: "border-red-400/40 bg-red-400/10 text-red-200" },
  unknown: { label: "상태 확인 실패", dot: "bg-textMuted", color: "border-borderStrong bg-surface text-textSecondary" },
}

type ReaderStatus = keyof typeof statusDisplay

export function RoutoonStatusLink() {
  const [status, setStatus] = useState<ReaderStatus>("checking")

  useEffect(() => {
    const controller = new AbortController()
    let refreshTimer: number | undefined

    async function refreshStatus() {
      if (!document.hidden) {
        try {
          const response = await fetch("/api/routoon-status", {
            signal: AbortSignal.any([controller.signal, AbortSignal.timeout(6_000)]),
          })
          if (!response.ok) throw new Error("Status request failed")
          const payload: { reachable?: unknown } = await response.json()
          if (typeof payload.reachable !== "boolean") throw new Error("Invalid reader status")
          if (!controller.signal.aborted) setStatus(payload.reachable ? "online" : "offline")
        } catch {
          if (!controller.signal.aborted) setStatus("unknown")
        }
      }
      if (!controller.signal.aborted) refreshTimer = window.setTimeout(refreshStatus, 30_000)
    }

    void refreshStatus()
    return () => {
      controller.abort()
      window.clearTimeout(refreshTimer)
    }
  }, [])

  const display = statusDisplay[status]
  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      <a
        href={routoonReaderUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="routoon-reader-status"
        className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarySoft ${display.color}`}
      >
        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${display.dot}`} />
        Routoon 접속
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
      <span id="routoon-reader-status" role="status" className="text-sm text-textSecondary">
        {display.label}
      </span>
    </div>
  )
}
