import Link from "next/link"
import { Button } from "@workspace/ui-shared/components/button"
import { Text } from "@workspace/ui-shared/components/text"
import { Logo } from "@workspace/ui-shared/components/logo"


export const DesktopNav = ({
  items,
}: {
  items: { title: string; href: string }[]
}) => {
  return (
    <div className="hidden w-full items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <Link href={item.href} key={item.title} className="group">
            <Text size="md" color="muted" weight="light" hoverColor="default">
              {item.title}
            </Text>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button as={Link} href="/sign-up">Try it now</Button>
      </div>
    </div>
  )
}
