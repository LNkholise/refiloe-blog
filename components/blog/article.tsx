"use client";

import React from 'react';
import { 
  ArrowUpRightIcon, 
  Calendar, 
  Tag, 
  Clock 
} from "@phosphor-icons/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Highlighter } from '@/components/ui/highlighter';
import { DocumentRenderer, DocumentRendererProps } from '@keystatic/core/renderer';
import { Caveat } from 'next/font/google';

const handwriting = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface ArticleProps {
  menu?: React.ReactNode;
  coverImage: string;
  type: string;
  duration: number;
  title: string;
  content: any;
  picks: any;
  date: string;
}

export default function ArticleSection({ menu, coverImage, content, duration, picks, type, title, date }: ArticleProps) {
  const router = useRouter();

  const renderers: DocumentRendererProps['renderers'] = {
    block: {
      paragraph: ({ children }) => (
        <p className="text-sm leading-relaxed text-muted-foreground tracking-widest font-sans mb-6">
          {children}
        </p>
      ),
      divider: () => (
        <hr className="my-12 border-none h-[1px] bg-gradient-to-r from-transparent via-[#C2A15A]/40 to-transparent" />
      ),
      blockquote: ({ children }) => (
        <blockquote className="relative my-20 py-12 text-center max-w-2xl mx-auto border-y border-neutral-100">
          {/* Opening Quote Symbol */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 text-5xl font-serif italic text-[#C2A15A] select-none">
            &ldquo;
          </span>
      
          {/* The Quote Text using the Handwriting font */}
          <div className={`${handwriting.className} text-4xl md:text-5xl leading-tight text-primary/90 px-4 tracking-normal`}>
            {children}
          </div>
      
          {/* Closing Quote Symbol */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background px-6 text-5xl font-serif italic text-[#C2A15A] select-none">
            &rdquo;
          </span>
        </blockquote>
      ),
      heading: ({ level, children }) => {
        if (level === 2) {
          return <h2 className="text-3xl font-bold italic font-serif tracking-tight mb-8">{children}</h2>;
        }
        return <h3 className="text-2xl font-bold font-serif italic tracking-tight mb-4 mt-8">{children}</h3>;
      },
      image: ({ src, alt }: { src: string; alt?: string }) => (
        <figure className="mb-6 w-full">
          <div className="relative overflow-hidden">
            <img
              src={src}
              alt={alt || ""}
              className="w-full h-auto object-cover"
            />
          </div>
          {alt && (
            <figcaption className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground font-sans font-medium">
              {alt}
            </figcaption>
          )}
        </figure>
      ),
    },
  inline: {
    link: ({ href, children }) => (
      <a href={href} target="_blank"  rel="noopener noreferrer">
        <Highlighter> 
          {children}
        </Highlighter>
      </a>
    ),
   }
  };
  
  const formattedDate = new Date(date).toLocaleDateString('en-GB',{
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  })
  
  const [_, leading, last] = title.match(/^(.*)\s(\S+)$/) || ["", "", title];
  return (
    <article className="min-h-screen bg-background text-primary font-sans">
    
      {menu && (
        <div className="p-8 lg:p-12 border-b border-neutral-100">
           <div className="flex items-center font-bold tracking-tighter text-sm">
            {menu}
          </div>
        </div>
      )}

      <div className="w-full pb-10 px-8 md:px-16 gap-16 mx-auto">

        <main className="w-full">
          <header className="mb-12 flex flex-col items-start justify-center">
            <h1 className="text-start text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary">
              <span className="block font-serif italic font-light tracking-normal">{ leading }</span>
              <span className="block font-black uppercase">{ last }</span>
            </h1>
          </header>

          {/* Hero Image */}
          <figure className="w-full aspect-[21/9] bg-neutral-100 mb-16 overflow-hidden">
            <img 
              src={coverImage} 
              alt={title} 
              className="w-full h-full object-cover contrast-125 hover:scale-105 transition-transform duration-700"
            />
          </figure>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            <aside className="hidden lg:block lg:col-span-2 pr-6">
              <div className="sticky top-12 space-y-8 pt-2">
                <MetaItem icon={<Calendar size={18} />} label="Date" value={formattedDate} />
                <MetaItem icon={<Tag size={18} />} label="Category" value={type} />
                <MetaItem icon={<Clock size={18} />} label="Read Time" value={`${duration ?? 0} Mins`}/>
              </div>
            </aside>

            <div className="flex lg:hidden flex-wrap gap-6 pb-6 border-b border-border/50">
                <MetaItem icon={<Calendar size={18} />} label="Date" value={formattedDate} />
                <MetaItem icon={<Tag size={18} />} label="Category" value={type} />
                <MetaItem icon={<Clock size={18} />} label="Read Time" value={`${duration ?? 0} Mins`} />
            </div>

            <div className="lg:col-span-7 space-y-12 text-lg leading-relaxed">
              <section>
                <DocumentRenderer document={content} renderers={renderers} />
              </section>
            </div>

            <aside className="lg:col-span-3">
              <Card className="sticky top-12 bg-card">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-12 h-12 bg-neutral-200 overflow-hidden border border-black flex-shrink-0">
                    <img 
                      src="/images/bio.png" 
                      alt="Jess Black" 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tighter text-sm">Refiloe Letokoto</h3>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-[0.15em]">Writer</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://www.linkedin.com/in/refiloe-letokoto-0759a1409" target="_blank"  rel="noopener noreferrer" >
                   <Button variant="default" className="mt-6 w-full text-[10px] font-bold uppercase tracking-widest rounded-none">
                    Let's Connect
                   </Button>
                  </a>
                </CardContent>
              </Card>
            </aside>
          </div>
        </main>

        {/* RELATED NEWS FOOTER */}
        <section className="mt-10 pt-10">
          {(picks.length !== 0) && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <h2 className="text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-primary">
             <span className="block font-serif italic font-light tracking-normal ml-[-4px]">Related </span>
             <span className="block font-black uppercase">News</span>
            </h2>
            <p className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] max-w-[200px] text-right">
              Explore more stories from the blog archive 2026
            </p>
          </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[450px] mb-16">
            {picks.map((post: any, i: number) => (
              <Card
                key={i}
                className="group flex flex-col overflow-hidden border-none rounded-none shadow-none bg-card cursor-pointer"
                onClick={() => router.push(post.slug)}
              >
                  <div className="relative flex-grow w-full overflow-hidden -my-10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 contrast-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRightIcon size={18} className="text-black" />
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col space-y-3 mx-4">
                    <Badge variant="outline" className="w-fit rounded-none border-foreground/20 uppercase tracking-widest text-[9px] font-bold">
                      {`${post.type} • ${post.date}`}
                    </Badge>
                    <h3 className="text-base font-bold tracking-tight leading-tight truncate">
                        {post.title}
                    </h3>
                  </div>
              </Card>
            ))}

          </div>
        </section>
      </div>
    </article>
  );
}

// Helper Component for the Left Sidebar Meta Data
function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-muted-foreground mt-[2px]">{icon}</div>
      <div>
        <p className="text-[9px] font-bold text-[#C2A15A] uppercase tracking-widest">{label}</p>
        <p className="text-sm font-semibold text-primary leading-snug mt-1">{value}</p>
      </div>
    </div>
  );
}
