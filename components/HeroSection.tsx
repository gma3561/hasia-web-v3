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
        {/* Animated code lines */}
        <div className="absolute inset-0 opacity-60">
          <div className="text-green-200 font-mono text-sm leading-relaxed whitespace-pre overflow-hidden text-center">
            <div className="animate-slide-up">
              {`const buildFuture = async () => {
  const team = ['human', 'human', 'human'];
  const aiAgents = Array(Infinity).fill('AI');
  
  while (true) {
    await innovate();
    await execute(speed: '10x');
    await deliver();
  }
};

function transformBusiness(company) {
  return company
    .addAI()
    .accelerate()
    .scale();
}

const HASIA = {
  vision: 'AI-powered tomorrow',
  execution: 'today',
  speed: 10 * traditional,
  agents: Infinity
};

async function createWithoutCode() {
  const idea = await imagine();
  const product = await AI.build(idea);
  return launch(product);
}

// Building the future, one AI at a time
const revolution = startsWith(3);
const possibilities = limitless();

while (dreaming) {
  create();
  iterate();
  disrupt();
}

class Innovation {
  constructor() {
    this.humans = 3;
    this.ai = unlimited;
  }
  
  execute() {
    return speed * 10;
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
        
        {/* Side glow effects */}
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
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/40 to-primary-light/40 backdrop-blur-sm rounded-full border border-primary/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-primary-light to-accent"></span>
              </span>
              <span className="text-white font-bold text-sm">{t("hero.badge")}</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-center mb-6">
            <span className="block text-white mb-2">FROM IDEA</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
              TO REALITY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 text-center max-w-3xl mx-auto mb-4 font-bold">
            {t("hero.subtitle")}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">10x</div>
              <div className="text-white/50 text-sm mt-1">{t("hero.stat1")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">∞</div>
              <div className="text-white/50 text-sm mt-1">{t("hero.stat2")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
              <div className="text-white/50 text-sm mt-1">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}