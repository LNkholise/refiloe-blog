"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row overflow-hidden lg:overflow-visible">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col justify-center max-w-2xl">
          <h1 className="text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary/50 mt-12 lg:mt-0 mb-8">
            <span className="block font-serif italic font-light tracking-normal ml-[-4px]">Grief</span>
            <span className="block font-black uppercase">Literacy</span>
          </h1>
          <p className="text-sm leading-[1.4] font-light text-primary tracking-widest text-muted animate-in fade-in slide-in-from-left-8 duration-1000">
            Grief is not just sadness. It is the reorganization of lives.
            When death visited and revisited me, it revealed to me a need many don't recognize until grief arrives. 
            I work in that largely unnamed space, where clarity of mind feels impossible, and yet decisions must be made, words must be found, and life must make an effort to continue.
             <br /> <br /> 
            Palethabi is my end-of-life and legacy consulting practice, offering culturally grounded, non-clinical support to individuals and families across Lesotho, South Africa, and the diaspora — before death, through funeral planning, and in the months beyond.
            I previously hosted Granules of Grief with Refiloe, a now-archived podcast exploring stories of grief. 
            More initiatives coming soon.
         </p>
        </div>
      </div>

      <div className="relative z-0 flex w-full lg:w-[25%] bg-background min-h-[10vh] lg:min-h-screen border-l border-muted/20">
      </div>

      <div className="absolute z-20 bottom-40 right-10 lg:bottom-20 lg:left-[60%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
        <img
          src="/images/bio.png"
          alt="Portrait"
          className="h-full w-full object-cover contrast-125 shadow-2xl border-[12px] border-white"
        />
      </div>

    </section>
  );
}