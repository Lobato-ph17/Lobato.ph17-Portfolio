import React, { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    {
      name: 'React',
      category: 'frontend',
      level: 'Avançado',
      description: 'Criação de SPAs modernas, componentização avançada, hooks e gerenciamento de estado.',
      icon: (
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      ),
      glowColor: 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
      tagBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 'Avançado',
      description: 'Estilização ágil, responsiva e focada em design system limpo e minimalista.',
      icon: (
        <svg className="w-8 h-8 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3C8.5 3 6 5.5 6 9c0 3.5 2.5 5 4 6-2 0-4 1.5-4 4 0 2.5 2 4 6 4 4.5 0 7-3.5 7-8 0-4.5-3-6-7-6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'group-hover:border-sky-500/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
      tagBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 'Avançado',
      description: 'Lógica sólida, manipulação de DOM, programação assíncrona e ES6+ moderno.',
      icon: (
        <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16v16H4z" fill="currentColor" opacity="0.15" />
          <path d="M10 16c0 .8.5 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5M15 17.5h2a1.5 1.5 0 000-3h-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'group-hover:border-yellow-500/50 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]',
      tagBg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 'Intermediário',
      description: 'Desenvolvimento de APIs RESTful eficientes, rotas e integração com bancos de dados.',
      icon: (
        <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11v6M9 13.5l3-1.5 3 1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      name: 'Java',
      category: 'backend',
      level: 'Intermediário',
      description: 'Orientação a objetos robusta, estruturas de dados e foco em projetos full-stack e-commerce.',
      icon: (
        <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 10c0-2.2-1.8-4-4-4-1.2 0-2.3.5-3 1.3C10.3 6.5 9.2 6 8 6 5.8 6 4 7.8 4 10c0 3 4 8 8 10 4-2 8-7 8-10z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'group-hover:border-orange-500/50 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
      tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden transition-colors duration-300">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Ferramentas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400">Tecnologias</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            As principais tecnologias que utilizo para construir aplicações web robustas, escaláveis e com excelente experiência de usuário.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'Todas as Stacks' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-600/25'
                  : 'bg-white/50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg transition-all duration-300 hover:-translate-y-1.5 ${skill.glowColor}`}
            >
              <div className="flex items-start justify-between mb-6">
                {/* Ícone com fundo estilizado */}
                <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                {/* Badge de Nível */}
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${skill.tagBg}`}>
                  {skill.level}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;