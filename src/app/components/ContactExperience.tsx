'use client';
import React, { useState, useRef, useEffect } from 'react';

interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  multiline?: boolean;
}

const FIELDS: Field[] = [
  { id: 'name', label: 'Your name', placeholder: 'Your name', type: 'text' },
  { id: 'company', label: 'Your company', placeholder: 'Your company (or "solo")', type: 'text' },
  { id: 'problem', label: 'What are you trying to solve?', placeholder: 'Describe the problem...', type: 'text', multiline: true },
  { id: 'process', label: 'What does the current process look like?', placeholder: 'How does it work today?', type: 'text', multiline: true },
  { id: 'outcome', label: 'What outcome are you looking for?', placeholder: 'What does success look like?', type: 'text', multiline: true },
  { id: 'budget', label: 'Estimated budget', placeholder: 'e.g. $5,000 – $20,000', type: 'text' },
];

export default function ContactExperience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [activeField, setActiveField] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' && !FIELDS[index].multiline) {
      e.preventDefault();
      if (index < FIELDS.length - 1) setActiveField(index + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isFieldVisible = (index: number) => {
    return index <= activeField;
  };

  return (
    <section
      ref={ref}
      id="contact-scene"
      className="py-32 px-6"
      style={{ background: '#0D0D0D' }}
      aria-label="Contact — Tell me about your problem"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
            marginBottom: '4rem',
          }}
        >
          <span className="text-scene-label block mb-4">Start a Conversation</span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--foreground)',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            Tell me about
            <br />
            <span style={{ color: 'var(--primary)' }}>the problem.</span>
          </h2>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--muted-foreground)',
              fontStyle: 'italic',
            }}
          >
            Fields appear as you progress. No rush.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              border: '1px solid rgba(255,101,0,0.2)',
              background: 'rgba(255,101,0,0.04)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,101,0,0.15)',
                border: '1px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.2rem',
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '0.75rem',
              }}
            >
              Problem received.
            </h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              I&apos;ll review what you&apos;ve shared and get back to you within 24 hours.
            </p>
            <a
              href="mailto:vanshgautam2005@gmail.com"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
              }}
            >
              vanshgautam2005@gmail.com
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-8">
              {FIELDS.map((field, i) => (
                <div
                  key={field.id}
                  className="contact-field-wrapper"
                  style={{
                    maxHeight: isFieldVisible(i) ? '200px' : '0',
                    opacity: isFieldVisible(i) ? 1 : 0,
                    transition: `max-height 0.6s cubic-bezier(0.16,1,0.3,1) ${i === activeField ? '0s' : '0s'}, opacity 0.5s ease`,
                    overflow: 'hidden',
                  }}
                >
                  <label
                    htmlFor={field.id}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: activeField === i ? 'var(--primary)' : 'var(--muted-foreground)',
                      marginBottom: '0.5rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <textarea
                      id={field.id}
                      className="contact-input"
                      placeholder={field.placeholder}
                      value={values[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      onFocus={() => setActiveField(i)}
                      rows={3}
                      style={{ resize: 'none' }}
                      aria-label={field.label}
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      className="contact-input"
                      placeholder={field.placeholder}
                      value={values[field.id] || ''}
                      onChange={(e) => {
                        handleChange(field.id, e.target.value);
                      }}
                      onFocus={() => setActiveField(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      aria-label={field.label}
                    />
                  )}

                  {/* Next field reveal trigger */}
                  {i === activeField && i < FIELDS.length - 1 && values[field.id] && values[field.id].length > 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveField(i + 1)}
                      style={{
                        marginTop: '0.75rem',
                        fontSize: '0.7rem',
                        color: 'var(--primary)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em',
                        padding: 0,
                      }}
                    >
                      Continue →
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit */}
            {activeField >= FIELDS.length - 1 && (
              <div
                style={{
                  marginTop: '3rem',
                  opacity: 1,
                  animation: 'fade-in-up 0.5s ease forwards',
                }}
              >
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '1rem 2.5rem' }}
                >
                  Send the problem →
                </button>
                <p
                  style={{
                    marginTop: '1.5rem',
                    fontSize: '0.75rem',
                    color: 'var(--muted-foreground)',
                    fontStyle: 'italic',
                  }}
                >
                  You don&apos;t need to know what technology you need.
                </p>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}