'use client';
import React, { useRef, useEffect, useState } from 'react';

const STAGES = [
  {
    label: 'GENERATE',
    desc: 'AI coding agent produces implementation.',
    icon: '⚡',
    color: 'rgba(255,101,0,0.12)',
    borderColor: 'rgba(255,101,0,0.5)',
  },
  {
    label: 'INSPECT',
    desc: 'I review every line. Architecture, logic, edge cases.',
    icon: '🔍',
    color: 'rgba(255,200,0,0.08)',
    borderColor: 'rgba(255,200,0,0.4)',
  },
  {
    label: 'BREAK',
    desc: 'Tests intentionally attack the architecture.',
    icon: '💥',
    color: 'rgba(255,50,50,0.08)',
    borderColor: 'rgba(255,50,50,0.4)',
  },
  {
    label: 'VALIDATE',
    desc: 'Logs + manual testing + production behavior.',
    icon: '✓',
    color: 'rgba(50,200,100,0.08)',
    borderColor: 'rgba(50,200,100,0.4)',
  },
];

export default function ValidationSequence() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);
  const [headerStep, setHeaderStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setHeaderStep(1), 100);
    const t2 = setTimeout(() => setHeaderStep(2), 500);
    let i = 0;
    const interval = setInterval(() => {
      setActiveStage(i);
      i++;
      if (i >= STAGES?.length) clearInterval(interval);
    }, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0A0A0A' }}
      aria-label="Validation sequence — I don't blindly trust AI"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        17
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.5em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1.5rem',
            opacity: headerStep >= 1 ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          The Validation Process
        </span>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: 'var(--foreground)',
            marginBottom: '0.75rem',
            opacity: headerStep >= 2 ? 1 : 0,
            transform: headerStep >= 2 ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          I don&apos;t blindly{' '}
          <span style={{ color: 'var(--primary)', textShadow: '0 0 40px rgba(255,101,0,0.2)' }}>
            trust AI.
          </span>
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--muted-foreground)',
            marginBottom: '5rem',
            fontStyle: 'italic',
            opacity: headerStep >= 2 ? 1 : 0,
            transition: 'opacity 0.6s ease 0.3s',
            borderLeft: '2px solid rgba(255,101,0,0.3)',
            paddingLeft: '1rem',
            display: 'inline-block',
          }}
        >
          I make it prove itself.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STAGES?.map((stage, i) => (
            <div
              key={stage?.label}
              style={{
                background: activeStage >= i ? stage?.color : 'var(--card)',
                border: `1px solid ${activeStage >= i ? stage?.borderColor : 'var(--border)'}`,
                padding: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (activeStage >= i ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)')
                  : 'translateY(50px)',
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease`,
                boxShadow: activeStage >= i
                  ? `0 10px 40px rgba(0,0,0,0.3), 0 0 20px ${stage?.color}`
                  : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  filter: activeStage >= i ? 'none' : 'grayscale(1) opacity(0.4)',
                  transition: 'filter 0.5s ease',
                  animation: activeStage === i ? 'scale-in-overshoot 0.4s ease both' : 'none',
                }}
                aria-hidden="true"
              >
                {stage?.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: activeStage >= i ? 'var(--primary)' : 'var(--muted-foreground)',
                  marginBottom: '0.75rem',
                  transition: 'color 0.5s ease',
                  textShadow: activeStage >= i ? '0 0 15px rgba(255,101,0,0.3)' : 'none',
                }}
              >
                {stage?.label}
              </h3>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: activeStage >= i ? 'rgba(245,240,232,0.8)' : 'var(--muted-foreground)',
                  lineHeight: 1.6,
                  transition: 'color 0.5s ease',
                }}
              >
                {stage?.desc}
              </p>

              {/* Active indicator */}
              {activeStage >= i && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    width: '100%',
                    height: '2px',
                    background: stage?.borderColor,
                    animation: 'line-draw-h 0.6s ease both',
                    boxShadow: `0 0 8px ${stage?.borderColor}`,
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}