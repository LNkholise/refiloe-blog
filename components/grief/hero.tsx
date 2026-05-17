"use client";
import React from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function HeroSection({
    navbar,
}: Readonly<{
  navbar: React.ReactNode
}>) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full lg:overflow-hidden bg-background font-sans">
      
      <div className="relative flex w-full lg:w-1/3 flex-col justify-between bg-[#D8CFC4] p-8 md:p-12 lg:p-16 text-white order-1 gap-12 lg:gap-0 shrink-0">
        
        {/* Navbar Slot */}
        <div className="relative z-[60] flex items-center gap-2 font-bold tracking-tighter text-primary">
          {navbar}
        </div>

        <div className="w-full flex flex-col justify-center my-auto max-w-xl mx-0 sm:mx-7">
          <h1 className="w-full text-5xl lg:text-[6rem] leading-[0.85] tracking-tighter text-primary">
            <span className="block font-serif italic font-light tracking-normal ml-[-2px]">Grief</span>
            <span className="block font-black uppercase tracking-tight">Literacy</span>
          </h1>
          <p className="my-8 lg:mb-10 text-base lg:text-lg font-serif italic leading-relaxed text-primary/90 mr-4">
            Helping people navigate the largely unnamed space where grief and critical decisions collide.
          </p>
          <Button variant="default" className="flex items-center gap-2 text-sm w-fit px-6 py-5">
            View Literature <ArrowRightIcon size={16} />
          </Button>
        </div>
        
        <div className="hidden lg:block h-8"></div>
      </div>

      <div className="relative flex w-full lg:w-2/3 flex-col justify-between p-8 lg:p-12 order-2 min-h-[50vh] lg:min-h-full">
        <img 
          src="https://images.pexels.com/photos/15583002/pexels-photo-15583002.jpeg" 
          alt="Portrait" 
          className="absolute inset-0 h-full w-full object-cover contrast-125 z-0"
        />
        
        <div className="relative z-50 flex items-center h-8"></div>
        <div className="relative z-20 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest"></div>
      </div>
      
    </div>
  );
}