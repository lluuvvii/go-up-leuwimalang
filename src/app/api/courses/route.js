import { NextResponse } from 'next/server';
import { connectDb } from '@/utils/database';
import Course from '@/models/course';

// Fungsi GET untuk mendapatkan semua kursus
export async function GET() {
  await connectDb();
  const courses = await Course.find({});
  return NextResponse.json(courses);
}

// Fungsi POST untuk menambahkan kursus baru
export async function POST(request) {
  await connectDb();
  const { title, description, image } = await request.json();

  if (!title || !description) {
    return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
  }

  const newCourse = new Course({ title, description, image });
  await newCourse.save();

  return NextResponse.json(newCourse, { status: 201 });
}
