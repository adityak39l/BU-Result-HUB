import { redirect } from 'next/navigation';
import { STUDENTS } from '@/lib/data';

export default function StudentIndexPage() {
  const defaultCse = STUDENTS.find(s => s.branch === 'CSE') || STUDENTS[0];
  redirect(`/student/${defaultCse.rollNo}`);
}
