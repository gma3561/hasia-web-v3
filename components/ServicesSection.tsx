"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Service Icon Components
const ConsultingIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11H3V2L9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 7L15 2V11H9L15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 7L21 2V11H15L21 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 22H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PrototypeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 9H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 15H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9.5L12 12L17 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      pattern: "diagonal",
      layout: "zigzag-left"
    },
    {
      title: t("services.prototyping.title"),
      content: t("services.prototyping.content"),
      tags: [t("services.prototyping.tag1"), t("services.prototyping.tag2"), t("services.prototyping.tag3")],
      icon: <PrototypeIcon />,
      gradient: "from-purple-500 to-pink-600",
      pattern: "dots",
      layout: "zigzag-right"
    },
    {
      title: t("services.product.title"),
      content: t("services.product.content"),
      tags: [t("services.product.tag1"), t("services.product.tag2"), t("services.product.tag3")],
      icon: <ProductIcon />,
      gradient: "from-orange-500 to-red-600",
      pattern: "waves",
      layout: "zigzag-left"
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
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-cyan-500/20 rotate-45 animate-float" />
        <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-float delay-700" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-orange-500/20 animate-float delay-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
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

          {/* Services with creative zigzag layout */}
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 
                  service.layout === 'zigzag-left' ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative flex ${service.layout === 'zigzag-right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`relative max-w-5xl w-full ${service.layout === 'zigzag-right' ? 'text-right' : 'text-left'}`}>
                    {/* Main service container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/30 backdrop-blur-xl">
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.02]`} />
                      
                      {/* Pattern background */}
                      <div className="absolute inset-0 opacity-5">
                        {service.pattern === 'diagonal' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`
                          }} />
                        )}
                        {service.pattern === 'dots' && (
                          <div className="w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                          }} />
                        )}
                        {service.pattern === 'waves' && (
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <pattern id={`wave-${index}`} x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                              <path d="M0 10 Q 25 0 50 10 T 100 10" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#wave-${index})`} />
                          </svg>
                        )}
                      </div>
                      
                      {/* Floating shape decoration */}
                      <div className={`absolute ${service.layout === 'zigzag-right' ? '-left-10' : '-right-10'} top-1/2 -translate-y-1/2`}>
                        <div className={`w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl rounded-full`} />
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-10 md:p-14">
                        <div className={`flex items-start gap-8 ${service.layout === 'zigzag-right' ? 'flex-row-reverse' : ''}`}>
                          {/* Icon with enhanced container */}
                          <div className="flex-shrink-0">
                            <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl`}>
                              {service.icon}
                            </div>
                          </div>
                          
                          {/* Text content */}
                          <div className="flex-1">
                            <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
                              {service.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              {service.content}
                            </p>
                            <div className={`flex flex-wrap gap-3 ${service.layout === 'zigzag-right' ? 'justify-end' : ''}`}>
                              {service.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className={`px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-10 text-white rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-colors duration-300`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated accent line */}
                      <div className={`absolute ${service.layout === 'zigzag-right' ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 bg-gradient-to-b ${service.gradient} opacity-30`} />
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
                    <div className={`absolute -top-4 -right-4 text-8xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-10`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-3`}>
                            {step.title}
                          </h4>
                          <p className="text-gray-400 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-[0.02] pointer-events-none`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}