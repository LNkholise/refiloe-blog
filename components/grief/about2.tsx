"use client";
import React, { useState } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { MorphingText } from "../ui/morphing-text";

const whatWeAreTexts = [
  "A support practice focused on reflection, language, and legacy",
  "A source of informed, steady guidance during end-of-life transitions and grief",
  "Writers and facilitators, helping families find words when it’s hardest",
];

const whatWeAreNotTexts = [
  "We are not therapists or clinicians",
  "We do not provide medical, legal, or financial advice",
  "We do not mediate family disputes or conflicts",
];

const ParallaxSection: React.FC = () => {
  // State to track whether we are showing "what we are" or "what we aren't"
  const [textMode, setTextMode] = useState<"are" | "not">("are");

  const handleToggle = () => {
    setTextMode((prev) => (prev === "are" ? "not" : "are"));
  };

  return (
    <section className="relative w-full bg-background py-10 lg:py-20 px-8 md:px-20">
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-16 lg:mb-24 items-start">
        
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-primary leading-tight tracking-tight">
            Death made itself my business, revealing a need that many don’t recognize until grief arrives.
            I work in that largely unnamed space, helping others navigate the transition when clarity of mind feels impossible.
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground pb-4">
            Refiloe Letokoto
          </span>
        </div>
        <div className="flex-1 flex flex-col pt-0 md:pt-14">
          <p className="text-sm md:text-base leading-loose text-muted-foreground font-sans">
            Having encountered death early and often within her own family, Refiloe understands grief. This foundation is strengthened by her background in grief education, psychology, and communications, allowing her to offer informed guidance and a calm, external perspective to moments that are often emotionally overwhelming and yet demanding. Through Palethabi, Refiloe creates space for families to pause, articulate what matters in words and action, and bid farewell to their loved ones with dignity.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[75vh] overflow-hidden rounded-sm lg:rounded-none">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover transition-transform duration-500"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/19208011/pexels-photo-19208011.jpeg')",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0,0,0,0.4)"
          }} 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10 sm:pb-30 text-center select-none z-10">
          <span className="text-lg uppercase tracking-[0.3em] text-white mb-4 font-semibold block">
            {textMode === "are" ? "What We Are" : "What We Are Not"}
          </span>
          
          <MorphingText 
            key={textMode} 
            texts={textMode === "are" ? whatWeAreTexts : whatWeAreNotTexts} 
            className="text-2xl sm:text-4xl md:text-5xl text-white max-w-4xl font-serif italic" 
          />
        </div>
      
        <div className="absolute bottom-0 right-0 z-20 flex gap-[1px] bg-neutral-200 p-[1px]">
          <button
            onClick={handleToggle}
            className="w-12 h-12 bg-background text-foreground flex items-center justify-center transition-colors hover:bg-background active:bg-background rounded-none focus:outline-none"
            aria-label="Previous Slide"
          >
            <CaretLeftIcon size={20} weight="bold" />
          </button>
          <button
            onClick={handleToggle}
            className="w-12 h-12 bg-background text-foreground flex items-center justify-center transition-colors hover:bg-background active:bg-background rounded-none focus:outline-none"
            aria-label="Next Slide"
          >
            <CaretRightIcon size={20} weight="bold" />
          </button>
        </div>
        
      </div>

    </section>
  );
};

export default ParallaxSection;