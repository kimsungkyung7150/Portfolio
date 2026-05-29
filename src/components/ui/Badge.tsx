import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "info" | "success" | "warning"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-transparent px-sm py-[2px] text-small font-h3 transition-colors",
        {
          "bg-primary/10 text-primarySoft": variant === "default",
          "bg-info/10 text-info": variant === "info",
          "bg-success/10 text-success": variant === "success",
          "bg-warning/10 text-warning": variant === "warning",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
