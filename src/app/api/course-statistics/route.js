import { NextResponse } from 'next/server';
import { connectDb } from '@/utils/database';
import CourseStatistic from '@/models/courseStatistic';

export async function GET() {
  await connectDb();
  const statistics = await CourseStatistic.find({});
  return NextResponse.json(statistics);
}

export async function POST(request) {
  await connectDb();
  const { courseId, userId, completed, score } = await request.json();

  const newStatistic = new CourseStatistic({ courseId, userId, completed, score });
  await newStatistic.save();

  return NextResponse.json(newStatistic, { status: 201 });
}
