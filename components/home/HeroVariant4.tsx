"use client";

import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default function HeroVariant4() {
  return (
    <section className="relative w-full flex flex-col bg-[#2b4b46] z-10">
      
      {/* GLOBAL CINEMATIC FIXED BACKGROUND VIDEO CONTAINER */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
          poster="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2000"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#2b4b46]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b4b46]/60 via-transparent to-[#2b4b46]" />
      </div>

      {/* FIRST VIEWPORT VIEW (HERO CONTENT) */}
      <div className="relative z-10 w-full min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 lg:pt-48 pb-20 text-center px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto w-full">
          
          {/* Location & Niche Badge */}
          <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-xl animate-fade-up">
            Canada to Southern California Relocation Specialist
          </div>

          {/* Headline Layout (2 Lines) */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase max-w-5xl leading-[1.15] mb-6 drop-shadow-md animate-fade-up">
            Samuel Muttiah <br /> Real Estate
          </h1>

          {/* Subtitle Description */}
          <p className="text-[#F9F6F0]/90 text-base md:text-lg lg:text-xl font-light tracking-wide max-w-2xl mb-10 drop-shadow-sm">
            Guiding your transition from Canada to Southern California with clarity, dual-market experience, and confidence.
          </p>

          {/* 2-BUTTON ACTION DECK */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
            <Link 
              href="/all-homes" 
              className="w-full sm:w-auto min-w-[220px] min-h-[54px] flex items-center justify-center px-8 py-3.5 rounded-full bg-[#e9b3b0] text-[#2b4b46] text-xs font-semibold tracking-wider uppercase hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-xl font-sans text-center leading-tight"
            >
              Buy With Us
            </Link>
            
            <Link 
              href="/sellers-guide" 
              className="w-full sm:w-auto min-w-[220px] min-h-[54px] flex items-center justify-center px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/35 text-xs font-semibold tracking-wider uppercase hover:bg-white/25 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 shadow-xl font-sans text-center leading-tight"
            >
              Sell With Us
            </Link>
          </div>
          
        </div>
      </div>

    </section>
  );
}