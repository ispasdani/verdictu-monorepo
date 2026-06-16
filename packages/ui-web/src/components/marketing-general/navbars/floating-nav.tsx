"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@workspace/ui-shared/components/logo";
import { Button } from "@workspace/ui-shared/components/button";

export const FloatingNav = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`shadow-aceternity fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-[calc(80rem-4rem)] items-center justify-between bg-white/80 px-2 py-2 backdrop-blur-sm transition-transform duration-300 ease-out md:flex xl:rounded-2xl dark:bg-neutral-900/80 dark:shadow-[0px_2px_0px_0px_var(--color-neutral-800),0px_-2px_0px_0px_var(--color-neutral-800)] ${visible ? "translate-y-[10px]" : "-translate-y-[100px]"}`}
    >
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <Link
            className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button as={Link} href="/sign-up">
          Start building
        </Button>
      </div>
    </div>
  );
};
