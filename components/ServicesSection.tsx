"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
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

    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Only gradient, no grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 filter blur-[200px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {t("services.title")}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-primary-light" />
          </div>

          {/* Services content - with card style */}
          <div className="space-y-10">
            {/* AI Transformation Consulting */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-left">
                  {t("services.consulting.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {t("services.consulting.content")}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.consulting.tag1")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.consulting.tag2")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.consulting.tag3")}</span>
                </div>
              </div>
            </div>

            {/* Rapid Prototyping */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-right">
                  {t("services.prototyping.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {t("services.prototyping.content")}
                </p>
                <div className="flex flex-wrap gap-3 text-sm justify-end">
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.prototyping.tag1")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.prototyping.tag2")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.prototyping.tag3")}</span>
                </div>
              </div>
            </div>

            {/* AI Product Development */}
            <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4 text-left">
                  {t("services.product.title")}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {t("services.product.content")}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.product.tag1")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.product.tag2")}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full">{t("services.product.tag3")}</span>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center">
                {t("services.approach")}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Discovery */}
                <div className="relative p-6 bg-gradient-to-br from-white/[0.12] to-white/[0.08] rounded-xl">
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">01</div>
                  <h4 className="text-xl font-semibold text-primary-light mb-3 relative z-10">{t("services.approach.discovery")}</h4>
                  <p className="text-white/70 relative z-10">
                    {t("services.approach.discovery.desc")}
                  </p>
                </div>

                {/* Design */}
                <div className="relative p-6 bg-gradient-to-br from-white/[0.12] to-white/[0.08] rounded-xl">
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">02</div>
                  <h4 className="text-xl font-semibold text-primary-light mb-3 relative z-10">{t("services.approach.design")}</h4>
                  <p className="text-white/70 relative z-10">
                    {t("services.approach.design.desc")}
                  </p>
                </div>

                {/* Deploy */}
                <div className="relative p-6 bg-gradient-to-br from-white/[0.12] to-white/[0.08] rounded-xl">
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">03</div>
                  <h4 className="text-xl font-semibold text-primary-light mb-3 relative z-10">{t("services.approach.deploy")}</h4>
                  <p className="text-white/70 relative z-10">
                    {t("services.approach.deploy.desc")}
                  </p>
                </div>

                {/* Scale */}
                <div className="relative p-6 bg-gradient-to-br from-white/[0.12] to-white/[0.08] rounded-xl">
                  <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">04</div>
                  <h4 className="text-xl font-semibold text-primary-light mb-3 relative z-10">{t("services.approach.scale")}</h4>
                  <p className="text-white/70 relative z-10">
                    {t("services.approach.scale.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}