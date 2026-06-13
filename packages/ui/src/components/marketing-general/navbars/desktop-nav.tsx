import { ElementType } from "react"

const DesktopNav = ({
  items,
  LinkComponent,
}: {
  items: { title: string; href: string }[]
  LinkComponent: ElementType<{ href: string; className?: string; children?: React.ReactNode }>
}) => {
  return (
    <div className="hidden items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <LinkComponent
            className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </LinkComponent>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button as={LinkComponent} href="/sign-up">
          Start building
        </Button>
      </div>
    </div>
  )
}
