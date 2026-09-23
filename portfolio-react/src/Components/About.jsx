import React from 'react';
import { AcademicCapIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

 function About() {
  const timelineData = [
    {
      period: '2026 — PRESENTE',
      role: 'Desenvolvimento Full-Stack & Projetos Principais',
      location: 'Brasília, DF',
      description: [
        'Construção de um E-commerce Full-Stack completo com arquitetura backend em Java e persistência de dados.',
        'Desenvolvimento do Studies Manager (MERN Stack) para gestão e controle de horas de estudo diárias com dashboard interativo.'
      ],
      tags: ['Java', 'Spring', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Tailwind CSS']
    },
    {
      period: '2024 — PRESENTE',
      role: 'Análise e Desenvolvimento de Sistemas',
      location: 'IESB (Brasília, DF)',
      description: [
        'Formação acadêmica focada em lógica de programação, estrutura de dados, modelagem de banco de dados e arquitetura de software.',
        'Previsão de conclusão: 1º Semestre de 2027.'
      ],
      tags: ['Java', 'JavaScript', 'SQL', 'Engenharia de Software', 'POO']
    },
    {
      period: '2025 — 2026',
      role: 'Aplicações Web & APIs RESTful',
      location: 'Projetos Autônomos',
      description: [
        'Criação das aplicações Wild Horizons e Other Side utilizando Node.js e Express para manipulação de rotas, buscas e envio de dados.',
        'Sólida experiência prévia em análise de processos, edição de conteúdo e resolução prática de problemas.'
      ],
      tags: ['Node.js', 'Express', 'JavaScript ES6+', 'REST APIs', 'Git']
    }
  ];

  return (
    <section className="bg-[#0b0c10] text-[#c5c6c7] py-20 px-6 sm:px-12 lg:px-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-emerald-400">
            — TRAJETÓRIA & ESTUDOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-white uppercase">
            Sobre Mim
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Desenvolvedor Full-Stack com foco em código limpo, arquitetura backend em Java/Node e interfaces modernas em React.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start">
          
          <div className="hidden md:flex flex-col items-center sticky top-24 h-[500px]">
            <div className="w-8 h-2 bg-emerald-500/40 rounded-t sm" />
            <div className="w-10 h-1.5 bg-emerald-400/20 my-0.5" />

            <div className="w-1 flex-1 bg-gradient-to-b from-emerald-500/40 via-gray-700/50 to-transparent my-1 rounded-full relative">
              <div className="absolute top-1/4 -left-[5px] w-3 h-3 rounded-full bg-emerald-400/80 ring-4 ring-[#0b0c10]" />
              <div className="absolute top-2/4 -left-[5px] w-3 h-3 rounded-full bg-emerald-400/50 ring-4 ring-[#0b0c10]" />
            </div>

            <div className="w-10 h-1.5 bg-emerald-400/20 mb-0.5" />
            <div className="w-8 h-2 bg-emerald-500/40 rounded-b sm" />
          </div>

          <div className="space-y-12 relative border-l border-gray-800 md:border-none pl-6 md:pl-0">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-[#12141c]/60 border border-gray-800/80 hover:border-emerald-500/40 p-6 sm:p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >

                <div className="md:hidden absolute -left-[31px] top-8 w-2.5 h-2.5 rounded-full bg-emerald-400 border-4 border-[#0b0c10]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-gray-400">
                      {item.location}
                    </span>
                  </div>
                  <span className="text-xs font-mono tracking-wider text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/30 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-sm text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-1.5 text-xs">◆</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-mono text-gray-400 bg-gray-900/80 border border-gray-800 px-2.5 py-1 rounded hover:border-gray-700 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;