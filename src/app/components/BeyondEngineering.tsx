'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function BeyondEngineering() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const cards = [
    {
      label: 'OPEN SOURCE',
      content: (
        <div className="space-y-2">
          {['SMKML', 'HumanTone', 'SentimentX']?.map((lib) => (
            <div
              key={lib}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--foreground)',
                padding: '0.4rem 0',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: 'var(--primary)' }}>◆</span>
              {lib}
            </div>
          ))}
          <p style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
            Custom PyTorch training from scratch
          </p>
        </div>
      ),
    },
    {
      label: 'RESEARCH',
      content: (
        <div className="space-y-3">
          <p style={{ fontSize: '0.8rem', color: 'var(--foreground)', fontWeight: 600, lineHeight: 1.4 }}>
            Domain-specific code search
          </p>
          <div className="space-y-2">
            {[
              { v: '+14%', l: 'Retrieval precision (P@5: 0.68 → 0.82)' },
              { v: '92%', l: 'Annotation cost reduction' },
            ]?.map((s) => (
              <div key={s?.l} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{s?.v}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{s?.l}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
            DistilBERT · 6,000 synthetic pairs
          </p>
        </div>
      ),
    },
    {
      label: 'PATENT',
      content: (
        <div className="space-y-2">
          <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
            Indian Patent No. 202621028218
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--foreground)', fontWeight: 600, lineHeight: 1.4 }}>
            AI-Based Mental Health Monitoring & Anxiety Detection with Crisis Intervention
          </p>
          <p style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
            Published 01 May 2026 · Bio-Medical Engineering
          </p>
          <p style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>
            IPC: A61B 5/16, G16H 50/30
          </p>
        </div>
      ),
    },
    {
      label: 'RECOGNITION',
      content: (
        <div className="space-y-3">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: 'rgba(255,101,0,0.08)',
              border: '1px solid rgba(255,101,0,0.2)',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🏆</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--foreground)' }}>Rank 1</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>Workathon INDIA· Mar 2025</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🏆</span>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--foreground)' }}>Winner</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>National Woodpecker&apos;s Hackathon · Aug 2024</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6"
      style={{ background: '#0A0A0A' }}
      aria-label="Beyond engineering — open source, research, patent, recognition"
    >
      <div className="max-w-6xl mx-auto">
        <span
          className="text-scene-label block mb-8"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          Beyond Engineering
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
          The work extends
          <br />
          <span style={{ color: 'var(--primary)' }}>beyond client projects.</span>
        </h2>

        {/* BENTO GRID AUDIT
          Array has 4 cards: [OPEN SOURCE, RESEARCH, PATENT, RECOGNITION]
          Row 1: [col-1: OPEN SOURCE cs-1] [col-2: RESEARCH cs-1]
          Row 2: [col-1: PATENT cs-1] [col-2: RECOGNITION cs-1]
          Placed 4/4 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards?.map((card, i) => (
            <div
              key={card?.label}
              className="card-dark p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem',
                }}
              >
                {card?.label}
              </p>
              {card?.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}