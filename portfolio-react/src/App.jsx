import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-purple-500 selection:text-white">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>

      </main>

    </div>
  );
}

export default App;