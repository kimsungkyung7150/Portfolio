"use client"

import { useId, useRef, useState, type MouseEvent, type ReactNode } from "react"

type ImageLightboxProps = {
  src: string
  alt: string
  caption: string
  children: ReactNode
  className?: string
  triggerLabel?: string
}

export function ImageLightbox({ src, alt, caption, children, className, triggerLabel }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const titleId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [fullSize, setFullSize] = useState(false)

  function openImage(event: MouseEvent<HTMLAnchorElement>) {
    const dialog = dialogRef.current
    if (!dialog?.showModal || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }

    event.preventDefault()
    dialog.showModal()
    setIsOpen(true)
  }

  return (
    <>
      <a ref={triggerRef} href={src} onClick={openImage} aria-haspopup="dialog" aria-label={triggerLabel} className={className}>
        {children}
      </a>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        data-image-lightbox
        className={`fixed inset-0 m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-backgroundSoft p-0 text-textPrimary shadow-2xl backdrop:bg-black/80 open:flex ${fullSize ? "h-[calc(100dvh-1.5rem)]" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        onClose={() => {
          setIsOpen(false)
          setFullSize(false)
          triggerRef.current?.focus({ preventScroll: true })
        }}
      >
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 border-b border-border bg-surface px-4 py-2">
          <h2 id={titleId} className="py-1 text-sm font-semibold">{caption}</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-pressed={fullSize}
              className="min-h-11 rounded-lg border border-border px-3 text-sm font-semibold text-primarySoft hover:bg-surfaceElevated aria-pressed:border-primarySoft aria-pressed:bg-primary/15"
              onClick={() => setFullSize((value) => !value)}
            >
              원본 크기
            </button>
            <button
              type="button"
              autoFocus
              className="min-h-11 rounded-lg border border-border px-3 text-sm font-semibold hover:bg-surfaceElevated"
              onClick={() => dialogRef.current?.close()}
            >
              닫기
            </button>
          </div>
        </div>
        <div role="region" aria-label="이미지 보기" tabIndex={fullSize ? 0 : undefined} className="min-h-0 flex-1 overflow-auto overscroll-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primarySoft">
          {isOpen && (
            // eslint-disable-next-line @next/next/no-img-element -- The lightbox displays the original source at its natural size.
            <img src={src} alt={alt} className={fullSize ? "mx-auto block h-auto max-w-none" : "mx-auto block h-auto max-h-[calc(100dvh-8rem)] max-w-full sm:max-h-[calc(100dvh-6rem)]"} />
          )}
        </div>
      </dialog>
    </>
  )
}
