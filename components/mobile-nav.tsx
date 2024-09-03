"use client";

import * as React from "react";
import type { LinkProps } from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export function MobileNav() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <nav className="flex flex-col gap-4 text-sm lg:gap-6 mt-10">
          <MobileLink
            href="#hero"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60",
            )}
          >
            {t("menu.home")}
          </MobileLink>
          <MobileLink
            href="#about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/#about")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {t("menu.about")}
          </MobileLink>
          <MobileLink
            href="#team"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/#team")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {t("menu.team")}
          </MobileLink>
          <MobileLink
            href="#registration"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/#registration")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {t("menu.registration")}
          </MobileLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  locale,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
