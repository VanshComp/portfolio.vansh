'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';

const FRAGMENTS = [
  '"We need automation."',
  '"Could AI solve this?"',
  '"We need a platform."',
  '"We don\'t know what to build."',
  '"Something isn\'t working."',
  '"Can we scale this?"',
  '"We\'re losing customers."',
  '"The process is broken."',
  '"Our team is overwhelmed."',
  '"We need to move faster."',
];

interface FragmentPos {
  text: string;
  x: number;
  y: number;
  scale: number;
  delay: number;
  rotation: number;
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const PARTICLES: Particle[] = Array.from({ length: 20 }, (_, i) => {
  const seed = i * 17.43;
  const x = Number((((Math.sin(seed) + 1) / 2) * 100).toFixed(2));
  const y = Number((((Math.cos(seed * 1.7) + 1) / 2) * 100).toFixed(2));
  const size = Number((1 + ((Math.sin(seed * 2.1) + 1) / 2) * 2).toFixed(2));
  const duration = Number((4 + ((Math.sin(seed * 3.7) + 1) / 2) * 4).toFixed(2));

  return {
    x,
    y,
    size,
    delay: Number((i * 0.3).toFixed(2)),
    duration,
  };
});

const buildFragmentPositions = (): FragmentPos[] =>
  FRAGMENTS.map((text, i) => {
    const seed = i * 13.7;
    return {
      text,
      x: Number((5 + ((Math.sin(seed) + 1) / 2) * 82).toFixed(2)),
      y: Number((5 + ((Math.cos(seed * 1.3) + 1) / 2) * 82).toFixed(2)),
      scale: Number((0.7 + ((Math.sin(seed * 2.1) + 1) / 2) * 0.6).toFixed(2)),
      delay: i * 100,
      rotation: Number((((Math.sin(seed * 2.7) - 0.5) * 8)).toFixed(2)),
      speed: Number((0.3 + ((Math.sin(seed * 1.8) + 1) / 2) * 0.4).toFixed(2)),
    };
  });

export default function OpeningScene() {
  const [phase, setPhase] = useState<'intro' | 'fragments' | 'collapse' | 'done'>('intro');
  const [introLine1, setIntroLine1] = useState(false);
  const [introLine2, setIntroLine2] = useState(false);
  const [introScale, setIntroScale] = useState(false);
  const [fragments, setFragments] = useState<FragmentPos[]>([]);
  const [collapseActive, setCollapseActive] = useState(false);
  const [problemVisible, setProblemVisible] = useState(false);
  const [problemGlow, setProblemGlow] = useState(false);
  const particles = PARTICLES;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroLine1(true), 300);
    const t2 = setTimeout(() => setIntroLine2(true), 1400);
    const t3 = setTimeout(() => setIntroScale(true), 2200);
    const t4 = setTimeout(() => {
      setPhase('fragments');
      setFragments(buildFragmentPositions());
    }, 3400);
    const t5 = setTimeout(() => setCollapseActive(true), 5600);
    const t6 = setTimeout(() => {
      setPhase('collapse');
      setProblemVisible(true);
    }, 6400);
    const t7 = setTimeout(() => setProblemGlow(true), 7200);

    return () => { [t1,t2,t3,t4,t5,t6,t7].forEach(clearTimeout); };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050505' }}
      aria-label="Opening cinematic sequence"
      id="opening"
    >
      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,101,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,101,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'rgba(255,101,0,0.5)',
            animation: `float-ambient ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: phase === 'intro' ? 0.3 : 0.1,
            transition: 'opacity 1s ease',
          }}
        />
      ))}

      {/* Phase: Intro text */}
      {(phase === 'intro' || phase === 'fragments') && (
        <div
          className="text-center z-20 px-6"
          aria-live="polite"
          style={{
            opacity: phase === 'fragments' ? 0 : 1,
            transition: 'opacity 0.8s ease',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
              fontWeight: 300,
              letterSpacing: '0.06em',
              color: 'rgba(245,240,232,0.85)',
              opacity: introLine1 ? 1 : 0,
              transform: introLine1
                ? (introScale ? 'translateY(0) scale(1.08)' : 'translateY(0) scale(1)')
                : 'translateY(24px) scale(0.95)',
              transition: introScale
                ? 'all 1.4s cubic-bezier(0.16,1,0.3,1)'
                : 'all 1.1s cubic-bezier(0.16,1,0.3,1)',
              textShadow: introScale ? '0 0 40px rgba(245,240,232,0.15)' : 'none',
            }}
          >
            Every solution starts somewhere.
          </p>
          <p
            style={{
              marginTop: '1.2rem',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
              fontWeight: 300,
              letterSpacing: '0.04em',
              color: 'rgba(245,240,232,0.45)',
              opacity: introLine2 ? 1 : 0,
              transform: introLine2 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            Usually, with a problem.
          </p>
        </div>
      )}

      {/* Phase: Fragments — chaotic problem statements */}
      {phase === 'fragments' && (
        <>
          {fragments.map((frag, i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: `${frag.x}%`,
                top: `${frag.y}%`,
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: `clamp(0.65rem, ${frag.scale * 1.2}vw, ${frag.scale * 1.1}rem)`,
                color: `rgba(245,240,232,${0.3 + frag.scale * 0.3})`,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
                transform: collapseActive
                  ? 'translate(-50%, -50%) scale(0.1) rotate(0deg)'
                  : `translate(-50%, -50%) scale(${frag.scale}) rotate(${frag.rotation}deg)`,
                opacity: collapseActive ? 0 : 1,
                transition: collapseActive
                  ? `all ${0.5 + i * 0.03}s cubic-bezier(0.7, 0, 1, 1) ${i * 25}ms`
                  : `opacity 0.6s ease ${frag.delay}ms, transform 0.6s ease ${frag.delay}ms`,
                zIndex: 15,
                textShadow: frag.scale > 1 ? '0 0 20px rgba(255,101,0,0.2)' : 'none',
              }}
            >
              {frag.text}
            </div>
          ))}
        </>
      )}

      {/* Phase: THE PROBLEM — cinematic reveal */}
      {(phase === 'collapse' || problemVisible) && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: problemVisible ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          <div className="text-center px-6">
            {/* Scene label */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.5em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                opacity: problemVisible ? 1 : 0,
                animation: problemVisible ? 'fade-in-up 0.8s ease 0.2s both' : 'none',
              }}
            >
              Scene 01
            </div>

            {/* THE */}
            <div
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '0.6em',
                color: 'rgba(245,240,232,0.4)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                opacity: problemVisible ? 1 : 0,
                animation: problemVisible ? 'materialize 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both' : 'none',
              }}
            >
              THE
            </div>

            {/* PROBLEM — the big slam */}
            <h1
              style={{
                fontSize: 'clamp(5rem, 18vw, 18rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.85,
                color: 'var(--foreground)',
                opacity: problemVisible ? 1 : 0,
                animation: problemVisible ? 'slam-down 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' : 'none',
                textShadow: problemGlow
                  ? '0 0 80px rgba(245,240,232,0.08), 0 0 160px rgba(255,101,0,0.04)'
                  : 'none',
                transition: 'text-shadow 1s ease',
              }}
            >
              <span style={{ color: 'var(--primary)' }}>PROBLEM</span>
            </h1>

            {/* Accent line */}
            <div
              style={{
                width: '80px',
                height: '2px',
                background: 'var(--primary)',
                margin: '2.5rem auto',
                boxShadow: '0 0 12px rgba(255,101,0,0.6)',
                opacity: problemVisible ? 1 : 0,
                animation: problemVisible ? 'line-draw-h 1s cubic-bezier(0.16,1,0.3,1) 1s both' : 'none',
              }}
              aria-hidden="true"
            />

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: 'var(--muted-foreground)',
                textTransform: 'uppercase',
                opacity: problemVisible ? 1 : 0,
                animation: problemVisible ? 'fade-in-up 0.8s ease 1.4s both' : 'none',
              }}
            >
              Scroll to continue
            </p>
          </div>
        </div>
      )}

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-30"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,101,0,0.15), transparent)',
          animation: 'scan-line 6s linear infinite',
          top: 0,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />
    </section>
  );
}