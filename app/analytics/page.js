'use client';

import { BRANCHES } from '@/lib/data';
import { getBranchStats } from '@/lib/utils';
import { BarChart3, TrendingUp, PieChart, ShieldAlert } from 'lucide-react';

export default function AnalyticsPage() {
  const branchStats = getBranchStats();

  const gradeDistributionData = [
    { grade: 'O Grade (90%+)', count: 42, color: 'bg-[#68c2e3]' },
    { grade: 'A+ Grade (80-89%)', count: 128, color: 'bg-sky-500' },
    { grade: 'A Grade (70-79%)', count: 145, color: 'bg-blue-500' },
    { grade: 'B+ Grade (60-69%)', count: 54, color: 'bg-indigo-500' },
    { grade: 'B Grade (50-59%)', count: 12, color: 'bg-purple-500' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          BU Jhansi B.Tech <span className="gradient-text-sky">Analytics Dashboard</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Academic performance metrics & SGPA distribution across engineering branches
        </p>
      </div>

      {/* Branch CGPA Comparison Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#68c2e3]" />
          Branch-wise Average CGPA Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {branchStats.map((branch) => {
            const percentage = (parseFloat(branch.avgCgpa) / 10) * 100;

            return (
              <div key={branch.id} className="glass-card p-5 space-y-3 border-slate-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">{branch.id}</span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">{branch.name}</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-[#68c2e3]">{branch.avgCgpa}</span>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-semibold">Scale 10.0</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-gray-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#68c2e3] to-sky-600"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {branch.topStudent && (
                  <div className="text-xs text-slate-500 dark:text-gray-400 pt-1 flex justify-between border-t border-slate-200 dark:border-gray-800/60">
                    <span>Highest CGPA:</span>
                    <span className="font-bold text-[#68c2e3]">{branch.topStudent.name} ({branch.topStudent.cgpa})</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Overall Grade Distribution */}
      <div className="glass-card p-6 space-y-4 max-w-4xl mx-auto border-slate-200 dark:border-gray-800">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-[#68c2e3]" />
          Department-wide Grade Distribution (Sem 1 - 6)
        </h2>

        <div className="space-y-3 pt-2">
          {gradeDistributionData.map((item) => {
            const total = 372;
            const pct = ((item.count / total) * 100).toFixed(1);

            return (
              <div key={item.grade} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-gray-300">
                  <span>{item.grade}</span>
                  <span className="text-[#68c2e3] font-bold">{item.count} Students ({pct}%)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-gray-900 overflow-hidden">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
