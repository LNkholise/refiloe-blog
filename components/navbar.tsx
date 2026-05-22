"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Highlighter } from "@/components/ui/highlighter";

interface MenuItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
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

  const menuItems: MenuSection[] = [
    { 
      category: "Blog", 
      items: [{ label: "The Regathering", href: "/blog" }]
    },
    { 
      category: "Grief", 
      items: [{ label: "Grief", href: "/grief" }]
    },
    { 
      category: "Projects", 
      items: [{ label: "Collabs, Collaborations, Connections", href: "/projects" }]
    },
    {
      category: "Shop",
      items: [{ label: "Shop", href: "https://coming-soon-9534.myshopify.com/password", isExternal: true }]
    },
  ];

  const getTranslateClass = (): string => {
    if (isMenuOpen) return "translate-y-0";
    return direction === "up" ? "translate-y-full" : "-translate-y-full";
  };

  return (
    <>
      {/* Kept your exact wrapper classes, positioning, and z-index untouched */}
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
      
      {/* Changed bg-chart-4 to your dark charcoal tone for a more editorial feel */}
      <div 
        className={`fixed inset-0 bg-[#2B2522] z-50 transition-transform duration-700 ease-in-out flex flex-col ${getTranslateClass()}`}
      >
        <div className="flex justify-between py-12 px-12 md:px-24 items-center">
          <button 
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
            onClick={() => {
              setIsMenuOpen(false); 
              router.push('/');
            }}
            className="font-sans text-xs font-bold text-muted-foreground uppercase tracking-[0.5em] transition-colors hover:text-white"
          >
            {hoverHome ? (
              <Highlighter action="underline" color="#C2A15A">
                HOME
              </Highlighter>
            ) : (
              "HOME"
            )}
          </button>

          {/* Removed the em dash (—) from Close */}
          <button 
            onMouseEnter={() => setHoverClose(true)}
            onMouseLeave={() => setHoverClose(false)}
            onClick={() => setIsMenuOpen(false)} 
            className="text-white font-sans text-xs uppercase tracking-widest"
          >
            {hoverClose ? (
              <Highlighter action="underline" color="#C2A15A">
                CLOSE
              </Highlighter>
            ) : (
              "CLOSE"
            )}
          </button>
        </div>
        
        {/* Switched to lg:grid-cols-4 so all categories sit on one row cleanly */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12 md:p-24 overflow-y-auto">
          {menuItems.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Removed the bottom border lines entirely */}
              <h3 className="text-white/40 font-sans text-[10px] font-bold uppercase tracking-[0.4em]">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-6">
                {group.items.map((item, i) => {
                  const linkClass = "text-white text-3xl md:text-5xl font-serif font-light tracking-tight hover:italic transition-all duration-300 inline-block";

                  if (item.isExternal) {
                    return (
                      <li key={i}>
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)} 
                          className={linkClass}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={i}>
                      <Link 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)} 
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex h-48 px-12 md:px-24 pb-16 items-end justify-start">
          <div className="max-w-md w-full"> 
            <p className="text-[#D8CFC4] font-serif italic font-light text-xl leading-relaxed text-left">
              Contact{" "}
              <a 
                href="mailto:letokotorefiloe@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="not-italic font-sans text-sm tracking-widest font-bold text-[#C2A15A] hover:text-white transition-colors duration-300 ml-2"
              >
                letokotorefiloe@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
