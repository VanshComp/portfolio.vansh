'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function TheHuman() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(-1);
  const [showPortrait, setShowPortrait] = useState(false);

  const STORY_LINES = [
    'I started by learning how to build software.',
    'Then I went deeper into AI.',
    'Then I started solving real problems.',
    'Eventually, I realized something:',
    'The technology isn\'t the hard part.',
    'Figuring out what should exist is.',
    'That\'s what I do now.',
  ];

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
    const t0 = setTimeout(() => setShowPortrait(true), 200);
    STORY_LINES?.forEach((_, i) => {
      setTimeout(() => setActiveLine(i), 600 + i * 450);
    });
    return () => clearTimeout(t0);
  }, [visible]);

  return (
    <section
      ref={ref}
      id="about-human"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#0A0A0A' }}
      aria-label="About Vansh Gautam"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 top-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          transform: 'translateY(-10%)',
        }}
      >
        24
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Portrait */}
          <div
            style={{
              opacity: showPortrait ? 1 : 0,
              transform: showPortrait ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
              transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                maxHeight: '600px',
                overflow: 'hidden',
                border: '1px solid rgba(255,101,0,0.15)',
                boxShadow: showPortrait
                  ? '0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(255,101,0,0.05)'
                  : 'none',
                transition: 'box-shadow 1.5s ease 0.5s',
              }}
            >
              {/* Portrait image placeholder with cinematic overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255,101,0,0.1)',
                    border: '2px solid rgba(255,101,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-sans)',
                    animation: showPortrait ? 'breathe 4s ease-in-out infinite' : 'none',
                    boxShadow: '0 0 40px rgba(255,101,0,0.15)',
                  }}
                >
                  V
                </div>
              </div>

              {/* Scrim */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)',
                }}
                aria-hidden="true"
              />

              {/* Cinematic scan line */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,101,0,0.3), transparent)',
                  animation: showPortrait ? 'scan-line 5s linear infinite' : 'none',
                  top: 0,
                }}
                aria-hidden="true"
              />

              {/* Name overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  opacity: showPortrait ? 1 : 0,
                  transform: showPortrait ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease 0.6s',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                  }}
                >
                  AI Consultant · MIT-WPU Pune, 2026
                </p>
                <p
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: 'var(--foreground)',
                    letterSpacing: '-0.03em',
                    textShadow: '0 0 20px rgba(245,240,232,0.1)',
                  }}
                >
                  Vansh Gautam
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div
              className="mt-6 flex flex-wrap gap-3"
              style={{
                opacity: showPortrait ? 1 : 0,
                transition: 'opacity 0.6s ease 0.8s',
              }}
            >
              <a
                href="mailto:vanshgautam2005@gmail.com"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--primary)',
                  border: '1px solid rgba(255,101,0,0.3)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em',
                  display: 'inline-block',
                  textDecoration: 'none',
                  background: 'rgba(255,101,0,0.04)',
                  transition: 'all 0.3s ease',
                }}
              >
                vanshgautam2005@gmail.com
              </a>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                  border: '1px solid var(--border)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em',
                  display: 'inline-block',
                }}
              >
                +91 7888644721
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                  border: '1px solid var(--border)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em',
                  display: 'inline-block',
                }}
              >
                Pune, India
              </span>
            </div>
          </div>

          {/* Story */}
          <div>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
                marginBottom: '3.5rem',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  color: 'var(--foreground)',
                  lineHeight: 0.85,
                }}
              >
                I&apos;m{' '}
                <span
                  style={{
                    color: 'var(--primary)',
                    textShadow: visible ? '0 0 60px rgba(255,101,0,0.25)' : 'none',
                    transition: 'text-shadow 1s ease 0.5s',
                  }}
                >
                  Vansh.
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              {STORY_LINES?.map((line, i) => (
                <p
                  key={line}
                  style={{
                    fontSize: i === 4 || i === 5 ? '1.2rem' : i === 6 ? '1.1rem' : '1rem',
                    fontWeight: i === 4 || i === 5 ? 700 : i === 6 ? 600 : 400,
                    color: i >= 4 ? 'var(--foreground)' : 'var(--muted-foreground)',
                    lineHeight: 1.7,
                    opacity: activeLine >= i ? 1 : 0.1,
                    transform: activeLine >= i ? 'translateX(0)' : 'translateX(-16px)',
                    transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
                    fontStyle: i === 3 ? 'italic' : 'normal',
                    borderLeft: i === 4 || i === 5 ? '2px solid rgba(255,101,0,0.4)' : 'none',
                    paddingLeft: i === 4 || i === 5 ? '1rem' : '0',
                    textShadow: (i === 4 || i === 5) && activeLine >= i ? '0 0 20px rgba(245,240,232,0.05)' : 'none',
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
