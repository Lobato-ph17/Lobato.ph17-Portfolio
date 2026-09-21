import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-300">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              DISPONÍVEL PARA NOVOS PROJETOS
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Olá, sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 dark:from-purple-400 dark:to-indigo-400">Lobato</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                Desenvolvedor <span className="text-purple-600 dark:text-purple-400">Full-Stack</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transformando desafios complexos em aplicações web modernas, limpas e escaláveis. Focado em criar experiências digitais marcantes com React, Node.js e arquiteturas eficientes.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#projetos" 
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Ver Projetos</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a 
                href="#contato" 
                className="px-7 py-3.5 rounded-xl bg-zinc-100/80 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-800 font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Entre em Contato
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-zinc-500 dark:text-zinc-400">
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">Conecte-se:</span>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Lobato-ph17" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-purple-100 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border border-zinc-200 dark:border-zinc-800" title="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/lobato-dev/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-purple-100 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border border-zinc-200 dark:border-zinc-800" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.45a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"/></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    
              <div className="relative w-full h-full rounded-3xl p-2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl flex items-center justify-center overflow-hidden group">
                
                <div className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-950/80 flex flex-col items-center justify-center text-center p-6 border border-zinc-200/50 dark:border-zinc-800/50 relative overflow-hidden">
                         
                  <div className="relative z-10 space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-inner">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-200">LobatoDev</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Full-Stack Developer</p>
                    </div>
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