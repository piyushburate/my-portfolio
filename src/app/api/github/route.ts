
import { getGithubUser } from '@/services/github';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await getGithubUser();
  return NextResponse.json(response.data);
}