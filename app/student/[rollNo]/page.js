import { STUDENTS } from '@/lib/data';
import StudentDashboard from '@/components/StudentDashboard';

export function generateStaticParams() {
  return STUDENTS.map((s) => ({
    rollNo: s.rollNo,
  }));
}

export default function StudentPage({ params }) {
  return <StudentDashboard rollNo={params?.rollNo} />;
}
