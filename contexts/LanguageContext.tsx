"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "KO";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    // Header
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.badge": "AI Native Company",
    "hero.subtitle": "Limitless Creation, Infinite Possibilities",
    "hero.stat1": "Faster Execution",
    "hero.stat2": "AI Agents",
    "hero.stat3": "Continuous Evolution",
    
    // About Section
    "about.title": "About HASIA",
    "about.card1.title": "Birth of an AI Native Company",
    "about.card1.content": "Founded in 2025, HASIA operates with 3 team members working alongside infinite AI agents, building innovative solutions at unprecedented speed. We have completely redefined the traditional development team structure. Instead of dozens of developers, we create faster, more efficient, and more creative results through perfect collaboration with AI.",
    "about.card2.title": "Democratizing Technology",
    "about.card2.content": "\"Technology should empower everyone.\"\n\nWe're creating a world where anyone can be a creator, regardless of coding ability. When technical barriers disappear, real innovation begins. We're opening an era where business experts can build solutions directly, designers can implement their visions immediately, and founders can turn ideas into products instantly.",
    "about.card3.title": "New Collaboration Model",
    "about.card3.content": "Humans focus on strategy and business value creation, while AI handles coding and execution in a perfect division of labor. Our team understands markets, identifies customer needs, and designs innovative solutions. And AI agents implement them 24/7 without rest. This is the true power of hybrid intelligence.",
    "about.card4.title": "Overwhelming Results",
    "about.card4.content": "10x+ faster development speed and infinite scalability. Projects that take months for traditional teams, we complete in weeks. MVP development that typically takes 3-6 months? We need only 2-3 weeks. Even large-scale enterprise solutions are no exception. Speed and quality - we don't compromise on either.",
    "about.card5.title": "Redefining How We Work",
    "about.card5.content": "We've realized truly elastic operations that can instantly deploy and scale hundreds of AI agents as needed. Breaking free from fixed workforce structures, we respond flexibly to project scale and complexity. This isn't just about efficiency. This is the future of business.",
    
    // Services Section
    "services.title": "Our Services",
    "services.consulting.title": "AI Transformation Consulting",
    "services.consulting.content": "Transform your business with AI integration. We analyze your current processes and identify areas where AI can have the greatest impact. Beyond simple automation, we establish AI strategies that innovate your business model itself. We present actionable roadmaps and implement step by step, starting with areas that can generate immediate results.",
    "services.consulting.tag1": "AI Readiness Assessment",
    "services.consulting.tag2": "Workflow Automation",
    "services.consulting.tag3": "Strategic Roadmap",
    "services.prototyping.title": "Rapid Prototyping",
    "services.prototyping.content": "From idea to MVP in days, not months. No need to wait months for market validation. Our AI agents instantly transform ideas into executable prototypes. We integrate real-time user feedback, iterate quickly, and rapidly validate market fit.",
    "services.prototyping.tag1": "Concept Validation",
    "services.prototyping.tag2": "Interactive Prototypes",
    "services.prototyping.tag3": "Market Fit Analysis",
    "services.product.title": "AI Product Development",
    "services.product.content": "From start to finish, we build completely new AI products. If you have an idea, that's enough. We turn it into a product that can succeed in the market. Whether it's SaaS platforms, AI applications, or automation tools, our AI agents handle the entire process from design to deployment.",
    "services.product.tag1": "SaaS Platforms",
    "services.product.tag2": "AI Applications",
    "services.product.tag3": "Automation Tools",
    "services.approach": "Our Approach",
    "services.approach.discovery": "Discovery",
    "services.approach.discovery.desc": "We identify current situations and find areas for improvement. We review business goals and technical possibilities together.",
    "services.approach.design": "Design",
    "services.approach.design.desc": "We design solutions that meet your requirements. AI agents review various approaches and derive optimal solutions.",
    "services.approach.deploy": "Deploy",
    "services.approach.deploy.desc": "We implement step by step and continuously reflect feedback. We quickly provide working versions.",
    "services.approach.scale": "Scale",
    "services.approach.scale.desc": "We expand and improve systems according to growth. We respond flexibly to changing requirements.",
    
    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's Build Together",
    "contact.description": "Ready to accelerate your business with AI? Whether you're a fast-moving startup or an enterprise seeking transformation, we're here to help.",
    "contact.form.name": "Name *",
    "contact.form.email": "your@email.com *",
    "contact.form.company": "Company (Optional)",
    "contact.form.message": "Message *",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Thank you for your inquiry! We'll contact you within 24 hours.",
    "contact.form.error": "Something went wrong. Please try again.",
    "contact.direct.title": "Direct Contact",
    "contact.direct.email": "Email Us",
    "contact.response.title": "Average Response Time",
    "contact.response.time": "24 hours",
    "contact.response.desc": "We respond quickly to all inquiries",
    "contact.cta": "Ready to revolutionize your business with the power of AI? Contact us now. We'll be your growth partner."
  },
  KO: {
    // Header
    "nav.about": "회사소개",
    "nav.services": "서비스",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.badge": "AI Native Company",
    "hero.subtitle": "제한 없는 창조, 무한한 가능성",
    "hero.stat1": "더 빠른 실행",
    "hero.stat2": "AI 에이전트",
    "hero.stat3": "끊임없는 진화",
    
    // About Section
    "about.title": "About HASIA",
    "about.card1.title": "AI 네이티브 기업의 탄생",
    "about.card1.content": "2025년 설립된 HASIA는 3명의 팀원이 무한대의 AI 에이전트와 함께 일하며, 전례 없는 속도로 혁신적인 솔루션을 구축합니다. 우리는 전통적인 개발 팀 구조를 완전히 재정의했습니다. 수십 명의 개발자 대신, AI와의 완벽한 협업을 통해 더 빠르고, 더 효율적이며, 더 창의적인 결과물을 만들어냅니다.",
    "about.card2.title": "기술 민주화의 실현",
    "about.card2.content": "\"기술은 모든 사람에게 힘을 실어주어야 한다.\"\n\n코딩 능력이 없어도 누구나 창조자가 될 수 있는 세상을 만들어갑니다. 기술적 장벽이 사라지면, 진짜 혁신이 시작됩니다. 비즈니스 전문가가 직접 솔루션을 구축하고, 디자이너가 자신의 비전을 즉시 구현하며, 창업자가 아이디어를 바로 제품으로 만들 수 있는 시대를 열어가고 있습니다.",
    "about.card3.title": "새로운 협업 모델",
    "about.card3.content": "인간은 전략과 비즈니스 가치 창출에, AI는 코딩과 실행에 집중하는 완벽한 분업 체계를 구축했습니다. 우리 팀은 시장을 이해하고, 고객의 니즈를 파악하며, 혁신적인 솔루션을 설계합니다. 그리고 AI 에이전트들이 이를 24시간 쉬지 않고 구현합니다. 이것이 진정한 하이브리드 인텔리전스의 힘입니다.",
    "about.card4.title": "압도적인 성과",
    "about.card4.content": "10배 이상 빠른 개발 속도와 무한한 확장성. 몇 달이 걸리던 프로젝트를 몇 주 만에 완성합니다. 일반적인 MVP 개발에 3-6개월? 우리는 2-3주면 충분합니다. 대규모 엔터프라이즈 솔루션도 예외가 아닙니다. 속도와 품질, 우리는 둘 다 놓치지 않습니다.",
    "about.card5.title": "일하는 방식의 재정의",
    "about.card5.content": "필요에 따라 즉시 수백 개의 AI 에이전트를 배치하고 축소할 수 있는 진정한 탄력적 운영을 실현했습니다. 고정된 인력 구조의 한계를 벗어나, 프로젝트의 규모와 복잡도에 따라 유연하게 대응합니다. 이것은 단순한 효율성의 문제가 아닙니다. 이것은 비즈니스의 미래입니다.",
    
    // Services Section
    "services.title": "Our Services",
    "services.consulting.title": "AI 전환 컨설팅",
    "services.consulting.content": "AI 통합으로 비즈니스를 혁신하세요. 우리는 귀사의 현재 프로세스를 분석하고 AI가 가장 큰 영향을 미칠 수 있는 영역을 식별합니다. 단순한 자동화를 넘어, 비즈니스 모델 자체를 혁신하는 AI 전략을 수립합니다. 실행 가능한 로드맵을 제시하고, 즉각적인 성과를 창출할 수 있는 영역부터 단계적으로 구현합니다.",
    "services.consulting.tag1": "AI 준비도 평가",
    "services.consulting.tag2": "워크플로우 자동화",
    "services.consulting.tag3": "전략 로드맵",
    "services.prototyping.title": "신속한 프로토타이핑",
    "services.prototyping.content": "아이디어에서 MVP까지, 몇 달이 아닌 며칠 만에. 시장 검증을 위해 몇 달을 기다릴 필요가 없습니다. 우리의 AI 에이전트들은 아이디어를 즉시 실행 가능한 프로토타입으로 변환합니다. 실시간 사용자 피드백을 통합하고, 빠르게 반복하며, 시장 적합성을 신속하게 검증합니다.",
    "services.prototyping.tag1": "컨셉 검증",
    "services.prototyping.tag2": "인터랙티브 프로토타입",
    "services.prototyping.tag3": "시장 적합성 분석",
    "services.product.title": "AI 기반 제품 개발",
    "services.product.content": "처음부터 끝까지, 완전히 새로운 AI 제품을 구축합니다. 아이디어만 있다면 충분합니다. 우리는 그것을 시장에서 성공할 수 있는 제품으로 만들어냅니다. SaaS 플랫폼, AI 애플리케이션, 자동화 도구 등 어떤 형태의 제품이든 우리의 AI 에이전트들이 설계부터 배포까지 전 과정을 수행합니다.",
    "services.product.tag1": "SaaS 플랫폼",
    "services.product.tag2": "AI 애플리케이션",
    "services.product.tag3": "자동화 도구",
    "services.approach": "우리의 접근 방식",
    "services.approach.discovery": "발견 (Discovery)",
    "services.approach.discovery.desc": "현재 상황을 파악하고 개선 가능한 영역을 찾습니다. 비즈니스 목표와 기술적 가능성을 함께 검토합니다.",
    "services.approach.design": "설계 (Design)",
    "services.approach.design.desc": "요구사항에 맞는 솔루션을 설계합니다. AI 에이전트들이 다양한 접근 방식을 검토하고 최적안을 도출합니다.",
    "services.approach.deploy": "배포 (Deploy)",
    "services.approach.deploy.desc": "단계적으로 구현하며 지속적으로 피드백을 반영합니다. 작동 가능한 버전을 빠르게 제공합니다.",
    "services.approach.scale": "확장 (Scale)",
    "services.approach.scale.desc": "성장에 따라 시스템을 확장하고 개선합니다. 변화하는 요구사항에 유연하게 대응합니다.",
    
    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "함께 만들어가요",
    "contact.description": "AI로 비즈니스를 가속화할 준비가 되셨나요? 빠르게 움직이려는 스타트업이든 변혁을 추구하는 대기업이든, 우리가 도와드리겠습니다.",
    "contact.form.name": "성함 *",
    "contact.form.email": "your@email.com *",
    "contact.form.company": "회사명 (선택)",
    "contact.form.message": "문의 내용 *",
    "contact.form.submit": "메시지 전송",
    "contact.form.submitting": "전송 중...",
    "contact.form.success": "문의해 주셔서 감사합니다! 24시간 이내에 연락드리겠습니다.",
    "contact.form.error": "문제가 발생했습니다. 다시 시도해주세요.",
    "contact.direct.title": "직접 연락하기",
    "contact.direct.email": "이메일로 문의하기",
    "contact.response.title": "평균 응답 시간",
    "contact.response.time": "24시간",
    "contact.response.desc": "모든 문의에 빠르게 응답드립니다",
    "contact.cta": "AI의 힘으로 비즈니스를 혁신하고 싶으신가요? 지금 바로 연락주세요. 귀사의 성장 파트너가 되겠습니다."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("KO");

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}