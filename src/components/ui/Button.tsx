import * as React from "react"
import { cn } from "@/lib/utils"

import Link from "next/link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-full text-small font-h3 transition-all duration-durationFast ease-easing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primarySoft disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-textPrimary px-lg py-sm hover:shadow-glow hover:-translate-y-[1px]": variant === "primary",
        "bg-surface border border-border text-textPrimary px-lg py-sm hover:bg-surfaceElevated": variant === "secondary",
        "border border-border bg-transparent text-textPrimary px-lg py-sm hover:bg-surfaceElevated": variant === "outline",
        "hover:bg-surfaceElevated hover:text-textPrimary px-md py-xs": variant === "ghost",
      },
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes} {...(props as any)}>
          {props.children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
