'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRANCHES, STUDENTS } from '@/lib/data';
import { getStudentByRoll } from '@/lib/utils';
import { Search, Users, Sparkles, Activity, ExternalLink, ArrowRight, RefreshCw } from 'lucide-react';

// Compute similarity score — cross-branch allowed
function computeTwinScore(studentA, studentB) {
  if (!studentA || !studentB || studentA.rollNo === studentB.rollNo) return -1;

  // 1. CGPA closeness (max 40 points)
  const cgpaDiff = Math.abs(studentA.cgpa - studentB.cgpa);
  const cgpaScore = Math.max(0, 40 - cgpaDiff * 20);

  // 2. SGPA per-semester closeness (max 50 points)
  const semsA = studentA.semesters || [];
  const semsB = studentB.semesters || [];
  const minLen = Math.min(semsA.length, semsB.length);
  let sgpaScore = 0;
  for (let i = 0; i < minLen; i++) {
    const diff = Math.abs(semsA[i].sgpa - semsB[i].sgpa);
    sgpaScore += Math.max(0, (50 / Math.max(minLen, 1)) - diff * (50 / Math.max(minLen, 1)) * 0.5);
  }

  // 3. Same branch bonus (max 10 points)
  const branchBonus = studentA.branch === studentB.branch ? 10 : 0;

  return parseFloat((cgpaScore + sgpaScore + branchBonus).toFixed(1));
}

export default function TwinPage() {
  const [query, setQuery] = useState('');
  const [myStudent, setMyStudent] = useState(null);
  const [twins, setTwins] = useState([]);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const getBranchBadge = (branchId) => {
    const b = BRANCHES.find(item => item.id === branchId);
    return b ? b.badgeClass : 'bg-[#68c2e3]/20 text-[#68c2e3] border border-[#68c2e3]/40 font-bold';
  };

  const handleFind = (e) => {
    if (e) e.preventDefault();
    setError('');
    const trimmed = query.trim();
    if (!trimmed) {
      setError('Apna Roll Number ya Naam enter karo.');
      return;
    }
    const found = getStudentByRoll(trimmed) || STUDENTS.find(s => s.name.toLowerCase().includes(trimmed.toLowerCase()));
    if (!found) {
      setError(`"${trimmed}" ka koi student nahi mila. Valid Roll No try karo.`);
      setMyStudent(null);
      setTwins([]);
      setSearched(true);
      return;
    }
    setMyStudent(found);

    const scoredTwins = STUDENTS
      .filter(s => s.rollNo !== found.rollNo)
      .map(s => ({
        ...s,
        twinScore: computeTwinScore(found, s),
        cgpaDiff: Math.abs(found.cgpa - s.cgpa).toFixed(2),
        sameBranch: s.branch === found.branch,
      }))
      .filter(s => s.twinScore > 0)
      .sort((a, b) => b.twinScore - a.twinScore)
      .slice(0, 8);

    setTwins(scoredTwins);
    setSearched(true);
  };

  const getTwinLabel = (score, sameBranch) => {
    if (score >= 80) return { label: '🧬 Identical Twin', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' };
    if (score >= 60) return { label: sameBranch ? '💫 Academic Twin' : '🌐 Cross-Branch Twin', color: 'text-[#68c2e3] bg-[#68c2e3]/10 border-[#68c2e3]/30' };
    if (score >= 40) return { label: '👥 Close Match', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' };
    return { label: '🔗 Similar Track', color: 'text-purple-500 bg-purple-500/10 border-purple-500/30' };
  };

  const getScoreBar = (score) => {
    if (score >= 80) return 'bg-gradient-to-r from-emerald-400 to-teal-500';
    if (score >= 60) return 'bg-gradient-to-r from-[#68c2e3] to-sky-500';
    if (score >= 40) return 'bg-gradient-to-r from-blue-500 to-indigo-500';
    return 'bg-gradient-to-r from-purple-500 to-violet-600';
  };

  return (
    <div className="space-y-5 pb-12 max-w-3xl mx-auto">

      {/* Compact Hero */}
      <div className="text-center space-y-2 pt-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/30 text-[11px] font-extrabold">
          <Sparkles className="w-3 h-3" />
          BU Jhansi IET — Academic Twin Finder
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Find Your <span className="text-[#68c2e3]">Academic Twin</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-gray-400 max-w-lg mx-auto">
          Sabhi branches (EIE, BME, ME) mein se wo students dhundho jinka SGPA trend aur CGPA tumhare sabse zyada milta ho.
        </p>
      </div>

      {/* Search Card — compact */}
      <div className="glass-card p-4 sm:p-5 border-[#68c2e3]/30 shadow-lg max-w-2xl mx-auto">
        <form onSubmit={handleFind} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#68c2e3]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Roll No ya Naam likhो (e.g. 231391034021)..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#68c2e3] text-xs font-medium transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 font-black text-xs shadow-md hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            Find Twin
          </button>
        </form>

        {error && (
          <div className="mt-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold text-center">
            {error}
          </div>
        )}
      </div>

      {/* Your Student Profile — compact */}
      {myStudent && (
        <div className="glass-card p-3.5 sm:p-4 border-[#68c2e3]/40 bg-gradient-to-br from-[#68c2e3]/5 to-transparent max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
              {myStudent.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#68c2e3] uppercase tracking-wider">Your Profile</div>
              <div className="text-sm font-black text-slate-900 dark:text-white truncate">{myStudent.name}</div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-gray-400">
                <span>{myStudent.rollNo}</span>
                <span>•</span>
                <span className={`px-1.5 py-0.5 rounded font-bold border text-[10px] ${getBranchBadge(myStudent.branch)}`}>{myStudent.branch}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xl font-black text-[#68c2e3]">{myStudent.cgpa}</div>
              <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">CGPA</div>
            </div>
          </div>

          {/* Mini SGPA Fingerprint */}
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-gray-800">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-gray-400 mb-1.5">
              <Activity className="w-3 h-3 text-[#68c2e3]" />
              Your SGPA Fingerprint:
            </div>
            <div className="flex items-end gap-1.5 h-9">
              {myStudent.semesters.map((sem) => {
                const ht = Math.min(100, (sem.sgpa / 10.0) * 100);
                return (
                  <div key={sem.sem} className="flex-1 flex flex-col items-center gap-0.5">
                    <div className="w-full bg-slate-200 dark:bg-gray-800 rounded-t" style={{ height: '30px', display: 'flex', alignItems: 'flex-end' }}>
                      <div className="w-full rounded-t bg-gradient-to-t from-[#68c2e3] to-sky-400" style={{ height: `${ht}%` }} />
                    </div>
                    <span className="text-[8px] font-bold text-slate-500 dark:text-gray-400">S{sem.sem}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Twin Results */}
      {searched && myStudent && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs px-0.5">
            <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#68c2e3]" />
              {twins.length > 0
                ? `${twins.length} Academic Twins Found — All Branches`
                : 'Koi twin nahi mila'
              }
            </div>
            <button
              onClick={() => { setQuery(''); setMyStudent(null); setTwins([]); setSearched(false); setError(''); }}
              className="flex items-center gap-1 text-slate-400 hover:text-[#68c2e3] transition-colors font-bold text-[11px]"
            >
              <RefreshCw className="w-3 h-3" />
              Reset
            </button>
          </div>

          {twins.length === 0 && (
            <div className="glass-card p-8 text-center text-slate-500 dark:text-gray-400">
              <Users className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p className="text-sm font-bold">No academic twins found.</p>
            </div>
          )}

          {twins.map((twin, idx) => {
            const { label, color } = getTwinLabel(twin.twinScore, twin.sameBranch);
            const scoreBarClass = getScoreBar(twin.twinScore);
            const twinInitials = twin.name.split(' ').map(n => n[0]).join('').slice(0, 2);

            return (
              <div
                key={twin.rollNo}
                className={`glass-card p-3 sm:p-3.5 border transition-all hover:shadow-md hover:border-[#68c2e3]/40 ${idx === 0 ? 'border-[#68c2e3]/50 bg-gradient-to-br from-[#68c2e3]/5 to-transparent' : 'border-slate-200 dark:border-gray-800'}`}
              >
                <div className="flex items-center gap-3">

                  {/* Rank + Avatar */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-sm w-4 text-center font-black text-slate-400 dark:text-gray-500">
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                    </div>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br from-[#68c2e3] to-sky-600 text-slate-950 flex items-center justify-center font-black text-xs shadow ${idx === 0 ? 'ring-2 ring-[#68c2e3] ring-offset-1' : ''}`}>
                      {twinInitials}
                    </div>
                  </div>

                  {/* Twin Info */}
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${color}`}>{label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold border ${getBranchBadge(twin.branch)}`}>{twin.branch}</span>
                      {!twin.sameBranch && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-violet-500/10 text-violet-400 border border-violet-500/30">Cross-Branch</span>
                      )}
                    </div>
                    <Link href={`/student/${twin.rollNo}`} className="group flex items-center gap-1">
                      <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#68c2e3] transition-colors truncate">
                        {twin.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-[#68c2e3] opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
                    </Link>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-gray-400">
                      <span>{twin.rollNo}</span>
                      <span>CGPA: <strong className="text-slate-700 dark:text-gray-200">{twin.cgpa}</strong></span>
                      <span className={parseFloat(twin.cgpaDiff) < 0.3 ? 'text-emerald-500 font-bold' : 'text-amber-500 font-bold'}>±{twin.cgpaDiff}</span>
                    </div>
                  </div>

                  {/* Score + Bar */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0 min-w-[90px]">
                    <div className="text-right">
                      <div className="text-lg font-black text-[#68c2e3] leading-none">{twin.twinScore.toFixed(0)}</div>
                      <div className="text-[9px] text-slate-500 dark:text-gray-400 font-bold">/ 100</div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${scoreBarClass}`} style={{ width: `${Math.min(100, twin.twinScore)}%` }} />
                    </div>
                    <Link href={`/student/${twin.rollNo}`} className="text-[10px] font-bold text-[#68c2e3] hover:underline flex items-center gap-0.5">
                      Dashboard <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>

                {/* SGPA Comparison Chart — top 3 only */}
                {idx < 3 && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-gray-800/60">
                    <div className="text-[10px] font-bold text-slate-500 dark:text-gray-400 mb-1.5 flex items-center gap-1">
                      <Activity className="w-3 h-3 text-[#68c2e3]" />
                      SGPA: You <span className="text-[#68c2e3]">■</span> vs {twin.name.split(' ')[0]} <span className="text-emerald-400">■</span>
                    </div>
                    <div className="flex items-end gap-1 h-10">
                      {myStudent.semesters.map((mySem, si) => {
                        const twinSem = twin.semesters[si];
                        const myHt = Math.min(100, (mySem.sgpa / 10.0) * 100);
                        const twinHt = twinSem ? Math.min(100, (twinSem.sgpa / 10.0) * 100) : 0;
                        return (
                          <div key={si} className="flex-1 flex items-end gap-0.5 h-full">
                            <div className="flex-1 bg-slate-200 dark:bg-gray-800 rounded-t" style={{ height: '36px', display: 'flex', alignItems: 'flex-end' }}>
                              <div className="w-full rounded-t bg-[#68c2e3]" style={{ height: `${myHt}%`, opacity: 0.85 }} title={`You: ${mySem.sgpa}`} />
                            </div>
                            <div className="flex-1 bg-slate-200 dark:bg-gray-800 rounded-t" style={{ height: '36px', display: 'flex', alignItems: 'flex-end' }}>
                              <div className="w-full rounded-t bg-emerald-400" style={{ height: `${twinHt}%`, opacity: 0.85 }} title={`${twin.name.split(' ')[0]}: ${twinSem?.sgpa}`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Info cards — when no search */}
      {!searched && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-center">
          {[
            { icon: Activity, color: 'text-[#68c2e3] bg-[#68c2e3]/10 border-[#68c2e3]/30', title: 'SGPA Pattern', desc: 'Semester-by-semester SGPA trend similarity match karta hai.' },
            { icon: Users, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30', title: 'CGPA Proximity', desc: 'Closest cumulative CGPA wale students dhundhta hai.' },
            { icon: Sparkles, color: 'text-amber-500 bg-amber-500/10 border-amber-500/30', title: 'All Branches', desc: 'EIE, BME aur ME — teeno department mein search hota hai.' },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="glass-card p-4 space-y-2 border-slate-200 dark:border-gray-800">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mx-auto ${color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">{title}</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">{desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
