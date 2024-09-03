"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
  active?: boolean;
};

export function SiteNav({ navItems }: { navItems?: NavItem[] }) {
  const pathName = usePathname();
  return (
    <div className="flex items-center gap-x-4 border rounded-full px-6 py-2">
      {navItems?.length
        ? navItems.map((navItem) => (
            <SiteNavItem
              key={navItem.label}
              label={navItem.label}
              href={navItem.href}
              disabled={navItem.disabled}
              active={pathName === navItem.href}
            />
          ))
        : null}
    </div>
  );
}

function SiteNavItem({ label, href, disabled, active }: NavItem) {
  const Comp = disabled ? "span" : Link;
  return (
    <Comp
      href={href}
      aria-disabled={disabled}
      className={cn(
        "text-muted-foreground",
        active && "text-primary font-semibold",
      )}
    >
      {label}
    </Comp>
  );
}
