"use client";

import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

interface TransitionService {
  title: string;
  category: string;
  desc: string;
  image: string;
  gridClass: string;
}

const serviceData: TransitionService[] = [
  {
    title: "Residential & Commercial Real Estate",
    category: "Core Representation",
    desc: "End-to-end buying, selling, and investment representation across Southern California, backed by 10+ years of GTA and SoCal dual-market expertise.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-7 aspect-[16/10] md:aspect-auto md:h-[340px]"
  },
  {
    title: "Immigration & Visa Legal Support",
    category: "Legal Network",
    desc: "Direct coordination with specialized cross-border immigration attorneys for visa planning, work permits, and residency considerations.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-5 aspect-[16/10] md:aspect-auto md:h-[340px]"
  },
  {
    title: "U.S. Tax & Cross-Border Wealth Strategy",
    category: "Financial Planning",
    desc: "Connect with U.S. CPAs and accountants specializing in dual-country tax reporting, asset transfer, and financial structuring.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto md:h-[320px]"
  },
  {
    title: "Vehicle Transport & U.S. Importation",
    category: "Logistics",
    desc: "Seamless, compliant transport of your personal vehicles from Canada to Southern California with vetted auto-import specialists.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto md:h-[320px]"
  },
  {
    title: "Cross-Border International Moving",
    category: "Relocation Services",
    desc: "Trusted international moving partners experienced in customs clearances, border logistics, and door-to-door delivery.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto md:h-[320px]"
  },
  {
    title: "U.S. Financing & Lender Access",
    category: "Mortgage Guidance",
    desc: "Customized U.S. home financing solutions tailored specifically for Canadian buyers establishing credit or investing in SoCal real estate.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    gridClass: "col-span-12 md:col-span-12 aspect-[16/10] md:aspect-auto md:h-[300px]"
  }
];

export default function ServicesGrid() {
  const cleanPrimaryText = BRAND_CONFIG.theme.primaryText;

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] overflow-hidden relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 shadow-sm border border-[#2b4b46]/20">
            Canada-to-U.S. Transition Ecosystem
          </div>
          
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${cleanPrimaryText} tracking-tight leading-[1.15] mb-5`}>
            Comprehensive Support for Your Cross-Border Move
          </h2>
          
          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
            Relocating across borders requires more than real estate expertise. Samuel Muttiah acts as your single point of contact, coordinating property transactions while connecting you with trusted cross-border professionals.
          </p>
        </div>

        {/* BENTO GRID SYSTEM */}
        <div className="grid grid-cols-12 gap-6 w-full">
          {serviceData.map((service, idx) => {
            return (
              <Link 
                key={idx}
                href={`/contact?intent=${encodeURIComponent(service.title)}`}
                className={`relative block rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 ${service.gridClass}`}
              >
                
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b4b46]/95 via-[#2b4b46]/60 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col items-start text-left max-w-2xl">
                  <span className="bg-[#e9b3b0] text-[#2b4b46] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow-sm">
                    {service.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide mb-2 transition-colors group-hover:text-[#e9b3b0]">
                    {service.title}
                  </h3>
                  <p className="text-[#F9F6F0]/85 text-xs sm:text-sm font-light leading-relaxed drop-shadow-sm">
                    {service.desc}
                  </p>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}