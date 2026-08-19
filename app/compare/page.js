'use client';

import { useState } from 'react';
import { STUDENTS } from '@/lib/data';
import { Users, Swords, Award, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export default function ComparePage() {
  const [student1Roll, setStudent1Roll] = useState('210010501001');
  const [student2Roll, setStudent2Roll] = useState('210010501002');

  const student1 = STUDENTS.find(s => s.rollNo === student1Roll) || STUDENTS[0];
  const student2 = STUDENTS.find(s => s.rollNo === student2Roll) || STUDENTS[1];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Student <span className="gradient-text-sky">Head-to-Head Compare</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Compare SGPA, CGPA, and semester trajectory of any 2 students side-by-side
        </p>
      </div>

      {/* Selector Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="glass-card p-4 space-y-2 border-[#68c2e3]/30">
          <label className="text-xs font-bold text-[#68c2e3]">Select Student #1</label>
          <select
            value={student1Roll}
            onChange={(e) => setStudent1Roll(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-[#68c2e3]"
          >
            {STUDENTS.map(s => (
              <option key={s.rollNo} value={s.rollNo}>{s.name} ({s.rollNo} - {s.branch})</option>
            ))}
          </select>
        </div>

        <div className="glass-card p-4 space-y-2 border-blue-500/30">
          <label className="text-xs font-bold text-blue-600 dark:text-blue-400">Select Student #2</label>
          <select
            value={student2Roll}
            onChange={(e) => setStudent2Roll(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500"
          >
            {STUDENTS.map(s => (
              <option key={s.rollNo} value={s.rollNo}>{s.name} ({s.rollNo} - {s.branch})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Showdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Student 1 Card */}
        <div className="glass-card p-6 space-y-5 border-[#68c2e3]/40 glow-sky">
          <div className="flex items-center justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-[#68c2e3]/10 text-[#68c2e3] font-bold text-xs border border-[#68c2e3]/20">
                {student1.branch}
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white mt-2">{student1.name}</h2>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400">{student1.rollNo}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-[#68c2e3]">{student1.cgpa}</div>
              <div className="text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase">CGPA</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <div className="text-slate-500 dark:text-gray-400">Branch Rank</div>
              <div className="text-base font-bold text-[#68c2e3] mt-0.5">#{student1.branchRank}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <div className="text-slate-500 dark:text-gray-400">Overall Rank</div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">#{student1.rank}</div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-slate-500 dark:text-gray-400">Semester SGPA History</h4>
            <div className="grid grid-cols-3 gap-2">
              {student1.semesters.map(s => (
                <div key={s.sem} className="p-2 rounded bg-slate-100 dark:bg-gray-900 text-center">
                  <div className="text-[10px] text-slate-500 dark:text-gray-400">Sem {s.sem}</div>
                  <div className="font-bold text-[#68c2e3]">{s.sgpa}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student 2 Card */}
        <div className="glass-card p-6 space-y-5 border-blue-500/40 glow-blue">
          <div className="flex items-center justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-500/20">
                {student2.branch}
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white mt-2">{student2.name}</h2>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400">{student2.rollNo}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{student2.cgpa}</div>
              <div className="text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase">CGPA</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <div className="text-slate-500 dark:text-gray-400">Branch Rank</div>
              <div className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">#{student2.branchRank}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
              <div className="text-slate-500 dark:text-gray-400">Overall Rank</div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">#{student2.rank}</div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-slate-500 dark:text-gray-400">Semester SGPA History</h4>
            <div className="grid grid-cols-3 gap-2">
              {student2.semesters.map(s => (
                <div key={s.sem} className="p-2 rounded bg-slate-100 dark:bg-gray-900 text-center">
                  <div className="text-[10px] text-slate-500 dark:text-gray-400">Sem {s.sem}</div>
                  <div className="font-bold text-blue-600 dark:text-blue-400">{s.sgpa}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
