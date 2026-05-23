"use client";
import React from "react";
import { ArrowRightIcon, LinkedinLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection({
    navbar,
}: Readonly<{
  navbar: React.ReactNode
}>
) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full lg:overflow-hidden bg-background font-sans">
      <div className="relative flex flex-1 flex-col justify-between p-8 lg:p-12 gap-12 lg:gap-0 order-1 min-h-[60vh] lg:min-h-full">
        <img 
          src="/images/hero.jpg" 
          alt="Portrait" 
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 z-0"
        />
        <div className="relative z-50 flex items-center gap-2 font-bold tracking-tighter">
          {navbar}
        </div>

        <div className="relative z-10 mb-60 mx-0 sm:mx-10">
          <h1 className="w-full text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary">
            <span className="block font-serif italic font-light tracking-normal ml-[-4px]">Refiloe</span>
            <span className="block font-black uppercase">Lekotoko</span>
          </h1>
        </div>

        <div className="relative z-20 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
        </div>
      </div>
      <div className="relative z-10 flex w-full lg:w-[35%] flex-col justify-between bg-[#D8CFC4] p-8 lg:p-12 text-white order-2 gap-8 lg:gap-0 shrink-0">
        <div className="gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary font-sans">Refiloe Letokoto</p>
        </div>
        
        <div className="max-w-xs">
          <p className="mb-8 lg:mb-10 text-lg lg:text-2xl font-serif italic leading-relaxed text-primary">
            Wonderer, Writer, Witness.
          </p>
          <Button variant="default" 
                  className="flex items-center gap-2 text-sm w-fit"
                  onClick={() => {
                  const targetSection = document.getElementById("content-section");
                  targetSection?.scrollIntoView({ behavior: "smooth" });
                }}
          >
            Come with Me <ArrowRightIcon size={16} />
          </Button>
        </div>
        
        <div className="flex flex-col gap-8 lg:gap-0">
          <div className="flex items-center gap-8">
            <a 
              href="https://www.linkedin.com/in/refiloe-letokoto-0759a1409" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon size={20} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/refiloeletokoto?igsh=MTJrOWNyNXh5NnJrMw%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <InstagramLogoIcon size={20} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://youtube.com/@refiloeletokoto?si=77xbUYFl2n155RrS" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X"
            >
              <YoutubeLogoIcon size={20} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
