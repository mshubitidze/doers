"use client";

import { Badge } from "@/components/ui/badge";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InView } from "@/components/in-view";
import { useTranslations } from "next-intl";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: Record<"github" | "linkedin" | "twitter", string>;
};

const motionVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export function TeamSection() {
  const t = useTranslations("HomePage");

  const teamMembers = ["1", "2", "3", "4", "5"].map((id) => {
    return {
      id: t(`meetOurTeam.members.${id}.id`),
      name: t(`meetOurTeam.members.${id}.name`),
      role: t(`meetOurTeam.members.${id}.role`),
      image: t(`meetOurTeam.members.${id}.image`),
      bio: t(`meetOurTeam.members.${id}.bio`),
      social: {
        github: t(`meetOurTeam.members.${id}.social.github`),
        linkedin: t(`meetOurTeam.members.${id}.social.linkedin`),
        twitter: t(`meetOurTeam.members.${id}.social.twitter`),
      },
    };
  });

  const [hoveredMemberId, setHoveredMemberId] = useState<
    TeamMember["id"] | null
  >(null);

  return (
    <section id="team" className="max-w-7xl mx-auto container mb-20">
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.09,
            },
          },
        }}
        className="flex flex-col gap-14"
      >
        <h2 className="text-5xl font-bold text-center">
          {t("meetOurTeam.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 relative">
          <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                onHoverStart={() => setHoveredMemberId(member.id)}
                onHoverEnd={() => setHoveredMemberId(null)}
                onTap={() => setHoveredMemberId(member.id)}
                className={cn(
                  "rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md mx-auto aspect-square bg-cover flex flex-col items-center justify-end relative p-2 lg:col-span-2 group",
                  {
                    "lg:col-start-2": idx === 3,
                    "lg:col-start-4": idx === 4,
                  },
                )}
              >
                <Image
                  src={member.image}
                  alt={`${member.name}'s avatar`}
                  width={400}
                  height={400}
                  className="absolute inset-0 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <AnimatePresence>
                  {hoveredMemberId === member.id && (
                    <motion.div
                      className="p-4 flex flex-col justify-end bg-background/50 backdrop-blur-md rounded-2xl w-full gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.h3
                        className="text-2xl font-bold text-accent-foreground"
                        variants={motionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: 0.075 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.div
                        variants={motionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: 0.15 }}
                      >
                        <Badge className="text-base">{member.role}</Badge>
                      </motion.div>
                      {/* <motion.p */}
                      {/*   className="text-foreground" */}
                      {/*   variants={motionVariants} */}
                      {/*   initial="hidden" */}
                      {/*   animate="visible" */}
                      {/*   exit="hidden" */}
                      {/*   transition={{ delay: 0.225 }} */}
                      {/* > */}
                      {/*   {member.bio} */}
                      {/* </motion.p> */}
                      <motion.div
                        variants={motionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: 0.3 }}
                        className="mt-4"
                      >
                        <div className="flex space-x-4">
                          {Object.entries(member.social).map(
                            ([platform, url]) => {
                              const Icon =
                                platform === "github"
                                  ? GitHubLogoIcon
                                  : platform === "linkedin"
                                    ? LinkedInLogoIcon
                                    : TwitterLogoIcon;
                              return (
                                <motion.a
                                  key={platform}
                                  href={url}
                                  className="hover:text-sky-500 transition-colors"
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                  <Icon className="size-6" />
                                </motion.a>
                              );
                            },
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </MotionConfig>
        </div>
      </InView>
    </section>
  );
}
