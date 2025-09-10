"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Icon components
const RocketIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 2L4 14L12 13L19 21L21 12L13.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 12L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TeamIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 4H18V13C18 14.0609 17.5786 15.0783 16.8284 15.8284C16.0783 16.5786 15.0609 17 14 17H10C8.93913 17 7.92172 16.5786 7.17157 15.8284C6.42143 15.0783 6 14.0609 6 13V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FutureIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7L12 12L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      icon: <RocketIcon />,
      gradient: "from-blue-500 to-cyan-500",
      shape: "hexagon",
      align: "left"
    },
    {
      title: t("about.card2.title"),
      content: t("about.card2.content"),
      icon: <TargetIcon />,
      gradient: "from-purple-500 to-pink-500",
      shape: "circle",
      align: "right"
    },
    {
      title: t("about.card3.title"),
      content: t("about.card3.content"),
      icon: <TeamIcon />,
      gradient: "from-green-500 to-teal-500",
      shape: "diamond",
      align: "left"
    },
    {
      title: t("about.card4.title"),
      content: t("about.card4.content"),
      icon: <TrophyIcon />,
      gradient: "from-yellow-500 to-orange-500",
      shape: "triangle",
      align: "right"
    },
    {
      title: t("about.card5.title"),
      content: t("about.card5.content"),
      icon: <FutureIcon />,
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
                <div className={`relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 backdrop-blur-sm ${
                  card.align === 'right' ? 'ml-auto md:mr-12' : 'mr-auto md:ml-12'
                } max-w-4xl`}>
                  
                  {/* Decorative gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-[0.02]`} />
                  
                  {/* Geometric shape decoration */}
                  <div className={`absolute ${card.align === 'right' ? '-left-6' : '-right-6'} top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rotate-45 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-12">
                    <div className={`flex items-start gap-6 ${card.align === 'right' ? 'flex-row-reverse' : ''}`}>
                      {/* Icon container */}
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        {card.icon}
                      </div>
                      
                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-4 ${
                          card.align === 'right' ? 'text-right' : 'text-left'
                        }`}>
                          {card.title}
                        </h3>
                        <p className={`text-gray-300 text-lg leading-relaxed ${
                          card.align === 'right' ? 'text-right' : 'text-left'
                        }`}>
                          {card.content}
                        </p>
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