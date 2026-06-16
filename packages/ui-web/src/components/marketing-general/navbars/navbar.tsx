import { Container } from "@workspace/ui-shared/components/marketing-general/container"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { items } from "./data"
import { FloatingNav } from "./floating-nav"

export const Navbar = () => {
  return (
    <Container as="nav">
      <DesktopNav items={items} />
      <MobileNav items={items} />
      <FloatingNav items={items} />
    </Container>
  )
}
