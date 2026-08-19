'use client';
import Link from 'next/link';
import { ArrowLeft, Github, Code2, Database, Cpu, BarChart3, Users, Zap, AlertTriangle, GraduationCap, Globe } from 'lucide-react';

export default function AboutPage() {
  const features = [
    { icon: BarChart3, label: 'Result & SGPA Viewer', desc: 'Semester-wise performance dekho ek jagah' },
    { icon: Users, label: 'Branch Leaderboard', desc: 'EIE, BME, ME — sabka rank ek saath' },
    { icon: Zap, label: 'Academic Twin Finder', desc: 'Apna academic doppelganger dhundo' },
    { icon: Code2, label: 'CGPA Calculator', desc: 'Drop simulation ke saath future planning' },
    { icon: Cpu, label: 'Student Dashboard', desc: 'Personal profile with SGPA trend graph' },
    { icon: Globe, label: 'Cross-Branch Compare', desc: 'Kisi bhi student se compare karo' },
  ];

  const techStack = [
    { name: 'Next.js 14', color: 'text-slate-100 bg-slate-800 border-slate-700' },
    { name: 'Tailwind CSS', color: 'text-cyan-300 bg-cyan-900/30 border-cyan-700/50' },
    { name: 'Python Scraper', color: 'text-yellow-300 bg-yellow-900/30 border-yellow-700/50' },
    { name: 'BeautifulSoup', color: 'text-emerald-300 bg-emerald-900/30 border-emerald-700/50' },
    { name: 'Vercel', color: 'text-violet-300 bg-violet-900/30 border-violet-700/50' },
    { name: 'Lucide Icons', color: 'text-rose-300 bg-rose-900/30 border-rose-700/50' },
  ];

  const makerContributions = [
    'Designed and built the complete frontend UI system',
    'Implemented real-time result scraping pipeline from BU Jhansi server',
    'Built data parsing engine using Python & BeautifulSoup',
    'Developed SGPA analytics, leaderboard & student dashboard',
    'Created Academic Twin algorithm with cross-branch matching',
    'Deployed on Vercel with full SEO & sitemap configuration',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10">

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#68c2e3] transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Home
      </Link>

      {/* Hero */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white">
          BU JHANSI
          <span className="text-[#68c2e3]"> RESULT HUB</span>
        </h1>
        <p className="text-slate-400 text-sm font-medium">
          IET — Institute of Engineering & Technology
        </p>
      </div>

      {/* Why we built this */}
      <div className="glass-card p-6 sm:p-8 space-y-4">
        <h2 className="font-black text-xl text-white">Why we built this</h2>
        <div className="space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            Every semester, BU Jhansi students get their results in a plain, hard-to-read format
            from the university portal. There was no way to compare performance, track SGPA trends,
            or see where you stand among your batchmates — so we decided to build something better.
          </p>
          <p>
            <strong className="text-white">BU Jhansi Result Hub</strong> turns raw marksheet data
            into something genuinely useful. View your detailed result, track your semester-wise
            SGPA graph, see your branch rank, find your academic twin, and compare yourself with
            any student across EIE, BME, or Mechanical Engineering.
          </p>
          <p>
            This platform was built by a BU Jhansi IET student, for BU Jhansi students — completely
            free, with no ads, and no login required. Just enter your roll number and explore.
          </p>
          <p>
            We're continuously improving the platform and adding new features. If you have
            suggestions or find any data issues, feel free to reach out via GitHub.
          </p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="font-black text-xl text-white mb-4">What you can do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="glass-card p-4 flex items-start gap-3 border-slate-200 dark:border-gray-800">
              <div className="w-8 h-8 rounded-lg bg-[#68c2e3]/10 border border-[#68c2e3]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-[#68c2e3]" />
              </div>
              <div>
                <div className="text-sm font-black text-white">{label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Maker — anonymous */}
      <div>
        <h2 className="font-black text-xl text-white mb-4">The maker</h2>
        <div className="glass-card p-6 flex flex-col gap-5">
          {/* Avatar placeholder */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#68c2e3] to-sky-700 flex items-center justify-center ring-2 ring-[#68c2e3] ring-offset-2 ring-offset-slate-950">
              <GraduationCap className="w-9 h-9 text-slate-950" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white leading-tight">BU Jhansi IET Student</h3>
              <p className="text-sm text-slate-400 mt-0.5">Full-Stack Developer & Data Engineer</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">EIE Branch</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-violet-500/10 text-violet-400 border border-violet-500/30">2024 Batch</span>
              </div>
            </div>
          </div>

          {/* Contributions */}
          <div>
            <p className="font-bold text-sm text-white mb-2">Key Contributions:</p>
            <ul className="space-y-1.5">
              {makerContributions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-emerald-400 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-bold text-sm text-white mb-2">Source Code:</p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/adityak39l/BU-Result-HUB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-700 text-slate-300 bg-gray-800/50 hover:bg-gray-800 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="font-black text-xl text-white mb-4">Built with</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map(({ name, color }) => (
            <span key={name} className={`text-xs px-3 py-1.5 rounded-full font-bold border ${color}`}>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { val: '42', label: 'Students' },
          { val: '3', label: 'Branches' },
          { val: '100%', label: 'Free' },
        ].map(({ val, label }) => (
          <div key={label} className="glass-card p-4 border-slate-200 dark:border-gray-800">
            <div className="text-2xl font-black text-[#68c2e3]">{val}</div>
            <div className="text-xs text-slate-400 font-bold mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl p-5 space-y-2 border border-amber-700/40 bg-amber-900/10">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h3 className="font-bold text-sm text-white">Data Accuracy Disclaimer</h3>
        </div>
        <p className="text-xs leading-relaxed text-slate-300">
          All academic data on this platform has been collected directly from the official
          BU Jhansi examination portal using automated scraping. While we strive for accuracy,
          there may be occasional discrepancies. This data is provided for informational and
          analytical purposes only.
        </p>
        <p className="text-xs leading-relaxed text-slate-400">
          If you spot an inaccuracy in your data, please cross-check with your official marksheet
          from BU Jhansi. We are not officially affiliated with Bundelkhand University in any capacity.
        </p>
      </div>

    </div>
  );
}
