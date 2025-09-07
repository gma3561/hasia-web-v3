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
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder={t("contact.form.company")}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                </button>

                {submitStatus === "success" && (
                  <div className="text-green-400 text-center">
                    {t("contact.form.success")}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-400 text-center">
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
                <div className="p-6 bg-green-500/[0.08] rounded-xl border border-green-500/20">
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