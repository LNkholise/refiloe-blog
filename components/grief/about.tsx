"use client";
import React from "react";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-background text-[#2C2A29] font-sans flex items-center justify-center py-16 lg:py-24 px-6 sm:px-12 overflow-hidden">
      <div className="w-full px-20 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        <div className="w-full sm:w-2/3 lg:w-[22%] order-2 lg:order-1 lg:self-end lg:translate-y-8 shrink-0">
          <div className="aspect-[3/4] w-full overflow-hidden shadow-sm">
            <img 
              src="https://images.pexels.com/photos/12635569/pexels-photo-12635569.jpeg" 
              alt="Cozy living room interior with artwork" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[48%] order-1 lg:order-2 flex flex-col items-center text-center px-4 lg:px-8 max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal leading-[1.15] tracking-tight text-[#2C2A29] mb-6">
            Grief Consulting
          </h2>
          
          <p className="text-sm sm:text-base leading-relaxed tracking-wide text-[#54504D] font-light max-w-md mb-8">
            When death visited and revisited me, it revealed to me a need many don't recognize until grief arrives. 
            I work in that largely unnamed space, where clarity of mind feels impossible, and yet decisions must be made, words must be found, and life must make an effort to continue. 
            <br /><br />
            Palethabi is my end-of-life and legacy consulting practice, offering culturally grounded, non-clinical support to individuals and families across Lesotho, South Africa, and the diaspora, before death, through funeral planning, and in the months beyond.
          </p>

          <Button 
            variant="outline" 
            className="border-[#2C2A29] text-[#2C2A29] bg-transparent hover:bg-[#2C2A29] hover:text-[#EAE6DF] transition-colors duration-300 rounded-none uppercase text-xs tracking-[0.2em] px-8 py-5 h-auto font-medium"
          >
            Seek Consulting
          </Button>
        </div>
        <div className="w-full sm:w-2/3 lg:w-[26%] order-3 lg:self-start lg:-translate-y-12 shrink-0 lg:mr-[-2rem]">
          <div className="aspect-[4/5] w-full overflow-hidden shadow-sm">
            <img 
              src="https://images.pexels.com/photos/6841252/pexels-photo-6841252.jpeg" 
              alt="Modern kitchen counter with classical portrait canvas" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}