"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Highlighter } from "@/components/ui/highlighter";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
  description: string;
}

interface NavbarProps {
  direction?: "up" | "down";
}

const Navbar: React.FC<NavbarProps> = ({ direction = "up" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  
  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoveredDescription, setHoveredDescription] = useState<string | null>(null);

  const menuItems: MenuSection[] = [
    { 
      category: "Writing", 
      items: [
        { label: "The Beckoning Blog", href: "/blog" },
        { label: "Hae & There", href: "#" }
      ],
      description: "Coming Soon."
    },
    { 
      category: "Grief", 
      items: [
        { label: "Grief Literacy", href: "#" },
        { label: "Grief Consulting", href: "/grief" }
      ],
      description: "Coming Soon."
    },
    { 
      category: "Projects", 
      items: [
        { label: "Podcasts", href: "https://youtube.com/playlist?list=PLfs2NHMZSv4oD5vwScw6Fjn8kqadds2G1&si=AzOOdN6pvybkyqn5" }
      ],
      description: "Coming Soon."
    },
  ];

  const getTranslateClass = (): string => {
    if (isMenuOpen) return "translate-y-0";
    return direction === "up" ? "translate-y-full" : "-translate-y-full";
  };

  return (
    <>
      <div className="relative top-0 left-0 right-12 md:left-10 md:right-[40%] flex justify-between items-center z-50 pointer-events-none">
        <button 
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
          onClick={() => setIsMenuOpen(true)} 
          className="font-sans text-xs font-black uppercase tracking-widest pointer-events-auto text-black dark:text-white"
        >
          {hoverMenu ? (
            <Highlighter action="underline" color="#C2A15A">
              MENU +
            </Highlighter>
          ) : (
            "MENU +"
          )}
        </button>
      </div>
      
      <div 
        className={`fixed inset-0 bg-chart-4 z-50 transition-transform duration-700 ease-in-out flex flex-col ${getTranslateClass()}`}
      >
        <div className="flex justify-between py-12 px-22 items-center">
            <button 
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              onClick={() => {
                setIsMenuOpen(false); 
                router.push('/');
              }}
              className="font-sans text-xs font-bold text-muted uppercase tracking-[0.5em]"
            >
              {hoverHome ? (
                <Highlighter action="underline" color="#C2A15A">
                  HOME
                </Highlighter>
              ) : (
                "HOME"
              )}
            </button>
          <button 
            onMouseEnter={() => setHoverClose(true)}
            onMouseLeave={() => setHoverClose(false)}
            onClick={() => setIsMenuOpen(false)} 
            className="text-white font-sans text-xs uppercase tracking-widest"
          >
            {hoverClose ? (
              <Highlighter action="underline" color="#C2A15A">
                Close —
              </Highlighter>
            ) : (
              "Close —"
            )}
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12 p-12 md:p-24 overflow-y-auto">
          {menuItems.map((group, idx) => (
            <div 
              key={idx} 
              className="flex flex-col gap-8 transition-opacity duration-300"
              onMouseEnter={() => setHoveredDescription(group.description)}
              onMouseLeave={() => setHoveredDescription(null)}
            >
              <h3 className="text-white/20 font-sans text-xs uppercase tracking-[0.4em] border-b border-white/10 pb-4">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-6">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)} 
                      className="text-white text-3xl md:text-5xl font-light hover:italic transition-all inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex h-48 px-24 pb-16 items-end justify-start">
          <div className="max-w-xs w-full"> 
            <p 
              className={`text-[#D8CFC4] font-serif italic font-light text-lg leading-relaxed text-left transition-all duration-500 ease-in-out`}
            >
              {hoveredDescription || "Coming Soon"} 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
