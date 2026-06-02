"use client";

import React from "react";
import { Highlighter } from '@/components/ui/highlighter';
interface ComingSoonBodyProps {
  children?: React.ReactNode;
}

export default function ComingSoonBody({ children }: ComingSoonBodyProps) {
  return (
    <section className="w-full px-8 md:px-20 py-20 lg:py-32 flex flex-col items-center justify-center text-center bg-background border-t border-border/40">
      
      {!children ? (
        <div className="space-y-2 max-w-4xl">
          <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.85] tracking-tighter text-primary">
            <span className="block font-black uppercase">
              Coming Soon
            </span>
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground pt-6">
            <Highlighter><a href="https://mailchi.mp/1a93a9da26bb/v3r48lixni" target="_blank" rel="noopener noreferrer">Sign up</a></Highlighter> up for updates
          </p>
        </div>
      ) : (
        <div className="max-w-2xl text-base md:text-lg leading-relaxed text-primary font-sans">
          {children}
        </div>
      )}

    </section>
  );
}
