'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable — the toggle still works for this session */
    }
  };

  const label = mounted && isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="label inline-flex h-6 min-w-[2.25rem] items-center justify-end hover:text-accent-fg"
    >
      {/* Rendered only after mount to avoid a hydration mismatch. */}
      {mounted && (isDark ? 'Light' : 'Dark')}
    </button>
  );
};

export default ThemeToggle;
