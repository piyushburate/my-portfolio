import { getReadStats } from '@/services/wakatime';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const readStatsResponse = await getReadStats();;
    return NextResponse.json(readStatsResponse);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}