'use client';
import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc?.scrollHeight - doc?.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-px transition-all duration-100"
      style={{
        width: `${progress}%`,
        background: 'var(--primary)',
        boxShadow: '0 0 8px rgba(255,101,0,0.6)',
      }}
      aria-hidden="true"
    />
  );
}