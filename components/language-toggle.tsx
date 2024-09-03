"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const destination = locale === "ka" ? "en" : "ka";
  const pathname = usePathname();

  return (
    <div>
      <Link
        className={cn(buttonVariants({ variant: "ghost" }))}
        href={pathname}
        locale={destination}
      >
        <GlobeIcon className="w-4 h-4 mr-1" />
        {destination === "ka" ? "ქარ" : "EN"}
      </Link>
    </div>
  );
}
