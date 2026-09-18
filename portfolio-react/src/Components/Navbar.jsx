import React from 'react';

export function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80 shadow-[0_0_12px_rgba(168,85,247,0.7)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5">
        
        <div className="relative group/nav">
          
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 via-indigo-600/10 to-purple-600/30 rounded-2xl blur-md opacity-50 group-hover/nav:opacity-80 transition duration-500"></div>

          <nav className="relative flex items-center justify-between px-8 py-4 rounded-2xl bg-white/75 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl shadow-zinc-950/10 dark:shadow-zinc-950/50 transition-colors duration-300">
            
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white group">
                
                <span>
                  Lobato<span className="text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors">Dev</span>
                </span>
              </a>
            </div>

            <ul className="hidden md:flex items-center gap-1 font-medium text-base text-zinc-600 dark:text-zinc-300">
              {['Home', 'Sobre', 'Habilidades', 'Projetos', 'Contato'].map((item) => {
                const href = `#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;
                return (
                  <li key={item}>
                    <a 
                      href={href} 
                      className="relative px-4 py-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 group block"
                    >
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-purple-600 dark:bg-purple-400 group-hover:w-3/4 transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                      
                      <span className="absolute inset-0 bg-purple-50/50 dark:bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                      
                      <span className="relative z-10">{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4">
              
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-purple-100 dark:hover:bg-purple-950/60 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-sm cursor-pointer hover:rotate-45 border border-zinc-200/60 dark:border-zinc-700/60"
                title="Alternar tema claro/escuro"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                OPEN TO WORK
              </div>

            </div>

          </nav>
        </div>

      </div>
    </header>
  );
}

export default Navbar;