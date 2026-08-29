'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function PromiseScene() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

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
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 1000),
      setTimeout(() => setStep(4), 1600),
      setTimeout(() => setStep(5), 2200),
      setTimeout(() => setStep(6), 2800),
      setTimeout(() => setStep(7), 3400),
    ];
    return () => timers?.forEach(clearTimeout);
  }, [visible]);

  const scrollToContact = () => {
    const el = document.getElementById('contact-scene');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 py-40 overflow-hidden"
      style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      aria-label="The Promise"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12rem, 30vw, 30rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.03)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        02
      </div>

      {/* Vertical accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(255,101,0,0.3) 30%, rgba(255,101,0,0.3) 70%, transparent)',
          opacity: step >= 1 ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Label */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '2rem',
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
            Vansh Gautam
          </span>
        </div>

        {/* Main statement — dramatic slam */}
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--foreground)',
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '0.5rem',
          }}
        >
          You don&apos;t need to know
        </h2>
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--primary)',
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0) skewX(0)' : 'translateY(50px) skewX(-3deg)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3rem',
            textShadow: step >= 3 ? '0 0 60px rgba(255,101,0,0.2)' : 'none',
          }}
        >
          what to build.
        </h2>

        {/* Divider line */}
        <div
          style={{
            width: step >= 3 ? '100px' : '0px',
            height: '2px',
            background: 'var(--primary)',
            marginBottom: '2.5rem',
            transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
            boxShadow: '0 0 10px rgba(255,101,0,0.4)',
          }}
          aria-hidden="true"
        />

        {/* Secondary statement */}
        <p
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
            fontWeight: 400,
            color: 'rgba(245,240,232,0.7)',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3rem',
          }}
        >
          You need to know what you want to solve.
        </p>

        {/* Identity badge */}
        <div
          style={{
            opacity: step >= 5 ? 1 : 0,
            transform: step >= 5 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              border: '1px solid rgba(255,101,0,0.25)',
              padding: '0.5rem 1.1rem',
              display: 'inline-block',
              background: 'rgba(255,101,0,0.04)',
            }}
          >
            AI Consultant · Engineering Capabilities
          </span>
        </div>

        {/* Bring me the problem */}
        <div
          style={{
            opacity: step >= 6 ? 1 : 0,
            transform: step >= 6 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '0.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            Bring me the problem.
          </p>
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
              color: 'var(--muted-foreground)',
              lineHeight: 1.7,
            }}
          >
            I&apos;ll figure out what needs to be built—and take it from there.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: step >= 7 ? 1 : 0,
            transform: step >= 7 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <button
            onClick={scrollToContact}
            className="btn-primary"
            style={{
              fontSize: '0.8rem',
              padding: '1.1rem 2.5rem',
              letterSpacing: '0.08em',
            }}
            aria-label="Tell me about your problem"
          >
            Tell me about your problem →
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
      />
    </section>
  );
}