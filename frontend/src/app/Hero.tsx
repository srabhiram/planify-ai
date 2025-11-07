"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { ShineBorder } from "@/components/ui/shine-border";
import WhatWeOffer from "@/components/WhatWeOffer";
import React from "react";

const Hero: React.FC = () => {
  const texts = ["Plan", "create", "Schedule"];

  return (
    <main className="container">
      <div className="relative h-dvh flex items-center justify-center z-10">
        <section className="flex flex-col items-center justify-center text-center">
          
          {/* Headline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div className="text-3xl md:text-7xl">
              <ContainerTextFlip words={texts} interval={1600} />
            </div>
            <p className="text-2xl md:text-7xl">content effortlessly.</p>
          </div>

          {/* Button */}
          <button className="relative mt-6 p-3 md:p-4 text-lg md:text-2xl font-semibold rounded-xl bg-zinc-950">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            Get Started
          </button>
        </section>
      </div>
      <WhatWeOffer/>
    </main>
  );
};

export default Hero;
