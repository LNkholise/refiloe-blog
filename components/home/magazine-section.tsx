"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row overflow-hidden lg:overflow-visible">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col justify-center max-w-2xl">
          <p className="text-sm leading-[1.4] font-light text-primary tracking-widest text-muted animate-in fade-in slide-in-from-left-8 duration-1000">
            Across fiction and nonfiction writing and multimedia projects, I explore and invite others to explore life with me. Many of the works gathered here reflect that ongoing exploration.
             <br /> <br /> 
            One Saturday morning, my family, eight suitcases, one carry-on, and the kind of hope that mocks logic left the Kingdom of Lesotho for the United States. Four new identities awaited — preferred and less-than-preferred ways of being seen and read. And so, old and new questions arose. What are the ingredients of the grit, grief, and growth born of decisions made about leaving, staying, returning, and living well with what is? More on that soon.
         </p>
        </div>
      </div>

      <div className="relative z-0 flex w-full lg:w-[25%] bg-background min-h-[10vh] lg:min-h-screen border-l border-muted/20">
      </div>

      <div className="absolute z-20 bottom-40 right-10 lg:bottom-20 lg:left-[60%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
       {/* 
        <img
          src="/images/bio.png"
          alt="Portrait"
          className="h-full w-full object-cover contrast-125 shadow-2xl border-[12px] border-white"
        />
       */}
      </div>

    </section>
  );
}