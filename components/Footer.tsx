"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="relative container mx-auto px-8 md:px-6 py-4">
        <div className="flex items-center justify-center">
          <p className="text-xs text-green-500">
            © {currentYear} HASIA Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}