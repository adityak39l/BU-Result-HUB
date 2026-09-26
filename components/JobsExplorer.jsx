'use client';

import { useMemo, useState } from 'react';
import { Briefcase, Search, MapPin, ExternalLink, Users, Building2, X, Info } from 'lucide-react';
import { COMPANIES, JOB_BRANCHES, JOB_CATEGORIES, LIST_UPDATED } from '@/lib/companiesData';

const CATEGORY_STYLES = {
  'Global MNC': 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30',
  'Indian Giant': 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/30',
  'Core Specialist': 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
  'Startup': 'bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/30',
  'Govt / PSU': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
};

// Tailwind only scans app/ and components/, so branch colour classes must live here, not in lib/.
const BRANCH_BADGE = {
  CSE: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 font-bold',
  ECE: 'bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/40 font-bold',
  EIE: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-bold',
  ME: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 font-bold',
  BME: 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 font-bold',
  BTE: 'bg-lime-400/20 text-lime-600 dark:text-lime-300 border border-lime-400/50 font-bold',
  FT: 'bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-500/50 font-bold',
};

const branchBadge = (id) => BRANCH_BADGE[id] || '';

const linkedInSeniorsUrl = (name) => {
  const company = name.replace(/\s*\(.*?\)/g, '').trim();
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`Bundelkhand University ${company}`)}`;
};

export default function JobsExplorer() {
  const [branch, setBranch] = useState('ALL');
  const [category, setCategory] = useState('ALL');
  const [query, setQuery] = useState('');

  const branchCounts = useMemo(() => {
    const counts = {};
    for (const b of JOB_BRANCHES) counts[b.id] = COMPANIES.filter((c) => c.branches.includes(b.id)).length;
    return counts;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMPANIES.filter((c) => {
      if (branch !== 'ALL' && !c.branches.includes(branch)) return false;
      if (category !== 'ALL' && c.category !== category) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.locations.some((l) => l.toLowerCase().includes(q))
      );
    });
  }, [branch, category, query]);

  const pillBase = 'px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border';
  const pillIdle = 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-gray-800';

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/30 text-xs font-bold mb-1">
          <Briefcase className="w-4 h-4" />
          Off-Campus Opportunities • Official Career Links
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Jobs & <span className="gradient-text-sky">Internships</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-xl mx-auto">
          {COMPANIES.length}+ companies hiring B.Tech graduates, sorted by branch. Pick your branch, open the official careers page and apply directly.
        </p>
      </div>

      {/* Branch Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2">
        <button
          onClick={() => setBranch('ALL')}
          className={`${pillBase} ${
            branch === 'ALL'
              ? 'bg-[#68c2e3] text-slate-950 border-[#68c2e3] shadow-lg shadow-[#68c2e3]/20'
              : pillIdle
          }`}
        >
          ⚡ All Branches <span className="opacity-70">({COMPANIES.length})</span>
        </button>
        {JOB_BRANCHES.map((b) => (
          <button
            key={b.id}
            onClick={() => setBranch(b.id)}
            title={b.name}
            className={`${pillBase} ${branch === b.id ? `${branchBadge(b.id)} shadow-md scale-105` : pillIdle}`}
          >
            {b.id} <span className="opacity-70">({branchCounts[b.id]})</span>
          </button>
        ))}
      </div>

      {/* Search + Category Filter */}
      <div className="max-w-5xl mx-auto space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company, city or category…"
            aria-label="Search companies"
            className="w-full pl-10 pr-10 py-3 rounded-xl text-sm bg-white dark:bg-gray-900/70 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#68c2e3]/50 focus:border-[#68c2e3]/50 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 dark:text-gray-400 mr-1 shrink-0">Type:</span>
          {['ALL', ...JOB_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap border ${
                category === cat
                  ? 'bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 border-transparent shadow-md'
                  : pillIdle
              }`}
            >
              {cat === 'ALL' ? 'All Types' : cat}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-gray-400">
          <span>
            Showing {results.length} {results.length === 1 ? 'company' : 'companies'}
            {branch !== 'ALL' && <> for <span className="text-slate-900 dark:text-white">{branch}</span></>}
          </span>
          {(branch !== 'ALL' || category !== 'ALL' || query) && (
            <button
              onClick={() => { setBranch('ALL'); setCategory('ALL'); setQuery(''); }}
              className="text-[#68c2e3] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Company Cards */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {results.map((c) => (
            <div key={c.name} className="glass-card glass-card-hover p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#68c2e3]/25 to-sky-600/25 border border-[#68c2e3]/30 flex items-center justify-center font-black text-lg text-[#68c2e3]">
                  {c.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight break-words">{c.name}</h3>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold border ${CATEGORY_STYLES[c.category]}`}>
                    {c.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {c.branches.map((b) => (
                  <span key={b} className={`px-1.5 py-0.5 rounded text-[10px] ${branchBadge(b)}`}>{b}</span>
                ))}
              </div>

              <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-gray-400">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#68c2e3]" />
                <span>{c.locations.join(', ')}</span>
              </div>

              <div className="mt-auto pt-2 grid grid-cols-1 gap-2">
                <a
                  href={c.careerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 font-extrabold text-xs shadow-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  Apply on Official Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={linkedInSeniorsUrl(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 font-bold text-xs hover:border-[#68c2e3]/40 hover:text-slate-900 dark:hover:text-white active:scale-95 transition-all"
                >
                  <Users className="w-3.5 h-3.5 text-[#68c2e3]" /> Find BU Seniors on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card max-w-md mx-auto p-8 text-center space-y-2">
          <Building2 className="w-8 h-8 mx-auto text-slate-400 dark:text-gray-500" />
          <p className="font-bold text-slate-900 dark:text-white">No companies found</p>
          <p className="text-xs text-slate-500 dark:text-gray-400">Try a different name, city or filter.</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto flex items-start gap-2 p-4 rounded-xl bg-slate-100 dark:bg-gray-900/60 border border-slate-200 dark:border-gray-800 text-[11px] text-slate-500 dark:text-gray-400">
        <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#68c2e3]" />
        <p>
          Openings change often — always check current vacancies and eligibility on the company&apos;s official site. Buttons open official company pages; we are not affiliated with these companies and do not collect any applications. List last updated: {LIST_UPDATED}.
        </p>
      </div>
    </div>
  );
}
