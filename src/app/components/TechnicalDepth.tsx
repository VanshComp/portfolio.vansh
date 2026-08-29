'use client';
import React, { useRef, useEffect, useState } from 'react';

const LAYERS = [
  {
    label: 'AI',
    color: 'var(--primary)',
    colorRaw: '#FF6500',
    items: ['LLMs', 'NLP', 'RAG', 'Embeddings', 'Fine-tuning', 'Computer Vision', 'Multimodal AI'],
  },
  {
    label: 'ENGINEERING',
    color: 'var(--foreground)',
    colorRaw: '#F5F0E8',
    items: ['Architecture', 'Full Stack', 'APIs', 'Databases', 'Distributed Systems'],
  },
  {
    label: 'PRODUCTION',
    color: '#4CAF50',
    colorRaw: '#4CAF50',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'GPU Infrastructure', 'Monitoring', 'Observability'],
  },
];

export default function TechnicalDepth() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState(-1);

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
    LAYERS?.forEach((_, i) => {
      setTimeout(() => setActiveLayer(i), 300 + i * 400);
    });
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0D0D0D' }}
      aria-label="Technical depth across AI, Engineering, and Production"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
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
        18
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
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          Technical Depth
        </span>

        <div className="text-center mb-16">
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: 'var(--foreground)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            PRODUCTION{' '}
            <span
              style={{
                color: 'var(--primary)',
                textShadow: visible ? '0 0 60px rgba(255,101,0,0.25)' : 'none',
                transition: 'text-shadow 1s ease 0.5s',
              }}
            >
              AI
            </span>{' '}
            SYSTEMS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LAYERS?.map((layer, i) => (
            <div
              key={layer?.label}
              style={{
                background: activeLayer >= i ? `rgba(${layer?.colorRaw === '#FF6500' ? '255,101,0' : layer?.colorRaw === '#F5F0E8' ? '245,240,232' : '76,175,80'},0.04)` : 'var(--card)',
                border: `1px solid ${activeLayer >= i ? `${layer?.colorRaw}30` : 'var(--border)'}`,
                padding: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (activeLayer >= i ? 'translateY(-4px) scale(1.01)' : 'translateY(0)')
                  : 'translateY(50px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                boxShadow: activeLayer >= i
                  ? `0 10px 40px rgba(0,0,0,0.3), 0 0 20px ${layer?.colorRaw}15`
                  : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: `1px solid ${layer?.colorRaw}25`,
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: layer?.color,
                    boxShadow: activeLayer >= i ? `0 0 16px ${layer?.colorRaw}80` : 'none',
                    transition: 'box-shadow 0.5s ease',
                    animation: activeLayer >= i ? 'pulse-glow 2s ease-in-out infinite' : 'none',
                  }}
                  aria-hidden="true"
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.25em',
                    color: layer?.color,
                    textTransform: 'uppercase',
                    textShadow: activeLayer >= i ? `0 0 15px ${layer?.colorRaw}50` : 'none',
                    transition: 'text-shadow 0.5s ease',
                  }}
                >
                  {layer?.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer?.items?.map((item, j) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.7rem',
                      color: activeLayer >= i ? 'rgba(245,240,232,0.7)' : 'var(--muted-foreground)',
                      border: `1px solid ${activeLayer >= i ? `${layer?.colorRaw}25` : 'var(--border)'}`,
                      padding: '0.3rem 0.6rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.03em',
                      borderRadius: '2px',
                      transition: `all 0.4s ease ${j * 0.05}s`,
                      background: activeLayer >= i ? `${layer?.colorRaw}08` : 'transparent',
                      animation: activeLayer === i ? `stagger-reveal 0.4s ease ${j * 0.06}s both` : 'none',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center intersection label */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            opacity: activeLayer >= LAYERS?.length - 1 ? 1 : 0,
            transform: activeLayer >= LAYERS?.length - 1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, transparent, var(--primary))',
              margin: '0 auto 1.5rem',
            }}
            aria-hidden="true"
          />
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
            }}
          >
            Three layers.{' '}
            <span style={{ color: 'var(--primary)' }}>One system.</span>
          </p>
        </div>
      </div>
    </section>
  );
}