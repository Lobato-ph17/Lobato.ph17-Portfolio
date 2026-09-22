import { useState } from 'react';
import { SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiOpenjdk } from 'react-icons/si';

const categories = [
  { id: 'all', label: 'Todas as Stacks' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

const skillsData = [
  {
    name: 'React',
    category: 'frontend',
    description: 'Criação de SPAs modernas, componentização avançada, hooks e gerenciamento de estado.',
    icon: <SiReact className="h-8 w-8" color="#61DAFB" />,
    glowColor: 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Estilização ágil, responsiva e focada em design system limpo e minimalista.',
    icon: <SiTailwindcss className="h-8 w-8" color="#38BDF8" />,
    glowColor: 'group-hover:border-sky-500/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    description: 'Lógica sólida, manipulação de DOM, programação assíncrona e ES6+ moderno.',
    icon: <SiJavascript className="h-7 w-7" color="#F7DF1E" />,
    glowColor: 'group-hover:border-yellow-500/50 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]',
  },
  {
    name: 'Node.js',
    category: 'backend',
    description: 'Desenvolvimento de APIs RESTful eficientes, rotas e integração com bancos de dados.',
    icon: <SiNodedotjs className="h-8 w-8" color="#5FA04E" />,
    glowColor: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
  },
  {
    name: 'Java',
    category: 'backend',
    description: 'Orientação a objetos robusta, estruturas de dados e foco em projetos full-stack e-commerce.',
    icon: <SiOpenjdk className="h-8 w-8" color="#F58219" />,
    glowColor: 'group-hover:border-orange-500/50 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  function handleMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${event.clientX - rect.left}px`);
  }

  return (
    <section id="habilidades" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            Ferramentas &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400">
              Tecnologias
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            As principais tecnologias que utilizo atualmente, e aplico em meus projetos.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'border-purple-600 bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'border-zinc-200 bg-white/50 text-zinc-600 hover:border-purple-500/50 hover:text-purple-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-purple-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseMove={handleMouseMove}
              style={{ '--x': '50%' }}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-900/50 ${skill.glowColor}`}
            >
              <div className="mb-6">
                <div className="w-fit rounded-2xl border border-zinc-200/60 bg-zinc-100 p-3.5 shadow-inner transition-transform duration-300 group-hover:scale-110 dark:border-zinc-800/80 dark:bg-zinc-950">
                  {skill.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {skill.name}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {skill.description}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
                <div
                  style={{ left: 'var(--x)' }}
                  className="absolute inset-y-0 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;