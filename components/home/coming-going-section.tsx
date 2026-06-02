"use client";

import React from "react";

export default function ComingGoingSection() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row-reverse overflow-hidden lg:overflow-visible mt-10 sm:mt-20">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col justify-center max-w-2xl lg:ml-auto">
          <p className="text-sm leading-[1.4] font-light text-primary tracking-widest text-muted animate-in fade-in slide-in-from-left-8 duration-1000">
            One Saturday morning, my family, eight suitcases, one carry-on, and the kind of hope that mocks logic in tow, left the Kingdom of Lesotho for the United States.
            Four new identities awaited, some preferred and many less-than-preferred ways of being seen and read. Old and new questions emerged: What lies beneath the grit, grief, and growth born of decisions about leaving, staying, returning, and learning to live well with what is?
            Many of the works gathered here reflect my unyielding inclination to engage and bear witness through fiction, nonfiction, and multimedia projects, and invite others to do the same alongside me.
            <br/><br/>
            These threads will weave our journey together.
         </p>
        </div>
      </div>
      
      <div className="absolute z-20 bottom-10 left-20 lg:bottom-20 lg:left-[5%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
        <img
          src="/images/bio.jpg"
          alt="Portrait"
          className="h-full w-full object-cover contrast-125 grayscale shadow-2xl border-[12px] border-white"
        />
      </div>

    </section>
  );
}
