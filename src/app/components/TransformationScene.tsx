'use client';
import React, { useRef, useEffect, useState } from 'react';

const WORDS = [
  { word: 'PROBLEM', color: 'rgba(255,50,50,0.9)', desc: 'The starting point.' },
  { word: 'UNDERSTAND', color: 'rgba(245,240,232,0.9)', desc: 'What is actually happening?' },
  { word: 'DIAGNOSE', color: 'rgba(245,240,232,0.9)', desc: 'Why is it happening?' },
  { word: 'ARCHITECT', color: 'rgba(255,200,0,0.9)', desc: 'What should exist?' },
  { word: 'ENGINEER', color: 'rgba(245,240,232,0.9)', desc: 'Build it precisely.' },
  { word: 'VALIDATE', color: 'rgba(245,240,232,0.9)', desc: 'Prove it works.' },
  { word: 'PRODUCTION', color: 'var(--primary)', desc: 'Real users. Real impact.' },
];

export default function TransformationScene() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cycling, setCycling] = useState(false);
  const [wordKey, setWordKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          setTimeout(() => setCycling(true), 600);
        }
      },
      { threshold: 0.4 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!cycling) return;
    if (currentIndex >= WORDS?.length - 1) {
      setCycling(false);
      return;
    }
    const timer = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setWordKey((k) => k + 1);
    }, 750);
    return () => clearTimeout(timer);
  }, [cycling, currentIndex]);

  const current = WORDS?.[currentIndex];
  const isLast = currentIndex === WORDS?.length - 1;

  return (
    <section
      ref={ref}
      id="approach"
      className="relative px-6 py-32 overflow-hidden"
      style={{ background: '#0D0D0D', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
      aria-label="Methodology transformation"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,101,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,101,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Cinematic background number */}
      <div
        className="absolute left-0 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12rem, 30vw, 30rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        03
      </div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '1.5rem',
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
            The Methodology
          </span>
        </div>

        {/* The morphing word — dramatic */}
        <div
          style={{
            minHeight: 'clamp(6rem, 18vw, 16rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          aria-live="polite"
          aria-label={`Current step: ${current?.word}`}
        >
          {/* Arrow indicator */}
          {currentIndex > 0 && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.5rem',
                color: 'rgba(255,101,0,0.4)',
                marginBottom: '0.5rem',
                animation: 'fade-in-up 0.4s ease both',
              }}
              aria-hidden="true"
            >
              ↓
            </div>
          )}

          <h2
            key={wordKey}
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 11rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              color: current?.color,
              opacity: visible ? 1 : 0,
              animation: visible ? 'word-slam 0.55s cubic-bezier(0.16,1,0.3,1) both' : 'none',
              textShadow: isLast
                ? '0 0 80px rgba(255,101,0,0.35), 0 0 160px rgba(255,101,0,0.1)'
                : currentIndex === 0
                ? '0 0 40px rgba(255,50,50,0.2)'
                : 'none',
            }}
          >
            {current?.word}
          </h2>

          {/* Word description */}
          <p
            key={`desc-${wordKey}`}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              marginTop: '1rem',
              opacity: visible ? 1 : 0,
              animation: visible ? 'fade-in-up 0.5s ease 0.2s both' : 'none',
            }}
          >
            {current?.desc}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {WORDS?.map((w, i) => (
            <button
              key={w?.word}
              onClick={() => { setCurrentIndex(i); setWordKey((k) => k + 1); }}
              style={{
                width: i === currentIndex ? '32px' : '6px',
                height: '4px',
                borderRadius: '2px',
                background: i <= currentIndex ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: i === currentIndex ? '0 0 8px rgba(255,101,0,0.5)' : 'none',
              }}
              aria-label={`Jump to ${w?.word}`}
              aria-current={i === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>

        {/* All steps visible when done */}
        {currentIndex === WORDS?.length - 1 && (
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
            style={{ animation: 'fade-in-up 0.8s ease 0.3s both' }}
          >
            {WORDS?.map((w, i) => (
              <React.Fragment key={w?.word}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: w?.word === 'PRODUCTION' ? 'var(--primary)' : w?.word === 'PROBLEM' ? 'rgba(255,50,50,0.7)' : 'var(--muted-foreground)',
                    border: `1px solid ${w?.word === 'PRODUCTION' ? 'rgba(255,101,0,0.5)' : w?.word === 'PROBLEM' ? 'rgba(255,50,50,0.3)' : 'var(--border)'}`,
                    padding: '0.3rem 0.7rem',
                    background: w?.word === 'PRODUCTION' ? 'rgba(255,101,0,0.06)' : 'transparent',
                    transition: 'all 0.3s ease',
                    animation: `stagger-reveal 0.5s ease ${i * 0.07}s both`,
                  }}
                >
                  {w?.word}
                </span>
                {i < WORDS?.length - 1 && (
                  <span
                    style={{
                      color: 'rgba(255,101,0,0.4)',
                      fontSize: '0.8rem',
                      animation: `fade-in-up 0.4s ease ${i * 0.07 + 0.1}s both`,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}