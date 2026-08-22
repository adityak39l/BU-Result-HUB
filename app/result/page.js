'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRANCHES, STUDENTS } from '@/lib/data';
import { searchStudents, getStudentByRoll } from '@/lib/utils';
import { 
  Search, GraduationCap, Award, BookOpen, CheckCircle, FileText, 
  Share2, Printer, Sparkles, Calendar, Filter, CheckSquare, Square, 
  Users, Calculator, TrendingUp, BarChart2, ShieldCheck, Zap, Star, ExternalLink, Activity
} from 'lucide-react';

export default function ResultsPage() {
  const [query, setQuery] = useState('');
  const [selectedBranches, setSelectedBranches] = useState(['ALL']);
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [activeSem, setActiveSem] = useState(null);
  
  // Default active student on load
  const [activeStudentRoll, setActiveStudentRoll] = useState(STUDENTS[0]?.rollNo || '231371028003');

  // Batch Year Options
  const YEARS = [
    { id: 'ALL', label: '📅 All Years' },
    { id: '2023', label: 'Batch 2023-24' },
    { id: '2024', label: 'Batch 2024-25' },
    { id: '2025', label: 'Batch 2025-26' },
    { id: '2026', label: 'Batch 2026-27' },
  ];

  // Toggle Branch selection with auto-sync active student
  const toggleBranch = (branchId) => {
    let updated;
    if (branchId === 'ALL') {
      updated = ['ALL'];
    } else {
      updated = selectedBranches.includes('ALL') ? [] : [...selectedBranches];
      if (updated.includes(branchId)) {
        updated = updated.filter(b => b !== branchId);
        if (updated.length === 0) updated = ['ALL'];
      } else {
        updated.push(branchId);
      }
    }
    setSelectedBranches(updated);
    const matches = searchStudents(query, updated, selectedYear);
    if (matches.length > 0) {
      setActiveStudentRoll(matches[0].rollNo);
    }
  };

  // Change Year Filter with auto-sync active student
  const handleYearChange = (yrId) => {
    setSelectedYear(yrId);
    const matches = searchStudents(query, selectedBranches, yrId);
    if (matches.length > 0) {
      setActiveStudentRoll(matches[0].rollNo);
    }
  };

  const filteredStudents = searchStudents(query, selectedBranches, selectedYear);

  // Synchronize active student when searching
  const handleQueryChange = (val) => {
    setQuery(val);
    const matches = searchStudents(val, selectedBranches, selectedYear);
    if (matches.length > 0) {
      setActiveStudentRoll(matches[0].rollNo);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const matches = searchStudents(query, selectedBranches, selectedYear);
    if (matches.length > 0) {
      setActiveStudentRoll(matches[0].rollNo);
    }
  };

  const currentStudent = getStudentByRoll(activeStudentRoll) || filteredStudents[0] || STUDENTS[0];

  // Helper for dynamic branch badge styles
  const getBranchBadge = (branchId) => {
    const b = BRANCHES.find(item => item.id === branchId);
    return b ? b.badgeClass : 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-extrabold';
  };

  // Helper for dynamic letter grade badge styles
  const getGradeBadge = (grade) => {
    switch (grade) {
      case 'O':
        return 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/50 font-black';
      case 'A+':
        return 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/50 font-black';
      case 'A':
        return 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/50 font-bold';
      case 'B+':
        return 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/50 font-bold';
      case 'B':
        return 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/50 font-bold';
      case 'C':
        return 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/50 font-bold';
      case 'F':
        return 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/50 font-black';
      default:
        return 'bg-slate-500/20 text-slate-400 font-bold';
    }
  };

  // Calculate Branch Average CGPA Benchmark
  const branchStudents = STUDENTS.filter(s => s.branch === currentStudent?.branch);
  const branchAvgCgpa = branchStudents.length > 0
    ? (branchStudents.reduce((acc, curr) => acc + curr.cgpa, 0) / branchStudents.length).toFixed(2)
    : '8.00';

  const diffVsBranchAvg = (currentStudent?.cgpa - parseFloat(branchAvgCgpa)).toFixed(2);
  const isAboveBranchAvg = diffVsBranchAvg >= 0;

  // Calculate Average CGPA
  const semCount = currentStudent?.semesters?.length || 1;
  const semSgpas = currentStudent?.semesters?.map(s => s.sgpa) || [];
  const semSum = semSgpas.reduce((acc, curr) => acc + curr, 0);
  const calculatedAvgCgpa = semCount > 0 ? (semSum / semCount).toFixed(2) : currentStudent?.cgpa;

  // Available semesters for current active student
  const availableSems = currentStudent?.semesterSubjects 
    ? Object.keys(currentStudent.semesterSubjects).map(Number).sort((a,b)=>a-b)
    : (currentStudent?.semesters?.map(s => s.sem) || [5]);

  const currentActiveSem = activeSem && availableSems.includes(activeSem)
    ? activeSem
    : (selectedYear === '2024' && availableSems.includes(3) ? 3 : (selectedYear === '2024' && availableSems.includes(4) ? 4 : availableSems[availableSems.length - 1]));

  const displayedSubjects = (currentStudent?.semesterSubjects && currentStudent.semesterSubjects[currentActiveSem])
    || currentStudent?.currentSemSubjects 
    || [];

  // Calculate total credits for displayed semester
  const totalCredits = displayedSubjects.reduce((acc, curr) => acc + (curr.credit || 3), 0) || 24;

  // Calculate SVG Line Chart Coordinates for SGPA Trend Graph
  const semesters = currentStudent?.semesters || [];
  const svgWidth = 600;
  const svgHeight = 130;
  const paddingX = 60;
  const paddingY = 25;

  const linePoints = semesters.map((sem, idx) => {
    const x = semesters.length > 1
      ? paddingX + (idx / (semesters.length - 1)) * (svgWidth - 2 * paddingX)
      : svgWidth / 2;
    const y = paddingY + (1 - (sem.sgpa / 10.0)) * (svgHeight - 2 * paddingY);
    return { x, y, sgpa: sem.sgpa, sem: sem.sem };
  });

  const linePathD = linePoints.length > 0
    ? linePoints.reduce((acc, pt, i) => i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`, '')
    : '';

  const areaGradientD = linePoints.length > 0
    ? `${linePathD} L ${linePoints[linePoints.length - 1].x} ${svgHeight - 5} L ${linePoints[0].x} ${svgHeight - 5} Z`
    : '';

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/30 text-xs font-extrabold mb-1">
          <Sparkles className="w-4 h-4 text-[#68c2e3]" />
          Official BU Jhansi Academic Analytics Portal
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          BU Jhansi B.Tech <span className="gradient-text-sky">Result & Performance Hub</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Official Marksheets, Interactive SGPA Progression Line Graphs & Performance Analytics
        </p>
      </div>

      {/* Result Control Panel: Search + Year Pills + Multi-Branch Selection */}
      <div className="glass-card p-5 sm:p-6 max-w-4xl mx-auto space-y-5 border-[#68c2e3]/30 shadow-xl">
        
        {/* Roll No / Name Search Form */}
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#68c2e3]" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Enter Roll Number (e.g. 231351139001, 231391034021) or Name..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#68c2e3] text-sm font-medium transition-colors"
            />
          </div>
          
          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 font-black text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>Search Result</span>
          </button>
        </form>

        {/* 1. Batch Year Filter Selector Pills */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-[#68c2e3]" />
            <span>Select Passing / Batch Year:</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {YEARS.map((yr) => (
              <button
                key={yr.id}
                onClick={() => handleYearChange(yr.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedYear === yr.id
                    ? 'bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-gray-800'
                }`}
              >
                {yr.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Branch Filter & Multi-Selection Toggle */}
        <div className="space-y-2 border-t border-slate-200 dark:border-gray-800/80 pt-4">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-[#68c2e3]" />
              <span>Select Branch (Multiple Selection Allowed):</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-gray-400 font-normal">
              {selectedBranches.includes('ALL') ? 'All Branches' : `${selectedBranches.length} Branch(es) Selected`}
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 flex-wrap">
            <button
              onClick={() => toggleBranch('ALL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all border ${
                selectedBranches.includes('ALL')
                  ? 'bg-[#68c2e3] text-slate-950 border-[#68c2e3] shadow-md'
                  : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 border-slate-200 dark:border-gray-800'
              }`}
            >
              All Branches
            </button>

            {BRANCHES.map((b) => {
              const isSelected = selectedBranches.includes(b.id);

              return (
                <button
                  key={b.id}
                  onClick={() => toggleBranch(b.id)}
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all border ${
                    isSelected
                      ? `${b.badgeClass} shadow-md scale-105`
                      : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 border-slate-200 dark:border-gray-800'
                  }`}
                >
                  {isSelected ? <CheckSquare className="w-3.5 h-3.5 text-[#68c2e3]" /> : <Square className="w-3.5 h-3.5 opacity-40" />}
                  {b.id}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Layout: Search Results Sidebar + Real Student Marksheet & Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Sidebar: Real Parsed Students List */}
        <div className="lg:col-span-4 glass-card p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-gray-400 pb-2 border-b border-slate-200 dark:border-gray-800">
            <span>Search Results ({filteredStudents.length})</span>
            <span>Batch & Branch</span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <button
                  key={s.rollNo}
                  onClick={() => setActiveStudentRoll(s.rollNo)}
                  className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between gap-2 border ${
                    currentStudent?.rollNo === s.rollNo
                      ? 'bg-[#68c2e3]/15 border-[#68c2e3]/50 text-slate-900 dark:text-white shadow-md'
                      : 'bg-slate-50 dark:bg-gray-900/60 border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800/80'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">{s.name}</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400 font-mono mt-0.5">{s.rollNo}</div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold border ${getBranchBadge(s.branch)}`}>
                      {s.branch}
                    </span>
                    <div className="text-[11px] text-[#68c2e3] mt-1 font-bold">CGPA: {s.cgpa}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-slate-500 dark:text-gray-500">
                No student found for "{query}". Try searching Roll No like 231351139001
              </div>
            )}
          </div>
        </div>

        {/* Main Marksheet View with Visual Charts & Grade Progress Bars */}
        <div className="lg:col-span-8">
          {currentStudent ? (
            <div className="glass-card p-6 space-y-6 border-[#68c2e3]/30 shadow-xl">
              
              {/* Marksheet Top Profile Header Card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-gray-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#68c2e3] bg-[#68c2e3]/10 px-3 py-1 rounded-full mb-2 border border-[#68c2e3]/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified BU Jhansi IET Marksheet
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    <Link href={`/student/${currentStudent.rollNo}`} className="hover:text-[#68c2e3] transition-colors flex items-center gap-2">
                      {currentStudent.name}
                      <ExternalLink className="w-4 h-4 text-[#68c2e3] opacity-70" />
                    </Link>
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-gray-400 font-mono mt-1.5">
                    <span>Roll No: <strong className="text-[#68c2e3]">{currentStudent.rollNo}</strong></span>
                    <span>•</span>
                    <span>Branch: <strong className={`px-2 py-0.5 rounded border ${getBranchBadge(currentStudent.branch)}`}>{currentStudent.branch}</strong></span>
                    <span>•</span>
                    <span>Batch: <strong className="text-slate-900 dark:text-white">{currentStudent.batch}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/student/${currentStudent.rollNo}`}
                    className="px-3.5 py-2.5 rounded-xl bg-[#68c2e3]/15 text-[#68c2e3] border border-[#68c2e3]/40 text-xs font-extrabold hover:bg-[#68c2e3] hover:text-slate-950 transition-all flex items-center gap-1 shadow-sm shrink-0"
                  >
                    <span>Full Student Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <div className="bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 p-4 rounded-2xl text-center shadow-lg shadow-[#68c2e3]/20 shrink-0">
                    <div className="text-3xl font-black">{calculatedAvgCgpa}</div>
                    <div className="text-[10px] uppercase font-extrabold tracking-wider opacity-90">Cumulative CGPA</div>
                  </div>
                </div>
              </div>

              {/* Ranks Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                  <div className="text-slate-500 dark:text-gray-400 font-medium">Branch Rank</div>
                  <div className="text-lg font-black text-[#68c2e3] mt-0.5">#{currentStudent.branchRank} in {currentStudent.branch}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                  <div className="text-slate-500 dark:text-gray-400 font-medium">Overall B.Tech Rank</div>
                  <div className="text-lg font-black text-blue-600 dark:text-blue-400 mt-0.5">#{currentStudent.rank} of {STUDENTS.length}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                  <div className="text-slate-500 dark:text-gray-400 font-medium">Credits Earned</div>
                  <div className="text-lg font-black text-indigo-500 mt-0.5">{totalCredits} Credits</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                  <div className="text-slate-500 dark:text-gray-400 font-medium">Academic Status</div>
                  {displayedSubjects.some(s => s.grade === 'F') ? (
                    <div className="text-lg font-black text-rose-500 mt-0.5">
                      BACK ({displayedSubjects.filter(s => s.grade === 'F').length} PAPER)
                    </div>
                  ) : (
                    <div className={`text-lg font-black mt-0.5 ${parseFloat(calculatedAvgCgpa) >= 6.5 ? 'text-emerald-500' : 'text-amber-500'}`}>
                      {parseFloat(calculatedAvgCgpa) >= 6.5 ? 'PASSED (FIRST DIV)' : 'PASSED (SECOND DIV)'}
                    </div>
                  )}
                </div>
              </div>

              {/* Benchmark Performance Insights Bar */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#68c2e3]" />
                  <span className="text-slate-700 dark:text-gray-300 font-bold">
                    Branch Benchmark Comparison:
                  </span>
                  <span className={`font-extrabold ${isAboveBranchAvg ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {isAboveBranchAvg ? `+${diffVsBranchAvg}` : diffVsBranchAvg} CGPA vs {currentStudent.branch} Avg ({branchAvgCgpa})
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  Top {Math.max(1, Math.round((currentStudent.branchRank / branchStudents.length) * 100))}% in {currentStudent.branch}
                </div>
              </div>

              {/* 📈 Sleek SVG Curved Line Graph for SGPA Trend & Growth */}
              <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-gray-900/70 border border-slate-200 dark:border-gray-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Activity className="w-4 h-4 text-[#68c2e3]" />
                    <span>Semester SGPA Trend & Growth Line Graph</span>
                  </div>
                  <span className="text-slate-500 dark:text-gray-400 font-normal">Scale: 0.0 - 10.0 SGPA</span>
                </div>

                {/* SVG Curved Line Chart Container */}
                <div className="w-full bg-white dark:bg-gray-950/70 rounded-xl p-4 border border-slate-200 dark:border-gray-800/80 relative overflow-hidden">
                  <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-36 overflow-visible">
                    <defs>
                      <linearGradient id="sgpaLineGradientRes" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#68c2e3" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#68c2e3" stopOpacity="0.0" />
                      </linearGradient>
                      <filter id="glowRes" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    <line x1={paddingX} y1={svgHeight - 10} x2={svgWidth - paddingX} y2={svgHeight - 10} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />

                    {areaGradientD && (
                      <path d={areaGradientD} fill="url(#sgpaLineGradientRes)" />
                    )}

                    {linePathD && (
                      <path 
                        d={linePathD} 
                        fill="none" 
                        stroke="#68c2e3" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        filter="url(#glowRes)"
                      />
                    )}

                    {linePoints.map((pt, i) => (
                      <g key={i} className="group cursor-pointer">
                        <circle cx={pt.x} cy={pt.y} r="7" fill="#68c2e3" fillOpacity="0.25" />
                        <circle cx={pt.x} cy={pt.y} r="4" fill="#090d16" stroke="#68c2e3" strokeWidth="2.5" className="group-hover:scale-125 transition-transform" />
                        
                        <g transform={`translate(${pt.x}, ${pt.y - 14})`}>
                          <rect x="-20" y="-12" width="40" height="18" rx="5" fill="#68c2e3" />
                          <text x="0" y="0" textAnchor="middle" fill="#090d16" fontSize="10" fontWeight="900" fontFamily="sans-serif">
                            {pt.sgpa}
                          </text>
                        </g>

                        <text x={pt.x} y={svgHeight + 2} textAnchor="middle" fill="currentColor" opacity="0.7" fontSize="10" fontWeight="800">
                          Sem {pt.sem}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Subject Marksheet Table with Visual Progress Bars & Semester Switcher */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-gray-800 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                    Official BU Jhansi Subject Breakdown & Marks
                  </h3>

                  {/* Semester Switcher Tabs */}
                  {availableSems.length > 1 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-gray-400 mr-1">
                        Select Semester:
                      </span>
                      {availableSems.map((sNum) => {
                        const semObj = currentStudent?.semesters?.find(s => s.sem === sNum);
                        const is2024 = sNum === 3 || sNum === 4;
                        return (
                          <button
                            key={sNum}
                            onClick={() => setActiveSem(sNum)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all border ${
                              currentActiveSem === sNum
                                ? 'bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 border-[#68c2e3] shadow-md scale-105'
                                : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 border-slate-200 dark:border-gray-800 hover:text-white'
                            }`}
                          >
                            Semester {sNum}{semObj ? ` • ${semObj.sgpa} SGPA` : ''}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-gray-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 uppercase text-[10px] font-bold">
                      <tr>
                        <th className="p-3.5">Paper Code</th>
                        <th className="p-3.5">Subject Name</th>
                        <th className="p-3.5 text-center">Sessional / Internal</th>
                        <th className="p-3.5 text-center">Theory / External</th>
                        <th className="p-3.5 text-center">Total Marks</th>
                        <th className="p-3.5 text-center min-w-[140px]">Marks Visual Bar</th>
                        <th className="p-3.5 text-center">Grade</th>
                        <th className="p-3.5 text-center">Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-gray-800/60 bg-white dark:bg-gray-950/40 font-medium">
                      {displayedSubjects.map((sub, idx) => {
                        let obtNum = 0;
                        let maxNum = 150;
                        if (sub.totalStr && sub.totalStr.includes('/')) {
                          const parts = sub.totalStr.replace('Tot:', '').split('/');
                          obtNum = parseFloat(parts[0]) || 0;
                          maxNum = parseFloat(parts[1]) || 150;
                        }
                        const progressPercent = Math.min(100, Math.round((obtNum / maxNum) * 100));

                        return (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-gray-900/50 transition-colors">
                            <td className="p-3.5 font-mono text-[#68c2e3] font-bold">{sub.code}</td>
                            <td className="p-3.5 text-slate-900 dark:text-white font-medium">{sub.name}</td>
                            <td className="p-3.5 text-center text-slate-600 dark:text-gray-300 font-mono">{sub.internalStr || '-'}</td>
                            <td className="p-3.5 text-center text-slate-600 dark:text-gray-300 font-mono">{sub.externalStr || '-'}</td>
                            <td className="p-3.5 text-center font-black text-slate-900 dark:text-white font-mono">{sub.totalStr || '-'}</td>
                            
                            {/* Visual Progress Bar */}
                            <td className="p-3.5 text-center">
                              <div className="w-full bg-slate-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden p-0.5">
                                <div 
                                  style={{ width: `${progressPercent}%` }}
                                  className={`h-full rounded-full ${
                                    progressPercent >= 80 
                                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500' 
                                      : progressPercent >= 65 
                                      ? 'bg-gradient-to-r from-[#68c2e3] to-sky-500' 
                                      : 'bg-gradient-to-r from-amber-400 to-orange-500'
                                  }`}
                                />
                              </div>
                              <span className="text-[10px] font-bold text-slate-400 mt-1 block">{progressPercent}% Score</span>
                            </td>

                            <td className="p-3.5 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-xs ${getGradeBadge(sub.grade)}`}>
                                {sub.grade}
                              </span>
                            </td>
                            <td className="p-3.5 text-center text-slate-500 dark:text-gray-400 font-bold">{sub.credit}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card p-12 text-center text-slate-400 dark:text-gray-400">
              Select a student from the sidebar to view their marksheet & performance graphs.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
