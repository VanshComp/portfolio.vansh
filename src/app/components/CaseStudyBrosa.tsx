'use client';
import React, { useRef, useEffect, useState } from 'react';

const ARCH_STEPS = ['WhatsApp', 'Gateway', 'Conversation Layer', 'Business Services', 'Database / APIs'];
const ALT_ARCH = ['AI-generated image', 'Backend', 'Media upload', 'WhatsApp', 'User'];
const FEATURES = ['Food ordering', 'Movie tickets', 'Bus tickets', 'AI support', 'P2P transactions'];
const OWNERSHIP = ['Architecture', 'Backend', 'AI', 'Database', 'Infrastructure', 'Deployment'];
const TECH = ['Python', 'Node.js', 'WhatsApp Business API', 'LLM Fine-tuning', 'MongoDB', 'Docker', 'Kubernetes'];

export default function CaseStudyBrosa() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [archStep, setArchStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const [showAlt, setShowAlt] = useState(false);
  const [showClimax, setShowClimax] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    ARCH_STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setArchStep(i + 1), 400 + i * 450));
    });
    timers.push(setTimeout(() => setStatsVisible(true), 2800));
    timers.push(setTimeout(() => setShowError(true), 3800));
    timers.push(setTimeout(() => setErrorShake(true), 4200));
    timers.push(setTimeout(() => setShowAlt(true), 5400));
    timers.push(setTimeout(() => setShowClimax(true), 7000));
    timers.push(setTimeout(() => setShowResult(true), 8500));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#0A0A0A' }}
      aria-label="Brosa case study"
      id="brosa"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 top-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          transform: 'translateY(-10%)',
        }}
      >
        09
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
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
            Featured Project
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              style={{
                fontSize: 'clamp(3rem, 9vw, 8rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 0.85,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
                textShadow: visible ? '0 0 80px rgba(245,240,232,0.05)' : 'none',
              }}
            >
              Brosa{' '}
              <span
                style={{
                  color: 'var(--primary)',
                  textShadow: visible ? '0 0 60px rgba(255,101,0,0.25)' : 'none',
                }}
              >
                AI
              </span>
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--primary)',
                border: '1px solid rgba(255,101,0,0.3)',
                padding: '0.4rem 0.9rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
                background: 'rgba(255,101,0,0.05)',
              }}
            >
              Idea → Production
            </span>
          </div>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              color: 'var(--muted-foreground)',
              maxWidth: '520px',
              lineHeight: 1.7,
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}
          >
            WhatsApp ordering, payments and support — reimagined for Africa. One familiar interface. Everything.
          </p>
        </div>

        {/* Two-column: Architecture + WhatsApp mock */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Architecture diagram */}
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
              Architecture
            </p>
            <div className="space-y-1">
              {ARCH_STEPS.map((step, i) => (
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
                      boxShadow: archStep > i ? '0 0 12px rgba(255,101,0,0.08)' : 'none',
                      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                      transform: archStep > i ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: archStep > i ? 1 : 0.25,
                    }}
                  >
                    {step}
                  </div>
                  {i < ARCH_STEPS.length - 1 && (
                    <div
                      style={{
                        textAlign: 'center',
                        color: 'var(--primary)',
                        fontSize: '1rem',
                        opacity: archStep > i ? 1 : 0.15,
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

          {/* WhatsApp conversation mock */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.5s',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingBottom: '1rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--primary-foreground)',
                  boxShadow: '0 0 12px rgba(255,101,0,0.3)',
                }}
              >
                B
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--foreground)' }}>Brosa</p>
                <p style={{ fontSize: '0.65rem', color: '#4CAF50' }}>● online</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              {[
                { text: 'Hi, I want to order jollof rice', from: 'user' },
                { text: 'Sure! 🍚 Which restaurant would you like to order from?', from: 'brosa' },
                { text: "Mama Abena's Kitchen", from: 'user' },
                { text: 'Jollof Rice — GHS 30. How many would you like?', from: 'brosa' },
                { text: '2 please!', from: 'user' },
                { text: 'Your total is GHS 60. Shall I place the order?', from: 'brosa' },
              ].map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    opacity: archStep >= 2 ? 1 : 0,
                    transform: archStep >= 2 ? 'translateY(0)' : 'translateY(10px)',
                    transition: `all 0.4s ease ${i * 0.12}s`,
                  }}
                >
                  <div
                    style={{
                      maxWidth: '75%',
                      padding: '0.5rem 0.75rem',
                      borderRadius: msg.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      background: msg.from === 'user' ? 'rgba(255,101,0,0.18)' : 'var(--muted)',
                      fontSize: '0.75rem',
                      color: 'var(--foreground)',
                      lineHeight: 1.5,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats — with heartbeat animation */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {[
            { value: '10K+', label: 'Customers' },
            { value: '200K+', label: 'Orders Processed' },
            { value: '99.2%', label: 'Success Rate' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                animation: statsVisible ? `fade-in-up 0.6s ease ${i * 0.1}s both` : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(255,101,0,0.2)',
                  animation: statsVisible ? 'heartbeat 2s ease-in-out infinite' : 'none',
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--muted-foreground)',
                  marginTop: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* The hard moment — ERROR */}
        <div
          style={{
            background: 'var(--card)',
            border: `1px solid ${showError ? 'rgba(255,50,50,0.4)' : 'var(--border)'}`,
            padding: '2.5rem',
            marginBottom: '1.5rem',
            opacity: showError ? 1 : 0,
            transition: 'opacity 0.6s ease, border-color 0.4s ease',
            boxShadow: showError ? '0 0 40px rgba(255,50,50,0.08)' : 'none',
            animation: errorShake ? 'shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97)' : 'none',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              color: '#ff4444',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            The Problem
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Dynamic image unsupported.
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#ff6666',
                  background: 'rgba(255,50,50,0.08)',
                  border: '1px solid rgba(255,50,50,0.25)',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}
              >
                ERROR: WhatsApp Flows — Dynamic image rendering not supported in current API version.
              </div>
              <div className="space-y-2">
                {['Documentation.', 'Research.', 'Attempts.', 'Failed paths.', 'Weeks pass.'].map((item, i) => (
                  <p
                    key={item}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--muted-foreground)',
                      fontStyle: 'italic',
                      opacity: showError ? 1 : 0,
                      transform: showError ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `all 0.4s ease ${i * 0.15 + 0.3}s`,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--muted-foreground)',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  lineHeight: 1.8,
                  borderLeft: '2px solid rgba(255,101,0,0.3)',
                  paddingLeft: '1rem',
                }}
              >
                Stop asking whether the obvious path works.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Ask whether the outcome is still possible.
              </p>
              {/* Alt architecture */}
              {showAlt && (
                <div
                  className="space-y-1"
                  style={{ animation: 'fade-in-up 0.6s ease both' }}
                >
                  {ALT_ARCH.map((step, i) => (
                    <React.Fragment key={step}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--foreground)',
                          border: '1px solid rgba(255,101,0,0.35)',
                          padding: '0.4rem 0.8rem',
                          textAlign: 'center',
                          display: 'block',
                          width: '100%',
                          background: 'rgba(255,101,0,0.04)',
                          opacity: showAlt ? 1 : 0,
                          transform: showAlt ? 'translateX(0)' : 'translateX(10px)',
                          transition: `all 0.4s ease ${i * 0.12}s`,
                        }}
                      >
                        {step}
                      </div>
                      {i < ALT_ARCH.length - 1 && (
                        <div
                          style={{
                            textAlign: 'center',
                            color: 'var(--primary)',
                            fontSize: '0.8rem',
                            opacity: showAlt ? 0.6 : 0,
                          }}
                          aria-hidden="true"
                        >
                          ↓
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CLIMAX — the most memorable moment */}
        {showClimax && (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'rgba(255,101,0,0.03)',
              border: '1px solid rgba(255,101,0,0.2)',
              marginBottom: '1.5rem',
              animation: 'cinematic-fade-in 1s ease both',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent lines */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                animation: 'line-draw-h 1.2s ease both',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                animation: 'line-draw-h 1.2s ease 0.3s both',
              }}
              aria-hidden="true"
            />

            <h3
              style={{
                fontSize: 'clamp(1.6rem, 4.5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--foreground)',
                marginBottom: '0.5rem',
                animation: 'slam-down 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both',
              }}
            >
              THE LIMITATION REMAINED.
            </h3>
            <h3
              style={{
                fontSize: 'clamp(1.6rem, 4.5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--primary)',
                textShadow: '0 0 60px rgba(255,101,0,0.3)',
                animation: 'slam-down 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both',
              }}
            >
              THE PRODUCT DIDN&apos;T HAVE TO.
            </h3>
          </div>
        )}

        {/* Result */}
        {showResult && (
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ animation: 'fade-in-up 0.8s ease both' }}
          >
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '2rem',
              }}
            >
              <div className="flex gap-8 mb-6">
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
                    Before
                  </p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>Idea</p>
                </div>
                <div style={{ color: 'var(--primary)', fontSize: '1.5rem', alignSelf: 'center' }}>→</div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.35em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    After
                  </p>
                  <p
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      textShadow: '0 0 20px rgba(255,101,0,0.2)',
                    }}
                  >
                    Production
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {FEATURES.map((f, i) => (
                  <div
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      animation: `stagger-reveal 0.4s ease ${i * 0.08}s both`,
                    }}
                  >
                    <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--foreground)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.35em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                My Ownership
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {OWNERSHIP.map((o, i) => (
                  <span
                    key={o}
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      border: '1px solid rgba(255,101,0,0.35)',
                      padding: '0.3rem 0.7rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.05em',
                      background: 'rgba(255,101,0,0.05)',
                      animation: `scale-in-overshoot 0.4s ease ${i * 0.06}s both`,
                    }}
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.35em',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}