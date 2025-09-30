"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Service Icon Components
const ConsultingIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.5 2 7.5 4 7.5 6.5C6 6.5 4.5 8 4.5 10C3 10 2 11.5 2 13.5C2 16 3.5 18 6 18.5V22H18V18.5C20.5 18 22 16 22 13.5C22 11.5 21 10 19.5 10C19.5 8 18 6.5 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14H9M12 14H13M16 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PrototypeIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5C3 18 3 20 3 20S5 20 6.5 18.5L9 16L8 13L5 12L4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15L8 11L17.29 1.71C17.6806 1.31947 18.2131 1.10073 18.77 1.10073C19.3269 1.10073 19.8594 1.31947 20.25 1.71C20.6405 2.10053 20.8593 2.63307 20.8593 3.19C20.8593 3.74693 20.6405 4.27947 20.25 4.67L11 14L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11L6 8C6 8 9 3 15 3L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 13L16 16C16 16 21 13 21 7L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Process Icons
const DiscoveryIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesignIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeployIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14L12 14L11 22L21 10L12 10L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10H12L8 6L4 10V20H20V10H18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 10V6L18 2L22 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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

  const services = [
    {
      title: t("services.consulting.title"),
      content: t("services.consulting.content"),
      tags: [t("services.consulting.tag1"), t("services.consulting.tag2"), t("services.consulting.tag3")],
      icon: <ConsultingIcon />,
      gradient: "from-cyan-500 to-blue-600",
      align: "left"
    },
    {
      title: t("services.prototyping.title"),
      content: t("services.prototyping.content"),
      tags: [t("services.prototyping.tag1"), t("services.prototyping.tag2"), t("services.prototyping.tag3")],
      icon: <PrototypeIcon />,
      gradient: "from-purple-500 to-pink-600",
      align: "right"
    },
    {
      title: t("services.product.title"),
      content: t("services.product.content"),
      tags: [t("services.product.tag1"), t("services.product.tag2"), t("services.product.tag3")],
      icon: <ProductIcon />,
      gradient: "from-orange-500 to-red-600",
      align: "left"
    }
  ];

  const processSteps = [
    {
      title: t("services.approach.discovery"),
      desc: t("services.approach.discovery.desc"),
      icon: <DiscoveryIcon />,
      gradient: "from-green-500 to-teal-500",
      number: "01"
    },
    {
      title: t("services.approach.design"),
      desc: t("services.approach.design.desc"),
      icon: <DesignIcon />,
      gradient: "from-blue-500 to-indigo-500",
      number: "02"
    },
    {
      title: t("services.approach.deploy"),
      desc: t("services.approach.deploy.desc"),
      icon: <DeployIcon />,
      gradient: "from-yellow-500 to-orange-500",
      number: "03"
    },
    {
      title: t("services.approach.scale"),
      desc: t("services.approach.scale.desc"),
      icon: <ScaleIcon />,
      gradient: "from-purple-500 to-pink-500",
      number: "04"
    }
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-black via-gray-950 to-black py-24 md:py-32 overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section title with enhanced styling */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              {t("services.title")}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full" />
          </div>

          {/* Services with same layout as AboutSection */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Modern card design matching AboutSection */}
                <div className="relative w-full max-w-4xl mx-auto">
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`} />
                  
                  {/* Card container with glass morphism */}
                  <div className="relative overflow-hidden bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    
                    {/* Floating gradient orb */}
                    <div className={`absolute ${service.align === 'right' ? 'left-0' : 'right-0'} top-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-1000`} />
                    
                    {/* Animated accent line */}
                    <div className={`absolute ${service.align === 'right' ? 'right-0' : 'left-0'} top-0 bottom-0 w-[1px] bg-gradient-to-b ${service.gradient} opacity-30`} />
                    
                    {/* Content */}
                    <div className="relative p-8 md:p-12">
                      <div className="flex flex-col gap-6">
                        {/* Service icon with title */}
                        <div className={`flex items-start gap-6 ${
                          service.align === 'right' ? 'flex-row-reverse' : ''
                        }`}>
                          {/* Service Icon with gradient background */}
                          <div className="relative flex-shrink-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-lg opacity-20`} />
                            <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500`}>
                              {service.icon}
                            </div>
                          </div>
                          
                          <div className={`flex-1 ${
                            service.align === 'right' ? 'text-right' : 'text-left'
                          }`}>
                            <h3 className={`text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                              {service.title}
                            </h3>
                            <div className={`h-[2px] w-24 bg-gradient-to-r ${service.gradient} opacity-60 ${
                              service.align === 'right' ? 'ml-auto' : ''
                            }`} />
                          </div>
                        </div>
                        
                        {/* Text content with better typography */}
                        <p className={`text-gray-300 text-sm md:text-base leading-relaxed ${
                          service.align === 'right' ? 'text-right' : 'text-left'
                        }`} style={{ whiteSpace: 'pre-line' }}>
                          {service.content}
                        </p>
                        
                        {/* Modern tags with hover effect */}
                        <div className={`flex flex-wrap gap-3 ${
                          service.align === 'right' ? 'justify-end' : 'justify-start'
                        }`}>
                          {service.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="group/tag relative"
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-lg opacity-0 group-hover/tag:opacity-10 blur transition-all duration-300`} />
                              <span className="relative px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs md:text-sm font-medium text-white/80 group-hover/tag:text-white group-hover/tag:border-white/30 transition-all duration-300">
                                {tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
                      <div className={`h-full bg-gradient-to-r ${service.gradient} transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section with creative hexagon layout */}
          <div className="relative mt-32 pt-20 border-t border-gray-800">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
              {t("services.approach")}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="relative h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
                    {/* Number background */}
                    <div className={`absolute -top-4 -right-4 text-8xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-5`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8">
                      <div className="mb-4">
                        <h4 className={`text-xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-3`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-[0.01] pointer-events-none`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}