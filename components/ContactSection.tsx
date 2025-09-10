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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현 시 여기에 API 호출 로직 추가
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // 3초 후 상태 리셋
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1000);
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Modern floating label inputs */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    rows={5}
                    className="peer w-full px-4 py-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-primary/60 transition-all duration-300 hover:border-white/20 resize-none"
                    placeholder={t("contact.form.message")}
                  />
                  <label className="absolute left-4 top-4 text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary-light peer-focus:bg-gray-900 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-1">
                    {t("contact.form.message")}
                  </label>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Modern submit button with hover effect */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full py-4 bg-gradient-to-r from-primary to-primary-light rounded-xl font-medium transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,238,255,0.3)]">
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