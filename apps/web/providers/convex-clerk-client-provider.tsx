"use client"

import { ReactNode, useMemo } from "react"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ClerkProvider, useAuth } from "@clerk/nextjs"

export function ConvexClerkClientProvider({
  children,
  convexUrl,
  clerkPublishableKey,
}: {
  children: ReactNode
  convexUrl: string
  clerkPublishableKey: string
}) {
  const convex = useMemo(() => new ConvexReactClient(convexUrl), [convexUrl])

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
