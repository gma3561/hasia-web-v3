"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Code Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated code lines - optimized brightness */}
        <div className="absolute inset-0 opacity-40">
          <div className="text-green-300 font-mono text-xs md:text-sm leading-relaxed whitespace-pre overflow-hidden text-center">
            <div className="animate-slide-up">
              {`const buildFuture = async () => {
  const team = ['human', 'human', 'human'];
  const aiAgents = Array(Infinity).fill('AI');

  while (true) {
    await innovate();
    await execute({ speed: '10x' });
    await deliver();
  }
};

const HASIA = {
  vision: 'AI-powered tomorrow',
  execution: 'today',
  speed: 10,
  agents: Infinity
};

async function createWithAI() {
  const idea = await imagine();
  const product = await AI.build(idea);
  return launch(product);
}

class Innovation {
  constructor() {
    this.humans = 3;
    this.ai = unlimited;
  }

  execute() {
    return this.speed * 10;
  }
}

const tomorrow = new Promise((resolve) => {
  resolve('today');
});`}
            </div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
        
        {/* Side glow effects - darker */}
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/20 filter blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-primary-light/20 filter blur-[100px] -translate-y-1/2" />
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-slide-up {
          animation: slide-up 30s linear infinite;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div>
          
          {/* Modern Badge with animated border */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-light to-accent rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-black rounded-lg leading-none">
                <div className="flex gap-0.5">
                  <span className="w-0.5 h-3 bg-gradient-to-b from-primary to-primary-light rounded-full animate-pulse"></span>
                  <span className="w-0.5 h-3 bg-gradient-to-b from-primary-light to-accent rounded-full animate-pulse animation-delay-200"></span>
                  <span className="w-0.5 h-3 bg-gradient-to-b from-accent to-primary rounded-full animate-pulse animation-delay-400"></span>
                </div>
                <span className="text-white font-medium text-xs tracking-wider uppercase">{t("hero.badge")}</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center mb-6" style={{ fontWeight: 900, fontFamily: "'Arial Black', 'Helvetica', sans-serif", letterSpacing: '-0.02em' }}>
            <span className="block text-white mb-2" style={{ fontWeight: 900 }}>FROM IDEA</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary" style={{ fontWeight: 900 }}>
              TO REALITY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 text-center max-w-3xl mx-auto mb-4 font-bold">
            {t("hero.subtitle")}
          </p>
          
          {/* Modern Stats with glass morphism */}
          <div className="flex justify-center gap-4 sm:gap-4 md:gap-6 mt-12">
            <div className="group relative px-3 sm:px-4 md:px-6 py-3 md:py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center">
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">10x</div>
              <div className="text-white/60 text-[10px] sm:text-xs mt-1 uppercase tracking-wider sm:tracking-widest">{t("hero.stat1")}</div>
            </div>
            <div className="group relative px-3 sm:px-4 md:px-6 py-3 md:py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center">
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">∞</div>
              <div className="text-white/60 text-[10px] sm:text-xs mt-1 uppercase tracking-wider sm:tracking-widest">{t("hero.stat2")}</div>
            </div>
            <div className="group relative px-3 sm:px-4 md:px-6 py-3 md:py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center">
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">24/7</div>
              <div className="text-white/60 text-[10px] sm:text-xs mt-1 uppercase tracking-wider sm:tracking-widest">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}