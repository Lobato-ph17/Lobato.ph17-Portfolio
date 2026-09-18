import React from 'react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Container principal com efeito glassmorphism refinado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-900/70 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-zinc-950/20">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold tracking-tight text-white group">
              Lobato<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all">Dev</span>
            </a>
          </div>

          {/* Menu de Navegação com Hover em Pílula */}
          <ul className="hidden md:flex items-center gap-1 font-medium text-sm text-zinc-400">
            <li>
              <a href="#home" className="px-4 py-2 rounded-xl hover:text-white hover:bg-zinc-800/60 transition-all duration-200">Home</a>
            </li>
            <li>
              <a href="#sobre" className="px-4 py-2 rounded-xl hover:text-white hover:bg-zinc-800/60 transition-all duration-200">Sobre</a>
            </li>
            <li>
              <a href="#habilidades" className="px-4 py-2 rounded-xl hover:text-white hover:bg-zinc-800/60 transition-all duration-200">Habilidades</a>
            </li>
            <li>
              <a href="#projetos" className="px-4 py-2 rounded-xl hover:text-white hover:bg-zinc-800/60 transition-all duration-200">Projetos</a>
            </li>
            <li>
              <a href="#contato" className="px-4 py-2 rounded-xl hover:text-white hover:bg-zinc-800/60 transition-all duration-200">Contato</a>
            </li>
          </ul>

          {/* Status / Ação (Open to Work) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-medium tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
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