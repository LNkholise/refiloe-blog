"use client";
import React from "react";
import { ArrowRightIcon, LinkedinLogoIcon, FacebookLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection({
    navbar,
}: Readonly<{
  navbar: React.ReactNode
}>
) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full lg:overflow-hidden bg-background font-sans">
      <div className="relative z-20 flex w-full lg:w-[30%] flex-col justify-between p-8 lg:p-12 gap-12 lg:gap-0 order-1">
        <div className="flex items-center gap-2 font-bold tracking-tighter">
          {navbar}
        </div>

        <div className="relative mx-8">
          <h1 className="w-full lg:w-[140%] text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary mt-12 lg:mt-0">
            <span className="block font-serif italic font-light tracking-normal ml-[-4px]">Refiloe</span>
            <span className="block font-black uppercase">Lekotoko</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
        </div>
      </div>

      <div className="relative h-[50vh] lg:h-auto w-full lg:flex-1 bg-gray-100 order-2">
        <img 
          src="/images/hero.jpg" 
          alt="Portrait" 
          className="h-full w-full object-cover grayscale contrast-125"
        />
      </div>

      <div className="relative z-10 flex w-full lg:w-[35%] flex-col justify-between bg-[#D8CFC4] p-8 lg:p-12 text-white order-3 gap-8 lg:gap-0">
        <div className="gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary font-sans">Author • Essayist</p>
        </div>
        
        <div className="max-w-xs">
          <p className="mb-8 lg:mb-10 text-lg lg:text-2xl font-serif italic leading-relaxed text-primary">
            Explorer of the Extraordinary, the Everyday, and Everything In Between.
          </p>
          <Button variant="default" className="flex items-center gap-2 text-sm w-fit">
            Read More <ArrowRightIcon size={16} />
          </Button>
        </div>
        
        <div className="flex flex-col gap-8 lg:gap-0">
          <div className="flex items-center gap-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon size={15} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookLogoIcon size={15} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X"
            >
              <XLogoIcon size={15} weight="fill" className="text-primary/80 hover:text-primary transition-colors" />
            </a>
          </div>

        </div>
      </div>
      
    </div>
  );
};