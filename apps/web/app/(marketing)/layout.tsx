import { Navbar } from "@workspace/ui-web/components/marketing-general/navbars/navbar"
import React from "react"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
