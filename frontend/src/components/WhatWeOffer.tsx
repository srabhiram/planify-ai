"use client";

import { Lightbulb, Calendar, PenTool } from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { MagicCard } from "./ui/magic-card";

const items = [
  {
    icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
    title: "AI-Powered Planning",
    desc: "Generate ideas, outlines, and structured plans instantly.",
  },
  {
    icon: <Calendar className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Smart Scheduling",
    desc: "Auto-schedule tasks and content using AI suggestions.",
  },
  {
    icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Rapid Content Drafts",
    desc: "Create engaging posts and content with one click.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full h-dvh">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
              <Card key={i} className="w-full max-w-sm border-none p-0 shadow-none">
                <MagicCard className="p-0" gradientColor="#262626">
            <CardHeader className="flex flex-col items-center p-4">
                <CardTitle className="flex flex-col items-center gap-4 text-xl">
                {item.icon}
                {item.title}
                </CardTitle>
            <CardContent className="text-zinc-400">
              {item.desc}
            </CardContent>
            </CardHeader>
            </MagicCard>
          </Card>
          ))}
         
        </div>
      </div>
    </section>
  );
}
