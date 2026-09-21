import { useEffect, useState } from 'react';

export function useTypewriter(text, speed = 100) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;

    const timer = setTimeout(() => setCount(count + 1), speed);

    return () => clearTimeout(timer);
  }, [count, text, speed]);

  return text.slice(0, count);
}