'use client';

import { useEffect } from 'react';

const CursorSpotlight = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      raf = 0;
      const cards = document.querySelectorAll<HTMLElement>('.glass-card');
      const vh = window.innerHeight;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        card.style.setProperty('--mouse-x', `${lastX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${lastY - rect.top}px`);
      });
    };

    const handleMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
};

export default CursorSpotlight;
