import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 bg-navy-950/80 py-8 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-300">
            © {new Date().getFullYear()} ResultHub BU Jhansi · Institute of Engineering & Technology (IET)
          </p>
          <p className="text-gray-500 mt-1">
            Student-built analytical platform for Bundelkhand University B.Tech Departments (EIE, BME, ME, CSE, ECE, BT, FT).
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/result" className="hover:text-amber-400 transition-colors">Results</Link>
          <Link href="/leaderboard" className="hover:text-amber-400 transition-colors">Leaderboards</Link>
          <Link href="/analytics" className="hover:text-amber-400 transition-colors">Analytics</Link>
          <Link href="/compare" className="hover:text-amber-400 transition-colors">Compare</Link>
          <Link href="/twin" className="hover:text-amber-400 transition-colors">Twin</Link>
          <Link href="/subjects" className="hover:text-amber-400 transition-colors">Subjects</Link>
          <Link href="/tools/cgpa" className="hover:text-amber-400 transition-colors">CGPA Calculator</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
}
