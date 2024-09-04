"use client";
import React, { useEffect, useState } from "react";
import { TransitionPanel } from "@/components/transition-panel";
import useMeasure from "react-use-measure";
import { Button } from "./ui/button";

type Feature = {
  title: string;
  description: string;
};

export function TransitionPanelSection({ features }: { features: Feature[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= features.length) setActiveIndex(features.length - 1);
  }, [activeIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 364 : -364,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 364 : -364,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    }),
  };

  return (
    <div className="flex flex-col gap-10">
      <TransitionPanel
        activeIndex={activeIndex}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? 364 : -364,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : "auto",
            position: "initial",
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : "auto",
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 364 : -364,
            opacity: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }),
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            ref={ref}
            className="flex flex-col gap-14 scroll-m-20"
          >
            <h3 className="text-center text-5xl font-bold">{feature.title}</h3>
            <p className="text-center text-3xl">{feature.description}</p>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-between p-4">
        {activeIndex > 0 ? (
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleSetActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
        ) : (
          <div />
        )}
        {activeIndex === features.length - 1 ? null : (
          <Button
            variant="outline"
            onClick={() =>
              activeIndex === features.length - 1
                ? null
                : handleSetActiveIndex(activeIndex + 1)
            }
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
