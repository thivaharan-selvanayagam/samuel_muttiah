"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/config/brand";

const lookingToOptions = [
  "Buy in Southern California",
  "Sell Canadian Property",
  "Cross-Border Investment",
  "Relocation Consultation",
  "Get a Home Evaluation",
  "Other"
];

const timelineOptions = [
  "Immediately",
  "1–3 months",
  "3–6 months",
  "Just researching"
];

export default function GetInTouch({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={`py-20 lg:py-28 ${dark ? "bg-[#2b4b46] text-white" : "bg-[#FDFBF7] text-[#2b4b46]"} relative z-20`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: EDITORIAL HEADING & COPY */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <div className="bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6 w-fit shadow-sm">
              Contact Samuel Muttiah
            </div>

            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6 ${dark ? "text-white" : "text-[#2b4b46]"}`}>
              Let's Talk About Your Next Move
            </h2>

            <p className={`text-sm md:text-base leading-relaxed font-normal mb-8 ${dark ? "text-stone-300" : "text-stone-600"}`}>
              Whether you are purchasing your home in Southern California, selling property in Canada, or planning a full cross-border transition, Samuel is here to guide you every step of the way.
            </p>

            {/* HIGHER CONTRAST CALLOUT BOX */}
            <div className={`p-6 rounded-2xl border ${
              dark 
                ? "bg-slate-950/60 border-white/10 text-white" 
                : "bg-white border-stone-200/80 shadow-sm text-slate-900"
            }`}>
              <h4 className={`font-bold text-sm md:text-base mb-2 ${dark ? "text-white" : "text-[#2b4b46]"}`}>
                Cross-Border Relocation Expertise
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${dark ? "text-stone-300" : "text-stone-600"}`}>
                Every submission is reviewed personally by Samuel Muttiah. He will connect with you directly to evaluate your specific goals, legal logistics, and timeline.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: LEAD QUALIFICATION FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 rounded-3xl border border-stone-200/80 shadow-xl text-slate-900">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#2b4b46]/10 flex items-center justify-center mx-auto mb-4 border border-[#2b4b46]/20">
                  <svg className="w-7 h-7 text-[#2b4b46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#2b4b46]">Thank You!</h3>
                <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto">
                  We have received your details. Samuel will be in touch shortly to discuss your cross-border real estate plans.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* FIRST & LAST NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Jane" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="(323) 493-2617" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                    />
                  </div>
                </div>

                {/* LEAD QUALIFICATION: I'M LOOKING TO */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    I'm Looking To *
                  </label>
                  <select 
                    required 
                    defaultValue="" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                  >
                    <option value="" disabled>Select an option</option>
                    {lookingToOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* LEAD QUALIFICATION: TIMELINE */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Timeline *
                  </label>
                  <select 
                    required 
                    defaultValue="" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                  >
                    <option value="" disabled>Select your timeline</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    How Can We Help? *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell us a bit about your property preferences, target SoCal area, or cross-border relocation goals..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all resize-none"
                  />
                </div>

                <p className="text-[10px] text-slate-500 leading-relaxed">
                  By submitting this form, you agree to be contacted by Samuel Muttiah (Keller Williams Beverly Hills) via email, call, or text regarding your real estate inquiry.
                </p>

                {/* SUBMIT BUTTON */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#2b4b46] text-white hover:bg-[#1f3733] min-h-[52px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center font-sans"
                >
                  {loading ? "Sending..." : "Let's Talk About Your Next Move"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}