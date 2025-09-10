"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Icon components - new simplified icons
const SparkleIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C15.314 2 18 4.686 18 8C18 10.165 16.944 12.062 15.333 13.2V17C15.333 17.368 15.035 17.667 14.667 17.667H9.333C8.965 17.667 8.667 17.368 8.667 17V13.2C7.056 12.062 6 10.165 6 8C6 4.686 8.686 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GearsIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiamondIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 9H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3L8 9L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3L16 9L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfinityIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.178 8C19.784 8 21 9.216 21 10.822C21 12.428 19.784 13.644 18.178 13.644C17.023 13.644 16.105 13.003 15.498 12C14.891 10.997 13.973 10.356 12.818 10.356C11.212 10.356 10 11.572 10 13.178C10 14.784 11.216 16 12.822 16C13.977 16 14.895 15.359 15.502 14.356C16.109 13.353 17.027 12.712 18.182 12.712C19.788 12.712 21.004 11.496 21.004 9.89C21.004 8.284 19.788 7.068 18.182 7.068C17.027 7.068 16.109 7.709 15.502 8.712C14.895 9.715 13.977 10.356 12.822 10.356C11.216 10.356 10 9.14 10 7.534C10 5.928 11.216 4.712 12.822 4.712C13.977 4.712 14.895 5.353 15.502 6.356" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.822 16C4.216 16 3 14.784 3 13.178C3 11.572 4.216 10.356 5.822 10.356C6.977 10.356 7.895 10.997 8.502 12C9.109 13.003 10.027 13.644 11.182 13.644C12.788 13.644 14.004 12.428 14.004 10.822C14.004 9.216 12.788 8 11.182 8C10.027 8 9.109 8.641 8.502 9.644" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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

  const cards = [
    {
      title: t("about.card1.title"),
      content: t("about.card1.content"),
      tags: ["AI Native", "3 Humans", "∞ Agents"],
      icon: <SparkleIcon />,
      gradient: "from-blue-500 to-cyan-500",
      shape: "hexagon",
      align: "left"
    },
    {
      title: t("about.card2.title"),
      content: t("about.card2.content"),
      tags: ["No-Code", "For Everyone", "Innovation"],
      icon: <LightbulbIcon />,
      gradient: "from-purple-500 to-pink-500",
      shape: "circle",
      align: "right"
    },
    {
      title: t("about.card3.title"),
      content: t("about.card3.content"),
      tags: ["Hybrid Intelligence", "24/7", "Perfect Division"],
      icon: <GearsIcon />,
      gradient: "from-green-500 to-teal-500",
      shape: "diamond",
      align: "left"
    },
    {
      title: t("about.card4.title"),
      content: t("about.card4.content"),
      tags: ["10x Speed", "2-3 Weeks MVP", "Quality"],
      icon: <DiamondIcon />,
      gradient: "from-yellow-500 to-orange-500",
      shape: "triangle",
      align: "right"
    },
    {
      title: t("about.card5.title"),
      content: t("about.card5.content"),
      tags: ["Elastic Operations", "Scalable", "Future"],
      icon: <InfinityIcon />,
      gradient: "from-indigo-500 to-purple-500",
      shape: "pentagon",
      align: "left"
    }
  ];

  return (
    <section id="about" className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section title */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {t("about.title")}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full" />
          </div>

          {/* Cards with creative layouts */}
          <div className="space-y-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Modern card with 3D effect and gradient border */}
                <div className="relative w-full max-w-4xl mx-auto">
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`} />
                  
                  {/* Card container with glass morphism */}
                  <div className="relative overflow-hidden bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    
                    {/* Floating gradient orb */}
                    <div className={`absolute ${card.align === 'right' ? 'left-0' : 'right-0'} top-0 w-64 h-64 bg-gradient-to-br ${card.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-1000`} />
                    
                    {/* Animated accent line */}
                    <div className={`absolute ${card.align === 'right' ? 'right-0' : 'left-0'} top-0 bottom-0 w-[1px] bg-gradient-to-b ${card.gradient} opacity-60`} />
                    
                    {/* Content */}
                    <div className="relative p-8 md:p-12">
                      <div className="flex flex-col gap-6">
                        {/* Number badge with title */}
                        <div className={`flex items-start gap-6 ${
                          card.align === 'right' ? 'flex-row-reverse' : ''
                        }`}>
                          {/* Index number with gradient background */}
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} blur-lg opacity-40`} />
                            <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}>
                              <span className="text-white font-bold text-lg md:text-2xl">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                          
                          <div className={`flex-1 ${
                            card.align === 'right' ? 'text-right' : 'text-left'
                          }`}>
                            <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                              {card.title}
                            </h3>
                            <div className={`h-[2px] w-24 bg-gradient-to-r ${card.gradient} opacity-60 ${
                              card.align === 'right' ? 'ml-auto' : ''
                            }`} />
                          </div>
                        </div>
                        
                        {/* Text content with better typography */}
                        <p className={`text-gray-300 text-base md:text-lg leading-relaxed ${
                          card.align === 'right' ? 'text-right' : 'text-left'
                        }`} style={{ whiteSpace: 'pre-line' }}>
                          {card.content}
                        </p>
                        
                        {/* Modern tags with hover effect */}
                        <div className={`flex flex-wrap gap-3 ${
                          card.align === 'right' ? 'justify-end' : 'justify-start'
                        }`}>
                          {card.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="group/tag relative"
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-lg opacity-0 group-hover/tag:opacity-20 blur transition-all duration-300`} />
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
                      <div className={`h-full bg-gradient-to-r ${card.gradient} transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}