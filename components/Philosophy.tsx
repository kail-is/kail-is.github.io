import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Philosophy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="philosophy" className="relative z-10 py-32 bg-zinc-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal-on-scroll">
            <h3 className="text-rr-blue tracking-[0.2em] text-xs">PHILOSOPHY</h3>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-white">
              THE BRIDGE BETWEEN <br/>
              <span className="text-white/50">LOGIC & MARKET</span>
            </h2>
            <div className="w-12 h-[1px] bg-rr-blue"></div>
            
            {/* Conditional Rendering for formatting support */}
            <p className="text-gray-400 font-light leading-relaxed">
              {language === 'ko' ? (
                <>
                  <strong className="text-white font-medium">코드는 단순한 구문의 나열이 아닙니다. 그것은 가치의 인프라입니다.</strong> 저는 "커넥터 개발자"로서 단순히 함수를 작성하지 않습니다. 비즈니스 요구사항을 견고하고 확장 가능한 아키텍처로 번역합니다.
                </>
              ) : (
                'Code is not just syntax; it is the infrastructure of value. As a "Connector Developer," I do not simply write functions. I translate business requirements into resilient, scalable architectures.'
              )}
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              {language === 'ko' ? (
                <>
                  저의 접근 방식은 <strong className="text-white font-medium">기술적 탁월함과 소비자 니즈의 교차점</strong>에 집중합니다. <strong className="text-white font-medium">시스템의 "Pain Point"를 파악하고 해결</strong>함으로써, 단순히 작동하는 것을 넘어 <strong className="text-white font-medium">비즈니스를 전진</strong>시키는 소프트웨어를 구축합니다.
                </>
              ) : (
                'My approach focuses on the intersection of technical excellence and consumer needs. By identifying and resolving systemic "Pain Points," I build software that not only functions but drives the business forward.'
              )}
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] bg-white/5 p-8 border border-white/10 flex flex-col justify-center items-center text-center reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
             
             <div className="z-10 space-y-2">
               <span className="block text-4xl md:text-6xl font-serif text-white mb-2">100%</span>
               <span className="block text-xs tracking-[0.3em] text-white/40 uppercase">Pain Point Focus</span>
             </div>
             
             <div className="w-full h-[1px] bg-white/10 my-8"></div>

             <div className="z-10 space-y-2">
                <span className="block text-4xl md:text-6xl font-serif text-white mb-2">AI</span>
                <span className="block text-xs tracking-[0.3em] text-white/40 uppercase">Native Integration</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};