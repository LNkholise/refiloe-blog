"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AnnouncementBannerProps {
  text?: string;
  linkHref?: string;
}

export default function AnnouncementBanner({ 
  text = "Explore our shared stories, reflections, and collective archives on navigating loss.",
  linkHref = "/grief-posts" 
}: AnnouncementBannerProps) {
  return (
    <section className="relative w-full bg-chart-2 text-background py-16 px-6 min-h-[120px] flex flex-col justify-center items-center text-center font-serif gap-6">
      
      <div className="max-w-3xl z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight tracking-tight italic">
          "{text}"
        </h2>
      </div>

      <Button 
        asChild 
        variant="outline" 
        className="font-sans font-medium tracking-widest uppercase text-xs px-6 py-5 rounded-none z-10 mt-2"
      >
        <Link href={linkHref}>
          Read Grief Posts
        </Link>
      </Button>

    </section>
  );
}