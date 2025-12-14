import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'SaaS Migration & AI Ops',
    category: 'Main Engineer',
    tech: 'Kotlin, Spring Boot, Python, LangChain, Pinecone',
    desc: {
      en: 'Led DDD-based migration to SaaS architecture and built internal AI RAG chatbot. Optimized payroll process reducing closing time by 75%.',
      ko: '• DDD 기반 전사 레거시 마이그레이션 (SaaS 지향)\n• 사내 문서 탐색 AI RAG 챗봇 시스템 구축\n• 급여 정산 프로세스 통합 (마감 시간 2일 → 0.5일 단축)'
    },
    year: '2025'
  },
  {
    id: 2,
    title: 'Banking System & Automation',
    category: 'Engineer & In-house Project Tech Lead',
    tech: 'Java, Spring Boot, JPA, Nginx, PostgreSQL',
    desc: {
      en: 'Introduced modern stack to firm. Converted manual processes to automated systems via PoC. Built PMS and handled major banking projects (Kakao/KDB).',
      ko: '• 사내 모던 스택 도입 및 테크니컬 매니징\n• 사내 비효율 개선 PoC → 수기 업무 시스템화\n• PMS 구축-리딩 및 카카오뱅크/산업은행 프로젝트 진행'
    },
    year: '2021-2024'
  }
];

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="relative z-10 py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 reveal-on-scroll">
          <div>
            <h3 className="text-rr-blue tracking-[0.2em] text-xs mb-2">SELECTED WORKS</h3>
            <h2 className="font-serif text-4xl text-white">PROJECTS</h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-full group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:stroke-2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-full group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:stroke-2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="relative overflow-x-auto no-scrollbar pb-8"
        >
          <div className="flex gap-8 w-max">
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className="w-[350px] md:w-[500px] bg-zinc-900/50 border border-white/10 p-10 group hover:border-rr-blue/50 transition-colors duration-500 reveal-on-scroll flex flex-col"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-8">
                   <span className="text-xs tracking-widest text-white/30 font-serif">0{project.id}</span>
                   <span className="text-xs tracking-widest text-white/30">{project.year}</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-rr-blue block mb-2">{project.category}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-rr-blue transition-colors">{project.title}</h3>
                </div>

                <div className="text-sm text-gray-400 leading-relaxed mb-8 min-h-[80px] whitespace-pre-line">
                  {t(project.desc)}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                   <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Technology</p>
                   <p className="text-xs text-white/80 font-mono">{project.tech}</p>
                </div>
              </div>
            ))}
            
            {/* Call to action card */}
            <a 
               href="https://github.com/kail-is" 
               target="_blank"
               rel="noreferrer"
               className="w-[300px] bg-black border border-dashed border-white/20 p-8 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors cursor-pointer reveal-on-scroll"
            >
               <span className="block text-4xl mb-4 text-white/20 group-hover:text-white/60 transition-colors">+</span>
               <p className="font-serif text-white/60 text-lg">View More</p>
               <span className="text-xs tracking-widest text-white/30 mt-2">GITHUB REPOSITORY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};