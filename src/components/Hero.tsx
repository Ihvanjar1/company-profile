"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Web Developer & Software Engineer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 bg-[url('/bg-hero.svg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/boy.png"
                  alt="Developer Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Ihvanjar&background=3b82f6&color=fff&size=128`;
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Selamat Datang di{" "}
            <span className="text-blue-600">Famuhi Solutions</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
            <span className="font-mono">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-gray-400 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Pengembang web berpengalaman yang bersemangat menciptakan solusi web
            inovatif. Saya mengubah ide menjadi kenyataan dengan teknologi
            modern dan aplikasi yang ramah pengguna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Lihat Proyek Kami
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
