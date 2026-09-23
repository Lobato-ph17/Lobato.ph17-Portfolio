import { AcademicCapIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const timelineData = [
  {
    period: '2026 — PRESENTE',
    role: 'Desenvolvimento Full-Stack & Projetos Principais',
    location: 'Brasília, DF',
    description: [
      'Construção de um E-commerce Full-Stack completo com arquitetura backend em Java e persistência de dados.',
      'Desenvolvimento do Studies Manager (MERN Stack) para gestão e controle de horas de estudo diárias com dashboard interativo.',
    ],
    tags: ['Java', 'Spring', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Tailwind CSS'],
  },
  {
    period: '2024 — PRESENTE',
    role: 'Análise e Desenvolvimento de Sistemas',
    location: 'IESB (Brasília, DF)',
    description: [
      'Formação acadêmica focada em lógica de programação, estrutura de dados, modelagem de banco de dados e arquitetura de software.',
      'Previsão de conclusão: 1º Semestre de 2027.',
    ],
    tags: ['Java', 'JavaScript', 'SQL', 'Engenharia de Software', 'POO'],
  },
  {
    period: '2025 — 2026',
    role: 'Aplicações Web & APIs RESTful',
    location: 'Projetos Autônomos',
    description: [
      'Criação das aplicações Wild Horizons e Other Side utilizando Node.js e Express para manipulação de rotas, buscas e envio de dados.',
      'Sólida experiência prévia em análise de processos, edição de conteúdo e resolução prática de problemas.',
    ],
    tags: ['Node.js', 'Express', 'JavaScript ES6+', 'REST APIs', 'Git'],
  },
];

function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0c10] px-6 py-20 text-[#c5c6c7] sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-15 space-y-3 text-center">
          <span className="font-mono text-lg tracking-[0.3em] text-emerald-400 uppercase">
            — TRAJETÓRIA & ESTUDOS
          </span>
          <h2 className="font-serif text-4xl tracking-wide text-white uppercase sm:text-5xl">
            Sobre Mim
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-350 sm:text-2xl">
            Desenvolvedor Full-Stack com foco em código limpo, arquitetura backend em Java/Node e interfaces modernas em React.
          </p>
        </div>

        <div className="relative grid grid-cols-1 items-stretch gap-8 md:grid-cols-[80px_1fr]">
          <div className="hidden h-full flex-col items-center md:flex">
            <div className="h-2 w-8 rounded-t-sm bg-emerald-500/40" />
            <div className="my-0.5 h-1.5 w-10 bg-emerald-400/20" />
            <div className="relative my-1 w-1 flex-1 rounded-full bg-gradient-to-b from-emerald-500/40 via-gray-700/50 to-transparent" />
            <div className="mb-0.5 h-1.5 w-10 bg-emerald-400/20" />
            <div className="h-2 w-8 rounded-b-sm bg-emerald-500/40" />
          </div>

          <div className="relative space-y-12 border-l border-gray-800 pl-6 md:border-none md:pl-0">
            {timelineData.map((item) => (
              <div
                key={item.role}
                className="group relative rounded-xl border border-gray-800/80 bg-[#12141c]/60 p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 sm:p-8"
              >
                <div className="absolute top-8 -left-[35px] hidden h-3 w-3 rounded-full bg-emerald-400/40 ring-4 ring-[#0b0c10] transition-colors duration-300 group-hover:bg-emerald-400 md:block" />
                <div className="absolute top-8 -left-[31px] h-2.5 w-2.5 rounded-full border-4 border-[#0b0c10] bg-emerald-400 md:hidden" />

                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide text-white transition-colors group-hover:text-emerald-400">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-gray-400">{item.location}</span>
                  </div>
                  <span className="w-fit rounded-full border border-emerald-800/30 bg-emerald-950/40 px-3 py-1 font-mono text-xs tracking-wider text-emerald-400/90">
                    {item.period}
                  </span>
                </div>

                <ul className="mb-6 space-y-2">
                  {item.description.map((desc) => (
                    <li key={desc} className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
                      <span className="mt-1.5 text-xs text-emerald-400">◆</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-gray-800/60 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded border border-gray-800 bg-gray-900/80 px-2.5 py-1 font-mono text-xs text-gray-400 transition-colors hover:border-gray-700 hover:text-white"
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