"use client";

import React from "react";

interface GriefHeroProps {
  menu?: React.ReactNode;
  headingSerif: string;
  headingSans: string; 
  introText: string; 
  bgImageUrl?: string;
}

export default function GriefHero({ 
  menu, 
  headingSerif, 
  headingSans, 
  introText, 
  bgImageUrl = "https://images.unsplash.com/photo-1516980907201-943c13a8d03c?q=80&w=2000" 
}: GriefHeroProps) {
  return (
    <section className="relative w-full bg-background">
      {menu && (
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-2 font-bold tracking-tighter">
            {menu}
          </div>
        </div>
      )}
      
      <div className="px-8 md:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 gap-8">
          <div className="lg:w-1/2">
            <h1 className="w-full lg:w-[140%] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.85] tracking-tighter text-primary mt-12 lg:mt-0">
              <span className="block font-serif italic font-light tracking-normal ml-[-4px] capitalize">
                {headingSerif}
              </span>
              <span className="block font-black uppercase">
                {headingSans}
              </span>
            </h1>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 mt-4 lg:mt-0">
            <p className="text-sm leading-relaxed text-muted-foreground font-sans">
              {introText}
            </p>
          </div>

        </div>
        <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[75vh] overflow-hidden rounded-none">
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover transition-transform duration-500 grayscale contrast-125"
            style={{ 
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(0,0,0,0.2)"
            }} 
          />
        </div>
      </div>
    </section>
  );
}