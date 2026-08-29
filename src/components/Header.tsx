'use client';
import React, { useState, useEffect } from 'react';

import AppLogo from '../components/ui/AppLogo';

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.9 : 900;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact-scene');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
        background: 'rgba(10,10,10,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(30,30,30,0.8)',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <AppLogo
            size={28}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <span
            className="hidden sm:block text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--foreground)', letterSpacing: '0.15em' }}
          >
            Vansh Gautam
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {['WORK', 'APPROACH', 'ABOUT']?.map((item) => (
            <a
              key={item}
              href={`#${item?.toLowerCase()}`}
              className="nav-link-item"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={scrollToContact}
            className="btn-primary text-xs"
            style={{ padding: '0.6rem 1.25rem' }}
          >
            Have a problem? →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--foreground)',
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--foreground)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--foreground)',
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-500 overflow-hidden"
        style={{ maxHeight: menuOpen ? '300px' : '0' }}
      >
        <div className="px-6 pb-6 flex flex-col gap-6 border-t" style={{ borderColor: 'var(--border)' }}>
          {['WORK', 'APPROACH', 'ABOUT']?.map((item) => (
            <a
              key={item}
              href={`#${item?.toLowerCase()}`}
              className="nav-link-item py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            className="btn-primary text-xs w-fit"
          >
            Have a problem? →
          </button>
        </div>
      </div>
    </nav>
  );
}