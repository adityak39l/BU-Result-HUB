import { STUDENTS, BRANCHES } from './data';

// Helper: compute combined SGPA for specific semesters (e.g. Sem 5 & 6)
export function computeCgpaForSems(student, semNums) {
  const sems = student?.semesters?.filter(s => semNums.includes(s.sem)) || [];
  if (sems.length === 0) return student?.cgpa || 0;
  return sems.reduce((acc, s) => acc + s.sgpa, 0) / sems.length;
}

// Enhanced search with multi-branch selection and year filtering
export function searchStudents(query = '', selectedBranches = 'ALL', selectedYear = 'ALL') {
  let list = [...STUDENTS];

  // 1. Filter by Branch
  const isAllBranches = selectedBranches === 'ALL' || 
    (Array.isArray(selectedBranches) && (selectedBranches.includes('ALL') || selectedBranches.length === 0));

  if (!isAllBranches) {
    if (Array.isArray(selectedBranches)) {
      list = list.filter(s => selectedBranches.includes(s.branch));
    } else {
      list = list.filter(s => s.branch === selectedBranches);
    }
  }

  // 2. Filter by Batch Year — Sem-based
  if (selectedYear !== 'ALL') {
    list = list.filter(s => {
      const yr = selectedYear.toLowerCase();
      if (yr.includes('2025') || yr === '2025-26') {
        // Batch 2025-26 = students who have Sem 5 OR Sem 6 data
        return s.semesters && s.semesters.some(sem => sem.sem === 5 || sem.sem === 6);
      }
      if (yr.includes('2024') || yr === '2024-25') {
        // Batch 2024-25 = students who have Sem 3 OR Sem 4 data
        return s.semesters && s.semesters.some(sem => sem.sem === 3 || sem.sem === 4);
      }
      if (yr.includes('2023') || yr === '2023-24') {
        return s.semesters && s.semesters.some(sem => sem.sem === 1 || sem.sem === 2);
      }
      return s.batch && s.batch.toLowerCase().includes(yr);
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
  const defaultStudent = STUDENTS.find(s => s.branch === 'CSE') || STUDENTS[0];
  if (!rollNo || rollNo === 'undefined') return defaultStudent;
  return STUDENTS.find((s) => s.rollNo.trim() === rollNo.trim()) || defaultStudent;
}

export function getLeaderboard(selectedBranch = 'ALL', selectedYear = '2025-26') {
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

  // Active semesters for ranking: default to Sem 5 & 6 (Batch 2025-26)
  let activeSemNums = [5, 6];

  if (selectedYear !== 'ALL') {
    const yr = selectedYear.toLowerCase();
    if (yr.includes('2025') || yr === '2025-26') {
      list = list.filter(s => s.semesters && s.semesters.some(sem => sem.sem === 5 || sem.sem === 6));
      activeSemNums = [5, 6];
    } else if (yr.includes('2024') || yr === '2024-25') {
      list = list.filter(s => s.semesters && s.semesters.some(sem => sem.sem === 3 || sem.sem === 4));
      activeSemNums = [3, 4];
    } else if (yr.includes('2023') || yr === '2023-24') {
      list = list.filter(s => s.semesters && s.semesters.some(sem => sem.sem === 1 || sem.sem === 2));
      activeSemNums = [1, 2];
    } else {
      list = list.filter(s => s.batch && s.batch.toLowerCase().includes(yr));
      activeSemNums = [5, 6];
    }
  } else {
    // For 'ALL', rank students by Sem 5 & 6 combined average (or overall cgpa if no sem 5/6)
    activeSemNums = [5, 6];
  }

  // Sort by semester-specific combined SGPA
  const sorted = list.sort((a, b) => {
    const cgpaA = computeCgpaForSems(a, activeSemNums);
    const cgpaB = computeCgpaForSems(b, activeSemNums);
    return cgpaB - cgpaA;
  });

  return sorted.map((student, idx) => ({
    ...student,
    displayRank: idx + 1,
    // Effective CGPA is the combined SGPA average of Sem 5 & Sem 6
    effectiveCgpa: parseFloat(computeCgpaForSems(student, activeSemNums).toFixed(2)),
  }));
}

export function getTop3Overall() {
  const sorted = getLeaderboard('ALL', '2025-26');
  return sorted.slice(0, 3);
}

export function getBranchToppers() {
  const toppers = {};
  BRANCHES.forEach((b) => {
    const branchStudents = getLeaderboard(b.id, '2025-26');
    toppers[b.id] = branchStudents[0] || null;
  });
  return toppers;
}

export function getBranchStats() {
  return BRANCHES.map((b) => {
    const branchStudents = getLeaderboard(b.id, '2025-26');
    const count = branchStudents.length;
    const avgCgpa = count > 0 
      ? (branchStudents.reduce((sum, s) => sum + (s.effectiveCgpa || s.cgpa), 0) / count).toFixed(2)
      : '7.85';
    const topStudent = branchStudents[0];
    return {
      ...b,
      avgCgpa,
      topStudent: topStudent ? `${topStudent.name} (${(topStudent.effectiveCgpa || topStudent.cgpa).toFixed(2)} SGPA)` : 'Branch Topper'
    };
  });
}
