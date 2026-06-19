import React, { useMemo } from "react"
import { cn } from "@workspace/ui-shared/lib/utils"

export type TextShimmerProps = {
  children: string
  as?: React.ElementType
  className?: string
  duration?: number
  spread?: number
}

function TextShimmerCore({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const dynamicSpread = useMemo(
    () => children.length * spread,
    [children, spread]
  )

  const totalDuration = duration + 2 // 2s repeatDelay
  const activePercent = Math.round((duration / totalDuration) * 100)

  const keyframes = `
    @keyframes shimmer-bg {
      0% { background-position: 100% center; }
      ${activePercent}% { background-position: 0% center; }
      100% { background-position: 0% center; }
    }
  `

  return (
    <>
      <style>{keyframes}</style>
      <Component
        className={cn(
          "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
          "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
          "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
          "dark:[--base-color:#fff] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
          className
        )}
        style={
          {
            "--spread": `${dynamicSpread}px`,
            backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
            animation: `shimmer-bg ${totalDuration}s linear infinite`,
          } as React.CSSProperties
        }
      >
        {children}
      </Component>
    </>
  )
}

export const ShimmerText = React.memo(TextShimmerCore)
