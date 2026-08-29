'use client';
import React, { useRef, useEffect, useState } from 'react';

const RETRY_ARCH = ['Retry', 'Success', 'Context', 'Continue'];
const COUNSEL_TECH = ['Python', 'RunPod', 'Vespa', 'Pinecone', 'HuggingFace', 'PEFT/LoRA', 'GPTQ', 'Docker', 'FastAPI'];

export default function CaseStudyCounsel() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorPulse, setErrorPulse] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [retryStep, setRetryStep] = useState(0);
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
    timers.push(setTimeout(() => setShowError(true), 700));
    timers.push(setTimeout(() => setErrorPulse(true), 1100));
    timers.push(setTimeout(() => setShowRetry(true), 2200));
    RETRY_ARCH.forEach((_, i) => {
      timers.push(setTimeout(() => setRetryStep(i + 1), 2600 + i * 380));
    });
    timers.push(setTimeout(() => setShowMetric(true), 2600 + RETRY_ARCH.length * 380 + 400));
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#0A0A0A' }}
      aria-label="Counsel AI case study"
      id="counsel"
    >
      {/* Cinematic background number */}
      <div
        className="absolute right-0 top-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,101,0,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        13
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
            Existing System → Optimization
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
              Counsel{' '}
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
                35%
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
                lower inference latency
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
            Distributed vector-retrieval backend on containerized GPU infrastructure. Fine-tuned domain embedding models with LoRA/PEFT. Quantized with GPTQ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* The failure moment */}
          <div
            style={{
              background: 'var(--card)',
              border: `1px solid ${errorPulse ? 'rgba(255,50,50,0.35)' : 'var(--border)'}`,
              padding: '2rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s, border-color 0.5s ease',
              boxShadow: errorPulse ? '0 0 30px rgba(255,50,50,0.08)' : 'none',
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
            <div className="space-y-2 mb-6">
              {['function_call_1()', 'function_call_2()', 'function_call_3() ✗', 'function_call_4()'].map((fn, i) => (
                <div
                  key={fn}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '0.5rem 0.75rem',
                    background: fn.includes('✗') && showError ? 'rgba(255,50,50,0.1)' : 'var(--muted)',
                    border: `1px solid ${fn.includes('✗') && showError ? 'rgba(255,50,50,0.35)' : 'var(--border)'}`,
                    color: fn.includes('✗') && showError ? '#ff7777' : 'var(--muted-foreground)',
                    transition: 'all 0.5s ease',
                    animation: fn.includes('✗') && errorPulse ? 'pulse-glow 2s ease-in-out infinite' : 'none',
                  }}
                >
                  {fn}
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                color: showError ? '#ff7777' : 'var(--muted-foreground)',
                fontStyle: 'italic',
                transition: 'color 0.5s ease',
                marginBottom: '1.5rem',
              }}
            >
              {showError ? '● Failure detected. System continues.' : 'Executing functions...'}
            </p>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                opacity: showError ? 1 : 0,
                transform: showError ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.5s ease 0.3s',
                letterSpacing: '-0.01em',
              }}
            >
              What if failure shouldn&apos;t mean abandonment?
            </p>
          </div>

          {/* Retry architecture */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '2rem',
              opacity: showRetry ? 1 : 0,
              transform: showRetry ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
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
            <div className="space-y-1 mb-8">
              {RETRY_ARCH.map((step, i) => (
                <React.Fragment key={step}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: retryStep > i ? 'var(--foreground)' : 'var(--muted-foreground)',
                      border: `1px solid ${retryStep > i ? 'rgba(255,101,0,0.5)' : 'var(--border)'}`,
                      padding: '0.5rem 0.8rem',
                      textAlign: 'center',
                      display: 'block',
                      width: '100%',
                      background: retryStep > i ? 'rgba(255,101,0,0.04)' : 'transparent',
                      boxShadow: retryStep > i ? '0 0 10px rgba(255,101,0,0.08)' : 'none',
                      opacity: retryStep > i ? 1 : 0.2,
                      transform: retryStep > i ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    {step}
                  </div>
                  {i < RETRY_ARCH.length - 1 && (
                    <div
                      style={{
                        textAlign: 'center',
                        color: 'var(--primary)',
                        fontSize: '0.8rem',
                        opacity: retryStep > i ? 0.7 : 0.15,
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

            <div className="grid grid-cols-3 gap-4">
              {[
                { v: '35%', l: 'Latency Reduction' },
                { v: 'LoRA', l: 'Fine-tuning' },
                { v: 'GPTQ', l: 'Quantization' },
              ].map((s, i) => (
                <div
                  key={s.l}
                  style={{
                    textAlign: 'center',
                    animation: showMetric ? `scale-in-overshoot 0.5s ease ${i * 0.1}s both` : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      letterSpacing: '-0.02em',
                      textShadow: '0 0 15px rgba(255,101,0,0.2)',
                    }}
                  >
                    {s.v}
                  </div>
                  <p
                    style={{
                      fontSize: '0.58rem',
                      color: 'var(--muted-foreground)',
                      fontFamily: 'var(--font-mono)',
                      marginTop: '0.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div
          style={{
            marginTop: '1.5rem',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            padding: '1.5rem 2rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.7s',
          }}
        >
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
            {COUNSEL_TECH.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}