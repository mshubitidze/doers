import GridPattern from "@/components/grid-pattern";
import { InView } from "@/components/in-view";
import { MotionSection } from "@/lib/framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function AboutTeamSection() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] hidden",
        )}
      />
      <GridPattern
        width={35}
        height={35}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] md:hidden",
        )}
      />
      <div className="flex flex-col gap-40 mt-20 mb-40 container mx-auto max-w-5xl">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
          variants={defaultVariants}
          transition={{
            duration: 0.3,
          }}
        >
          <MotionSection
            id="about"
            className="flex flex-col gap-14"
            variants={defaultVariants}
            transition={{
              duration: 0.7,
            }}
          >
            <h2 className="text-center text-5xl font-bold">
              {t("about.title")}
            </h2>
            <p className="text-center text-2xl">{t("about.description")}</p>
          </MotionSection>
        </InView>
        <InView
          viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
          variants={defaultVariants}
        >
          <MotionSection
            id="team-collaboration"
            className="flex flex-col gap-14 scroll-m-20"
            variants={defaultVariants}
          >
            <h2 className="text-center text-5xl font-bold">
              {t("teamCollaboration.title")}
            </h2>
            <p className="text-center text-2xl">
              {t("teamCollaboration.description")}
            </p>
          </MotionSection>
        </InView>
      </div>
    </div>
  );
}
