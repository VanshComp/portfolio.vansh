import React from 'react';
import type { Metadata, Viewport } from 'next';
// @ts-ignore - Next.js handles global CSS imports for app-router layouts.
import '../styles/tailwind.css';

const fontVariables: React.CSSProperties & Record<'--font-sans' | '--font-mono', string> = {
  '--font-sans': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  '--font-mono': 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Vansh Gautam — AI Consultant with Engineering Capabilities',
  description: 'Vansh Gautam turns complex business problems into production AI systems. Bring the problem — he figures out what needs to be built and takes it from there.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    title: 'Vansh Gautam — AI Consultant',
    description: 'Bring me the problem. I\'ll figure out what needs to be built.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={fontVariables}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvanshgauta3467back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}