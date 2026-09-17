"use client";

import { Globe, ShieldCheck, TrendingUp } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export default function AgentValueSection() {
  const cleanPrimaryText = BRAND_CONFIG.theme.primaryText;

  // Icon wrapper styled in deep green neutral tones
  const iconWrapperStyle = `flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2b4b46]/10 text-[#2b4b46] shrink-0 border border-[#2b4b46]/20 shadow-sm`;

  const pillars = [
    {
      icon: <Globe size={22} className="text-[#2b4b46]" />,
      title: "Dual-Market Expertise",
      desc: "Over 10 years of experience navigating both the Greater Toronto Area (GTA) and Southern California real estate systems, tax nuances, and market dynamics."
    },
    {
      icon: <ShieldCheck size={22} className="text-[#2b4b46]" />,
      title: "Cross-Border Network",
      desc: "A single point of contact connecting you to trusted immigration attorneys, cross-border accountants, vehicle import specialists, and international movers."
    },
    {
      icon: <TrendingUp size={22} className="text-[#2b4b46]" />,
      title: "Residential & Investment Growth",
      desc: "Strategic guidance for buying, selling, or investing in residential and commercial U.S. real estate with clear equity and cash-flow metrics."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] overflow-hidden relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: WHY CHOOSE SAMUEL (Spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-sm border border-[#2b4b46]/20">
              Why Choose Samuel Muttiah
            </div>

            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${cleanPrimaryText} tracking-tight leading-[1.15] mb-6`}>
              10+ Years of Dual-Market Excellence.
            </h2>
            
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal mb-10">
              Relocating across borders is more than a move—it’s a life transition. Affiliated with Keller Williams Beverly Hills, Samuel acts as your dedicated advisor to ensure buying, selling, or investing in Southern California real estate is clear, seamless, and rewarding.
            </p>

            {/* Value Features Vertical Stack */}
            <div className="flex flex-col gap-8 w-full">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className={iconWrapperStyle}>
                    {pillar.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className={`font-display text-base font-bold ${cleanPrimaryText} tracking-wide mb-1.5`}>
                      {pillar.title}
                    </h3>
                    <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PORTRAIT SPOTLIGHT WITH FLOATING TESTIMONIAL CARD (Spans 6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative w-full pt-6">
            
            {/* Image Container Card */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl bg-stone-200 shadow-xl overflow-visible">
              
              {/* Main Agent Portrait */}
              <img 
                src={BRAND_CONFIG.agent.fullphoto || "/images/sam.jpeg"} 
                alt="Samuel Muttiah - Transition Realtor"
                className="w-full h-full object-cover rounded-3xl relative z-10"
              />

              {/* Floating Testimonial Overlay Card */}
              <div className="absolute left-[-16px] sm:left-[-28px] bottom-[-20px] bg-[#F9F6F0] rounded-2xl p-6 shadow-2xl max-w-[290px] sm:max-w-[340px] z-20 border border-stone-200/80 animate-fade-up">
                <p className="text-stone-800 font-light italic text-xs sm:text-sm leading-relaxed mb-4 text-left">
                  "Samuel made our relocation from Toronto to Los Angeles completely stress-free. Having one Realtor who understands both sides of the border was invaluable."
                </p>
                
                {/* Reviewer Meta Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2b4b46] text-[#e9b3b0] font-semibold flex items-center justify-center text-[10px] tracking-wider">
                    SM
                  </div>
                  <div className="text-left">
                    <h4 className={`font-semibold ${cleanPrimaryText} text-xs tracking-wide`}>M. & K. Davidson</h4>
                    <p className="text-stone-500 text-[10px] font-medium mt-0.5">Canada to SoCal Relocators</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}