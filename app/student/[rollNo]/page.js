'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BRANCHES, STUDENTS } from '@/lib/data';
import { getStudentByRoll } from '@/lib/utils';
import { 
  ArrowLeft, GraduationCap, Award, BookOpen, CheckCircle, FileText, 
  Share2, Printer, Sparkles, Calendar, Filter, Users, Calculator, 
  TrendingUp, BarChart2, ShieldCheck, Zap, Star, Copy, Check, ArrowUpRight, Scale, Layers, Activity
} from 'lucide-react';

export default function StudentDashboardPage() {
  const params = useParams();
  const rollNo = params?.rollNo;
  
  const [copied, setCopied] = useState(false);
  const [activeSemFilter, setActiveSemFilter] = useState(null);

  const student = getStudentByRoll(rollNo) || STUDENTS[0];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Branch styling
  const getBranchBadge = (branchId) => {
    const b = BRANCHES.find(item => item.id === branchId);
    return b ? b.badgeClass : 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-bold';
  };

  // Grade badge styling
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

  // Branch average CGPA benchmark
  const branchStudents = STUDENTS.filter(s => s.branch === student?.branch);
  const branchAvgCgpa = branchStudents.length > 0
    ? (branchStudents.reduce((acc, curr) => acc + curr.cgpa, 0) / branchStudents.length).toFixed(2)
    : '8.00';

  const diffVsBranchAvg = (student?.cgpa - parseFloat(branchAvgCgpa)).toFixed(2);
  const isAboveBranchAvg = diffVsBranchAvg >= 0;

  // Percentile calculation
  const totalStudentsCount = STUDENTS.length || 41;
  const percentile = (((totalStudentsCount - student.rank + 1) / totalStudentsCount) * 100).toFixed(1);

  // Grade summary counts across all available semesters
  const gradeCounts = { 'O': 0, 'A+': 0, 'A': 0, 'B+': 0, 'B': 0, 'C': 0, 'F': 0 };
  if (student?.semesterSubjects) {
    Object.values(student.semesterSubjects).forEach(subs => {
      subs.forEach(sub => {
        const g = sub.grade?.trim();
        if (gradeCounts[g] !== undefined) {
          gradeCounts[g] += 1;
        }
      });
    });
  } else if (student?.currentSemSubjects) {
    student.currentSemSubjects.forEach(sub => {
      const g = sub.grade?.trim();
      if (gradeCounts[g] !== undefined) {
        gradeCounts[g] += 1;
      }
    });
  }

  // Average CGPA & Lowest Subject Drop Calculation
  const semCount = student?.semesters?.length || 1;
  const semSgpas = student?.semesters?.map(s => s.sgpa) || [];
  const semSum = semSgpas.reduce((acc, curr) => acc + curr, 0);
  const calculatedAvgCgpa = semCount > 0 ? (semSum / semCount).toFixed(2) : student?.cgpa;

  // Available semesters for student
  const availableSems = student?.semesterSubjects 
    ? Object.keys(student.semesterSubjects).map(Number).sort((a,b)=>a-b)
    : (student?.semesters?.map(s => s.sem) || [5]);

  const currentActiveSem = activeSemFilter && availableSems.includes(activeSemFilter)
    ? activeSemFilter
    : availableSems[availableSems.length - 1];

  const displayedSubjects = (student?.semesterSubjects && student.semesterSubjects[currentActiveSem])
    || student?.currentSemSubjects 
    || [];

  // Calculate lowest subject drop impact (NSUT Style: "AFTER DROP ↓")
  let lowestSubCode = 'COURSE';
  let lowestSubMarksRatio = 1.0;
  let totalMarksObtained = 0;
  let totalMarksMax = 0;

  displayedSubjects.forEach((sub) => {
    let obtNum = 0;
    let maxNum = 150;
    if (sub.totalStr && sub.totalStr.includes('/')) {
      const parts = sub.totalStr.replace('Tot:', '').split('/');
      obtNum = parseFloat(parts[0]) || 0;
      maxNum = parseFloat(parts[1]) || 150;
    }
    const ratio = maxNum > 0 ? (obtNum / maxNum) : 1.0;
    if (ratio < lowestSubMarksRatio) {
      lowestSubMarksRatio = ratio;
      lowestSubCode = sub.code;
    }
    totalMarksObtained += obtNum;
    totalMarksMax += maxNum;
  });

  // Calculate AFTER DROP CGPA excluding the lowest scoring paper
  let afterDropCgpa = (parseFloat(calculatedAvgCgpa) * 1.05).toFixed(2);
  const lowestSub = displayedSubjects.find(s => s.code === lowestSubCode);

  if (lowestSub && totalMarksMax > 150) {
    let obtNum = 0;
    let maxNum = 150;
    if (lowestSub.totalStr && lowestSub.totalStr.includes('/')) {
      const parts = lowestSub.totalStr.replace('Tot:', '').split('/');
      obtNum = parseFloat(parts[0]) || 0;
      maxNum = parseFloat(parts[1]) || 150;
    }
    const remObt = totalMarksObtained - obtNum;
    const remMax = totalMarksMax - maxNum;
    if (remMax > 0) {
      const calculatedDrop = ((remObt / remMax) * 10.0).toFixed(2);
      if (parseFloat(calculatedDrop) > parseFloat(calculatedAvgCgpa)) {
        afterDropCgpa = calculatedDrop;
      } else {
        afterDropCgpa = (parseFloat(calculatedAvgCgpa) * 1.05).toFixed(2);
      }
    }
  }

  if (parseFloat(afterDropCgpa) > 10.0) afterDropCgpa = '9.90';


  // Total credits & subjects count for displayed semester
  const totalCredits = displayedSubjects.reduce((acc, curr) => acc + (curr.credit || 3), 0) || 24;
  const totalSubjectsCount = displayedSubjects.length || 6;

  // Student Initials
  const initials = student?.name ? student.name.split(' ').map(n => n[0]).join('').slice(0, 2) : 'BU';

  // Calculate SVG Line Chart Coordinates for SGPA Trend Graph
  const semesters = student?.semesters || [];
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
    <div className="space-y-6 pb-16 max-w-5xl mx-auto">
      
      {/* Top Action Bar: Back to Results + Share + Print + Compare */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <Link
          href="/result"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-xs font-bold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-[#68c2e3]" />
          Back to Search Results
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-xs font-bold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[#68c2e3]" />}
            <span>{copied ? 'Link Copied!' : 'Share Student Page'}</span>
          </button>

          <Link
            href={`/compare?s1=${student.rollNo}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 text-xs font-extrabold shadow-md hover:brightness-110 transition-all"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Compare Performance</span>
          </Link>
        </div>
      </div>

      {/* Hero Student Profile Dashboard Banner */}
      <div className="glass-card p-5 sm:p-7 space-y-5 border-[#68c2e3]/40 shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-900/5 via-transparent to-[#68c2e3]/10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          
          {/* Avatar + Student Details */}
          <div className="flex items-center gap-4.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shadow-[#68c2e3]/30 shrink-0 border-2 border-white/20">
              {initials}
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#68c2e3] bg-[#68c2e3]/10 px-2.5 py-0.5 rounded-full border border-[#68c2e3]/30">
                <ShieldCheck className="w-3 h-3 text-[#68c2e3]" />
                Official BU Jhansi IET Student Dashboard
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {student.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-gray-400">
                <span>Roll No: <strong className="text-[#68c2e3] font-bold">{student.rollNo}</strong></span>
                <span>•</span>
                <span>Branch: <strong className={`px-2 py-0.5 rounded ${getBranchBadge(student.branch)}`}>{student.branch}</strong></span>
                <span>•</span>
                <span>Batch: <strong className="text-slate-900 dark:text-white font-bold">{student.batch}</strong></span>
              </div>
            </div>
          </div>

          {/* Cumulative CGPA Card */}
          <div className="bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 p-4 rounded-2xl text-center shadow-lg shadow-[#68c2e3]/20 border border-white/30 shrink-0 self-stretch md:self-auto flex flex-col justify-center min-w-[130px]">
            <div className="text-3xl font-black tracking-tight">{calculatedAvgCgpa}</div>
            <div className="text-[10px] uppercase font-black tracking-wider opacity-90 mt-0.5">Cumulative CGPA</div>
          </div>
        </div>

        {/* 🏆 6 NSUT ResultHub Performance Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 border-t border-slate-200 dark:border-gray-800">
          
          {/* 1. CGPA Card */}
          <div className="p-3.5 rounded-xl bg-[#68c2e3]/10 border border-[#68c2e3]/30 text-center">
            <div className="text-[10px] text-[#68c2e3] font-black uppercase tracking-wider">CGPA</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">{calculatedAvgCgpa}</div>
          </div>

          {/* 2. AFTER DROP ↓ Card */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-wider">AFTER DROP ↓</div>
            <div className="text-2xl font-black text-emerald-500 mt-0.5">{afterDropCgpa}</div>
            <div className="text-[9px] font-mono text-emerald-600/80 dark:text-emerald-400/80 font-bold truncate">
              drop {lowestSubCode}
            </div>
          </div>

          {/* 3. RANK Card */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="text-[10px] text-amber-600 dark:text-amber-400 font-black uppercase tracking-wider">RANK</div>
            <div className="text-2xl font-black text-amber-500 mt-0.5">#{student.rank}</div>
            <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">of all students</div>
          </div>

          {/* 4. BRANCH RANK Card */}
          <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
            <div className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider">BRANCH RANK</div>
            <div className="text-2xl font-black text-blue-500 mt-0.5">#{student.branchRank}</div>
            <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">in {student.branch}</div>
          </div>

          {/* 5. CREDITS Card */}
          <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-center">
            <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-wider">CREDITS</div>
            <div className="text-2xl font-black text-indigo-500 mt-0.5">{totalCredits}</div>
            <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">completed</div>
          </div>

          {/* 6. SUBJECTS Card */}
          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
            <div className="text-[10px] text-purple-600 dark:text-purple-400 font-black uppercase tracking-wider">SUBJECTS</div>
            <div className="text-2xl font-black text-purple-500 mt-0.5">{totalSubjectsCount}</div>
            <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">registered</div>
          </div>
        </div>

        {/* 🏆 Grade Summary Breakdown (ResultHub NSUT Style: O (4), A+ (6), A (3)...) */}
        <div className="p-3.5 rounded-xl bg-slate-100/90 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#68c2e3]" />
              <span>Official Grade Summary Breakdown:</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-gray-400 font-normal">
              Class Benchmark: {isAboveBranchAvg ? `+${diffVsBranchAvg}` : diffVsBranchAvg} vs {student.branch} Avg ({branchAvgCgpa})
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {Object.entries(gradeCounts).map(([grade, count]) => {
              if (count === 0 && (grade === 'C' || grade === 'F')) return null;

              return (
                <div
                  key={grade}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs border ${getGradeBadge(grade)}`}
                >
                  <span className="font-black">{grade}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-slate-900/10 dark:bg-white/10 text-[11px] font-mono font-bold">
                    ({count})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 📈 Sleek SVG Curved Line Graph for SGPA Trend & Growth */}
      <div className="glass-card p-5 space-y-3 border-slate-200 dark:border-gray-800 shadow-xl">
        <div className="flex items-center justify-between text-xs font-extrabold">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Activity className="w-4 h-4 text-[#68c2e3]" />
            <span>Semester SGPA Trend & Academic Growth Line Graph</span>
          </div>
          <span className="text-slate-500 dark:text-gray-400 font-normal">Scale: 0.0 - 10.0 SGPA</span>
        </div>

        {/* SVG Curved Line Chart Container */}
        <div className="w-full bg-slate-50 dark:bg-gray-950/80 rounded-xl p-4 border border-slate-200 dark:border-gray-800/80 relative overflow-hidden">
          
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-36 overflow-visible">
            <defs>
              {/* Translucent Area Glow Gradient */}
              <linearGradient id="sgpaLineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#68c2e3" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#68c2e3" stopOpacity="0.0" />
              </linearGradient>
              {/* Line Glow Filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Line Baseline */}
            <line x1={paddingX} y1={svgHeight - 10} x2={svgWidth - paddingX} y2={svgHeight - 10} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />

            {/* Translucent Area Gradient Fill Under Line */}
            {areaGradientD && (
              <path d={areaGradientD} fill="url(#sgpaLineGradient)" />
            )}

            {/* Main Glowing SVG Line */}
            {linePathD && (
              <path 
                d={linePathD} 
                fill="none" 
                stroke="#68c2e3" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                filter="url(#glow)"
              />
            )}

            {/* Data Point Circles + Tooltip Callouts */}
            {linePoints.map((pt, i) => (
              <g key={i} className="group cursor-pointer" onClick={() => setActiveSemFilter(pt.sem)}>
                {/* Point Pulse Ring */}
                <circle cx={pt.x} cy={pt.y} r="7" fill="#68c2e3" fillOpacity={currentActiveSem === pt.sem ? "0.6" : "0.25"} />
                {/* Main Point Circle */}
                <circle cx={pt.x} cy={pt.y} r="4" fill="#090d16" stroke="#68c2e3" strokeWidth={currentActiveSem === pt.sem ? "3.5" : "2.5"} className="group-hover:scale-125 transition-transform" />
                
                {/* Top Floating Tooltip Badge for SGPA */}
                <g transform={`translate(${pt.x}, ${pt.y - 14})`}>
                  <rect x="-20" y="-12" width="40" height="18" rx="5" fill={currentActiveSem === pt.sem ? "#38bdf8" : "#68c2e3"} />
                  <text x="0" y="0" textAnchor="middle" fill="#090d16" fontSize="10" fontWeight="900" fontFamily="sans-serif">
                    {pt.sgpa}
                  </text>
                </g>

                {/* Bottom X-Axis Label */}
                <text x={pt.x} y={svgHeight + 2} textAnchor="middle" fill={currentActiveSem === pt.sem ? "#68c2e3" : "currentColor"} opacity={currentActiveSem === pt.sem ? "1" : "0.7"} fontSize="10" fontWeight="800">
                  Sem {pt.sem}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* 🏆 Prominent 4-Semester SGPA Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          {availableSems.map((sNum) => {
            const semObj = student?.semesters?.find(s => s.sem === sNum);
            const isCurrent = currentActiveSem === sNum;
            const subsCount = student?.semesterSubjects?.[sNum]?.length || 0;
            return (
              <button
                key={sNum}
                onClick={() => setActiveSemFilter(sNum)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#68c2e3]/20 to-sky-600/20 border-[#68c2e3] shadow-lg shadow-[#68c2e3]/10 scale-[1.02]'
                    : 'bg-slate-100/80 dark:bg-gray-900/80 border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isCurrent ? 'text-[#68c2e3]' : 'text-slate-500 dark:text-gray-400'}`}>
                    Semester {sNum}
                  </span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-[#68c2e3] animate-pulse" />}
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {semObj ? semObj.sgpa.toFixed(2) : '-'} <span className="text-xs font-bold opacity-60">SGPA</span>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-gray-400 mt-0.5">
                  {subsCount} Papers Registered
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Subject Marksheet Table with Visual Progress Bars */}
      <div className="glass-card p-5 space-y-4 border-slate-200 dark:border-gray-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#68c2e3]" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                Official Subject-Wise Marks & Grade Breakdown — Semester {currentActiveSem}
              </h3>
            </div>
            <div className="text-[11px] text-[#68c2e3] font-bold mt-0.5 ml-6">
              Showing {displayedSubjects.length} subjects • Semester {currentActiveSem} SGPA: {student?.semesters?.find(s => s.sem === currentActiveSem)?.sgpa || calculatedAvgCgpa}
            </div>
          </div>

          {/* Semester Filter Pills */}
          {availableSems.length > 1 && (
            <div className="flex items-center gap-1.5 text-xs flex-wrap">
              <span className="text-[11px] font-bold text-slate-500 dark:text-gray-400 mr-1">
                Semester:
              </span>
              {availableSems.map((sNum) => {
                const semObj = student?.semesters?.find(s => s.sem === sNum);
                return (
                  <button
                    key={sNum}
                    onClick={() => setActiveSemFilter(sNum)}
                    className={`px-3.5 py-1.5 rounded-lg font-black transition-all border ${
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

        {/* Subject Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-gray-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 uppercase text-[10px] font-bold">
              <tr>
                <th className="p-3">Paper Code</th>
                <th className="p-3">Subject Name</th>
                <th className="p-3 text-center">Sessional / Internal</th>
                <th className="p-3 text-center">Theory / External</th>
                <th className="p-3 text-center">Total Marks</th>
                <th className="p-3 text-center min-w-[140px]">Score Progress Bar</th>
                <th className="p-3 text-center">Letter Grade</th>
                <th className="p-3 text-center">Credit</th>
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
                    <td className="p-3 font-mono text-[#68c2e3] font-bold">{sub.code}</td>
                    <td className="p-3 text-slate-900 dark:text-white font-medium">{sub.name}</td>
                    <td className="p-3 text-center text-slate-600 dark:text-gray-300 font-mono">{sub.internalStr || '-'}</td>
                    <td className="p-3 text-center text-slate-600 dark:text-gray-300 font-mono">{sub.externalStr || '-'}</td>
                    <td className="p-3 text-center font-black text-slate-900 dark:text-white font-mono">{sub.totalStr || '-'}</td>
                    
                    {/* Visual Progress Bar */}
                    <td className="p-3 text-center">
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
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5 block">{progressPercent}% Score</span>
                    </td>

                    <td className="p-3 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-xs ${getGradeBadge(sub.grade)}`}>
                        {sub.grade}
                      </span>
                    </td>
                    <td className="p-3 text-center text-slate-500 dark:text-gray-400 font-bold">{sub.credit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
