'use client';
import React, { useRef, useEffect, useState } from 'react';

const MAIN_FLOW = ['PROBLEM', 'DISCOVERY', 'SOLUTION', 'ENGINEERING', 'VALIDATION', 'PRODUCTION'];

export default function ConsultingModel() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [flowStep, setFlowStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    MAIN_FLOW?.forEach((_, i) => {
      setTimeout(() => setFlowStep(i + 1), 300 + i * 350);
    });
  }, [visible]);

  const scrollToContact = () => {
    const el = document.getElementById('contact-scene');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="consulting"
      className="py-32 px-6"
      style={{ background: '#0D0D0D' }}
      aria-label="Consulting model — Discovery, Engineering, Partnership"
    >
      <div className="max-w-6xl mx-auto">
        <span
          className="text-scene-label block mb-8"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          The Consulting Model
        </span>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Flow diagram */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--foreground)',
                lineHeight: 1.1,
                marginBottom: '3rem',
              }}
            >
              You don&apos;t need to know
              <br />
              <span style={{ color: 'var(--primary)' }}>what technology you need.</span>
            </h2>

            {/* Main flow */}
            <div className="flex flex-col items-start gap-1 mb-6">
              {MAIN_FLOW?.map((step, i) => (
                <React.Fragment key={step}>
                  <div
                    className="flow-node"
                    style={{
                      opacity: flowStep > i ? 1 : 0.2,
                      borderColor: flowStep > i ? 'rgba(255,101,0,0.4)' : 'var(--border)',
                      color: step === 'PRODUCTION' && flowStep > i ? 'var(--primary)' : flowStep > i ? 'var(--foreground)' : 'var(--muted-foreground)',
                      transition: 'all 0.4s ease',
                      minWidth: '180px',
                    }}
                  >
                    {step}
                  </div>
                  {i < MAIN_FLOW?.length - 1 && (
                    <span
                      style={{
                        color: 'var(--primary)',
                        fontSize: '0.9rem',
                        paddingLeft: '1rem',
                        opacity: flowStep > i ? 0.8 : 0.2,
                        transition: 'opacity 0.4s ease',
                      }}
                    >
                      ↓
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Fork */}
            {flowStep >= MAIN_FLOW?.length && (
              <div
                style={{
                  opacity: 1,
                  animation: 'fade-in-up 0.5s ease forwards',
                  marginTop: '0.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingLeft: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1px', height: '24px', background: 'var(--primary)', opacity: 0.5 }} aria-hidden="true" />
                    <div style={{ display: 'flex', gap: '3rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '1px', height: '16px', background: 'var(--primary)', opacity: 0.4 }} aria-hidden="true" />
                        <div className="flow-node" style={{ borderColor: 'rgba(255,101,0,0.3)', color: 'var(--muted-foreground)', fontSize: '0.6rem' }}>
                          HANDOVER
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '1px', height: '16px', background: 'var(--primary)', opacity: 0.4 }} aria-hidden="true" />
                        <div className="flow-node" style={{ borderColor: 'rgba(255,101,0,0.5)', color: 'var(--primary)', fontSize: '0.6rem' }}>
                          PARTNERSHIP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Three service cards */}
          <div className="space-y-6">
            {/* Discovery */}
            <div
              className="card-dark p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.3s',
                borderColor: 'rgba(255,101,0,0.2)',
              }}
            >
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                  }}
                >
                  DISCOVERY
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--primary)',
                    border: '1px solid rgba(255,101,0,0.3)',
                    padding: '0.2rem 0.6rem',
                  }}
                >
                  from $1,000
                </span>
              </div>
              <div className="space-y-2 mb-4">
                {['Understand the problem.', 'Research the possibilities.', 'Design the solution.', 'Validate the critical assumptions.']?.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary)', fontSize: '0.75rem', marginTop: '0.1rem' }}>→</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: '0.65rem',
                  color: 'rgba(245,240,232,0.3)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Final scope depends on complexity.
              </p>
            </div>

            {/* Engineering */}
            <div
              className="card-dark p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.45s',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--foreground)',
                  marginBottom: '1rem',
                }}
              >
                ENGINEERING
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Once we know what needs to exist, I build it.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {['Prototype', 'Build', 'Integrate', 'Test', 'Deploy']?.map((step, i) => (
                  <React.Fragment key={step}>
                    <span
                      className="flow-node"
                      style={{ fontSize: '0.6rem', padding: '0.2rem 0.5rem' }}
                    >
                      {step}
                    </span>
                    {i < 4 && (
                      <span style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Partnership */}
            <div
              className="card-dark p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.6s',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--foreground)',
                  marginBottom: '1rem',
                }}
              >
                HANDOVER OR PARTNER
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                You can take the system forward independently.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Or, if you want continued engineering or consulting support, I stay involved through a separate engagement.
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  color: 'rgba(245,240,232,0.3)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                No forced retainer.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="btn-primary w-full"
              style={{ justifyContent: 'center' }}
            >
              Start with Discovery →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}