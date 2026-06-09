"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function GranulesOfGrief() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row-reverse overflow-hidden lg:overflow-visible mt-10 sm:mt-20">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col gap-6 justify-center max-w-2xl lg:ml-auto">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-primary">
            Granules of Grief Podcast
          </h2>
          <p className="text-base leading-[1.55] text-muted-foreground tracking-widest animate-in fade-in slide-in-from-left-8 duration-1000">
            Following the loss of my grandmother and last guardian in 2019—a rupture that felt, then, beyond comprehension—I launched Granules of Grief with Refiloe. Now archived, this limited-series podcast created space for others navigating loss to sit with their experiences of bereavement-related grief, and for listeners to find resonance in open, raw, and at times humorous conversations with people from different parts of the world.
          </p>
          <Link href="https://youtube.com/playlist?list=PLfs2NHMZSv4oD5vwScw6Fjn8kqadds2G1&si=gja4l4PpjA1hSjus" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="flex items-center gap-2 text-sm w-fit">
              Listen to Granules of Grief <ArrowRightIcon size={16} />
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute z-20 bottom-10 left-20 lg:bottom-20 lg:left-[5%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
        <img
          src="/images/granules-of-GRIEF.png"
          alt="Granules of Grief Podcast"
          className="h-full w-full object-cover contrast-125 grayscale shadow-lg sm:shadow-2xl border-[12px] border-white"
        />
      </div>

    </section>
  );
}