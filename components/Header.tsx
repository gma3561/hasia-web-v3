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
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "EN" ? "KO" : "EN")}
              className="flex items-center gap-1 px-3 py-1 border border-white/30 rounded-full hover:border-white/60 transition-colors text-sm"
            >
              <span className={language === "EN" ? "text-white/60" : "font-bold text-white"}>KO</span>
              <span className="text-white/40">|</span>
              <span className={language === "EN" ? "font-bold text-white" : "text-white/60"}>EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="메뉴"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
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
              
              {/* Language Toggle for Mobile */}
              <button
                onClick={() => setLanguage(language === "EN" ? "KO" : "EN")}
                className="flex items-center justify-center gap-1 px-3 py-2 border border-white/30 rounded-full hover:border-white/60 transition-colors text-sm"
              >
                <span className={language === "KO" ? "font-bold text-white" : "text-white/60"}>KO</span>
                <span className="text-white/40">|</span>
                <span className={language === "EN" ? "font-bold text-white" : "text-white/60"}>EN</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}