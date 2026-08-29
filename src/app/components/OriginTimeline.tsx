'use client';
import React, { useRef, useEffect, useState } from 'react';

const TIMELINE = [
  { year: '2022', label: 'Full-Stack Engineering', narrative: 'I learned to build.' },
  { year: '2023', label: 'Software Systems', narrative: 'I learned to understand intelligent systems.' },
  { year: '2024', label: 'AI / ML', narrative: 'I started solving real problems.' },
  { year: '2025', label: 'Production AI', narrative: 'I learned how to take those solutions into production.' },
  { year: '2026', label: 'Consulting', narrative: 'Now I solve problems for others.', accent: true },
];

const AI_CONCEPTS = [
  'vectors', 'embeddings', 'neural networks', 'models', 'GPU computation', 'LLMs',
  'RAG', 'fine-tuning', 'PEFT/LoRA', 'transformers',
];

export default function OriginTimeline() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(-1);
  const [showAI, setShowAI] = useState(false);

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
    TIMELINE.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveYear(i), 300 + i * 500));
    });
    timers.push(setTimeout(() => setShowAI(true), 300 + TIMELINE.length * 500 + 200));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0D0D0D' }}
      aria-label="Engineering origin and growth timeline"
    >
      {/* Cinematic background number */}
      <div
        className="absolute left-0 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12rem, 28vw, 28rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        05
      </div>

      {/* Vertical timeline line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(255,101,0,0.15) 20%, rgba(255,101,0,0.15) 80%, transparent)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 1s ease 0.5s',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Timeline */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.5em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '2rem',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }}
            >
              2022 — Present
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: 'var(--foreground)',
                lineHeight: 1.05,
                marginBottom: '3.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              I started with
              <br />
              <span style={{ color: 'var(--primary)', textShadow: '0 0 40px rgba(255,101,0,0.2)' }}>
                engineering.
              </span>
            </h2>

            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="timeline-item py-6"
                  style={{
                    borderTop: `1px solid ${activeYear >= i ? 'rgba(255,101,0,0.2)' : 'var(--border)'}`,
                    opacity: visible && activeYear >= i ? 1 : 0.15,
                    transform: visible && activeYear >= i ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      color: item.accent ? 'var(--primary)' : activeYear >= i ? 'rgba(255,101,0,0.6)' : 'var(--muted-foreground)',
                      fontWeight: 700,
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: item.accent ? 'var(--primary)' : 'var(--foreground)',
                        marginBottom: '0.4rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--muted-foreground)',
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.narrative}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI Transition */}
          <div
            style={{
              opacity: showAI ? 1 : 0,
              transform: showAI ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.5em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '2rem',
              }}
            >
              Then I went deeper.
            </span>
            <h3
              style={{
                fontSize: 'clamp(5rem, 12vw, 11rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: 'var(--primary)',
                lineHeight: 0.85,
                marginBottom: '2.5rem',
                textShadow: showAI ? '0 0 80px rgba(255,101,0,0.3), 0 0 160px rgba(255,101,0,0.1)' : 'none',
                transition: 'text-shadow 1s ease 0.5s',
                animation: showAI ? 'slam-down 0.8s cubic-bezier(0.16,1,0.3,1) both' : 'none',
              }}
            >
              AI
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {AI_CONCEPTS.map((concept, i) => (
                <span
                  key={concept}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: i < 3 ? 'var(--primary)' : 'var(--muted-foreground)',
                    border: `1px solid ${i < 3 ? 'rgba(255,101,0,0.35)' : 'var(--border)'}`,
                    padding: '0.3rem 0.6rem',
                    borderRadius: '2px',
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                    opacity: showAI ? 1 : 0,
                    transform: showAI ? 'translateY(0)' : 'translateY(10px)',
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.06}s`,
                    background: i < 3 ? 'rgba(255,101,0,0.05)' : 'transparent',
                  }}
                >
                  {concept}
                </span>
              ))}
            </div>

            <div
              style={{
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                marginTop: '2rem',
                boxShadow: '-4px 0 20px rgba(255,101,0,0.1)',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                But learning AI wasn&apos;t the destination.
              </p>
              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  letterSpacing: '-0.01em',
                }}
              >
                Using it to solve real problems was.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}