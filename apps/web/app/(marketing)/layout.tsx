import { Navbar } from "@workspace/ui/components/marketing-general/navbars/navbar"
import React from "react"
import Link from "next/link"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar LinkComponent={Link} />
      {children}
    </div>
  )
}
