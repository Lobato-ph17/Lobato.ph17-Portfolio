import React from 'react';

export function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5">
        <nav className="flex items-center justify-between px-8 py-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-900/5 dark:shadow-zinc-950/30 transition-colors duration-300">
          
          <div className="flex items-center">
            <a href="#home" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white group">
              Lobato<span className="text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors">Dev</span>
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-2 font-medium text-base text-zinc-600 dark:text-zinc-200">
            <li>
              <a href="#home" className="px-5 py-2.5 rounded-xl hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">Home</a>
            </li>
            <li>
              <a href="#sobre" className="px-5 py-2.5 rounded-xl hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">Sobre</a>
            </li>
            <li>
              <a href="#habilidades" className="px-5 py-2.5 rounded-xl hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">Habilidades</a>
            </li>
            <li>
              <a href="#projetos" className="px-5 py-2.5 rounded-xl hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">Projetos</a>
            </li>
            <li>
              <a href="#contato" className="px-5 py-2.5 rounded-xl hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">Contato</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-purple-100 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 shadow-sm cursor-pointer"
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

            <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              OPEN TO WORK
            </div>

          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar; 