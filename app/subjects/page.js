'use client';

import { SUBJECT_MASTER, BRANCHES } from '@/lib/data';
import { BookOpen, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function SubjectsPage() {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const subjects = SUBJECT_MASTER[selectedBranch] || [];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          BU Jhansi B.Tech <span className="gradient-text-sky">Subject Difficulty Map</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Toughest and easiest subjects ranked by grade distributions and pass/fail difficulty
        </p>
      </div>

      {/* Branch Selector Tabs */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2">
        {BRANCHES.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedBranch(b.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedBranch === b.id
                ? 'bg-[#68c2e3] text-slate-950 shadow-lg shadow-[#68c2e3]/20'
                : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-gray-800'
            }`}
          >
            {b.id} Department
          </button>
        ))}
      </div>

      {/* Subject Difficulty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {subjects.map((sub) => {
          const isVeryHard = sub.diff === 'Very Hard';
          const isHard = sub.diff === 'Hard';

          return (
            <div
              key={sub.code}
              className={`glass-card p-6 space-y-4 border ${
                isVeryHard
                  ? 'border-rose-500/40'
                  : isHard
                  ? 'border-amber-500/40'
                  : 'border-[#68c2e3]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#68c2e3] px-2.5 py-1 rounded bg-[#68c2e3]/10 border border-[#68c2e3]/20">
                  {sub.code}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded ${
                    isVeryHard
                      ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                      : isHard
                      ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                      : 'bg-[#68c2e3]/20 text-[#68c2e3] border border-[#68c2e3]/30'
                  }`}
                >
                  {sub.diff}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{sub.name}</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Credits: {sub.credits} Credits</p>
              </div>

              <div className="border-t border-slate-200 dark:border-gray-800 pt-3 text-xs text-slate-500 dark:text-gray-400 flex justify-between">
                <span>Avg Class Score:</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {isVeryHard ? '68/100' : isHard ? '76/100' : '88/100'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
