'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Code2, Database, Cpu, BarChart3, Users, Zap, 
  AlertTriangle, GraduationCap, Globe, Youtube, Github, 
  Linkedin, ExternalLink, Sparkles, CheckCircle2, Award, Heart 
} from 'lucide-react';
import { STUDENTS, BRANCHES } from '@/lib/data';

export default function AboutPage() {
  const [makerImg, setMakerImg] = useState('/maker.jpg');
  const totalStudents = STUDENTS?.length || 167;
  const totalBranches = BRANCHES?.length || 5;

  const features = [
    { icon: BarChart3, label: 'Result & SGPA Viewer', desc: 'Semester-wise performance dekho ek jagah' },
    { icon: Users, label: 'Branch Leaderboard', desc: 'CSE, ECE, EIE, BME, ME — sabhi branches ki ranking ek saath' },
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
    { name: 'Vercel Cloud', color: 'text-violet-300 bg-violet-900/30 border-violet-700/50' },
    { name: 'Lucide Icons', color: 'text-rose-300 bg-rose-900/30 border-rose-700/50' },
  ];

  const makerContributions = [
    'Designed & engineered full-stack responsive web UI in Next.js & Tailwind CSS',
    'Automated BU Jhansi marksheet web-scraping pipeline using Python & BeautifulSoup',
    'Built live SGPA leaderboard ranking and academic twin algorithms',
    'Integrated comprehensive result dataset across CSE, ECE, ME, EIE, & BME branches',
    'Created interactive student dashboard with semester-wise performance visualizer',
    'Configured automated cloud deployment on Vercel with SEO sitemap indexing',
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
          IET — Institute of Engineering & Technology · Bundelkhand University
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { val: `${totalStudents}`, label: 'Total Students' },
          { val: `${totalBranches}`, label: 'B.Tech Branches' },
          { val: '100%', label: 'Free & Open' },
        ].map(({ val, label }) => (
          <div key={label} className="glass-card p-4 border-slate-200 dark:border-gray-800">
            <div className="text-2xl font-black text-[#68c2e3]">{val}</div>
            <div className="text-xs text-slate-400 font-bold mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* The Maker Section — Ultra-Compact & Sleek */}
      <section className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/20 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            The Maker
          </span>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-900/60 backdrop-blur-xl space-y-3.5">
          {/* Maker Header: Photo + Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 text-center sm:text-left">
            {/* Profile Avatar / Photo */}
            <div className="relative group shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden ring-2 ring-[#68c2e3]/40 shadow-lg shadow-[#68c2e3]/10 bg-slate-950 flex items-center justify-center">
                <img
                  src={makerImg}
                  alt="Aditya Kumar Verma"
                  onError={() => {
                    if (makerImg !== '/maker.svg') setMakerImg('/maker.svg');
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Name & Details */}
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                <h2 className="text-lg sm:text-xl font-black text-white">Aditya Kumar Verma</h2>
                <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  EIE Branch
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-sky-500/15 text-[#68c2e3] border border-sky-500/30">
                  Full-Stack Dev
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded font-bold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                  Data Engineer
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-300 flex items-center justify-center sm:justify-start gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#68c2e3] shrink-0" />
                IET Bundelkhand University, Jhansi · B.Tech (EIE)
              </p>

              <p className="text-[11px] text-slate-400 leading-relaxed max-w-xl">
                Created BU IET ResultHub to give BU Jhansi students fast, insightful, and beautifully organized academic analytics and semester leaderboards.
              </p>
            </div>
          </div>

          {/* Key Contributions */}
          <div className="pt-2 border-t border-slate-800/70 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Award className="w-3 h-3 text-[#68c2e3]" />
              Key Contributions & Engineering
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
              {makerContributions.map((item, i) => (
                <div key={i} className="flex items-start gap-1.5 p-1.5 px-2.5 rounded-lg bg-slate-950/30 border border-slate-800/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-tight text-[11px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Badges */}
          <div className="pt-2 border-t border-slate-800/70 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center sm:text-left">
              Connect
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {/* YouTube Button */}
              <a
                href="https://youtube.com/@adityakverma-039?si=ynAmFVEJL8eBxs3e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/50 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/adityak39l"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/aditya-verma-0309l/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:border-sky-500/50 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
            any student across CSE, ECE, EIE, BME, or Mechanical Engineering.
          </p>
          <p>
            This platform was built by a BU Jhansi IET student, for BU Jhansi students — completely
            free, with no ads, and no login required. Just enter your roll number and explore.
          </p>
          <p>
            We're continuously improving the platform and adding new features. If you have
            suggestions or find any data issues, feel free to reach out via GitHub or YouTube.
          </p>
        </div>
      </div>

      {/* Features — What you can do */}
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

