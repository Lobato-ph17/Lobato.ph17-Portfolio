import { FiArrowRight, FiCode } from 'react-icons/fi';
import { socialLinks } from '../data/socialLinks';
import { useTypewriter } from '../hooks/useTypewriter';

const gradientText =
  'bg-gradient-to-r from-purple-100 via-indigo-400 to-purple-800 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400';

export function Hero() {
    const typed = useTypewriter('Olá! seja bem vindo!');

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          <div className="space-y-8 rounded-3xl border border-zinc-200/20 bg-white/5 p-8 text-center shadow-xl backdrop-blur-md sm:p-10 lg:col-span-7 lg:text-left dark:border-zinc-800/80 dark:bg-zinc-900/40">

          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
            <span className="text-purple-600 dark:text-purple-400">&gt;</span>
            {typed}
            <span className="animate-pulse text-purple-600 dark:text-purple-400">_</span>
          </div>

            <div className="space-y-3">
              <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
                Eu sou o <span className={gradientText}>Lobato!</span>
              </h1>
              <p className="text-2xl font-semibold text-zinc-700 sm:text-3xl dark:text-zinc-200">
                Desenvolvedor{' '}
                <span className="text-purple-600 dark:text-purple-400">Full-Stack</span>
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl lg:mx-0 dark:text-zinc-300">
              Buscando minha melhor versão{' '}
              <span className={`font-bold ${gradientText}`}>dev</span>. Focado em criar
              experiências digitais marcantes com{' '}
              <strong className="font-semibold text-zinc-900 dark:text-white">React</strong> e{' '}
              <strong className="font-semibold text-zinc-900 dark:text-white">
                arquiteturas eficientes
              </strong>
              .
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
              
                    <a href="#projetos"
                    className="group inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700"
                    >
                    Ver Projetos
                    <FiArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                    />
                    </a>
              
             
               <a href="#contato"
                className="rounded-xl border border-zinc-200/80 bg-zinc-100/80 px-7 py-3.5 font-semibold text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800">
                Entre em Contato
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-zinc-500 lg:justify-start dark:text-zinc-400">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                Conecte-se:
              </span>
              <ul className="flex items-center gap-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    
                      <a href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="block rounded-lg border border-zinc-200 bg-zinc-100 p-2 transition-colors hover:bg-purple-100 hover:text-purple-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-purple-950/50 dark:hover:text-purple-400"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="h-72 w-72 overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/70 p-2 shadow-2xl backdrop-blur-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 dark:border-zinc-800/90 dark:bg-zinc-900/70">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200/50 bg-zinc-100 p-6 text-center dark:border-zinc-800/50 dark:bg-zinc-950/80">
                <div
                  className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:opacity-20"
                  aria-hidden="true"
                />
                <div className="relative z-10 space-y-3">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-200 bg-purple-100 text-purple-600 shadow-inner dark:border-purple-800 dark:bg-purple-950/60 dark:text-purple-400">
                    <FiCode className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">LobatoDev</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;