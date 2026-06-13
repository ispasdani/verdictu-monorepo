import { Container } from "../container"
import { DesktopNav } from "./desktop-nav"
import { ElementType } from "react"
import { items } from "./data"

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
    <Container as="nav" className="">
      <DesktopNav LinkComponent={LinkComponent} items={items} />
    </Container>
  )
}
