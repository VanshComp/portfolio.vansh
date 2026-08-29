'use client';
import React, { useRef, useEffect, useState } from 'react';

const TRADITIONAL = ['IDEA', 'CODE', 'CODE', 'CODE', 'TEST', 'FIX', 'SHIP'];
const MY_APPROACH = ['REASON', 'ARCHITECT', 'AI-ASSISTED BUILD', 'INSPECT', 'TEST', 'BREAK', 'FIX', 'VALIDATE', 'SHIP'];

export default function DevelopmentApproach() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showMine, setShowMine] = useState(false);

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
    const t = setTimeout(() => setShowMine(true), 1500);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="py-32 px-6"
      style={{ background: '#0D0D0D' }}
      aria-label="Development approach comparison"
    >
      <div className="max-w-6xl mx-auto">
        <span
          className="text-scene-label block mb-8"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          The 2026 Advantage
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
            marginBottom: '4rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          AI accelerates my hands.
          <br />
          <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>
            It doesn&apos;t replace my brain.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div
            className="card-dark p-8"
            style={{
              opacity: visible ? 0.5 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--muted-foreground)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Traditional
            </p>
            <div className="flex flex-col items-start gap-1">
              {TRADITIONAL?.map((step, i) => (
                <React.Fragment key={`trad-${i}`}>
                  <div
                    className="flow-node"
                    style={{
                      color: 'var(--muted-foreground)',
                      borderColor: 'var(--border)',
                      fontSize: '0.65rem',
                      opacity: 0.6,
                    }}
                  >
                    {step}
                  </div>
                  {i < TRADITIONAL?.length - 1 && (
                    <span style={{ color: 'var(--muted-foreground)', fontSize: '0.7rem', paddingLeft: '1rem' }}>↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* My approach */}
          <div
            className="card-dark p-8"
            style={{
              opacity: showMine ? 1 : 0,
              transition: 'opacity 0.6s ease',
              borderColor: showMine ? 'rgba(255,101,0,0.3)' : 'var(--border)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              My Approach
            </p>
            <div className="flex flex-col items-start gap-1">
              {MY_APPROACH?.map((step, i) => (
                <React.Fragment key={`mine-${i}`}>
                  <div
                    className="flow-node active"
                    style={{
                      fontSize: '0.65rem',
                      opacity: showMine ? 1 : 0,
                      transition: `opacity 0.3s ease ${i * 0.1}s`,
                      background: step === 'AI-ASSISTED BUILD' ? 'rgba(255,101,0,0.1)' : 'transparent',
                    }}
                  >
                    {step}
                  </div>
                  {i < MY_APPROACH?.length - 1 && (
                    <span style={{ color: 'var(--primary)', fontSize: '0.7rem', paddingLeft: '1rem', opacity: 0.6 }}>↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}