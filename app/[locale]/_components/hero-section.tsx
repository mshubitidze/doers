import Particles from "@/components/particles";
import Ripple from "@/components/ripple";
import { TextEffect } from "@/components/text-effect";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export function HeroSection() {
  const t = useTranslations("HomePage");
  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-3.5rem)] overflow-hidden"
    >
      <Ripple mainCircleOpacity={0.4} />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
        color="#22d3ee"
      />
      <div className="container mx-auto flex flex-col items-center justify-center h-full -mt-16 gap-y-10">
        <TextEffect
          per="word"
          as="h3"
          preset="slide"
          className="sm:text-7xl font-bold z-10 text-4xl text-center"
        >
          {t("hero.title")}
        </TextEffect>
        <Link className={cn(buttonVariants(), "z-10")} href="#about">
          {t("hero.buttonLabel")}
        </Link>
      </div>
    </section>
  );
}
