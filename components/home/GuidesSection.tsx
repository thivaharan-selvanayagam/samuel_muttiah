"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

const guidesData = [
  {
    title: "Cross-Border Buyer's Guide",
    href: "/buyers-guide",
    description: "Essential steps for Canadian buyers navigating U.S. mortgages, currency strategies, and purchasing real estate in Southern California.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    title: "Canadian Home Seller's Guide",
    href: "/sellers-guide",
    description: "Strategic pricing, cross-border tax considerations, and home prep designed to maximize equity when selling your Canadian property.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Southern California Markets",
    href: "/neighbourhoods",
    description: "In-depth neighborhood guides covering Beverly Hills, Greater Los Angeles, and coastal Southern California lifestyle communities.",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
  }
];

export default function GuidesSection() {
  const cleanPrimaryText = BRAND_CONFIG.theme.primaryText;

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] overflow-hidden relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 shadow-sm border border-[#2b4b46]/20">
            Cross-Border Relocation Resources
          </div>
          
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${cleanPrimaryText} tracking-tight leading-[1.15] mb-5`}>
            Strategic Playbooks for Your Move
          </h2>
          
          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
            Whether purchasing your first U.S. home, liquidating Canadian real estate, or relocating across borders, explore practical guides tailored for your transition.
          </p>
        </div>

        {/* 3-CARD HOVER INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {guidesData.map((guide, idx) => (
            <Link 
              key={idx}
              href={guide.href}
              className="relative block aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 bg-[#2b4b46]"
            >
              {/* Background Image */}
              <img 
                src={guide.image} 
                alt={`${guide.title} background`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b4b46] via-[#2b4b46]/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 z-10 flex flex-col justify-end items-start text-left">
                
                {/* Card Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-[#e9b3b0] mb-1">
                  {guide.title}
                </h3>

                {/* Slide-Up Description */}
                <div className="max-h-0 opacity-0 transform translate-y-4 group-hover:max-h-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out overflow-hidden">
                  <p className="text-[#F9F6F0]/85 text-xs sm:text-sm font-light leading-relaxed mt-2 text-left">
                    {guide.description}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#e9b3b0] uppercase tracking-wider opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                  <span>Read Guide</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}