'use client';
import React, { useRef, useEffect, useState } from 'react';

const CARDS = [
  {
    num: '01',
    label: 'AN IDEA',
    sub: 'I know what I want to build.',
    hover: 'Let\'s validate the assumptions before writing a line of code.',
    accent: 'rgba(255,200,0,0.08)',
    accentBorder: 'rgba(255,200,0,0.3)',
  },
  {
    num: '02',
    label: 'A BUSINESS PROBLEM',
    sub: 'Something isn\'t working.',
    hover: 'We diagnose the root cause, then architect the fix.',
    accent: 'rgba(255,101,0,0.08)',
    accentBorder: 'rgba(255,101,0,0.4)',
  },
  {
    num: '03',
    label: 'AN AI OPPORTUNITY',
    sub: 'I think AI could help.',
    hover: 'Let\'s find where AI actually belongs in your solution.',
    accent: 'rgba(100,200,255,0.06)',
    accentBorder: 'rgba(100,200,255,0.25)',
  },
  {
    num: '04',
    label: 'AN EXISTING SYSTEM',
    sub: 'Something needs to become better.',
    hover: 'We audit, identify leverage points, and engineer the improvement.',
    accent: 'rgba(100,255,150,0.05)',
    accentBorder: 'rgba(100,255,150,0.2)',
  },
];

export default function WhatDoYouHaveScene() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [headerStep, setHeaderStep] = useState(0);

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
    const t1 = setTimeout(() => setHeaderStep(1), 100);
    const t2 = setTimeout(() => setHeaderStep(2), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [visible]);

  const scrollToContact = () => {
    const el = document.getElementById('contact-scene');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="work"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0A0A0A' }}
      aria-label="What type of problem do you have?"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 25vw, 25rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          transform: 'translateY(20%)',
        }}
      >
        04
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
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
              transform: headerStep >= 1 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            What do you have?
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: 'var(--foreground)',
              lineHeight: 1.0,
              opacity: headerStep >= 2 ? 1 : 0,
              transform: headerStep >= 2 ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Every path leads to the
            <br />
            <span style={{ color: 'var(--primary)', textShadow: '0 0 40px rgba(255,101,0,0.2)' }}>
              same starting point.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS?.map((card, i) => (
            <button
              key={card?.num}
              className="text-left"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={scrollToContact}
              style={{
                background: hoveredCard === i ? card?.accent : 'var(--card)',
                border: `1px solid ${hoveredCard === i ? card?.accentBorder : 'var(--border)'}`,
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (hoveredCard === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)')
                  : 'translateY(60px)',
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s, transform 0.5s cubic-bezier(0.2,1,0.3,1), background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
                boxShadow: hoveredCard === i
                  ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${card?.accent}`
                  : '0 4px 20px rgba(0,0,0,0.2)',
              }}
              aria-label={`${card?.label}: ${card?.sub}`}
            >
              {/* Number — large background */}
              <span
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: hoveredCard === i ? 'rgba(255,101,0,0.12)' : 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  transition: 'color 0.4s ease',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                {card?.num}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: hoveredCard === i ? 'var(--foreground)' : 'var(--foreground)',
                    marginBottom: '0.75rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {card?.label}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6,
                  }}
                >
                  {card?.sub}
                </p>
              </div>

              {/* Hover reveal */}
              <div
                style={{
                  marginTop: '1.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--primary)',
                  lineHeight: 1.6,
                  opacity: hoveredCard === i ? 1 : 0,
                  transform: hoveredCard === i ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  fontStyle: 'italic',
                  borderLeft: '2px solid var(--primary)',
                  paddingLeft: '0.75rem',
                }}
              >
                {card?.hover}
              </div>

              {/* Arrow */}
              <div
                style={{
                  marginTop: '1.5rem',
                  color: 'var(--primary)',
                  opacity: hoveredCard === i ? 1 : 0.2,
                  transition: 'all 0.3s ease',
                  fontSize: '1.4rem',
                  transform: hoveredCard === i ? 'translateX(4px)' : 'translateX(0)',
                }}
                aria-hidden="true"
              >
                →
              </div>
            </button>
          ))}
        </div>

        {/* Convergence note */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
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
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
            }}
          >
            All paths converge →{' '}
            <span style={{ color: 'var(--primary)' }}>Understanding the problem.</span>
          </p>
        </div>
      </div>
    </section>
  );
}