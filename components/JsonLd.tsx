export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HASIA",
    "description": "AI Native Company - Building tomorrow with AI, today",
    "url": "https://hyem-nim.github.io/hasia-website-final",
    "logo": "https://hyem-nim.github.io/hasia-website-final/logo.png",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "HASIA Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@hasia.ai",
      "contactType": "customer service",
      "availableLanguage": ["en", "ko"]
    },
    "sameAs": [
      "https://twitter.com/hasia_ai",
      "https://linkedin.com/company/hasia-ai"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HASIA",
    "url": "https://hyem-nim.github.io/hasia-website-final",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hyem-nim.github.io/hasia-website-final/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting and Development",
    "provider": {
      "@type": "Organization",
      "name": "HASIA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Transformation Consulting",
            "description": "Transform your business with AI integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rapid Prototyping",
            "description": "From idea to MVP in days, not months"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Product Development",
            "description": "End-to-end AI product development"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}