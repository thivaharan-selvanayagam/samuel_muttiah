import Link from "next/link";
import { ArrowRight, Calculator, Calendar } from "lucide-react";
import GetInTouch from "@/components/GetInTouch";
import { BRAND_CONFIG } from "@/config/brand";

export const metadata = { 
  title: `Buyer's Guide | ${BRAND_CONFIG.meta.siteName}` 
};

const buyerSteps = [
  { 
    title: 'Define Your SoCal Lifestyle & Property Goals', 
    text: `Relocating from Canada to Southern California starts with defining your lifestyle priorities. Are you searching for a primary residence in Beverly Hills, a coastal retreat, or a high-yielding U.S. rental property? Understanding local neighborhood dynamics, commuting corridors, and property types helps narrow your search before entering the market.`,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80'
  },
  { 
    title: 'Plan Your Budget & Currency Strategy', 
    text: `Purchasing across borders involves multi-currency planning. Factor in exchange rate fluctuations, U.S. property taxes, HOA fees, insurance, and maintenance costs. Setting a clear, comfortable monthly budget in USD ensures your U.S. real estate purchase supports your broader financial goals.`,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80'
  },
  { 
    title: 'Secure U.S. Mortgage Pre-Approval', 
    text: `Canadian buyers can secure financing in the U.S. through cross-border lenders who recognize Canadian credit history and income documentation. Obtaining a formal U.S. pre-approval locks in your purchasing power and demonstrates financial readiness to American sellers.`,
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80'
  },
  { 
    title: 'Partner with an Experienced Realtor', 
    text: `Cross-border transactions require more than standard real estate service. With over 10 years of dual-market experience in both the GTA and Greater Los Angeles, Samuel Muttiah guides you through the differences in U.S. contracts, disclosures, and negotiation strategies.`,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80'
  },
  { 
    title: 'Coordinate Legal, Tax & Immigration Advisors', 
    text: `To ensure a seamless transition, Samuel connects you with a vetted network of cross-border professionals—including immigration attorneys for visas, U.S. CPAs for dual-country tax strategy, and cross-border financial planners.`,
    img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&q=80'
  },
  { 
    title: 'Tour SoCal Properties (In-Person or Remotely)', 
    text: `Whether you travel to Southern California for private viewings or require detailed virtual walkthroughs, Samuel evaluates layout utility, structural integrity, HOA regulations, and neighborhood amenities across Greater Los Angeles and SoCal corridors.`,
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=80'
  },
  { 
    title: 'Structure a Strategic U.S. Purchase Offer', 
    text: `Once you select a property, Samuel analyzes recent local comparable sales and market demand to craft a competitive offer. He navigates California purchase agreements, contingency timelines, and deposit terms to protect your investment.`,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80'
  },
  { 
    title: 'Manage Escrow, Inspections & Moving Logistics', 
    text: `In California, transactions close through Escrow. During this period, home inspections, title verification, vehicle import coordination, and cross-border moving logistics are executed, ensuring a smooth handoff on key release day.`,
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&q=80'
  }
];

export default function BuyersGuidePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] lg:h-[90vh] flex flex-col items-center justify-center bg-[#2b4b46] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80" 
            alt="Southern California Homebuyer Guidance"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b4b46]/90 via-[#2b4b46]/75 to-[#2b4b46]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full mt-10">
          <div className="inline-block bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-md">
            Homebuyers & Investors
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-fade-up uppercase leading-[1.1]">
            Buyer's Guide
          </h1>
          <p className="mt-4 text-[#F9F6F0]/90 text-base md:text-xl font-light max-w-2xl mx-auto">
            A strategic, step-by-step roadmap to purchasing real estate in Southern California.
          </p>
          <div className="mt-8">
            <Link 
              href="/contact?intent=Book%20a%20Buyer%20Consultation"
              className="inline-flex items-center gap-2 bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl"
            >
              <Calendar size={15} /> Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <div className="bg-[#2b4b46]/10 text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm border border-[#2b4b46]/20">
            Real Estate Framework
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2b4b46] tracking-tight">
            Clear Guidance at Every Step
          </h2>
          <div className="w-12 h-[2px] bg-[#e9b3b0] mx-auto my-6"></div>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
            Purchasing property is one of the most important decisions you will make. Samuel Muttiah provides a clear, dual-market framework so you navigate the U.S. property market with complete confidence.
          </p>
        </div>
      </section>

      {/* 3. EDITORIAL MATRIX (Alternating Z-Pattern Layout) */}
      <section className="w-full">
        {buyerSteps.map((step, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? 'bg-[#F9F6F0]' : 'bg-white'}`}>
              
              {/* Media Frame Container */}
              <div className={`relative min-h-[380px] lg:min-h-[520px] group overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={step.img} 
                  alt={step.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Text Panel Container */}
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

      {/* 4. ACTIONS FOOTER WITH CORE BUYER CTA */}
      <section className="py-20 bg-white border-t border-stone-200/80 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2b4b46] tracking-tight uppercase mb-8">
            Ready to Plan Your SoCal Move?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact?intent=Book%20a%20Buyer%20Consultation" 
              className="inline-flex items-center justify-center gap-2 bg-[#2b4b46] text-white hover:bg-[#1f3733] px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md font-sans"
            >
              <Calendar size={16} /> Book a Consultation
            </Link>
            <Link 
              href="/all-homes" 
              className="inline-flex items-center justify-center gap-2 border border-[#2b4b46] text-[#2b4b46] hover:bg-[#2b4b46] hover:text-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm font-sans"
            >
              Browse SoCal Properties <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALCULATOR CTA SECTION */}
      <section className="py-20 bg-[#2b4b46] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#e9b3b0] mb-4">Financial Planning</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            Want to Estimate Your U.S. Mortgage Payments?
          </h2>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Use our calculator to estimate monthly mortgage payments, down payment requirements, and estimated closing costs for SoCal properties.
          </p>
          <Link 
            href="/calculator" 
            className="inline-flex items-center gap-3 bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-xl"
          >
            <Calculator size={16} /> Launch Mortgage Calculator
          </Link>
        </div>
      </section>

      {/* 6. SAMUEL SPOTLIGHT CALLOUT HERO */}
      <section className="relative h-[480px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1400&q=80" 
            alt="Work with Samuel Muttiah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2b4b46]/85" />
        </div>
        <div className="relative z-10 px-6 max-w-2xl mx-auto">
          <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5 w-fit mx-auto shadow-sm">
            Keller Williams Beverly Hills
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Partner with Samuel Muttiah
          </h2>
          <p className="text-[#F9F6F0]/90 text-sm md:text-base leading-relaxed mb-8 font-light">
            With over 10 years of dual-market experience in the GTA and Southern California, Samuel protects your interests, simplifies cross-border logistics, and guides you to the right property.
          </p>
          <Link 
            href="/contact?intent=Book%20a%20Buyer%20Consultation" 
            className="bg-[#e9b3b0] text-[#2b4b46] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all inline-block shadow-xl"
          >
            Book Your Strategy Call
          </Link>
        </div>
      </section>

      {/* Global Contact Form */}
      <GetInTouch dark={true} />
    </>
  );
}

export const dynamic = "force-dynamic";