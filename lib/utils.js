import { STUDENTS, BRANCHES } from './data';

// Enhanced search with multi-branch selection and year filtering
export function searchStudents(query = '', selectedBranches = 'ALL', selectedYear = 'ALL') {
  let list = [...STUDENTS];

  // 1. Filter by Branch (Check if ALL is selected, either string 'ALL' or array containing 'ALL')
  const isAllBranches = selectedBranches === 'ALL' || 
    (Array.isArray(selectedBranches) && (selectedBranches.includes('ALL') || selectedBranches.length === 0));

  if (!isAllBranches) {
    if (Array.isArray(selectedBranches)) {
      list = list.filter(s => selectedBranches.includes(s.branch));
    } else {
      list = list.filter(s => s.branch === selectedBranches);
    }
  }

  // 2. Filter by Passing / Batch Year (2023, 2024, 2025, 2026, 2027)
  if (selectedYear !== 'ALL') {
    list = list.filter(s => {
      if (s.batch && s.batch.includes(selectedYear)) return true;
      if (selectedYear === '2024' && s.semesters && s.semesters.some(sem => sem.sem === 3 || sem.sem === 4)) return true;
      if (selectedYear === '2025' && s.semesters && s.semesters.some(sem => sem.sem === 5 || sem.sem === 6)) return true;
      return false;
    });
  }

  // 3. Search Query by Roll Number or Name
  if (query && query.trim() !== '') {
    const q = query.toLowerCase().trim();
    list = list.filter(
      (s) => s.name.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q)
    );
  }

  return list;
}

export function getStudentByRoll(rollNo) {
  if (!rollNo) return STUDENTS[0];
  return STUDENTS.find((s) => s.rollNo.trim() === rollNo.trim()) || STUDENTS[0];
}

export function getLeaderboard(selectedBranch = 'ALL', selectedYear = 'ALL') {
  let list = [...STUDENTS];

  const isAllBranches = selectedBranch === 'ALL' || 
    (Array.isArray(selectedBranch) && (selectedBranch.includes('ALL') || selectedBranch.length === 0));

  if (!isAllBranches) {
    if (Array.isArray(selectedBranch)) {
      list = list.filter(s => selectedBranch.includes(s.branch));
    } else {
      list = list.filter(s => s.branch === selectedBranch);
    }
  }

  if (selectedYear !== 'ALL') {
    list = list.filter(s => {
      if (s.batch && s.batch.includes(selectedYear)) return true;
      if (selectedYear === '2024' && s.semesters && s.semesters.some(sem => sem.sem === 3 || sem.sem === 4)) return true;
      if (selectedYear === '2025' && s.semesters && s.semesters.some(sem => sem.sem === 5 || sem.sem === 6)) return true;
      return false;
    });
  }

  const sorted = list.sort((a, b) => b.cgpa - a.cgpa);
  return sorted.map((student, idx) => ({
    ...student,
    displayRank: idx + 1
  }));
}

export function getTop3Overall() {
  const sorted = [...STUDENTS].sort((a, b) => b.cgpa - a.cgpa);
  return sorted.slice(0, 3);
}

export function getBranchToppers() {
  const toppers = {};
  BRANCHES.forEach((b) => {
    const branchStudents = STUDENTS.filter((s) => s.branch === b.id).sort((a, b) => b.cgpa - a.cgpa);
    toppers[b.id] = branchStudents[0] || null;
  });
  return toppers;
}

export function getBranchStats() {
  return BRANCHES.map((b) => {
    const branchStudents = STUDENTS.filter((s) => s.branch === b.id);
    const count = branchStudents.length;
    const avgCgpa = count > 0 
      ? (branchStudents.reduce((sum, s) => sum + s.cgpa, 0) / count).toFixed(2)
      : '7.85';
    const topStudent = branchStudents.sort((a, b) => b.cgpa - a.cgpa)[0];
    return {
      ...b,
      avgCgpa,
      topStudent: topStudent ? `${topStudent.name} (${topStudent.cgpa} CGPA)` : 'Branch Topper'
    };
  });
}
