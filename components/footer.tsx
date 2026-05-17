"use client";
import React from "react";

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: "Explore",
      links: ["Our Story", "Gallery", "Blog", "Events"],
    },
    {
      title: "Support",
      links: ["Contact", "FAQs", "Shipping", "Refund"],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Instagram", icon: "↗" },
        { name: "Facebook", icon: "↗" },
      ],
    },
  ];

  return (
    <footer className="bg-chart-4 text-white w-full pt-20 pb-10 px-8 md:px-16 flex flex-col gap-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col gap-8 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Narratives shaped <br /> 
            by <span className="italic">place</span> and <br /> 
            prespective
          </h2>
        </div>

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
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm font-light text-white/80 hover:text-white hover:italic transition-all duration-300 flex items-center gap-2"
                    >
                      {typeof link === "string" ? link : (
                        <>
                          <span className="text-[10px] opacity-50">{link.icon}</span>
                          {link.name}
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
        <p className="text-white/30 font-sans text-[9px] uppercase tracking-[0.5em]">
          Design by Leonard Copyright © 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;