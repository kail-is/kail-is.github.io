import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center z-10 px-4">
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-rr-blue tracking-[0.3em] text-xs md:text-sm uppercase font-sans animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Connector Developer
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-tight opacity-90 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          ARCHITECTING <br />
          <span className="italic font-light opacity-80">VALUE</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 font-sans font-light text-sm leading-relaxed tracking-wide pt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          SEO EUNBIN (KYLE). The bridge between Value and Consumer.
          <br/>
          Resolving critical business pain points through robust backend engineering and intelligent agents.
        </p>
        
        <div className="pt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
           <button 
             onClick={() => scrollTo('contact')}
             className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 ease-out text-xs tracking-[0.2em] font-medium uppercase backdrop-blur-sm"
           >
             Request Consultation
           </button>
        </div>
      </div>

      <button 
        onClick={() => scrollTo('expertise')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer p-4"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </button>
    </section>
  );
};