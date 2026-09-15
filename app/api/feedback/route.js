import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, branch, year, rating, feedback } = body;

    if (!name || !rating || !feedback) {
      return NextResponse.json(
        { error: 'Please fill out all required fields.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const targetEmail = 'adityakverma945085@gmail.com';

    // 1. Send via Web3Forms (Instant email delivery to adityakverma945085@gmail.com)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || 'a888c3a9-e2b2-4d56-82b4-367f082e0e5a',
          subject: `⭐ New Student Review (${rating}/5 Stars) from ${name} (${branch || 'N/A'})`,
          from_name: 'BU IET ResultHub Feedback',
          to_email: targetEmail,
          'Student Name': name,
          'Branch': branch || 'Not Specified',
          'Academic Year': year || 'Not Specified',
          'Star Rating': `${rating} / 5 Stars ${'⭐'.repeat(Number(rating) || 5)}`,
          'Feedback / Suggestion': feedback,
          'Submitted At (IST)': timestamp,
        }),
      });
    } catch (mailErr) {
      console.warn('Web3Forms dispatch warning:', mailErr);
    }

    // 2. If Google Apps Script Webhook URL is provided, also forward directly to Google Sheet
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp,
            name,
            branch: branch || 'N/A',
            year: year || 'N/A',
            rating: Number(rating),
            feedback,
          }),
        });
      } catch (sheetErr) {
        console.warn('Google Sheet webhook warning:', sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Review received successfully!',
      timestamp,
    });
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again.' },
      { status: 500 }
    );
  }
}
