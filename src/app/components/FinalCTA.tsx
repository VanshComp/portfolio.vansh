'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 700),
      setTimeout(() => setStep(3), 1200),
      setTimeout(() => setStep(4), 1700),
      setTimeout(() => setStep(5), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  const scrollToContact = () => {
    const el = document.getElementById('contact-scene');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const el = document.getElementById('brosa');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative px-6 py-40 overflow-hidden"
      style={{
        background: '#050505',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Final call to action"
    >
      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* Ambient particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            left: `${10 + i * 7}%`,
            top: `${20 + (i % 5) * 15}%`,
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: 'rgba(255,101,0,0.4)',
            animation: `float-ambient ${4 + i * 0.5}s ease-in-out ${i * 0.4}s infinite`,
            opacity: visible ? 0.4 : 0,
            transition: 'opacity 2s ease',
          }}
        />
      ))}

      {/* Decorative corner lines */}
      {[
        { top: '2rem', left: '2rem', borderTop: true, borderLeft: true },
        { top: '2rem', right: '2rem', borderTop: true, borderRight: true },
        { bottom: '2rem', left: '2rem', borderBottom: true, borderLeft: true },
        { bottom: '2rem', right: '2rem', borderBottom: true, borderRight: true },
      ].map((corner, i) => (
        <div
          key={i}
          className="absolute w-16 h-16 pointer-events-none"
          aria-hidden="true"
          style={{
            top: corner.top,
            left: corner.left,
            right: corner.right,
            bottom: corner.bottom,
            borderTop: corner.borderTop ? '1px solid rgba(255,101,0,0.2)' : 'none',
            borderLeft: corner.borderLeft ? '1px solid rgba(255,101,0,0.2)' : 'none',
            borderRight: corner.borderRight ? '1px solid rgba(255,101,0,0.2)' : 'none',
            borderBottom: corner.borderBottom ? '1px solid rgba(255,101,0,0.2)' : 'none',
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'scale(1)' : 'scale(0.5)',
            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s`,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto text-center w-full relative z-10">
        {/* Scene label */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3rem',
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
            Scene 26
          </span>
        </div>

        {/* Main question */}
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: 'var(--foreground)',
            lineHeight: 0.95,
            marginBottom: '2rem',
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Have a problem
          <br />
          <span
            style={{
              color: 'var(--primary)',
              textShadow: step >= 2 ? '0 0 80px rgba(255,101,0,0.3)' : 'none',
              transition: 'text-shadow 1s ease 0.5s',
            }}
          >
            worth solving?
          </span>
        </h2>

        {/* Accent line */}
        <div
          style={{
            width: step >= 2 ? '80px' : '0px',
            height: '2px',
            background: 'var(--primary)',
            margin: '0 auto 3rem',
            boxShadow: '0 0 12px rgba(255,101,0,0.5)',
            transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
          aria-hidden="true"
        />

        {/* Supporting text */}
        <div
          className="space-y-3 mb-12"
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
            You don&apos;t need a technical specification.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
            You don&apos;t need to know whether AI is the answer.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
            Tell me what&apos;s happening.
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--foreground)',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
            }}
          >
            I&apos;ll figure out what needs to be built.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <button
            onClick={scrollToContact}
            style={{
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              padding: '1.2rem 3rem',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              animation: step >= 4 ? 'cta-glow 2.5s ease-in-out infinite' : 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.02)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(255,101,0,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '';
            }}
            aria-label="Start a conversation"
          >
            Start a conversation →
          </button>
          <button
            onClick={scrollToWork}
            style={{
              border: '1px solid rgba(245,240,232,0.2)',
              color: 'var(--foreground)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              padding: '1.2rem 3rem',
              borderRadius: '2px',
              background: 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--primary)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,240,232,0.2)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)';
            }}
            aria-label="Explore the work"
          >
            Explore the work
          </button>
        </div>

        {/* Final statement */}
        <div
          style={{
            marginTop: '5rem',
            opacity: step >= 5 ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: 'rgba(245,240,232,0.2)',
              textTransform: 'uppercase',
            }}
          >
            Vansh Gautam · AI Consultant · 2026
          </p>
        </div>
      </div>
    </section>
  );
}