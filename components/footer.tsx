"use client";
import React from "react";
import Link from "next/link";

// 1. Define the blueprint for an individual link
interface FooterLink {
  name: string;
  url: string;
  icon?: string;        // The '?' means this is optional
  isExternal?: boolean; // The '?' means this is optional
}

// 2. Define the blueprint for a section
interface LinkSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // 3. Explicitly type the array using our new LinkSection interface
  const linkSections: LinkSection[] = [
    {
      title: "Explore",
      links: [
        { name: "Our Story", url: "/about" },
        { name: "Gallery", url: "/gallery" },
        { name: "Blog", url: "/blog" },
        { name: "Events", url: "/events" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", url: "mailto:letokotorefiloe@gmail.com", isExternal: true },
        { name: "Sign Up", icon: "↗", url: "https://mailchi.mp/1a93a9da26bb/v3r48lixni", isExternal: true },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Linkedin", icon: "↗", url: "www.linkedin.com/in/refiloe-letokoto-0759a1409", isExternal: true },
        { name: "Youtube", icon: "↗", url: "https://youtube.com/@refiloeletokoto?si=77xbUYFl2n155RrS", isExternal: true },
        { name: "Instagram", icon: "↗", url: "https://www.instagram.com/refiloeletokoto?igsh=MTJrOWNyNXh5NnJrMw%3D%3D&utm_source=qr", isExternal: true },
      ],
    },
  ];

  return (
    <footer className="bg-chart-4 text-white w-full pt-20 pb-10 px-8 md:px-16 flex flex-col gap-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {linkSections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-white/30 font-sans text-[10px] uppercase tracking-[0.4em]">
                  {section.title}
                </span>
                <div className="h-[1px] bg-white/10 w-full" />
              </div>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => {
                  const linkClass = "text-sm font-light text-white/80 hover:text-white hover:italic transition-all duration-300 flex items-center gap-2";

                  if (link.isExternal) {
                    return (
                      <li key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          <span className="text-[10px] opacity-50">{link.icon}</span>
                          {link.name}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={i}>
                      <Link href={link.url} className={linkClass}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
        <p className="text-white/30 font-sans text-[9px] uppercase tracking-[0.5em]">
          Copyright © 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;