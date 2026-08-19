'use client';

import { useState } from 'react';
import { Calculator, Sparkles, RefreshCw } from 'lucide-react';

export default function CgpaCalculatorPage() {
  const [currentCgpa, setCurrentCgpa] = useState('8.50');
  const [completedCredits, setCompletedCredits] = useState('100');
  const [targetSgpa, setTargetSgpa] = useState('9.50');
  const [nextCredits, setNextCredits] = useState('20');

  const currC = parseFloat(currentCgpa) || 0;
  const compCred = parseFloat(completedCredits) || 0;
  const targS = parseFloat(targetSgpa) || 0;
  const nxtCred = parseFloat(nextCredits) || 0;

  const totalCred = compCred + nxtCred;
  const projectedCgpa = totalCred > 0
    ? ((currC * compCred + targS * nxtCred) / totalCred).toFixed(2)
    : '0.00';

  return (
    <div className="space-y-8 pb-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          BU Jhansi B.Tech <span className="gradient-text-sky">CGPA Calculator</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">
          Predict your new CGPA by entering your target SGPA for upcoming semesters
        </p>
      </div>

      {/* Calculator Form Card */}
      <div className="glass-card p-6 sm:p-8 space-y-6 border-[#68c2e3]/30 glow-sky">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-gray-300">Current CGPA</label>
            <input
              type="number"
              step="0.01"
              value={currentCgpa}
              onChange={(e) => setCurrentCgpa(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#68c2e3]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-gray-300">Total Completed Credits</label>
            <input
              type="number"
              value={completedCredits}
              onChange={(e) => setCompletedCredits(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#68c2e3]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#68c2e3]">Expected Target SGPA Next Sem</label>
            <input
              type="number"
              step="0.01"
              value={targetSgpa}
              onChange={(e) => setTargetSgpa(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-[#68c2e3]/50 text-[#68c2e3] font-extrabold text-sm focus:outline-none focus:border-[#68c2e3]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-gray-300">Next Semester Credits</label>
            <input
              type="number"
              value={nextCredits}
              onChange={(e) => setNextCredits(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#68c2e3]"
            />
          </div>
        </div>

        {/* Calculated Projection Output */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 text-center space-y-1 shadow-xl">
          <div className="text-xs font-extrabold uppercase tracking-wider opacity-85">Projected New Cumulative CGPA</div>
          <div className="text-4xl sm:text-5xl font-black">{projectedCgpa}</div>
          <div className="text-xs font-semibold text-slate-900 pt-1">
            Total Accumulated Credits: {totalCred} Credits
          </div>
        </div>
      </div>
    </div>
  );
}
