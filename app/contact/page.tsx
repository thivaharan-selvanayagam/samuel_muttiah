"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Phone, Mail, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

const lookingToOptions = [
  "Buy in Southern California",
  "Sell Canadian Property",
  "Cross-Border Relocation",
  "U.S. Real Estate Investment",
  "Get a Home Evaluation",
  "Other"
];

const timelineOptions = [
  "Immediately",
  "1–3 months",
  "3–6 months",
  "Just researching"
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const intentParam = searchParams.get("intent") || "";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lookingTo: "",
    timeline: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto-select "I'm Looking To" if intent parameter is present in URL
  useEffect(() => {
    if (intentParam) {
      const matched = lookingToOptions.find(
        (opt) => opt.toLowerCase() === intentParam.toLowerCase()
      );
      if (matched) {
        setForm((prev) => ({ ...prev, lookingTo: matched }));
      }
    }
  }, [intentParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80">
      
      {/* LEFT SIDE: SAMUEL CREDENTIALS PANEL */}
      <div className="w-full lg:w-5/12 bg-[#2b4b46] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden flex flex-col justify-between">
        
        <div className="relative z-10">
          <div className="inline-block bg-[#e9b3b0] text-[#2b4b46] text-[10px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Transition Realtor
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 uppercase">
            Samuel Muttiah
          </h2>
          <p className="text-[#e9b3b0] text-xs font-semibold uppercase tracking-wider mb-6">
            Canada to Southern California
          </p>

          <p className="text-[#F9F6F0]/85 text-xs sm:text-sm leading-relaxed mb-10 font-light">
            Guiding your move with 10+ years of dual-market experience, clear cross-border strategies, and dedicated negotiation advocacy.
          </p>

          {/* Direct Info Channels */}
          <div className="flex flex-col gap-6">
            <a href={`tel:${BRAND_CONFIG.agent.phoneRaw}`} className="flex items-center gap-4 group w-fit">
              <div className="w-11 h-11 rounded-full bg-slate-950/40 border border-white/15 flex items-center justify-center text-[#e9b3b0] group-hover:bg-[#e9b3b0] group-hover:text-[#2b4b46] transition-all shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-stone-300 tracking-wider block mb-0.5">Call / Text</span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-[#e9b3b0] transition-colors">
                  {BRAND_CONFIG.agent.phone}
                </span>
              </div>
            </a>

            <a href={`mailto:${BRAND_CONFIG.agent.email}`} className="flex items-center gap-4 group w-fit">
              <div className="w-11 h-11 rounded-full bg-slate-950/40 border border-white/15 flex items-center justify-center text-[#e9b3b0] group-hover:bg-[#e9b3b0] group-hover:text-[#2b4b46] transition-all shrink-0">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-stone-300 tracking-wider block mb-0.5">Email</span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-[#e9b3b0] transition-colors">
                  {BRAND_CONFIG.agent.email}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-full bg-slate-950/40 border border-white/15 flex items-center justify-center text-[#e9b3b0] shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-300 tracking-wider block mb-0.5">Primary Markets</span>
                <span className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed block">
                  Beverly Hills, Greater Los Angeles & SoCal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brokerage Affiliation */}
        <div className="mt-12 pt-6 border-t border-white/15 relative z-10 flex items-center gap-3 text-left">
          <Building2 className="text-[#e9b3b0]" size={22} />
          <div>
            <span className="text-[9px] uppercase font-semibold tracking-widest text-stone-300 block mb-0.5">Brokerage Affiliation</span>
            <span className="text-xs font-semibold tracking-wider text-white">{BRAND_CONFIG.brokerage.name}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: LEAD QUALIFICATION FORM */}
      <div className="w-full lg:w-7/12 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left">
        {submitted ? (
          <div className="bg-[#FDFBF7] border border-stone-200/80 rounded-3xl p-10 text-center mx-auto w-full animate-fade-in">
            <div className="w-14 h-14 bg-[#2b4b46]/10 text-[#2b4b46] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#2b4b46]/20">
              <CheckCircle2 size={30} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#2b4b46] mb-2">Inquiry Received</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md mx-auto font-normal">
              Thank you for reaching out. Samuel Muttiah will personally review your details and connect with you shortly to discuss your cross-border strategy.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                setForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  lookingTo: "",
                  timeline: "",
                  message: ""
                });
              }}
              className="bg-[#2b4b46] text-white hover:bg-[#1f3733] text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full transition-colors font-sans"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2b4b46] tracking-tight mb-1">
                Direct Inquiry
              </h2>
              <p className="text-stone-500 text-xs font-normal">
                Complete the fields below to schedule your private cross-border consultation.
              </p>
            </div>

            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  First Name *
                </label>
                <input 
                  type="text" 
                  required 
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Jane"
                  className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Doe"
                  className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                />
              </div>
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  required 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  required 
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(323) 493-2617"
                  className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
                />
              </div>
            </div>

            {/* REQUIRED QUESTION 1: I'M LOOKING TO */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                I'm Looking To *
              </label>
              <select 
                required 
                value={form.lookingTo}
                onChange={(e) => setForm({ ...form, lookingTo: e.target.value })}
                className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
              >
                <option value="" disabled>Select an option</option>
                {lookingToOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* REQUIRED QUESTION 2: TIMELINE */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Timeline *
              </label>
              <select 
                required 
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all"
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
                How Can Samuel Help You? *
              </label>
              <textarea 
                rows={4} 
                required 
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your target SoCal neighborhood, cross-border timeline, or specific questions..."
                className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b46] transition-all resize-none"
              />
            </div>

            <p className="text-[10px] text-stone-400 leading-relaxed">
              By submitting this form, you agree to be contacted by Samuel Muttiah (Keller Williams Beverly Hills) via email, call, or text regarding your real estate inquiry.
            </p>

            {/* SUBMIT CTA */}
            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#2b4b46] text-white hover:bg-[#1f3733] min-h-[52px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center font-sans self-start w-full sm:w-auto"
            >
              {loading ? "Sending..." : "Let's Talk About Your Next Move"}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#2b4b46] relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1600&auto=format&fit=crop" 
            alt="Southern California Contact Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b4b46]/90 via-[#2b4b46]/75 to-[#2b4b46]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-stone-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-stone-400">/</span>
            <span className="text-white">Contact</span>
          </div>

          <div className="inline-block bg-[#e9b3b0] text-[#2b4b46] text-[10px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-4 shadow-md">
            Canada to Southern California
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight uppercase mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-[#F9F6F0]/85 text-sm md:text-base leading-relaxed font-light">
              Have questions about cross-border relocation, buying in Southern California, or selling Canadian property? Connect directly with Samuel Muttiah.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPLIT CONTACT CARD */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-20 -mt-20 lg:-mt-24 pb-24">
        <Suspense fallback={
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <p className="text-stone-500 text-sm">Loading contact form...</p>
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </div>

    </div>
  );
}

export const dynamic = "force-dynamic";