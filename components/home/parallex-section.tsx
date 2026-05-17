"use client";
import React from "react";
import { MorphingText } from "../ui/morphing-text";

const texts = [
  "This site is a home for the work born of that early inclination",
  "Traveling from the page to wherever the conversations take us",
  "From Lesotho to the US, and around the world.",
]

const ParallaxSection: React.FC = () => {
  return (
    <section className="relative w-full bg-background py-20 lg:py-32 px-8 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-primary leading-none">
            My Background
          </h2>
        </div>
        <div className="lg:w-1/4">
          <p className="text-sm leading-relaxed text-muted-foreground tracking-widest font-sans">
            Questions have always plagued me. Whys. Wheres. Whats. 
            This site is an answer to a call that followed me from long afternoons of reading, writing, and daydreaming on the red stoep of my parents’ house in Maseru, Lesotho. 
          </p>
        </div>
        <div className="lg:w-1/4">
          <p className="text-sm leading-relaxed text-muted-foreground tracking-widest font-sans">
            I am Refiloe Letokoto — writer, speaker, storyteller, gender equality advocate, and grief scholar. 
            Thank you for walking alongside me in this unfolding story, thousands of miles away from where I started.

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