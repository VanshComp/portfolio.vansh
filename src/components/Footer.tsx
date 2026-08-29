import React from 'react';
import AppLogo from '../components/ui/AppLogo';

export default function Footer() {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <AppLogo size={24} />
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Vansh Gautam
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:vanshgautam2005@gmail.com"
            className="nav-link-item"
            style={{ fontSize: '0.75rem' }}
          >
            Email
          </a>
          <a
            href="#work"
            className="nav-link-item"
            style={{ fontSize: '0.75rem' }}
          >
            Work
          </a>
          <a
            href="#approach"
            className="nav-link-item"
            style={{ fontSize: '0.75rem' }}
          >
            Approach
          </a>
          <a
            href="#contact-scene"
            className="nav-link-item"
            style={{ fontSize: '0.75rem' }}
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-mono text-xs"
          style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.05em' }}
        >
          © 2026 Vansh Gautam · Privacy
        </p>
      </div>
    </footer>
  );
}