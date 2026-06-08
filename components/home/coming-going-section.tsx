"use client";

import React from "react";

export default function ComingGoingSection() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row-reverse overflow-hidden lg:overflow-visible mt-10 sm:mt-20">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col justify-center max-w-2xl lg:ml-auto">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-primary mb-6">
            Adventures Ahead
          </h2>
          <p className="text-base leading-[1.55] text-muted-foreground tracking-widest animate-in fade-in slide-in-from-left-8 duration-1000">
            One Saturday morning, my family, eight suitcases, one carry-on, and nothing but the kind of hope that mocks logic, left the Kingdom of Lesotho for the United States. 
            Four new identities awaited, some preferred and many less-than-preferred ways of being seen and read. Old and new questions emerged: What lies beneath decisions about leaving, staying, returning, 
            and learning to live well with what is? New adventures are currently in the works, so let&apos;s{" "}
            <a 
              href="https://mailchi.mp/1a93a9da26bb/v3r48lixni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary relative"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='60%25' y='40%25' fill='%23c9a470' rx='1'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              stay in touch.
            </a>
          </p>
        </div>
      </div>
      
      <div className="absolute z-20 bottom-10 left-20 lg:bottom-20 lg:left-[5%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
        <img
          src="/images/bio.jpg"
          alt="Portrait"
          className="h-full w-full object-cover contrast-125 grayscale shadow-lg sm:shadow-2xl border-[12px] border-white"
        />
      </div>

    </section>
  );
}