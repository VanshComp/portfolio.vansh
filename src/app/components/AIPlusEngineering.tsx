'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function AIPlusEngineering() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1400),
      setTimeout(() => setStep(4), 2000),
      setTimeout(() => setStep(5), 2600),
    ];
    return () => timers?.forEach(clearTimeout);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative px-6 py-32 overflow-hidden"
      style={{ background: '#050505', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
      aria-label="AI and Engineering core differentiator"
    >
      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Cinematic background number */}
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(15rem, 40vw, 40rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        15
      </div>

      <div className="max-w-5xl mx-auto text-center w-full relative z-10">
        {/* Scene label */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '4rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.5em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
            }}
          >
            Core Differentiator
          </span>
        </div>

        {/* The two words coming together */}
        <div
          className="flex items-center justify-center gap-4 md:gap-10 mb-16 flex-wrap"
          aria-label="AI plus Engineering equals core capability"
        >
          <span
            style={{
              fontSize: 'clamp(4rem, 14vw, 12rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: 'var(--primary)',
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 2
                ? 'translateX(0) scale(1)'
                : step >= 1
                ? 'translateX(-40px) scale(0.9)'
                : 'translateX(-100px) scale(0.7)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
              textShadow: step >= 2 ? '0 0 100px rgba(255,101,0,0.4), 0 0 200px rgba(255,101,0,0.15)' : 'none',
              animation: step >= 2 ? 'film-flicker 10s ease-in-out infinite' : 'none',
            }}
          >
            AI
          </span>

          <span
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 200,
              color: 'rgba(245,240,232,0.25)',
              opacity: step >= 2 ? 1 : 0,
              transform: step >= 2 ? 'scale(1)' : 'scale(0.5)',
              transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
            }}
            aria-hidden="true"
          >
            +
          </span>

          <span
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 8rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: 'var(--foreground)',
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 2
                ? 'translateX(0) scale(1)'
                : step >= 1
                ? 'translateX(40px) scale(0.9)'
                : 'translateX(100px) scale(0.7)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            ENGINEERING
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: step >= 3 ? '80px' : '0px',
            height: '2px',
            background: 'var(--primary)',
            margin: '0 auto 3.5rem',
            boxShadow: '0 0 12px rgba(255,101,0,0.5)',
            transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
          aria-hidden="true"
        />

        {/* Statements */}
        <div>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--muted-foreground)',
              marginBottom: '1.5rem',
              lineHeight: 1.4,
              opacity: step >= 4 ? 1 : 0,
              transform: step >= 4 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            AI can generate ideas.
          </p>
          <p
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--foreground)',
              letterSpacing: '-0.03em',
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
              textShadow: step >= 5 ? '0 0 40px rgba(245,240,232,0.08)' : 'none',
            }}
          >
            Engineering makes them{' '}
            <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(255,101,0,0.3)' }}>
              real.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}