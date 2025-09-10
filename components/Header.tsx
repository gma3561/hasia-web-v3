"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-green-500 font-mono text-[4px] leading-[1] whitespace-pre hover:text-green-400 transition-colors">
            {`██╗  ██╗ █████╗ ███████╗██╗ █████╗ 
██║  ██║██╔══██╗██╔════╝██║██╔══██╗
███████║███████║███████╗██║███████║
██╔══██║██╔══██║╚════██║██║██╔══██║
██║  ██║██║  ██║███████║██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝`}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#about" 
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link 
              href="#services" 
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("nav.services")}
            </Link>
            <Link 
              href="#contact" 
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("nav.contact")}
            </Link>
            
            {/* Modern Language Toggle with sliding effect */}
            <button
              onClick={() => setLanguage(language === "EN" ? "KO" : "EN")}
              className="relative h-8 w-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden group"
            >
              <div className={`absolute inset-y-0 w-8 bg-gradient-to-r from-primary to-primary-light rounded-full transition-transform duration-300 ${language === "EN" ? "translate-x-8" : "translate-x-0"}`} />
              <div className="relative flex items-center justify-between h-full px-2 text-xs font-medium">
                <span className={`transition-colors duration-300 ${language === "KO" ? "text-white" : "text-white/60"}`}>
                  KO
                </span>
                <span className={`transition-colors duration-300 ${language === "EN" ? "text-white" : "text-white/60"}`}>
                  EN
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-3">
            {/* Modern Language Toggle for Mobile with sliding effect */}
            <button
              onClick={() => setLanguage(language === "EN" ? "KO" : "EN")}
              className="relative h-7 w-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-y-0 w-7 bg-gradient-to-r from-primary to-primary-light rounded-full transition-transform duration-300 ${language === "EN" ? "translate-x-7" : "translate-x-0"}`} />
              <div className="relative flex items-center justify-between h-full px-1.5 text-[10px] font-medium">
                <span className={`transition-colors duration-300 ${language === "KO" ? "text-white" : "text-white/60"}`}>
                  KO
                </span>
                <span className={`transition-colors duration-300 ${language === "EN" ? "text-white" : "text-white/60"}`}>
                  EN
                </span>
              </div>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="메뉴"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="#about" 
                className="text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="#services" 
                className="text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link 
                href="#contact" 
                className="text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}