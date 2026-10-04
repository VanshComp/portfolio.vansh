import { NextResponse } from 'next/server';

const INBOX = 'vanshgautam2005@gmail.com';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: 'Email delivery is not configured yet. Please email me directly instead.' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please check your form and try again.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Please check your form and try again.' }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const getField = (key: string, maxLength: number) =>
    typeof fields[key] === 'string' ? fields[key].trim().slice(0, maxLength) : '';

  const name = getField('name', 120);
  const email = getField('email', 254);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide your name and a valid email address.' }, { status: 400 });
  }

  const details = [
    ['Company', getField('company', 200)],
    ['Problem', getField('problem', 5000)],
    ['Current process', getField('process', 5000)],
    ['Desired outcome', getField('outcome', 5000)],
    ['Estimated budget', getField('budget', 120)],
  ];
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...details.map(([label, value]) => `${label}: ${value || 'Not provided'}`),
  ].join('\n\n');
  const subjectName = name.replace(/[\r\n]+/g, ' ').slice(0, 100);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [INBOX],
        reply_to: email,
        subject: `Portfolio inquiry from ${subjectName}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error('Contact email provider rejected the request:', response.status);
      return NextResponse.json(
        { error: 'Your message could not be sent right now. Please try again or email me directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed:', error);
    return NextResponse.json(
      { error: 'Your message could not be sent right now. Please try again or email me directly.' },
      { status: 502 },
    );
  }
}