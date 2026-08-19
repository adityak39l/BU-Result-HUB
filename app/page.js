import Link from 'next/link';
import { BRANCHES, COLLEGE_INFO } from '@/lib/data';
import { 
  GraduationCap, Trophy, Award, Search, TrendingUp, BookOpen, 
  Users, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, 
  BarChart3, ChevronRight 
} from 'lucide-react';

export default function Home() {
  // Branch statistics mapping
  const branchStats = BRANCHES.map(b => ({
    ...b,
    avgCgpa: b.id === 'CSE' ? '8.42' : b.id === 'ECE' ? '8.15' : b.id === 'EIE' ? '8.10' : b.id === 'BME' ? '7.95' : '7.85',
    topStudent: b.id === 'BME' ? 'Bhavna Maurya (8.57 CGPA)' : b.id === 'EIE' ? 'Ayush Kumar (8.47 CGPA)' : 'Branch Topper'
  }));

  const faqs = [
    {
      q: "Which B.Tech branches are available on this portal?",
      a: "B.Tech branches at BU Jhansi are supported, including EIE, BME, ECE, CSE, ME, BTE, and FTE."
    },
    {
      q: "How are SGPA and CGPA calculated?",
      a: "Average CGPA is computed directly from semester marksheets using standard BU Jhansi CBCS credit formulas."
    },
    {
      q: "Is this website free to use?",
      a: "Yes, 100% free and open for all students of Bundelkhand University, Jhansi."
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-6 pb-8 text-center space-y-6 max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(104,194,227,0.15),transparent_70%)] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/20 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Official Academic Results & SGPA Ranking Hub
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
          Bundelkhand University <br />
          <span className="gradient-text-sky">B.Tech Result Hub</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Fast, accurate, and student-focused result portal for IET Bundelkhand University Jhansi. Inspect semester marksheets, track SGPA journey, and explore leaderboards.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/result"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 font-bold text-sm shadow-lg shadow-[#68c2e3]/25 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search Your Result</span>
          </Link>

          <Link
            href="/leaderboard"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-gray-900 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-gray-800 font-bold text-sm hover:bg-slate-200 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-[#68c2e3]" />
            <span>View Leaderboard</span>
          </Link>
        </div>
      </section>

      {/* Live Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-6 text-center border-[#68c2e3]/20">
          <div className="text-3xl sm:text-4xl font-extrabold gradient-text-sky">IET</div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1 font-medium">B.Tech Department</div>
        </div>
        <div className="glass-card p-6 text-center border-sky-500/20">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#68c2e3]">2,800+</div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1 font-medium">Results Indexed</div>
        </div>
        <div className="glass-card p-6 text-center border-blue-500/20">
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-500 dark:text-blue-400">370+</div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1 font-medium">B.Tech Students</div>
        </div>
        <div className="glass-card p-6 text-center border-indigo-500/20">
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-500 dark:text-indigo-400">100%</div>
          <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1 font-medium">Free & Instant</div>
        </div>
      </section>

      {/* B.Tech Branches Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Official B.Tech Engineering Branches</h2>
          <p className="text-sm text-slate-500 dark:text-gray-400 max-w-xl mx-auto">Select a branch to inspect average SGPA trends and branch toppers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {branchStats.map((branch) => (
            <div
              key={branch.id}
              className="glass-card glass-card-hover p-5 flex flex-col justify-between gap-4 border-gray-200 dark:border-gray-800"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/20">
                    Code: {branch.code}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">{branch.count} Students</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{branch.name}</h3>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-gray-800 text-xs">
                <div className="flex justify-between text-slate-700 dark:text-gray-300">
                  <span className="text-slate-500 dark:text-gray-400">Average CGPA:</span>
                  <span className="font-bold text-[#68c2e3]">{branch.avgCgpa}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-gray-300">
                  <span className="text-slate-500 dark:text-gray-400">Branch Leader:</span>
                  <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[140px]">{branch.topStudent}</span>
                </div>
              </div>

              <Link
                href={`/leaderboard?branch=${branch.id}`}
                className="w-full py-2 rounded-lg bg-slate-100 dark:bg-gray-900 hover:bg-[#68c2e3]/15 text-slate-700 dark:text-gray-300 hover:text-[#68c2e3] font-bold text-xs transition-colors flex items-center justify-center gap-1 border border-slate-200 dark:border-gray-800"
              >
                <span>View {branch.id} Rankings</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 space-y-3 border-slate-200 dark:border-gray-800">
          <div className="w-10 h-10 rounded-xl bg-[#68c2e3]/15 text-[#68c2e3] flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Instant Roll Number Search</h3>
          <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
            Search your official BU Jhansi result by entering your Roll Number or Name with immediate sessional and theory breakdown.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3 border-slate-200 dark:border-gray-800">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-500 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Branch & Overall Leaderboards</h3>
          <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
            Branch-wise and batch-wise rankings sorted by SGPA and CGPA for all engineering departments.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3 border-slate-200 dark:border-gray-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Semester Progression & Analytics</h3>
          <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
            Track SGPA improvements, Compare student profiles side-by-side, and calculate future target CGPA effortlessly.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="glass-card p-8 space-y-6 max-w-3xl mx-auto border-[#68c2e3]/30">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500 dark:text-gray-400">Everything you need to know about BU Jhansi Result Hub</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-800 space-y-1.5">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#68c2e3]" />
                {faq.q}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
