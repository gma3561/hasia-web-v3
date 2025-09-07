"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 filter blur-[200px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {t("about.title")}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-primary-light" />
          </div>

          {/* Main content - with card style */}
          <div className="space-y-10">
            {/* Company intro - title left aligned */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-left">
                  {t("about.card1.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t("about.card1.content")}
                </p>
              </div>
            </div>

            {/* Philosophy - title right aligned */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-right">
                  {t("about.card2.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
                  {t("about.card2.content")}
                </p>
              </div>
            </div>

            {/* Team structure - title left aligned */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-left">
                  {t("about.card3.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t("about.card3.content")}
                </p>
              </div>
            </div>

            {/* Results - title right aligned */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-right">
                  {t("about.card4.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t("about.card4.content")}
                </p>
              </div>
            </div>

            {/* Future of work - title left aligned */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-left">
                  {t("about.card5.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t("about.card5.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}