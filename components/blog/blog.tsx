"use client";

import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MorphingText } from "@/components/ui/morphing-text";
import { useRouter } from 'next/navigation';

const texts = ["Essays", "Critiques", "Journal", "Prose"];

interface ArticlesProps {
  title: string;
  category: string;
  meta?: string | number;
  date?: string;
  slug: string;
  image: string;
}

export default function WriterBlog({ menu, mainArticles, oldArticles }: { menu: React.ReactNode, mainArticles:ArticlesProps[], oldArticles:ArticlesProps[] }) {
  const router = useRouter();
  return (
    <>
    <section className="relative w-full bg-background">
      {menu && (
        <div className="p-8 lg:p-12">
           <div className="flex items-center gap-2 font-bold tracking-tighter">
            {menu}
          </div>
        </div>
      )}
      
      <div className="px-8 md:px-20">
       <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 gap-8">
        <div className="lg:w-1/2">
          <h1 className="w-full lg:w-[140%] text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary mt-12 lg:mt-0">
            <span className="block font-serif italic font-light tracking-normal ml-[-4px]">The</span>
            <span className="block font-black uppercase">Beckoning</span>
          </h1>
        </div>
        <div className="lg:w-1/4">
          <p className="text-sm leading-relaxed text-muted-foreground tracking-widest font-sans">
          The blank page has beckoned to me through every season of life, offering warmth, sanctuary, and solace. 
          Come with me as I explore the extraordinary, the everyday, and everything in between. 
          </p>
        </div>
      </div>
        <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[75vh] overflow-hidden rounded-none">
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover transition-transform duration-500"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000')",
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(0,0,0,0.3)"
            }} 
          />
          <div className="relative flex items-center justify-center h-full z-10 opacity-60">
            <MorphingText texts={texts} className="text-4xl sm:text-7xl text-white font-serif italic" />
          </div>
        </div>
      </div>

      <div className="w-full px-8 md:px-20 mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-2/3 space-y-12">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] pb-2 border-b border-border/50">
              New Posts
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-[450px] mb-16">
              {mainArticles.map((item, index) => (
                <Card
                  key={index}
                  className="group flex flex-col overflow-hidden border-none rounded-none shadow-none bg-card cursor-pointer"
                  onClick={() => router.push(item.slug)}
                >
                 <div className="relative flex-grow w-full overflow-hidden h-full -my-10">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 contrast-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRightIcon size={18} className="text-black" />
                    </div>
                    </div>

                    <div className="pt-6 flex flex-col space-y-3 mx-4">
                        <Badge variant="outline" className="w-fit rounded-none border-foreground/20 uppercase tracking-widest text-[9px] font-bold">
                            {item.category}
                        </Badge>
                        <h3 className="text-base font-bold tracking-tight leading-tight truncate">
                            {item.title}
                        </h3>
                    </div>
                </Card>
              ))}
            </div>
          </div>

          <aside className="lg:w-1/3 lg:pl-12 w-full lg:sticky lg:top-24 h-fit mb-8">
            <div className="sticky top-24 space-y-8">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  Older Popular Stories
                </h2>
                
                <div className="space-y-6">
                  {oldArticles.map((item, index) => (
                    <div key={index} className="group cursor-pointer border-b border-border/40 pb-4 last:border-0" onClick={() => router.push(item.slug)}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{item.date}</span>
                        <span className="text-[9px] font-bold text-[#C2A15A] uppercase tracking-widest">{item.category}</span>
                      </div>
                      <h4 className="text-base font-semibold group-hover:text-[#C2A15A] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <p className="text-xs font-serif italic text-muted-foreground leading-relaxed">
                  "Writing is the only way I can keep the world from collapsing."
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
    </>
  );
}
