import { Container } from "../container"
import { DesktopNav } from "./desktop-nav"
import { ElementType } from "react"
import { items } from "./data"
import { MobileNav } from "./mobile-nav"

export const Navbar = ({
  LinkComponent,
}: {
  LinkComponent: ElementType<{
    href: string
    className?: string
    children?: React.ReactNode
  }>
}) => {
  return (
    <Container as="nav">
      <DesktopNav LinkComponent={LinkComponent} items={items} />
      <MobileNav LinkComponent={LinkComponent} items={items} />
    </Container>
  )
}
