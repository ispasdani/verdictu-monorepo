import { Container } from "@workspace/ui-shared/components/marketing-general/container"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { items } from "./data"

export const Navbar = () => {
  return (
    <Container as="nav">
      <DesktopNav items={items} />
      
    </Container>
  )
}
