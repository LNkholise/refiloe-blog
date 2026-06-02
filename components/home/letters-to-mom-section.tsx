"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function LettersToMomSection() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row-reverse overflow-hidden lg:overflow-visible mt-10 sm:mt-20">
      <div className="relative z-10 flex w-full lg:w-[75%] h-[60vh] lg:h-screen flex-col bg-[#D8CFC4] text-white p-8 lg:p-20 overflow-hidden">
        <div className="relative flex-1 flex flex-col gap-6 justify-center max-w-2xl lg:ml-auto">
          <p className="text-sm leading-[1.4] font-light text-primary tracking-widest text-muted animate-in fade-in slide-in-from-left-8 duration-1000">
            On the twenty-fifth anniversary of my mother's passing, I curated Dear 'M'e: Letters to Mom, a collection honoring mothers who are no longer physically here, from and for those without their mothers on Mother's Day. 
            The featured writers, from Colombia, India, South Africa, and the United States, share their individual pain. 
            Yet collectively, all their narratives are tied together by stubborn growth, grace, and gratitude. 
         </p>
         <Link href="/blog/dear-mme-letters-to-mom-collection" >
          <Button variant="default" className="flex items-center gap-2 text-sm w-fit">
            Read Letters From Mom <ArrowRightIcon size={16} />
          </Button>
         </Link>
        </div>
      </div>
      
      <div className="absolute z-20 bottom-25 left-10 lg:bottom-20 lg:left-[5%] lg:right-auto w-[60%] lg:w-[35%] h-[30vh] lg:h-[80%] animate-in fade-in duration-1000 delay-300">
        <img
          src="https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Portrait"
          className="h-full w-full object-cover contrast-125 grayscale shadow-2xl border-[12px] border-white"
        />
      </div>

    </section>
  );
}
