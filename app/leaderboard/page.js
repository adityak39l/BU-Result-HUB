'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRANCHES } from '@/lib/data';
import { getLeaderboard } from '@/lib/utils';
import { Award, Trophy, Medal, Crown, ArrowUpRight, Search, Sparkles, ExternalLink } from 'lucide-react';

export default function LeaderboardPage() {
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const leaderboard = getLeaderboard(selectedBranch, selectedYear);

  const YEARS = [
    { id: 'ALL', label: '📅 All Batches' },
    { id: '2025-26', label: '🎓 Batch 2025-26 (Sem V & VI)' },
    { id: '2024-25', label: '📘 Batch 2024-25 (Sem III & IV)' },
  ];

  const top3 = leaderboard.slice(0, 3);

  // Get dynamic branch pill styling
  const getBranchBadge = (branchId) => {
    const b = BRANCHES.find(item => item.id === branchId);
    return b ? b.badgeClass : 'bg-[#68c2e3]/20 text-[#68c2e3] border border-[#68c2e3]/40 font-extrabold';
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold mb-1">
          <Trophy className="w-4 h-4 text-amber-500" />
          Official Academic Honor Roll
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          BU Jhansi B.Tech <span className="gradient-text-sky">Leaderboards</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Branch-wise & overall student rankings sorted by Cumulative CGPA
        </p>
      </div>

      {/* Dynamic Multi-Color Branch Pills */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedBranch('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            selectedBranch === 'ALL'
              ? 'bg-[#68c2e3] text-slate-950 shadow-lg shadow-[#68c2e3]/20'
              : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-gray-800'
          }`}
        >
          ⚡ All Departments
        </button>

        {BRANCHES.map((b) => {
          const isSelected = selectedBranch === b.id;

          return (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isSelected
                  ? `${b.badgeClass} shadow-md scale-105`
                  : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-gray-800'
              }`}
            >
              {b.id}
            </button>
          );
        })}
      </div>

      {/* Batch Year Filter Pills */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 flex-wrap">
        <span className="text-xs font-bold text-slate-500 dark:text-gray-400 mr-1">Session:</span>
        {YEARS.map((yr) => (
          <button
            key={yr.id}
            onClick={() => setSelectedYear(yr.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
              selectedYear === yr.id
                ? 'bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 shadow-md scale-105'
                : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-gray-800'
            }`}
          >
            {yr.label}
          </button>
        ))}
      </div>

      {/* Podium (Gold, Silver, Bronze) */}
      {top3.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* Rank 2 - Silver Medal */}
          {top3[1] && (
            <Link 
              href={`/student/${top3[1].rollNo}`}
              className="glass-card p-6 text-center flex flex-col items-center justify-between border-slate-300 dark:border-slate-700/60 order-2 md:order-1 relative overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 flex items-center justify-center mb-3 shadow-md">
                <Medal className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                🥈 Rank #2 Silver
              </span>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-2 group-hover:text-[#68c2e3] transition-colors">
                {top3[1].name}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400">{top3[1].rollNo}</p>
              <div className="mt-3">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${getBranchBadge(top3[1].branch)}`}>
                  {top3[1].branch} Department
                </span>
              </div>
              <div className="mt-4 text-2xl font-black text-slate-700 dark:text-slate-200">{(top3[1].effectiveCgpa ?? top3[1].cgpa).toFixed(2)} <span className="text-xs font-normal text-slate-500 dark:text-gray-400">CGPA</span></div>
            </Link>
          )}

          {/* Rank 1 - Gold Crown Topper */}
          {top3[0] && (
            <Link 
              href={`/student/${top3[0].rollNo}`}
              className="glass-card p-6 text-center flex flex-col items-center justify-between border-amber-500/50 shadow-xl shadow-amber-500/10 order-1 md:order-2 transform md:-translate-y-4 relative overflow-hidden bg-gradient-to-b from-amber-500/5 to-transparent group hover:scale-[1.03] transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-950 flex items-center justify-center mb-3 shadow-lg shadow-amber-500/30">
                <Crown className="w-8 h-8" />
              </div>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40">
                🥇 Rank #1 Gold Topper
              </span>
              <h3 className="font-black text-xl text-slate-900 dark:text-white mt-2 group-hover:text-amber-500 transition-colors">
                {top3[0].name}
              </h3>
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">{top3[0].rollNo}</p>
              <div className="mt-3">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${getBranchBadge(top3[0].branch)}`}>
                  {top3[0].branch} Department
                </span>
              </div>
              <div className="mt-4 text-3xl font-black text-amber-500">{(top3[0].effectiveCgpa ?? top3[0].cgpa).toFixed(2)} <span className="text-xs font-normal text-slate-500 dark:text-gray-400">CGPA</span></div>
            </Link>
          )}

          {/* Rank 3 - Bronze Medal */}
          {top3[2] && (
            <Link 
              href={`/student/${top3[2].rollNo}`}
              className="glass-card p-6 text-center flex flex-col items-center justify-between border-orange-500/30 order-3 relative overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-700 text-white flex items-center justify-center mb-3 shadow-md">
                <Medal className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                🥉 Rank #3 Bronze
              </span>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-2 group-hover:text-orange-500 transition-colors">
                {top3[2].name}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400">{top3[2].rollNo}</p>
              <div className="mt-3">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${getBranchBadge(top3[2].branch)}`}>
                  {top3[2].branch} Department
                </span>
              </div>
              <div className="mt-4 text-2xl font-black text-orange-600 dark:text-orange-400">{(top3[2].effectiveCgpa ?? top3[2].cgpa).toFixed(2)} <span className="text-xs font-normal text-slate-500 dark:text-gray-400">CGPA</span></div>
            </Link>
          )}
        </div>
      )}

      {/* Ranking Table with Links to Student Dashboard */}
      <div className="glass-card overflow-hidden max-w-5xl mx-auto border-slate-200 dark:border-gray-800 shadow-xl">
        <div className="p-4 border-b border-slate-200 dark:border-gray-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-gray-400">
          <span>Complete B.Tech Department Rankings</span>
          <span>Showing {leaderboard.length} Ranked Students</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 uppercase text-[10px] font-bold">
              <tr>
                <th className="p-3.5 text-center">Rank</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Roll Number</th>
                <th className="p-3.5 text-center">Branch</th>
                <th className="p-3.5 text-center">{selectedYear === 'ALL' ? 'Cumulative CGPA' : `${selectedYear} SGPA Avg`}</th>
                <th className="p-3.5 text-center">Latest SGPA</th>
                <th className="p-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-gray-800/60 bg-white dark:bg-gray-950/40 font-medium">
              {leaderboard.map((student) => (
                <tr key={student.rollNo} className="hover:bg-slate-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="p-3.5 text-center font-black">
                    {student.displayRank === 1 ? (
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 font-extrabold">#1 🥇</span>
                    ) : student.displayRank === 2 ? (
                      <span className="px-2 py-0.5 rounded bg-slate-400/20 text-slate-400 font-extrabold">#2 🥈</span>
                    ) : student.displayRank === 3 ? (
                      <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-500 font-extrabold">#3 🥉</span>
                    ) : (
                      <span className="text-slate-500 dark:text-gray-400">#{student.displayRank}</span>
                    )}
                  </td>
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                    <Link href={`/student/${student.rollNo}`} className="hover:text-[#68c2e3] hover:underline transition-colors flex items-center gap-1">
                      {student.name}
                    </Link>
                  </td>
                  <td className="p-3.5 font-mono text-slate-500 dark:text-gray-400">{student.rollNo}</td>
                  <td className="p-3.5 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${getBranchBadge(student.branch)}`}>
                      {student.branch}
                    </span>
                  </td>
                  <td className="p-3.5 text-center font-black text-[#68c2e3] text-sm">{(student.effectiveCgpa ?? student.cgpa).toFixed(2)}</td>
                  <td className="p-3.5 text-center font-bold text-slate-900 dark:text-white">
                    {student.semesters[student.semesters.length - 1]?.sgpa || 'N/A'}
                  </td>
                  <td className="p-3.5 text-right">
                    <Link
                      href={`/student/${student.rollNo}`}
                      className="inline-flex items-center gap-1 text-[#68c2e3] hover:underline font-bold"
                    >
                      Open Dashboard <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
