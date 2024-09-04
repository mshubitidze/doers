import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "./language-toggle";

export function SiteHeader() {
  return (
    <header
      id="home"
      className="sticky top-0 z-50 w-full border-border/40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div>{null}</div>
          <nav className="flex items-center gap-1">
            <ModeToggle />
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
