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
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 backdrop-blur-sm w-full max-w-4xl mx-auto">
                  
                  {/* Decorative gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-[0.02]`} />
                  
                  {/* Geometric shape decoration - hidden on mobile */}
                  <div className={`hidden md:block absolute ${card.align === 'right' ? '-left-6' : '-right-6'} top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rotate-45 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-12">
                    <div className="flex flex-col gap-4 md:gap-6">
                      {/* Title with bar */}
                      <div className={`flex items-center gap-3 md:gap-4 ${
                        card.align === 'right' ? 'flex-row-reverse' : ''
                      }`}>
                        <div className={`text-3xl md:text-4xl font-light bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                          |
                        </div>
                        <h3 className={`text-xl md:text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent ${
                          card.align === 'right' ? 'text-right' : 'text-left'
                        }`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Text content */}
                      <p className={`text-gray-300 text-base md:text-lg leading-relaxed ${
                        card.align === 'right' ? 'text-right' : 'text-left'
                      }`} style={{ whiteSpace: 'pre-line' }}>
                        {card.content}
                      </p>
                      
                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 md:gap-3 ${
                        card.align === 'right' ? 'justify-end' : 'justify-start'
                      }`}>
                        {card.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium text-white border border-white/10`}
                            style={{
                              background: `linear-gradient(to right, ${card.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : card.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : card.gradient.includes('green') ? 'rgba(34, 197, 94, 0.1)' : card.gradient.includes('yellow') ? 'rgba(250, 204, 21, 0.1)' : 'rgba(99, 102, 241, 0.1)'}, ${card.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : card.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.1)' : card.gradient.includes('teal') ? 'rgba(20, 184, 166, 0.1)' : card.gradient.includes('orange') ? 'rgba(251, 146, 60, 0.1)' : 'rgba(168, 85, 247, 0.1)'})`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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