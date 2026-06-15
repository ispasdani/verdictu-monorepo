"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ReactNode, useMemo } from "react"

export function ConvexClientProvider({
  children,
  convexUrl,
}: {
  children: ReactNode
  convexUrl: string
}) {
  // Move this INSIDE the function
  const convex = useMemo(() => {
    if (!convexUrl) {
      console.error("ConvexClientProvider: convexUrl is missing!")
    }
    return new ConvexReactClient(convexUrl)
  }, [convexUrl])

  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}
