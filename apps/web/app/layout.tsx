import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui-shared/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui-shared/lib/utils"
import { ConvexClerkClientProvider } from "@/providers/convex-clerk-client-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="font-primary h-full bg-white">
        <ConvexClerkClientProvider
          convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL!}
          clerkPublishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
          <ThemeProvider>
            <main className="h-full bg-white antialiased">{children}</main>
          </ThemeProvider>
        </ConvexClerkClientProvider>
      </body>
    </html>
  )
}
