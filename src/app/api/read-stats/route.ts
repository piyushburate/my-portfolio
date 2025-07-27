import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}