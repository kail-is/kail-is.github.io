import React from 'react';
import { ServiceItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const expertise: ServiceItem[] = [
  {
    id: 'backend',
    title: 'BACKEND ARCHITECTURE',
    tagline: 'Reliability & Scale',
    description: {
      en: <><strong>Designing high-availability systems</strong> that serve as the backbone of your digital product. <strong>Focusing on modularity and long-term maintainability</strong> to implement stable services.</>,
      ko: <>웹 베이스 제품의 중추 역할을 하는 <strong>고가용성 시스템을 설계</strong>합니다. <strong>모듈화와 장기적인 유지보수성에 초점을 맞추어 안정적인 서비스를 구현</strong>합니다.</>
    },
    detail: 'Core Systems',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 'ai-agents',
    title: 'AI AGENT INTEGRATION',
    tagline: 'Automation & Intelligence',
    description: {
      en: <><strong>Deploying autonomous LLM agents to handle complex workflows and enhance user interaction.</strong> Converting manual processes into intelligent pipelines.</>,
      ko: <><strong>복잡한 워크플로우를 처리하고 사용자 상호작용을 강화하는 자율 LLM 에이전트를 배포</strong>합니다. 수동 프로세스를 지능형 파이프라인으로 전환합니다.</>
    },
    detail: 'Future Tech',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pain-points',
    title: 'PAIN POINT RESOLUTION',
    tagline: 'Strategy & Execution',
    description: {
      en: <><strong>Translating abstract business challenges into concrete, executable software solutions.</strong> Identifying bottlenecks and engineering value.</>,
      ko: <>추상적인 비즈니스 과제를 <strong>실행 가능한 소프트웨어 솔루션으로 구체화</strong>합니다. 병목 현상을 파악하고 기술을 통해 실질적인 가치를 설계합니다.</>
    },
    detail: 'Consulting',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' 
  }
];

export const ModelShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="relative z-10 py-32 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8 reveal-on-scroll">
           <div>
             <h3 className="text-rr-blue tracking-[0.2em] text-xs mb-2">COMPETENCIES</h3>
             <h2 className="font-serif text-4xl text-white">CORE EXPERTISE</h2>
           </div>
           <a href="https://github.com/kail-is" target="_blank" rel="noreferrer" className="hidden md:block text-white/50 text-xs tracking-[0.2em] hover:text-white transition-colors">
             VIEW GITHUB &rarr;
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={item.id} className="group cursor-pointer reveal-on-scroll flex flex-col h-full" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5 mb-6">
                 <img 
                   src={item.image} 
                   alt={item.title}
                   className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-500"></div>
                 <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-white/60 tracking-widest uppercase group-hover:text-rr-blue transition-colors">{item.tagline}</span>
                 </div>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-2 group-hover:text-rr-blue transition-colors">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-normal mb-8 group-hover:text-white/60 transition-colors flex-grow">
                {t(item.description)}
              </p>
              <div className="mt-auto pt-4 border-t border-transparent group-hover:border-white/10 transition-all">
                <span className="inline-block text-xs tracking-widest text-white/80 transition-all transform group-hover:translate-x-2">
                  {item.detail} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};