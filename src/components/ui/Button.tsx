import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, ...props }, ref) => {
    const classes = cn(
      "inline-flex min-h-11 items-center justify-center rounded-lg px-lg py-sm text-small font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primarySoft focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-white hover:bg-primary/90 hover:shadow-glow": variant === "primary",
        "border border-borderStrong bg-surface text-textPrimary hover:border-primarySoft/50 hover:bg-surfaceElevated":
          variant === "secondary",
        "border border-borderStrong bg-transparent text-textPrimary hover:border-primarySoft/50 hover:bg-surface":
          variant === "outline",
        "px-md text-textSecondary hover:bg-surface hover:text-textPrimary": variant === "ghost",
      },
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {props.children}
        </Link>
      )
    }

    return <button ref={ref} className={classes} {...props} />
  }
)
Button.displayName = "Button"

export { Button }
