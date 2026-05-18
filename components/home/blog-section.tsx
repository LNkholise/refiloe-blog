"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface Post {
  title: string;
  date: string;
  image: string;
  type: string;
  slug: string;
  description: string;
}

export default function EditorialGrid({ articles }:{articles: Post[]}) {
  const router = useRouter();
  const blocks: string[] = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1"
  ];
  return (
    <section className="w-full bg-background py-16 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <Link href="/blog">
          <button className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-foreground pb-2 transition-all hover:text-muted-foreground hover:border-muted-foreground">
            Explore with me
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[450px]">
      {articles.map((item, index) => (
        <Card
          key={index}
          className={`group flex flex-col overflow-hidden border-none rounded-none shadow-none bg-card ${blocks[index]} cursor-pointer`}
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

            <div className="pt-6 flex flex-col space-y-4 mx-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="rounded-none border-foreground/20 uppercase tracking-widest text-[9px] font-bold">
                  {item.type}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-tight leading-tight truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
        </Card>
      ))}

      </div>
    </section>
  );
}