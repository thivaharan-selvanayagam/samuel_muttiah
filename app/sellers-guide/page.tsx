import Link from "next/link";
import { ArrowRight, Calendar, Calculator } from "lucide-react";
import GetInTouch from "@/components/GetInTouch";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata = { 
  title: `Seller's Guide | ${BRAND_CONFIG.meta.siteName}` 
};

const sellerSteps = [
  { 
    title: 'Clarify Your Transition Strategy & Timeline', 
    text: `Selling property during a cross-border relocation requires synchronized timing. We help align your sale with your visa timelines, moving logistics, and purchasing plans in Southern California to ensure a smooth, low-stress transition.`,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'
  },
  { 
    title: 'Establish a Strategic Market Valuation', 
    text: `Pricing correctly from day one drives maximum buyer competition. Leveraging over 10 years of dual-market experience, Samuel Muttiah conducts a comprehensive valuation based on current local sales data, active inventory, and neighborhood demand trends.`,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
  },
  { 
    title: 'Prepare & Stage for High-Impact Presentation', 
    text: `First impressions dictate buyer leverage. We guide you through targeted decluttering, minor repairs, and professional staging strategies that highlight architectural strengths, elevate lighting, and maximize appeal for local and relocating buyers.`,
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80'
  },
  { 
    title: 'Coordinate Cross-Border Tax & Currency Logistics', 
    text: `Selling home assets across borders involves specific financial considerations. Samuel connects you with specialized U.S. and Canadian tax advisors to navigate capital gains reporting, tax compliance, and optimal currency transfer timing.`,
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80'
  },
  { 
    title: 'Execute Targeted Multi-Channel Marketing', 
    text: `We launch a comprehensive presentation package—featuring professional HDR photography, cinematic video tours, digital campaigns, and direct exposure across international broker networks—to capture qualified buyers quickly.`,
    img: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80'
  },
  { 
    title: 'Evaluate & Negotiate Offers Strategically', 
    text: `When offers arrive, we evaluate every clause beyond the offer price. We review buyer pre-approvals, deposit structures, contingency periods, and closing dates to advocate aggressively for your financial and relocation priorities.`,
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80'
  },
  { 
    title: 'Manage Escrow & Complete Closing', 
    text: `Once an agreement is executed, we manage inspection conditions, appraisal walkthroughs, and legal title steps. Samuel works closely with your escrow team and legal counsel to ensure a seamless funds transfer and key release.`,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'
  }
];

export default function SellersGuidePage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] lg:h-[90vh] flex flex-col items-center justify-center bg-[#2b4b46] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" 
            alt="Seller's Guide Overview"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b4b46]/90 via-[#2b4b46]/75 to-[#2b4b46]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full mt-10">
          <div className="inline-block bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-md">
            Homeowners & Relocating Sellers
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-fade-up uppercase leading-[1.1]">
            Seller's Guide
          </h1>
          <p className="mt-4 text-[#F9F6F0]/90 text-base md:text-xl font-light max-w-2xl mx-auto">
            A strategic roadmap to maximizing your equity during local sales or cross-border transitions.
          </p>
          <div className="mt-8">
            <Link 
              href="/contact?intent=Book%20a%20Home%20Selling%20Strategy%20Call"
              className="inline-flex items-center gap-2 bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl font-sans"
            >
              <Calendar size={15} /> Book a Home Selling Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRO BANNER */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm border border-[#2b4b46]/20">
            Strategic Representation
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2b4b46] tracking-tight">
            A Clear Path to a Successful Sale
          </h2>
          <div className="w-12 h-[2px] bg-[#e9b3b0] mx-auto my-6"></div>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
            Selling your home during a major transition doesn't have to be overwhelming. With strategic preparation, pricing analytics, and dedicated representation from Samuel Muttiah (Keller Williams Beverly Hills), we make your sale seamless and rewarding.
          </p>
        </div>
      </section>

      {/* 3. STEPS MATRIX */}
      <section className="w-full flex flex-col">
        {sellerSteps.map((step, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? 'bg-[#F9F6F0]' : 'bg-white'}`}>
              
              {/* Image Frame */}
              <div className={`relative min-h-[380px] lg:min-h-[520px] group overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={step.img} 
                  alt={step.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Panel */}
              <div className={`flex flex-col justify-center px-8 py-14 lg:px-20 xl:px-24 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#2b4b46]">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-[1px] bg-stone-300 hidden md:block"></div>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#2b4b46] mb-4 tracking-tight leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-stone-600 text-sm lg:text-[15px] leading-relaxed font-normal">
                  {step.text}
                </p>
              </div>

            </div>
          );
        })}
      </section>

      {/* 4. HOME EVALUATION PROMPT */}
      <section className="relative py-24 bg-[#2b4b46] flex items-center justify-center overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1600&q=80" 
            alt="Aerial property overview"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm">
            Professional Market Analysis
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6">
            WHAT COULD YOUR HOME SELL FOR?
          </h2>
          <p className="text-[#F9F6F0]/90 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Get an accurate valuation of your property based on localized market analytics, recent sales data, and active buyer demand.
          </p>
          <Link 
            href="/home-evaluation" 
            className="inline-flex items-center justify-center bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-xl font-sans"
          >
            Get My Home Evaluation
          </Link>
        </div>
      </section>

      {/* 5. QUICK ACTION CARDS */}
      <section className="py-20 bg-white border-t border-stone-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <Link href="/home-evaluation" className="group relative h-[380px] rounded-3xl overflow-hidden flex items-end shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" 
                alt="Home Valuation" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b4b46]/95 via-[#2b4b46]/40 to-transparent" />
              <div className="relative z-10 p-8 w-full text-left">
                <span className="text-[10px] font-semibold text-[#e9b3b0] uppercase tracking-widest block mb-1">Valuation</span>
                <h3 className="text-white font-display text-xl font-bold tracking-tight">Request Home Evaluation</h3>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/all-homes" className="group relative h-[380px] rounded-3xl overflow-hidden flex items-end shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                alt="Active Listings" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b4b46]/95 via-[#2b4b46]/40 to-transparent" />
              <div className="relative z-10 p-8 w-full text-left">
                <span className="text-[10px] font-semibold text-[#e9b3b0] uppercase tracking-widest block mb-1">Market Research</span>
                <h3 className="text-white font-display text-xl font-bold tracking-tight">Browse Active Properties</h3>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/contact?intent=Book%20a%20Home%20Selling%20Strategy%20Call" className="group relative h-[380px] rounded-3xl overflow-hidden flex items-end shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" 
                alt="Strategy Consultation" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b4b46]/95 via-[#2b4b46]/40 to-transparent" />
              <div className="relative z-10 p-8 w-full text-left">
                <span className="text-[10px] font-semibold text-[#e9b3b0] uppercase tracking-widest block mb-1">Consultation</span>
                <h3 className="text-white font-display text-xl font-bold tracking-tight">Book a Strategy Call</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 6. FINAL STRATEGY CALL HERO */}
      <section className="relative h-[480px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80" 
            alt="Work with Samuel Muttiah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2b4b46]/85" />
        </div>
        <div className="relative z-10 px-6 max-w-2xl mx-auto">
          <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm">
            Personalized Strategy
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 uppercase">
            Ready to Sell with Confidence?
          </h2>
          <p className="text-[#F9F6F0]/90 text-sm md:text-base leading-relaxed mb-8 font-light">
            Partner with Samuel Muttiah for strategic pricing, multi-channel property marketing, and dedicated cross-border representation.
          </p>
          <Link 
            href="/contact?intent=Book%20a%20Home%20Selling%20Strategy%20Call" 
            className="inline-flex items-center justify-center gap-2 bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-xl font-sans"
          >
            <Calendar size={16} /> Book a Home Selling Strategy Call
          </Link>
        </div>
      </section>

      {/* Global Contact Form */}
      <GetInTouch dark={true} />
    </div>
  );
}

export const dynamic = "force-dynamic";