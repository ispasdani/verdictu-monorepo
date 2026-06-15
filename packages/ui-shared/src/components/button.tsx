import React from "react"
import { cn } from "../lib/utils"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "brand"
  className?: string
  as?: React.ElementType
  href?: string
  target?: string
  rel?: string
} & Omit<React.HTMLAttributes<HTMLElement>, "color">

export const Button = ({
  children,
  variant = "primary",
  className,
  as,
  ...props
}: ButtonProps) => {
  const Component = as || "button"

  return (
    <Component
      {...props}
      className={cn(
        // Base structure & smooth transitions
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-2 text-center text-sm font-medium transition-all duration-200 sm:text-base",

        // The Reversed Hover Effect: Starts normal, shifts and gains a sharp shadow on hover
        "translate-x-0 translate-y-0 [box-shadow:0px_0px_rgb(82_82_82)] hover:-translate-x-[4px] hover:-translate-y-[4px] hover:[box-shadow:4px_4px_0px_rgb(82_82_82)] active:translate-x-0 active:translate-y-0 active:[box-shadow:0px_0px_rgb(82_82_82)]",

        // Variants (Color styling)
        variant === "primary"
          ? "bg-charcoal-900 border-charcoal-900 border text-black dark:border-white dark:bg-white dark:text-black"
          : variant === "brand"
            ? "bg-brand border-brand border text-white"
            : "border-divide border bg-white text-black dark:border-neutral-700 dark:bg-neutral-950 dark:text-white",

        className
      )}
    >
      {children}
    </Component>
  )
}
