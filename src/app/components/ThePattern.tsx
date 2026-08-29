'use client';
import React, { useRef, useEffect, useState } from 'react';

const PROJECTS = [
  { name: 'BROSA', arc: 'IDEA → PRODUCTION', num: '01' },
  { name: 'CENTURA', arc: 'PROBLEM → SOLUTION', num: '02' },
  { name: 'COUNSEL AI', arc: 'SYSTEM → OPTIMIZATION', num: '03' },
];

const APPROACH = ['Understand.', 'Think.', 'Engineer.', 'Validate.', 'Deliver.'];

export default function ThePattern() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [merged, setMerged] = useState(false);
  const [approachStep, setApproachStep] = useState(-1);

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
    const t1 = setTimeout(() => setMerged(true), 1400);
    APPROACH?.forEach((_, i) => {
      setTimeout(() => setApproachStep(i), 1800 + i * 250);
    });
    return () => clearTimeout(t1);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0D0D0D' }}
      aria-label="The pattern across all projects"
    >
      {/* Cinematic background number */}
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12rem, 30vw, 30rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        14
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.5em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '3rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          The Pattern
        </span>

        {/* Three projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {PROJECTS?.map((p, i) => (
            <div
              key={p?.name}
              style={{
                background: merged ? 'rgba(255,101,0,0.04)' : 'var(--card)',
                border: `1px solid ${merged ? 'rgba(255,101,0,0.3)' : 'var(--border)'}`,
                padding: '2.5rem',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (merged ? 'translateY(-4px) scale(1.01)' : 'translateY(0)')
                  : 'translateY(50px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                boxShadow: merged ? '0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,101,0,0.05)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background number */}
              <span
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: 'rgba(255,101,0,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                {p?.num}
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: merged ? 'var(--foreground)' : 'var(--muted-foreground)',
                  marginBottom: '0.75rem',
                  transition: 'color 0.5s ease',
                }}
              >
                {p?.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                }}
              >
                {p?.arc}
              </p>
            </div>
          ))}
        </div>

        {/* The merge text */}
        <div
          style={{
            opacity: merged ? 1 : 0,
            transform: merged ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--muted-foreground)',
              marginBottom: '0.5rem',
            }}
          >
            Different problems.
          </p>
          <p
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--foreground)',
              letterSpacing: '-0.04em',
              marginBottom: '3rem',
              textShadow: '0 0 40px rgba(245,240,232,0.06)',
            }}
          >
            Same approach.
          </p>

          {/* Approach sequence */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {APPROACH?.map((a, i) => (
              <React.Fragment key={a}>
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                    fontWeight: 800,
                    color: i === APPROACH?.length - 1 ? 'var(--primary)' : 'var(--foreground)',
                    opacity: approachStep >= i ? 1 : 0.1,
                    transform: approachStep >= i ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1)`,
                    textShadow: i === APPROACH?.length - 1 && approachStep >= i
                      ? '0 0 30px rgba(255,101,0,0.3)'
                      : 'none',
                  }}
                >
                  {a}
                </span>
                {i < APPROACH?.length - 1 && (
                  <span
                    style={{
                      color: 'rgba(255,101,0,0.3)',
                      fontSize: '1rem',
                      opacity: approachStep >= i ? 1 : 0.1,
                      transition: 'opacity 0.4s ease',
                    }}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}