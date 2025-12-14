import React from 'react';
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ModelShowcase } from './components/ModelShowcase';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
// import { Concierge } from './components/Concierge';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen w-full bg-black text-white selection:bg-rr-blue selection:text-white">
        {/* 
          The Background component contains the Unicorn Studio logic 
        */}
        <Background />
        
        {/* 
          Content Wrapper
          The background is fixed, so we overlay content on top.
        */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <ModelShowcase />
          <Philosophy />
          <Projects />
          
          <footer id="contact" className="bg-zinc-950 py-24 border-t border-white/10 relative z-20">
            <div className="container mx-auto px-6 text-center reveal-on-scroll">
              <h3 className="text-rr-blue tracking-[0.3em] text-xs mb-6 uppercase">Begin the collaboration</h3>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-white mb-12">
                READY TO ARCHITECT<br/>YOUR VISION?
              </h2>
              
              <a href="mailto:tech.bin.xyz@gmail.com" className="inline-block border border-white/30 px-10 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-500 text-xs tracking-[0.25em] font-bold uppercase mb-20">
                Get in Touch
              </a>

              <div className="flex justify-center gap-10 text-[10px] md:text-xs tracking-[0.2em] text-white/40">
                <a href="https://github.com/kail-is" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB</a>
                <a href="https://www.linkedin.com/in/kailis/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="https://artesuh.notion.site/13ce1ea9c27980238bc1c53277f3a647?source=copy_link" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">RESUME</a>
              </div>
              <p className="mt-16 text-[9px] text-white/20 tracking-wider">
                © {new Date().getFullYear()} KYLE SEO (SEO EUNBIN). CONNECTING VALUE.
              </p>
            </div>
          </footer>
        </div>

        {/* <Concierge /> */}
      </main>
    </LanguageProvider>
  );
}

export default App;