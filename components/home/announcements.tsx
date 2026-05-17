"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProp {
    date: string,
    text: string,
}

export default function AnnouncementBanner({ slides }:{ slides:SlideProp[] }) {
  const [current, setCurrent] = useState(0);

  if (!slides || slides.length === 0) {
    return null
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-chart-2 text-background py-12 px-6 overflow-hidden min-h-[100px] flex flex-col justify-center items-center font-serif">
      
      <div className="max-w-5xl flex mx-auto text-center z-10">
        <AnimatePresence mode="wait">
          <motion.h2
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight tracking-tight italic flex flex-col items-center gap-4 mx-10"
          >
            {slides[current].text}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              current === index 
                ? "bg-chart-4 scale-110" 
                : "bg-transparent"
            }`}
            aria-label={`slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}