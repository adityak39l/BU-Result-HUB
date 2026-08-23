'use client';

import { STUDENTS } from '@/lib/data';
import StudentDashboard from '@/components/StudentDashboard';

export default function StudentIndexPage() {
  const defaultCse = STUDENTS.find(s => s.branch === 'CSE') || STUDENTS[0];
  return <StudentDashboard rollNo={defaultCse.rollNo} />;
}
