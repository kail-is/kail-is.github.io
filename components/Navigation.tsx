import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'EXPERTISE', id: 'expertise' },
    { label: 'PHILOSOPHY', id: 'philosophy' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex flex-col items-start cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <h1 className="font-serif text-2xl tracking-[0.2em] font-bold">KYLE SEO</h1>
           <span className="text-[0.6rem] tracking-[0.3em] uppercase opacity-70 mt-1">Seo Eunbin | Dev</span>
        </div>

        {/* Desktop Nav - Hidden on Mobile */}
        <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] font-medium">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => scrollToSection(item.id)}
              className="relative group overflow-hidden py-2"
            >
              <span className="group-hover:-translate-y-full block transition-transform duration-500 ease-in-out">{item.label}</span>
              <span className="absolute top-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 flex items-center justify-center transition-transform duration-500 ease-in-out text-rr-blue">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Hamburger Trigger */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col gap-1.5 items-end group cursor-pointer p-2 z-50 mix-blend-difference"
        >
          <span className="h-[1px] w-8 bg-white group-hover:w-12 transition-all duration-300 group-hover:bg-rr-blue"></span>
          <span className="h-[1px] w-6 bg-white group-hover:w-12 transition-all duration-300 delay-75 group-hover:bg-rr-blue"></span>
          <span className="h-[1px] w-4 bg-white group-hover:w-12 transition-all duration-300 delay-150 group-hover:bg-rr-blue"></span>
        </button>
      </nav>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="relative w-full max-w-md h-full bg-black border-l border-white/10 p-12 flex flex-col justify-between animate-slide-in-right">
            
            {/* Close Button */}
            <div className="flex justify-end mb-12">
               <button onClick={() => setIsMenuOpen(false)} className="group p-2">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white group-hover:text-rr-blue transition-colors">
                   <line x1="18" y1="6" x2="6" y2="18"></line>
                   <line x1="6" y1="6" x2="18" y2="18"></line>
                 </svg>
               </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-8">
              {navItems.map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-3xl font-serif text-white hover:text-rr-blue transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Toggle & Footer */}
            <div className="space-y-8 border-t border-white/10 pt-8">
               <div>
                  <h4 className="text-xs text-white/40 tracking-widest mb-4">LANGUAGE</h4>
                  <div className="flex gap-4 font-sans text-sm tracking-widest">
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`transition-colors duration-300 ${language === 'en' ? 'text-rr-blue font-bold' : 'text-white/40 hover:text-white'}`}
                    >
                      ENGLISH
                    </button>
                    <span className="text-white/20">|</span>
                    <button 
                      onClick={() => setLanguage('ko')}
                      className={`transition-colors duration-300 ${language === 'ko' ? 'text-rr-blue font-bold' : 'text-white/40 hover:text-white'}`}
                    >
                      KOREAN
                    </button>
                  </div>
               </div>

               <p className="text-[10px] text-white/20 leading-relaxed">
                 KYLE SEO<br/>
                 CONNECTOR DEVELOPER<br/>
                 SEOUL, SOUTH KOREA
               </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};