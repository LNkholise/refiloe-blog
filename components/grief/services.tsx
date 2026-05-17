"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Legacy Letter",
    subtitle: "Guided support to help individuals write a non-legal letter expressing end-of-life wishes, values, and messages for loved ones.",
    image: "https://images.pexels.com/photos/7333505/pexels-photo-7333505.jpeg",
  },
  {
    id: "02",
    title: "Eulogy Writing",
    subtitle: "Assistance in shaping spoken tributes that honor a life with dignity, care, and authenticity.",
    image: "https://images.pexels.com/photos/10484349/pexels-photo-10484349.jpeg",
  },
  {
    id: "03",
    title: "Epitaph Writing",
    subtitle: "Thoughtful support in crafting brief, meaningful inscriptions for headstones and memorials.",
    image: "https://images.pexels.com/photos/30297019/pexels-photo-30297019.jpeg",
  },
  {
    id: "04",
    title: "Legacy Preservation & Memorial Storytelling",
    subtitle: "Support in documenting and preserving life stories through written memorials, life books, or digital remembrance spaces.",
    image: "https://images.pexels.com/photos/6841599/pexels-photo-6841599.jpeg",
  },
  {
    id: "05",
    title: "Funeral Coordination & Guidance",
    subtitle: "Calm, practical guidance for families navigating funeral arrangements alongside existing funeral and faith services.",
    image: "https://images.pexels.com/photos/7317889/pexels-photo-7317889.jpeg",
  },
  {
    id: "06",
    title: "Grief Support and Consulting",
    subtitle: "Time-bound, non-clinical support to help individuals, families, and organizations navigate loss, including advisory guidance for workplaces responding to death and bereavement.",
    image: "https://images.pexels.com/photos/6129101/pexels-photo-6129101.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-background text-[#2C2A29] py-24 font-sans overflow-hidden flex flex-col justify-center">
      <div className="mb-10 px-6 sm:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-primary leading-none">
            Our Services
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
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-8 lg:gap-12 px-6 sm:px-12 lg:px-20 pb-16 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {services.map((service, index) => {
          const isStaggeredDown = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              className={`flex-none w-[85vw] sm:w-[45vw] lg:w-[26vw] xl:w-[22vw] snap-start flex flex-col ${
                isStaggeredDown 
                  ? "mt-8 lg:mt-24" 
                  : "mb-8 lg:mb-24 self-start"
              }`}
            >
              <div className="bg-white p-3 pb-8 sm:p-4 sm:pb-12 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100/50 flex flex-col">
                <div 
                  className={`relative w-full overflow-hidden mb-6 ${
                    isStaggeredDown ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out grayscale will-change-transform"
                  />
                </div>
                <div className="flex items-start gap-3 px-2">
                  <span className="text-3xl lg:text-4xl font-light tracking-tighter leading-none text-[#2C2A29]">
                    {service.id}.
                  </span>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[13px] font-bold text-[#2C2A29] leading-tight uppercase tracking-widest">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-[#7A7571] mt-1.5 font-serif italic">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}

        <div className="flex-none w-[1vw] sm:w-[4vw] lg:w-[10vw]"></div>
      </div>
    </section>
  );
}