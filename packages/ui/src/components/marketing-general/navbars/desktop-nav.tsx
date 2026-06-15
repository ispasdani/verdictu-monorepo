import { ElementType } from "react"
import { Button } from "../../button"
import { Logo } from "../../logo"
import { Text } from "../../text"

export const DesktopNav = ({
  items,
  LinkComponent,
}: {
  items: { title: string; href: string }[]
  LinkComponent: ElementType<{
    href: string
    className?: string
    children?: React.ReactNode
  }>
}) => {
  return (
    <div className="hidden items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <LinkComponent href={item.href} key={item.title} className="group">
            <Text size="md" color="muted" weight="light" hoverColor="default">
              {item.title}
            </Text>
          </LinkComponent>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button>Start building</Button>
      </div>
    </div>
  )
}
