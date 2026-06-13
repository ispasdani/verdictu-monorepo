import { Container } from "../container.js"
import { ElementType } from "react"

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
      <div>test</div>
    </Container>
  )
}
