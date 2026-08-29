'use client';
import React, { useRef, useEffect, useState } from 'react';

const CENTURA_ARCH = ['Script', 'Guidelines', 'AI Analysis', 'Retrieval', 'Decision', 'Ticket'];
const CENTURA_TECH = ['TypeScript', 'Flask', 'Pinecone', 'YOLO-VLM', 'OpenAI', 'HuggingFace'];

export default function CaseStudyCentura() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [archStep, setArchStep] = useState(0);
  const [showMetric, setShowMetric] = useState(false);

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
    const timers: ReturnType<typeof setTimeout>[] = [];
    CENTURA_ARCH.forEach((_, i) => {
      timers.push(setTimeout(() => setArchStep(i + 1), 300 + i * 380));
    });
    timers.push(setTimeout(() => setShowMetric(true), 300 + CENTURA_ARCH.length * 380 + 300));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#0D0D0D' }}
      aria-label="Centura case study"
      id="centura"
    >
      {/* Cinematic background number */}
      <div
        className="absolute left-0 bottom-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          transform: 'translateY(20%)',
        }}
      >
        12
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.5em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.5rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          >
            Business Problem → AI Solution
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.85,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Centura{' '}
              <span
                style={{
                  color: 'var(--primary)',
                  textShadow: visible ? '0 0 50px rgba(255,101,0,0.2)' : 'none',
                }}
              >
                AI
              </span>
            </h2>
            <div
              style={{
                opacity: showMetric ? 1 : 0,
                transform: showMetric ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
                textAlign: 'right',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  textShadow: '0 0 40px rgba(255,101,0,0.3)',
                  animation: showMetric ? 'heartbeat 2s ease-in-out infinite' : 'none',
                }}
              >
                60%
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                faster workflow
              </span>
            </div>
          </div>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-foreground)',
              maxWidth: '520px',
              lineHeight: 1.7,
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          >
            Manual review doesn&apos;t scale forever. Multimodal compliance pipeline for AngelOne — classifying scripts, images, and video against ASCI/AMFI/NSE/BSE rules across 7 automated stages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Document flow visualization */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '2rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              The Problem
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                marginBottom: '1.5rem',
              }}
              aria-hidden="true"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '24px',
                    height: '32px',
                    background: i % 4 === 0 ? 'rgba(255,101,0,0.12)' : i % 3 === 0 ? 'rgba(255,50,50,0.08)' : 'var(--muted)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    opacity: 0.5 + (i % 4) * 0.15,
                    animation: visible ? `fade-in-up 0.3s ease ${i * 0.02}s both` : 'none',
                  }}
                />
              ))}
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--muted-foreground)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                borderLeft: '2px solid rgba(255,101,0,0.2)',
                paddingLeft: '1rem',
              }}
            >
              Thousands of scripts, images, and video assets. Human reviewers. A queue that never stops growing.
            </p>
          </div>

          {/* Architecture flow */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '2rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.5s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              The Solution
            </p>
            <div className="space-y-1">
              {CENTURA_ARCH.map((step, i) => (
                <React.Fragment key={step}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: archStep > i ? 'var(--foreground)' : 'var(--muted-foreground)',
                      border: `1px solid ${archStep > i ? 'rgba(255,101,0,0.5)' : 'var(--border)'}`,
                      padding: '0.5rem 0.8rem',
                      textAlign: 'center',
                      display: 'block',
                      width: '100%',
                      background: archStep > i ? 'rgba(255,101,0,0.04)' : 'transparent',
                      boxShadow: archStep > i ? '0 0 10px rgba(255,101,0,0.08)' : 'none',
                      opacity: archStep > i ? 1 : 0.2,
                      transform: archStep > i ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    {step}
                  </div>
                  {i < CENTURA_ARCH.length - 1 && (
                    <div
                      style={{
                        textAlign: 'center',
                        color: 'var(--primary)',
                        fontSize: '0.8rem',
                        opacity: archStep > i ? 0.7 : 0.15,
                        transition: 'opacity 0.4s ease',
                      }}
                      aria-hidden="true"
                    >
                      ↓
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Tech + client */}
        <div
          style={{
            marginTop: '1.5rem',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.7s',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.35em',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                Client
              </p>
              <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                AngelOne
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.35em',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {CENTURA_TECH.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(255,101,0,0.2)',
                }}
              >
                7
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Automated Stages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}