export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-8 md:px-6 py-12">
        <div className="text-center space-y-3">
          <a 
            href="mailto:contact@hasia.ai" 
            className="text-white/60 hover:text-white transition-colors inline-block"
          >
            contact@hasia.ai
          </a>
          <p className="text-sm text-white/40">
            © {currentYear} HASIA Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}