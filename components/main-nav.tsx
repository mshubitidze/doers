"use client";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function MainNav() {
  const pathname = usePathname();
  const t = useTranslations("Header");

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="#home"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          {t("menu.home")}
        </Link>
        <Link
          href="#about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/#about")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {t("menu.about")}
        </Link>
        <Link
          href="#team"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/#team")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {t("menu.team")}
        </Link>
        <Link
          href="#registration"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/#registration")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {t("menu.registration")}
        </Link>
      </nav>
    </div>
  );
}
