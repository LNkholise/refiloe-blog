"use client";
import React from "react";
import Link from "next/link";
import { MorphingText } from "../ui/morphing-text";
import { Highlighter } from '@/components/ui/highlighter';

const texts = [
  "Thank you for walking alongside me in this story still unfolding,",
  "thousands of miles away from where it began.",
]

const ParallaxSection: React.FC = () => {
  return (
    <section id="content-section" className="relative w-full bg-background py-20 lg:py-32 px-8 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-primary leading-none">
            What I Know So Far
          </h2>
        </div>
        <div className="lg:w-1/4">
          <p className="text-base leading-relaxed text-muted-foreground tracking-widest font-sans font-medium">
            Questions have always tugged at the hem of whatever cloak I wear. The human whys and hows. 
            This site is an answer to that persistent call, one that followed me from long afternoons of 
            wondering, reading, and writing on the red stoep of my parents&apos; house in Maseru, Lesotho.
          </p>
        </div>
        <div className="lg:w-1/4">
          <p className="text-base leading-relaxed text-muted-foreground tracking-widest font-sans font-medium">
            In obedience, I write fiction and{" "}
            <Highlighter>
              <Link href="/blog" className="hover:italic transition-all duration-300">
                non-fiction
              </Link>
            </Highlighter>
            . Knowing my story isn&apos;t the only one that matters, I{" "}
            <Highlighter>
              <Link href="/projects" className="hover:italic transition-all duration-300">
                bear witness
              </Link>
            </Highlighter>
            {" "}to the realities and narratives of others.  
            <strong> I am Refiloe Letokoto: writer, storyteller, gender equality advocate, and{" "}
            <Highlighter>
              <Link href="/grief" className="hover:italic transition-all duration-300">
                grief scholar
              </Link>
            </Highlighter>
            .</strong>
          </p>
        </div>
      </div>

      <div 
       className="relative w-full h-[45vh] md:h-[60vh] lg:h-[75vh] overflow-hidden rounded-sm lg:rounded-none"
      >
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover transition-transform duration-500"
          style={{ 
            backgroundImage: "url('/images/about.jpg')",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0,0,0,0.3)"
          }} 
        />
        
        <div className="flex items-center justify-center mt-10 lg:mt-18 mx-4 opacity-60">
          <MorphingText texts={texts} className="text-3xl sm:text-5xl text-white" />
         </div>
      </div>

    </section>
  );
};

export default ParallaxSection;