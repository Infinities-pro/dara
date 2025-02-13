import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.LOLARCHIVER_API_KEY;
const API_BASE_URL = 'https://api.lolarchiver.com';

export async function GET(request: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { error: 'Username is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${API_BASE_URL}/twitter_history_lookup`, {
      method: 'POST',
      headers: {
        'apikey': API_KEY,
        'handle': username,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 401) {
      throw new Error('Invalid API key');
    }

    if (response.status === 416) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }

    if (!response.ok) {
      throw new Error('Failed to fetch Twitter data');
    }

    // Return the raw response from LoLArchiver API
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch Twitter data' },
      { status: 500 }
    );
  }
} 