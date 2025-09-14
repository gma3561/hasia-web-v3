"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  // Honeypot fields (봇 감지용)
  const [honeypot, setHoneypot] = useState({
    website: "",
    phone: "",
    url: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

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

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // 입력 검증 함수
  const validateInput = () => {
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "올바른 이메일 주소를 입력해주세요.";
    }
    
    // 이름 검증 (특수문자 제한)
    const nameRegex = /^[a-zA-Z가-힣\s\-\.]{2,100}$/;
    if (!nameRegex.test(formData.name)) {
      return "이름은 2-100자의 한글, 영문, 공백만 가능합니다.";
    }
    
    // 메시지 길이 검증
    if (formData.message.length < 10) {
      return "메시지는 최소 10자 이상 입력해주세요.";
    }
    
    if (formData.message.length > 5000) {
      return "메시지는 5000자를 초과할 수 없습니다.";
    }
    
    // 회사명 검증 (선택사항)
    if (formData.company && formData.company.length > 200) {
      return "회사명은 200자를 초과할 수 없습니다.";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting (클라이언트 측)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) { // 5초 제한
      setSubmitStatus("error");
      alert("잠시 후 다시 시도해주세요.");
      return;
    }
    
    // 제출 시도 횟수 체크
    if (submitAttempts >= 10) {
      setSubmitStatus("error");
      alert("너무 많은 시도가 감지되었습니다. 잠시 후 다시 시도해주세요.");
      return;
    }
    
    // Honeypot 체크 (봇 감지)
    if (honeypot.website || honeypot.phone || honeypot.url) {
      // 봇으로 감지됨 - 사용자에게는 성공으로 보이게 하되 실제로는 전송하지 않음
      console.warn("Bot detected via honeypot");
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }
    
    // 입력 검증
    const validationError = validateInput();
    if (validationError) {
      alert(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitAttempts(prev => prev + 1);
    setLastSubmitTime(now);
    
    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
        'https://script.google.com/macros/s/AKfycbzJisOkDsCmg3LZXUZ-05hi0TWxfjLS8tbDEqNHXiStI_IzEQXB4-eQ1OPrrjnLCUPw/exec';
      
      // Honeypot 필드를 포함한 데이터 전송 (서버에서 추가 검증)
      const submissionData = {
        ...formData,
        // Honeypot fields
        website: honeypot.website,
        phone: honeypot.phone,
        url: honeypot.url,
        // 메타데이터
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };
      
      // Google Apps Script로 전송
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // CORS 정책 우회
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData)
      });
      
      // no-cors 모드에서는 response를 읽을 수 없으므로 무조건 성공으로 처리
      // 실제 에러는 Google Apps Script 로그에서 확인
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setHoneypot({ website: "", phone: "", url: "" });
      
      // 개발 환경에서 로그
      if (process.env.NODE_ENV === 'development') {
        console.log("Form submitted with security checks:", {
          ...formData,
          honeypotTriggered: !!(honeypot.website || honeypot.phone || honeypot.url)
        });
      }
      
      // 3초 후 상태 리셋
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus("error");
      
      // 3초 후 에러 상태 리셋
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
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
              {t("contact.title")}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-primary-light" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t("contact.subtitle")}
              </h3>
              <p className="text-white/60 mb-8">
                {t("contact.description")}
              </p>

              <form 
                name="contact" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Honeypot fields - 봇 감지용 (숨겨진 필드) */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot.website}
                    onChange={(e) => setHoneypot({...honeypot, website: e.target.value})}
                  />
                  <input
                    type="text"
                    name="phone"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot.phone}
                    onChange={(e) => setHoneypot({...honeypot, phone: e.target.value})}
                  />
                  <input
                    type="text"
                    name="url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot.url}
                    onChange={(e) => setHoneypot({...honeypot, url: e.target.value})}
                  />
                </div>
                {/* Modern floating label inputs */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    minLength={2}
                    pattern="[a-zA-Z가-힣\s\-\.]{2,100}"
                    title="이름은 2-100자의 한글, 영문, 공백만 가능합니다."
                    className="peer w-full px-4 py-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-primary/60 transition-all duration-300 hover:border-white/20"
                    placeholder={t("contact.form.name")}
                  />
                  <label className="absolute left-4 top-4 text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary-light peer-focus:bg-gray-900 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-1">
                    {t("contact.form.name")}
                  </label>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="올바른 이메일 주소를 입력해주세요."
                    className="peer w-full px-4 py-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-primary/60 transition-all duration-300 hover:border-white/20"
                    placeholder={t("contact.form.email")}
                  />
                  <label className="absolute left-4 top-4 text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary-light peer-focus:bg-gray-900 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-1">
                    {t("contact.form.email")}
                  </label>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={200}
                    className="peer w-full px-4 py-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-primary/60 transition-all duration-300 hover:border-white/20"
                    placeholder={t("contact.form.company")}
                  />
                  <label className="absolute left-4 top-4 text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary-light peer-focus:bg-gray-900 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-1">
                    {t("contact.form.company")}
                  </label>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    className={`peer w-full px-4 py-4 bg-black/50 backdrop-blur-sm border ${
                      formData.message.length > 0 && formData.message.length < 10 
                        ? 'border-red-500/50' 
                        : 'border-white/10'
                    } rounded-xl text-white placeholder-transparent focus:outline-none focus:border-primary/60 transition-all duration-300 hover:border-white/20 resize-none`}
                    placeholder={t("contact.form.message")}
                  />
                  {/* 글자 수 표시 및 경고 메시지 */}
                  <div className="absolute bottom-2 right-2 text-xs">
                    <span className={
                      formData.message.length > 0 && formData.message.length < 10 
                        ? 'text-red-400' 
                        : formData.message.length >= 4900 
                        ? 'text-yellow-400'
                        : 'text-white/30'
                    }>
                      {formData.message.length} / 5000
                    </span>
                  </div>
                  {/* 실시간 안내 메시지 */}
                  {formData.message.length > 0 && formData.message.length < 10 && (
                    <div className="absolute -bottom-6 left-0 text-xs text-red-400 animate-pulse">
                      ⚠️ 최소 10자 이상 입력해주세요 (현재 {formData.message.length}자)
                    </div>
                  )}
                  <label className="absolute left-4 top-4 text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary-light peer-focus:bg-gray-900 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-1">
                    {t("contact.form.message")}
                  </label>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Modern submit button with hover effect */}
                <button
                  type="submit"
                  disabled={isSubmitting || (formData.message.length > 0 && formData.message.length < 10)}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`relative w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                    isSubmitting || (formData.message.length > 0 && formData.message.length < 10)
                      ? 'bg-gray-600 cursor-not-allowed opacity-50'
                      : 'bg-gradient-to-r from-primary to-primary-light group-hover:shadow-[0_0_30px_rgba(0,238,255,0.3)]'
                  }`}>
                    <span className="relative z-10 text-white flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t("contact.form.submitting")}
                        </>
                      ) : (
                        <>
                          {t("contact.form.submit")}
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </div>
                </button>

                {/* Modern success/error messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 animate-fade-in">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("contact.form.success")}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 animate-fade-in">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {t("contact.form.error")}
                  </div>
                )}
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="md:pl-12 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-8">
                {t("contact.direct.title")}
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h4 className="text-primary-light font-medium mb-4">{t("contact.direct.email")}</h4>
                  <a 
                    href="mailto:contact@hasia.ai" 
                    className="text-2xl md:text-3xl text-white hover:text-primary-light transition-colors"
                  >
                    contact@hasia.ai
                  </a>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-gray-800 rounded-xl">
                  <h4 className="text-primary-light font-medium mb-2">{t("contact.response.title")}</h4>
                  <p className="text-3xl font-bold text-white mb-2">{t("contact.response.time")}</p>
                  <p className="text-white/50 text-sm">
                    {t("contact.response.desc")}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <p className="text-white/60 leading-relaxed">
                    {t("contact.cta")}
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