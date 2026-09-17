"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

const navItems = [
  // --- LEFT WING MENUS ---
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Buyer Guide", href: "/buyers-guide" },
  
  // --- RIGHT WING MENUS ---
  { label: "Seller Guide", href: "/sellers-guide" },
  { 
    label: "Resources", 
    subItems: [
      { label: "Mortgage Calculator", href: "/calculator" },
     
    ] 
  },
];

export default function NavbarV1({ scrolled, isHome }: any) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();

  const leftLinks = navItems.slice(0, 3);
  const rightLinks = navItems.slice(3, 5);

  const textHoverAccent = "hover:text-[#e9b3b0]";
  const textActiveAccent = "text-[#e9b3b0]";

  const stickyStyles = "bg-[#2b4b46]/95 backdrop-blur-md rounded-2xl lg:rounded-full shadow-2xl py-2.5 lg:py-3 mt-2 lg:mt-3 max-w-[calc(100%-1.25rem)] lg:max-w-[calc(100%-2rem)] mx-auto left-2.5 right-2.5 lg:left-4 lg:right-4 border border-white/15 text-white";
  
  const defaultStyles = isHome 
    ? "bg-transparent text-white py-4 lg:py-5 left-0 right-0" 
    : "bg-[#2b4b46] text-white border-b border-white/10 py-3.5 lg:py-5 left-0 right-0";

  const toggleMobileSubMenu = (label: string) => {
    setOpenMobileMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className={`fixed top-0 z-50 transition-all duration-300 ${scrolled ? stickyStyles : defaultStyles}`}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 lg:h-20 relative">
          
          {/* DESKTOP SPLIT GRID */}
          <div className="hidden lg:grid grid-cols-12 w-full items-center">
            
            {/* LEFT WING */}
            <nav className="col-span-5 flex items-center gap-5 xl:gap-8 justify-end pr-4 xl:pr-8">
              {leftLinks.map((item) => (
                item.subItems ? (
                  <div key={item.label} className="relative group">
                    <button className={`flex items-center gap-1.5 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 text-white/90 ${textHoverAccent}`}>
                      {item.label} <ChevronDown size={14} className="transition-transform duration-300 group-hover:-rotate-180 text-[#e9b3b0]" />
                    </button>
                    <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-[#1f3733] rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[210px] flex flex-col gap-1 text-left">
                        {item.subItems.map((sub) => (
                          <Link 
                            key={sub.label} 
                            href={sub.href} 
                            className="hover:bg-[#2b4b46] px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={item.label} 
                    href={item.href!} 
                    className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 text-white/90 ${textHoverAccent} ${pathname === item.href ? textActiveAccent : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* DESKTOP LOGO (CLEAN IMAGE DISPLAY) */}
            <div className="col-span-2 flex justify-center z-10">
              <Link href="/" className="flex items-center justify-center group">
                {BRAND_CONFIG.meta.logoSvgPath ? (
                  <div className="relative h-14 lg:h-16 w-auto max-w-[260px] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-85">
                    <img 
                      src={BRAND_CONFIG.meta.logoSvgPath} 
                      alt={`${BRAND_CONFIG.meta.siteName} Logo`}
                      className="h-full w-auto max-h-full object-contain" 
                    />
                  </div>
                ) : (
                  <span className="text-xl lg:text-2xl font-bold tracking-widest font-display text-white transition-colors duration-300">
                    SAMUEL MUTTIAH<span className="text-[#e9b3b0]">.</span>
                  </span>
                )}
              </Link>
            </div>

            {/* RIGHT WING */}
            <nav className="col-span-5 flex items-center pl-4 xl:pl-8 justify-between w-full">
              <div className="flex items-center gap-5 xl:gap-8">
                {rightLinks.map((item) => (
                  item.subItems ? (
                    <div key={item.label} className="relative group">
                      <button className={`flex items-center gap-1.5 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 text-white/90 ${textHoverAccent}`}>
                        {item.label} <ChevronDown size={14} className="transition-transform duration-300 group-hover:-rotate-180 text-[#e9b3b0]" />
                      </button>
                      <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        <div className="bg-[#1f3733] rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[210px] flex flex-col gap-1 text-left">
                          {item.subItems.map((sub) => (
                            <Link 
                              key={sub.label} 
                              href={sub.href} 
                              className="hover:bg-[#2b4b46] px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors text-white/90 hover:text-white"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      key={item.label} 
                      href={item.href!} 
                      className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 text-white/90 ${textHoverAccent} ${pathname === item.href ? textActiveAccent : ""}`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>

              {/* Action Button */}
              <Link 
                href="/contact" 
                className={`text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 border border-white/30 text-[#2b4b46] bg-[#e9b3b0] hover:bg-white shadow-sm whitespace-nowrap font-sans ${pathname === "/contact" ? "ring-2 ring-white" : ""}`}
              >
                Contact
              </Link>
            </nav>

          </div>

          {/* MOBILE RESPONSIVE HEADER */}
          <div className="flex lg:hidden items-center justify-between w-full px-2">
            <Link href="/" className="flex items-center group shrink-0">
              {BRAND_CONFIG.meta.logoSvgPath ? (
                <div className="relative h-10 sm:h-14 w-auto max-w-[180px] sm:max-w-[220px] flex items-center transition-opacity duration-300 group-hover:opacity-85">
                  <img 
                    src={BRAND_CONFIG.meta.logoSvgPath} 
                    alt={`${BRAND_CONFIG.meta.siteName} Mobile Logo`}
                    className="h-full w-auto max-h-full object-contain" 
                  />
                </div>
              ) : (
                <span className="text-lg sm:text-xl font-bold tracking-widest font-display text-white">
                  SAMUEL MUTTIAH<span className="text-[#e9b3b0]">.</span>
                </span>
              )}
            </Link>
            
            <button 
              className="p-2 text-white hover:text-[#e9b3b0] transition-colors shrink-0 flex items-center justify-center" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div className="lg:hidden px-6 py-8 border-t border-white/10 shadow-2xl bg-[#2b4b46] text-white overflow-y-auto max-h-[85vh] mt-2 rounded-b-2xl">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-2">
                {item.subItems ? (
                  <>
                    <button 
                      onClick={() => toggleMobileSubMenu(item.label)} 
                      className="flex items-center justify-between w-full font-semibold text-xs uppercase tracking-wider py-3 text-white/90"
                    >
                      {item.label} 
                      <ChevronDown size={16} className={`transition-transform duration-300 ${openMobileMenus[item.label] ? "-rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openMobileMenus[item.label] ? "max-h-64 opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-col gap-2.5 pl-4 border-l border-white/20 ml-2 mt-1">
                        {item.subItems.map((sub) => (
                          <Link 
                            key={sub.label} 
                            href={sub.href} 
                            className="text-xs font-normal tracking-wide text-stone-300 hover:text-white text-left" 
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.href!} 
                    className="block font-semibold text-xs uppercase tracking-wider py-3 text-white/90 hover:text-white text-left" 
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/contact" 
              className="text-[#2b4b46] bg-[#e9b3b0] hover:bg-white text-xs font-semibold uppercase tracking-wider text-center py-4 rounded-full mt-6 transition-all font-sans" 
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )} 
    </header>
  );
}