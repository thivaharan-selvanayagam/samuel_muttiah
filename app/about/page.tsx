import Link from "next/link";
import { 
  ArrowDown, 
  Globe, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  Car, 
  Truck, 
  FileText, 
  DollarSign, 
  Landmark 
} from "lucide-react";
import GetInTouch from "@/components/GetInTouch";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata = { 
  title: `About Samuel Muttiah | Transition Realtor | Canada to Southern California` 
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] lg:h-[75vh] flex flex-col items-center justify-center bg-[#2b4b46] overflow-hidden pt-20 text-left">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2000&auto=format&fit=crop"
            alt="Southern California Real Estate Landscape"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b4b46]/90 via-[#2b4b46]/75 to-[#2b4b46]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full mt-10">
          <div className="inline-block bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-md">
            Canada to Southern California Transition Realtor
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-fade-up uppercase leading-[1.1]">
            Samuel Muttiah
          </h1>
          <p className="mt-4 text-[#F9F6F0]/90 text-base md:text-xl font-light max-w-2xl mx-auto">
            Guiding your cross-border move with 10+ years of dual-market experience, clarity, and confidence.
          </p>
          <div className="mt-10 animate-fade-up delay-200">
            <Link 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/30 text-white hover:bg-[#e9b3b0] hover:text-[#2b4b46] transition-all duration-300 shadow-lg" 
              href="#story"
            >
              <ArrowDown size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SAMUEL & DUAL-MARKET STORY */}
      <section id="story" className="py-20 lg:py-32 bg-[#FDFBF7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Portrait & Quick Stats */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start text-left">
              <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-sm border border-[#2b4b46]/20">
                Cross-Border Real Estate Specialist
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b46] leading-[1.15] tracking-tight mb-6">
                More Than a Move—It’s a Life Transition.
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal mb-8">
                Helping clients seamlessly relocate between Canada and Southern California with specialized market, legal, and lifestyle insight.
              </p>
              
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-stone-200/80">
                <img 
                  src={BRAND_CONFIG.agent.fullphoto || "/images/sam.jpeg"} 
                  alt="Samuel Muttiah - Transition Realtor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Narrative Body */}
            <div className="lg:col-span-7 flex flex-col gap-10 text-stone-700 text-sm md:text-base leading-relaxed font-normal text-left">
              
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/80 shadow-sm space-y-6">
                <h3 className="font-display text-2xl font-bold text-[#2b4b46] tracking-tight">
                  Dual-Market Experience You Can Trust
                </h3>
                
                <p>
                  As a specialized <strong>Transition Realtor</strong>, I help clients navigate the complexities of moving from Canada to Southern California, guiding them through every step of buying, selling, and investing in U.S. real estate.
                </p>
                
                <p>
                  With over <strong>10 years of experience</strong> in the real estate industry, I’ve had the unique advantage of working as a Realtor in both the <strong>Greater Toronto Area (GTA)</strong> and the <strong>Greater Los Angeles Area</strong>. This dual-market experience allows me to understand not only the differences between Canadian and U.S. real estate systems, but also the financial, legal, and lifestyle considerations that come with cross-border moves.
                </p>

                <p>
                  Whether you’re relocating for business, lifestyle, or investment opportunities, I act as your single point of contact—coordinating the real estate process while connecting you with trusted professionals to support your transition.
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <h4 className="font-bold text-[#2b4b46] text-base mb-3">Proven Track Record In:</h4>
                  <ul className="grid sm:grid-cols-3 gap-3 text-xs font-semibold text-stone-700">
                    <li className="flex items-center gap-2 bg-[#FDFBF7] p-3 rounded-xl border border-stone-200">
                      <CheckCircle2 size={16} className="text-[#2b4b46]" /> Residential Sales
                    </li>
                    <li className="flex items-center gap-2 bg-[#FDFBF7] p-3 rounded-xl border border-stone-200">
                      <CheckCircle2 size={16} className="text-[#2b4b46]" /> Commercial Real Estate
                    </li>
                    <li className="flex items-center gap-2 bg-[#FDFBF7] p-3 rounded-xl border border-stone-200">
                      <CheckCircle2 size={16} className="text-[#2b4b46]" /> Cross-Border Investing
                    </li>
                  </ul>
                </div>

                <p className="pt-2 text-[#2b4b46] font-semibold text-base sm:text-lg border-t border-stone-100">
                  Affiliated with Keller Williams Beverly Hills—giving clients access to a premier global network and deep local market expertise throughout Southern California.
                </p>
              </div>

              {/* CORE HIGHLIGHT PILLARS */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2b4b46] mb-8 tracking-tight">
                  Why Work With Samuel?
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
                    <Globe size={24} className="text-[#2b4b46] mb-3" />
                    <h4 className="font-bold text-[#2b4b46] text-base mb-1">Dual-Market Expertise</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Deep familiarity with both Canadian real estate frameworks and Southern California market dynamics.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
                    <Building2 size={24} className="text-[#2b4b46] mb-3" />
                    <h4 className="font-bold text-[#2b4b46] text-base mb-1">KW Beverly Hills Access</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Backed by one of the world's top real estate brokerages with prime access across Los Angeles.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
                    <TrendingUp size={24} className="text-[#2b4b46] mb-3" />
                    <h4 className="font-bold text-[#2b4b46] text-base mb-1">Cross-Border Investing</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Identifying high-yielding residential and commercial investment properties on both sides of the border.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
                    <ShieldCheck size={24} className="text-[#2b4b46] mb-3" />
                    <h4 className="font-bold text-[#2b4b46] text-base mb-1">Single Point of Contact</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Seamlessly coordinating your transaction, movers, attorneys, and financial advisors under one roof.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CANADA-TO-U.S. TRANSITION SUPPORT CHECKLIST */}
      <section className="py-20 lg:py-28 bg-white border-y border-stone-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm">
              Comprehensive Relocation Services
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b4b46] tracking-tight">
              Canada-to-U.S. Transition Checklist
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base font-normal max-w-xl mx-auto">
              To make your transition seamless, Samuel provides direct access to a trusted ecosystem of specialized cross-border professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            {/* Item 1 */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2b4b46] text-[#e9b3b0] flex items-center justify-center mb-6">
                  <FileText size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2b4b46] mb-2">Immigration Attorneys</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  Expert guidance on visas, work permits, cross-border residency considerations, and legal requirements.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2b4b46] text-[#e9b3b0] flex items-center justify-center mb-6">
                  <Car size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2b4b46] mb-2">Vehicle Import Specialists</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  Safe, insured, and compliant transport of your personal vehicles from Canada to the United States.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2b4b46] text-[#e9b3b0] flex items-center justify-center mb-6">
                  <Truck size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2b4b46] mb-2">Cross-Border Movers</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  Vetted international moving companies experienced in border logistics, customs documentation, and delivery.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2b4b46] text-[#e9b3b0] flex items-center justify-center mb-6">
                  <DollarSign size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2b4b46] mb-2">U.S. Tax & Accountants</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  Cross-border tax advisors specializing in dual-country reporting, estate planning, and financial structuring.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2b4b46] text-[#e9b3b0] flex items-center justify-center mb-6">
                  <Landmark size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2b4b46] mb-2">Lenders & Financing</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-normal">
                  Cross-border mortgage specialists and U.S. financial institutions to secure competitive home financing.
                </p>
              </div>
            </div>

            {/* Item 6 - CTA Box */}
            <div className="bg-[#2b4b46] text-white rounded-3xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Planning Your Move?</h3>
                <p className="text-stone-300 text-xs leading-relaxed font-light mb-6">
                  Schedule a private consultation to receive your customized cross-border relocation strategy call.
                </p>
              </div>
              <Link 
                href="/contact"
                className="bg-[#e9b3b0] text-[#2b4b46] hover:bg-white text-xs font-semibold uppercase tracking-wider text-center py-3 rounded-full transition-all"
              >
                Request Transition Guide
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION BREAK */}
      <section className="relative h-[380px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
            alt="Southern California Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2b4b46]/85" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 uppercase">
            Ready for Your Southern California Transition?
          </h2>
          <p className="text-[#F9F6F0]/90 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            Connect with Samuel Muttiah today for experienced, transparent, and results-driven real estate guidance.
          </p>
          <Link 
            className="inline-flex items-center gap-2 bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-xl font-sans" 
            href="/contact"
          >
            Start Your Move With Samuel
          </Link>
        </div>
      </section>

      {/* 5. LEAD QUALIFICATION FORM FOOTER */}
      <GetInTouch dark={true} />
    </>
  );
}

export const dynamic = "force-dynamic";