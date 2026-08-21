export const BRANCHES = [
  { id: 'CSE', name: 'Computer Science & Engineering', color: 'from-emerald-500 to-teal-600', badgeClass: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 font-bold' },
  { id: 'EIE', name: 'Electronics & Instrumentation Engg.', color: 'from-cyan-500 to-blue-600', badgeClass: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 font-bold' },
  { id: 'BME', name: 'Biomedical Engineering', color: 'from-rose-500 to-pink-600', badgeClass: 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 font-bold' },
  { id: 'ME', name: 'Mechanical Engineering', color: 'from-amber-500 to-orange-600', badgeClass: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 font-bold' },
];

export const SUBJECT_MASTER = {
  CSE: [
    { code: 'CSE-601', name: 'Operating System', passRate: '92%', diff: 'Medium', desc: 'Process management, concurrency & memory virtualization' },
    { code: 'CSE-602', name: 'Computer Networks', passRate: '90%', diff: 'Hard', desc: 'OSI/TCP-IP models, routing protocols & socket programming' },
    { code: 'CSE-603', name: 'Artificial Intelligence', passRate: '94%', diff: 'Medium', desc: 'Heuristic search, knowledge representation & logic' },
    { code: 'CSE-501', name: 'Compiler Design', passRate: '86%', diff: 'Hard', desc: 'Lexical analysis, parsing, syntax directed translation' },
    { code: 'CSE-502', name: 'Computer Graphics', passRate: '95%', diff: 'Easy', desc: 'Raster scan graphics, transformation & 3D rendering' }
  ],
  EIE: [
    { code: 'EIE-601', name: 'Electrical Machines', passRate: '88%', diff: 'Hard', desc: 'Complex magnetic circuit & transformer theory' },
    { code: 'EIE-602', name: 'Microcontroller', passRate: '94%', diff: 'Medium', desc: '8051 & ARM Architecture assembly' },
    { code: 'EIE-603', name: 'Communication Engineering', passRate: '91%', diff: 'Medium', desc: 'Analog and digital modulation' },
    { code: 'EIE-501', name: 'Power Electronics', passRate: '85%', diff: 'Hard', desc: 'SCR, TRIAC and Converter circuits' },
    { code: 'EIE-502', name: 'Integrated Circuits', passRate: '96%', diff: 'Easy', desc: 'Op-amp linear & non-linear applications' }
  ],
  BME: [
    { code: 'BME-601', name: 'Physiological Control System', passRate: '90%', diff: 'Medium', desc: 'Biological feedback system modeling' },
    { code: 'BME-602', name: 'Microcontroller & Applications', passRate: '92%', diff: 'Medium', desc: 'Embedded systems in medical devices' },
    { code: 'BME-603', name: 'Biomedical Signal Processing', passRate: '86%', diff: 'Hard', desc: 'ECG/EEG filtering & FFT algorithms' }
  ],
  ME: [
    { code: 'ME-601', name: 'Machine Design-I', passRate: '84%', diff: 'Hard', desc: 'Stress analysis & mechanical element design' },
    { code: 'ME-602', name: 'Dynamics of Machine', passRate: '89%', diff: 'Hard', desc: 'Vibration & balancing analysis' },
    { code: 'ME-501', name: 'Industrial Economics', passRate: '98%', diff: 'Easy', desc: 'Management principles & cost accounting' }
  ]
};

export const STUDENTS = [
  {
      "rollNo": "231391034021",
      "name": "RAVINDRA BHASNEY",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 9.05,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 9.05
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 47 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 139 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 95 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 23 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 19 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 45 / 50",
              "grade": "O",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 47 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 1,
      "branchRank": 1
  },
  {
      "rollNo": "231371028003",
      "name": "BHAVNA MAURYA",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 8.57,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.0
          },
          {
              "sem": 6,
              "sgpa": 9.14
          }
      ],
      "currentSemSubjects": [
          {
              "code": "PHYSIOLOGICAL",
              "name": "CONTROL SYSTEM MODELING",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MICROCONTROLLER",
              "name": "AND ITS APPLICATION",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 63 / 100",
              "totalStr": "Tot: 109 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "BIOMEDICAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "THERAPEUTIC",
              "name": "INSTRUMENTS",
              "internalStr": "Int: 48 / 50",
              "externalStr": "Ext: 87 / 100",
              "totalStr": "Tot: 135 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "MEDICAL",
              "name": "IMAGING TECHNIQUES",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 48 / 50",
              "totalStr": "Tot: 70 / 75",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "BIOMECHANICS",
              "name": "(ELECTIVE-II)",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 66 / 75",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "PCSM",
              "name": "LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "BIOMEDICAL",
              "name": "DIGITAL SIGNAL PROCESSING LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "BME-6010",
              "name": "SEMINAR",
              "internalStr": "Int: 65 / 75",
              "externalStr": "-",
              "totalStr": "Tot: 65 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 47 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 2,
      "branchRank": 1
  },
  {
      "rollNo": "231351139006",
      "name": "AYUSH KUMAR",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 8.43,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 8.22
          },
          {
              "sem": 4,
              "sgpa": 8.55
          },
          {
              "sem": 5,
              "sgpa": 8.7
          },
          {
              "sem": 6,
              "sgpa": 8.25
          }
      ],
      "currentSemSubjects": [
          {
              "code": "ELECTRICAL",
              "name": "MACHINES",
              "internalStr": "Int: 27 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 99 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "EIE-602",
              "name": "MICROCONTROLLER",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "COMMUNICATION",
              "name": "ENGINEERING",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DIGITAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "EIE-605",
              "name": "SEMINAR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "COMMUNICATION",
              "name": "LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 43 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 63 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DSP",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 3,
      "branchRank": 1,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 44 / 50",
                  "totalStr": "Tot: 67 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 35 / 40",
                  "externalStr": "Ext: 55 / 60",
                  "totalStr": "Tot: 90 / 100",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 47 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 128 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 24 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 66 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 35 / 40",
                  "externalStr": "Ext: 55 / 60",
                  "totalStr": "Tot: 90 / 100",
                  "grade": "O",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 128 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 135 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 18 / 20",
                  "externalStr": "Ext: 27 / 30",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 45 / 50",
                  "totalStr": "Tot: 67 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 18 / 20",
                  "externalStr": "Ext: 26 / 30",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 48 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "PROCESS",
                  "name": "PROCESS DYNAMICS AND CONTROL (DEPARTMENTAL ELECTIVE -I)",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MACHINES",
                  "internalStr": "Int: 27 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION ENGINEERING",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL SIGNAL PROCESSING",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SEMINAR",
                  "name": "SEMINAR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION LAB",
                  "internalStr": "Int: 17 / 20",
                  "externalStr": "Ext: 26 / 30",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DSP",
                  "name": "DSP LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139010",
      "name": "PRASHANT NAYAK",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.8,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.0
          },
          {
              "sem": 4,
              "sgpa": 8.1
          },
          {
              "sem": 5,
              "sgpa": 8.3
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 83 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 127 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 100 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 69 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 16 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 40 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 4,
      "branchRank": 2,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 45 / 100",
                  "totalStr": "Tot: 84 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 35 / 40",
                  "externalStr": "Ext: 56 / 60",
                  "totalStr": "Tot: 91 / 100",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 20 / 40",
                  "externalStr": "Ext: 24 / 60",
                  "totalStr": "Tot: 44 / 100",
                  "grade": "C",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 20 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 127 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 29 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 26 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 16 / 25",
                  "externalStr": "Ext: 43 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231371028009",
      "name": "MOHD ASHZAD",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 8.29,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.29
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 64 / 75",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 46 / 50",
              "totalStr": "Tot: 66 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 46 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 65 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 5,
      "branchRank": 2
  },
  {
      "rollNo": "231371028001",
      "name": "ANSHUL KUMAR",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 8.24,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.24
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 128 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 33 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 65 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 46 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 65 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 6,
      "branchRank": 3
  },
  {
      "rollNo": "231391034011",
      "name": "ISHITA SINHA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 8.15,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.25
          },
          {
              "sem": 6,
              "sgpa": 8.05
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 48 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 99 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 108 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 40 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 43 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 44 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 90 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 90 / 100",
              "grade": "O",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 49 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 7,
      "branchRank": 2
  },
  {
      "rollNo": "231351139004",
      "name": "ALFAIJ",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.8,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.22
          },
          {
              "sem": 4,
              "sgpa": 7.9
          },
          {
              "sem": 5,
              "sgpa": 7.9
          },
          {
              "sem": 6,
              "sgpa": 8.2
          }
      ],
      "currentSemSubjects": [
          {
              "code": "ELECTRICAL",
              "name": "MACHINES",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "EIE-602",
              "name": "MICROCONTROLLER",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "COMMUNICATION",
              "name": "ENGINEERING",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DIGITAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "EIE-605",
              "name": "SEMINAR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "COMMUNICATION",
              "name": "LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DSP",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 8,
      "branchRank": 3,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 65 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 36 / 40",
                  "externalStr": "Ext: 55 / 60",
                  "totalStr": "Tot: 91 / 100",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 47 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 20 / 40",
                  "externalStr": "Ext: 48 / 60",
                  "totalStr": "Tot: 68 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 126 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 18 / 20",
                  "externalStr": "Ext: 24 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 43 / 50",
                  "totalStr": "Tot: 65 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 17 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "PROCESS",
                  "name": "PROCESS DYNAMICS AND CONTROL (DEPARTMENTAL ELECTIVE -I)",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MACHINES",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION ENGINEERING",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL SIGNAL PROCESSING",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SEMINAR",
                  "name": "SEMINAR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DSP",
                  "name": "DSP LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139001",
      "name": "ADITYA KUMAR VERMA",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.23,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 6.33
          },
          {
              "sem": 4,
              "sgpa": 7.35
          },
          {
              "sem": 5,
              "sgpa": 8.0
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 42 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 9,
      "branchRank": 4,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 73 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 75 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 30 / 40",
                  "externalStr": "Ext: 48 / 60",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 29 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 12 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 20 / 40",
                  "externalStr": "Ext: 40 / 60",
                  "totalStr": "Tot: 60 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 35 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 26 / 30",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 45 / 50",
                  "totalStr": "Tot: 67 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 24 / 30",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139003",
      "name": "AJAY",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.63,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.11
          },
          {
              "sem": 4,
              "sgpa": 7.95
          },
          {
              "sem": 5,
              "sgpa": 7.75
          },
          {
              "sem": 6,
              "sgpa": 7.7
          }
      ],
      "currentSemSubjects": [
          {
              "code": "ELECTRICAL",
              "name": "MACHINES",
              "internalStr": "Int: 28 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 89 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "EIE-602",
              "name": "MICROCONTROLLER",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "COMMUNICATION",
              "name": "ENGINEERING",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DIGITAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 86 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "EIE-605",
              "name": "SEMINAR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "-",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "COMMUNICATION",
              "name": "LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "DSP",
              "name": "LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 10,
      "branchRank": 5,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 84 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 45 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 34 / 40",
                  "externalStr": "Ext: 52 / 60",
                  "totalStr": "Tot: 86 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 87 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 22 / 40",
                  "externalStr": "Ext: 49 / 60",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 30 / 50",
                  "totalStr": "Tot: 50 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 22 / 30",
                  "totalStr": "Tot: 36 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "PROCESS",
                  "name": "PROCESS DYNAMICS AND CONTROL (DEPARTMENTAL ELECTIVE -I)",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MACHINES",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION ENGINEERING",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL SIGNAL PROCESSING",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SEMINAR",
                  "name": "SEMINAR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "-",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 24 / 30",
                  "totalStr": "Tot: 39 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "DSP",
                  "name": "DSP LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139017",
      "name": "ADITYA CHAURASIA",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.69,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.5
          },
          {
              "sem": 4,
              "sgpa": 7.85
          },
          {
              "sem": 5,
              "sgpa": 7.05
          },
          {
              "sem": 6,
              "sgpa": 8.35
          }
      ],
      "currentSemSubjects": [
          {
              "code": "ELECTRICAL",
              "name": "MACHINES",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "EIE-602",
              "name": "MICROCONTROLLER",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 86 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "COMMUNICATION",
              "name": "ENGINEERING",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 108 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "DIGITAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "EIE-605",
              "name": "SEMINAR",
              "internalStr": "Int: 47 / 50",
              "externalStr": "-",
              "totalStr": "Tot: 47 / 50",
              "grade": "O",
              "credit": 1
          },
          {
              "code": "COMMUNICATION",
              "name": "LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DSP",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 11,
      "branchRank": 6,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 35 / 40",
                  "externalStr": "Ext: 54 / 60",
                  "totalStr": "Tot: 89 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 36 / 40",
                  "externalStr": "Ext: 55 / 60",
                  "totalStr": "Tot: 91 / 100",
                  "grade": "O",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 48 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 32 / 100",
                  "totalStr": "Tot: 73 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 18 / 20",
                  "externalStr": "Ext: 27 / 30",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 45 / 50",
                  "totalStr": "Tot: 67 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 47 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "PROCESS",
                  "name": "PROCESS DYNAMICS AND CONTROL (DEPARTMENTAL ELECTIVE -I)",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MACHINES",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION ENGINEERING",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL SIGNAL PROCESSING",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "SEMINAR",
                  "name": "SEMINAR",
                  "internalStr": "Int: 47 / 50",
                  "externalStr": "-",
                  "totalStr": "Tot: 47 / 50",
                  "grade": "O",
                  "credit": 1
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DSP",
                  "name": "DSP LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231371028007",
      "name": "KAPIL AHIRWAR",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 7.67,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.67
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 21 / 50",
              "totalStr": "Tot: 39 / 75",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 63 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 63 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 12,
      "branchRank": 4
  },
  {
      "rollNo": "231351139014",
      "name": "VISHAL",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.65,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.5
          },
          {
              "sem": 4,
              "sgpa": 7.8
          },
          {
              "sem": 5,
              "sgpa": 7.65
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 68 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 111 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 13,
      "branchRank": 7,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 83 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 35 / 40",
                  "externalStr": "Ext: 53 / 60",
                  "totalStr": "Tot: 88 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 30 / 40",
                  "externalStr": "Ext: 53 / 60",
                  "totalStr": "Tot: 83 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 35 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 17 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 21 / 30",
                  "totalStr": "Tot: 37 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231391034016",
      "name": "MANOJ PAL",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 7.65,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.8
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 44 / 100",
              "totalStr": "Tot: 85 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 56 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 55 / 100",
              "totalStr": "Tot: 93 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 85 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 85 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 49 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 14,
      "branchRank": 3
  },
  {
      "rollNo": "231371028002",
      "name": "ASHI KHARE",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 7.62,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.62
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 52 / 100",
              "totalStr": "Tot: 92 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 55 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 34 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 64 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 51 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 15,
      "branchRank": 5
  },
  {
      "rollNo": "231391034023",
      "name": "SAHIL KUMAR SHARMA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 7.4,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.25
          },
          {
              "sem": 6,
              "sgpa": 7.55
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 48 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 93 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 13 / 30",
              "totalStr": "Tot: 29 / 50",
              "grade": "B",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 26 / 30",
              "totalStr": "Tot: 44 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 90 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 90 / 100",
              "grade": "O",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 50 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 16,
      "branchRank": 4
  },
  {
      "rollNo": "231371028005",
      "name": "KAJAL",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 7.29,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.29
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 22 / 50",
              "totalStr": "Tot: 40 / 75",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 63 / 100",
              "totalStr": "Tot: 93 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 69 / 100",
              "totalStr": "Tot: 109 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 56 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 63 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 16 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 51 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 17,
      "branchRank": 6
  },
  {
      "rollNo": "231371028008",
      "name": "MEHAK RAJPUT",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 7.21,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.43
          },
          {
              "sem": 6,
              "sgpa": 7.0
          }
      ],
      "currentSemSubjects": [
          {
              "code": "PHYSIOLOGICAL",
              "name": "CONTROL SYSTEM MODELING",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 92 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MICROCONTROLLER",
              "name": "AND ITS APPLICATION",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 42 / 100",
              "totalStr": "Tot: 86 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "BIOMEDICAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "THERAPEUTIC",
              "name": "INSTRUMENTS",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "MEDICAL",
              "name": "IMAGING TECHNIQUES",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: A / 50",
              "totalStr": "Tot: 20 / 75",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "BIOMECHANICS",
              "name": "(ELECTIVE-II)",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 42 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "PCSM",
              "name": "LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 66 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 45 / 50",
              "totalStr": "Tot: 66 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "BIOMEDICAL",
              "name": "DIGITAL SIGNAL PROCESSING LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 42 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "BME-6010",
              "name": "SEMINAR",
              "internalStr": "Int: 60 / 75",
              "externalStr": "-",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 18,
      "branchRank": 7
  },
  {
      "rollNo": "231351139008",
      "name": "HARSHITA VERMA",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.2,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 6.39
          },
          {
              "sem": 4,
              "sgpa": 8.1
          },
          {
              "sem": 5,
              "sgpa": 7.1
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 78 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 22 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 79 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 15 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 13 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 19,
      "branchRank": 8,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 24 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 48 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 70 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 53 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 34 / 40",
                  "externalStr": "Ext: 52 / 60",
                  "totalStr": "Tot: 86 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 30 / 40",
                  "externalStr": "Ext: 49 / 60",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 32 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 24 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 22 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 22 / 30",
                  "totalStr": "Tot: 36 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 15 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 13 / 20",
                  "externalStr": "Ext: 23 / 30",
                  "totalStr": "Tot: 36 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231391034006",
      "name": "DARSHAN",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 7.0,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 45 / 100",
              "totalStr": "Tot: 82 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 81 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 16 / 30",
              "totalStr": "Tot: 31 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 20,
      "branchRank": 5
  },
  {
      "rollNo": "231351139015",
      "name": "VISHAL SINGH",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 7.35,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 7.83
          },
          {
              "sem": 4,
              "sgpa": 7.7
          },
          {
              "sem": 5,
              "sgpa": 6.95
          },
          {
              "sem": 6,
              "sgpa": 6.9
          }
      ],
      "currentSemSubjects": [
          {
              "code": "ELECTRICAL",
              "name": "MACHINES",
              "internalStr": "Int: 23 / 50",
              "externalStr": "Ext: 42 / 100",
              "totalStr": "Tot: 65 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "EIE-602",
              "name": "MICROCONTROLLER",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "COMMUNICATION",
              "name": "ENGINEERING",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 42 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "DIGITAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "EIE-605",
              "name": "SEMINAR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "COMMUNICATION",
              "name": "LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DSP",
              "name": "LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 21,
      "branchRank": 9,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 65 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 34 / 40",
                  "externalStr": "Ext: 51 / 60",
                  "totalStr": "Tot: 85 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 47 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 65 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 33 / 40",
                  "externalStr": "Ext: 38 / 60",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 36 / 100",
                  "totalStr": "Tot: 75 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 26 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 23 / 30",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "PROCESS",
                  "name": "PROCESS DYNAMICS AND CONTROL (DEPARTMENTAL ELECTIVE -I)",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MACHINES",
                  "internalStr": "Int: 23 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 65 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION ENGINEERING",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL SIGNAL PROCESSING",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SEMINAR",
                  "name": "SEMINAR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMMUNICATION",
                  "name": "COMMUNICATION LAB",
                  "internalStr": "Int: 17 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROCONTROLLER",
                  "name": "MICROCONTROLLER LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DSP",
                  "name": "DSP LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139013",
      "name": "SUNDARAM",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 6.92,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 6.56
          },
          {
              "sem": 4,
              "sgpa": 7.35
          },
          {
              "sem": 5,
              "sgpa": 6.85
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 46 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 23 / 50",
              "externalStr": "Ext: 56 / 100",
              "totalStr": "Tot: 79 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 28 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 85 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 88 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 22,
      "branchRank": 10,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 74 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 75 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 34 / 40",
                  "externalStr": "Ext: 54 / 60",
                  "totalStr": "Tot: 88 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 25 / 40",
                  "externalStr": "Ext: 50 / 60",
                  "totalStr": "Tot: 75 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 32 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 23 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 39 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 15 / 20",
                  "externalStr": "Ext: 23 / 30",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231391034007",
      "name": "DHEERENDRA SAHU",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 6.72,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.4
          },
          {
              "sem": 6,
              "sgpa": 6.05
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 38 / 100",
              "totalStr": "Tot: 72 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 87 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 43 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 87 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 87 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 49 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 23,
      "branchRank": 6
  },
  {
      "rollNo": "231391034010",
      "name": "HARSHITA SINGH",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 6.65,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.65
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 81 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 84 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 74 / 150",
              "grade": "C",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 42 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 46 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 24,
      "branchRank": 7
  },
  {
      "rollNo": "231391034004",
      "name": "ANKUR SHARMA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 6.3,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.05
          },
          {
              "sem": 6,
              "sgpa": 6.55
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 31 / 50",
              "externalStr": "Ext: 44 / 100",
              "totalStr": "Tot: 75 / 150",
              "grade": "B",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 55 / 100",
              "totalStr": "Tot: 100 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 31 / 50",
              "externalStr": "Ext: 46 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 44 / 100",
              "totalStr": "Tot: 81 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 20 / 30",
              "totalStr": "Tot: 34 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 13 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 34 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 18 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 90 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 90 / 100",
              "grade": "O",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 25,
      "branchRank": 8
  },
  {
      "rollNo": "231391034020",
      "name": "RAHUL KUMAR",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 6.3,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.35
          },
          {
              "sem": 6,
              "sgpa": 7.25
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 26 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 82 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 20 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 75 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 75 / 100",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 47 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 26,
      "branchRank": 9
  },
  {
      "rollNo": "231371028006",
      "name": "KALPANA",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 6.24,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.24
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 82 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 13 / 25",
              "externalStr": "Ext: 22 / 50",
              "totalStr": "Tot: 35 / 75",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 25 / 50",
              "externalStr": "Ext: 41 / 100",
              "totalStr": "Tot: 66 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 45 / 100",
              "totalStr": "Tot: 83 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 15 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 49 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 50 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 30 / 50",
              "totalStr": "Tot: 48 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 49 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 32 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 27,
      "branchRank": 8
  },
  {
      "rollNo": "231391034009",
      "name": "HARSHITA MANORIYA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 6.15,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.15
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 100 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 25 / 100",
              "totalStr": "Tot: 59 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 42 / 50",
              "totalStr": "Tot: 64 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 22 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 66 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 40 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 48 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 28,
      "branchRank": 10
  },
  {
      "rollNo": "231371028004",
      "name": "CHHAVI AHIRWAR",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 5.95,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.95
          }
      ],
      "currentSemSubjects": [
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION",
              "internalStr": "Int: 23 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 73 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "MICROPROCESSORS",
              "name": "AND ITS APPLICATIONS",
              "internalStr": "Int: 13 / 25",
              "externalStr": "Ext: 21 / 50",
              "totalStr": "Tot: 34 / 75",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 64 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ENGINEERING",
              "name": "AND MANAGERIAL ECONOMICS",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 44 / 100",
              "totalStr": "Tot: 83 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "BIOMATERIALS",
              "name": "(ELECTIVE-I)",
              "internalStr": "Int: 15 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 51 / 75",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "BIOMEDICAL",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 49 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSORS",
              "name": "LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 50 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "LINEAR",
              "name": "INTEGRATED CIRCUIT LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 30 / 50",
              "totalStr": "Tot: 44 / 75",
              "grade": "B",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS LAB",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 49 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 32 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 29,
      "branchRank": 9
  },
  {
      "rollNo": "231391034017",
      "name": "NAYAN NAYAK",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 5.53,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 4.45
          },
          {
              "sem": 6,
              "sgpa": 6.6
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 27 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 42 / 100",
              "totalStr": "Tot: 74 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 52 / 100",
              "totalStr": "Tot: 85 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 87 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 80 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 80 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 49 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 30,
      "branchRank": 11
  },
  {
      "rollNo": "231391034008",
      "name": "DHRUV RAJ SHARMA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 5.5,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.7
          },
          {
              "sem": 6,
              "sgpa": 7.3
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 88 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 89 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 89 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 48 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 31,
      "branchRank": 12
  },
  {
      "rollNo": "231391034024",
      "name": "SHIVAM SHIVHARE",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 5.5,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 4.25
          },
          {
              "sem": 6,
              "sgpa": 6.75
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 83 / 150",
              "grade": "B",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 27 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 85 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 43 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 45 / 100",
              "totalStr": "Tot: 89 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 12 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 18 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 80 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 80 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 32,
      "branchRank": 13
  },
  {
      "rollNo": "231391034018",
      "name": "NIKHIL KUMAR DISORIYA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 5.28,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 4.35
          },
          {
              "sem": 6,
              "sgpa": 6.2
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 86 / 150",
              "grade": "B",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 23 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 72 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 56 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 41 / 100",
              "totalStr": "Tot: 76 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 10 / 20",
              "externalStr": "Ext: 19 / 30",
              "totalStr": "Tot: 29 / 50",
              "grade": "B",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: A / 100",
              "externalStr": "-",
              "totalStr": "Tot: 0 / 100",
              "grade": "F",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 33,
      "branchRank": 14
  },
  {
      "rollNo": "231371028011",
      "name": "RAJ PAL",
      "branch": "BME",
      "batch": "2025-26",
      "cgpa": 5.24,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.24
          },
          {
              "sem": 6,
              "sgpa": 5.24
          }
      ],
      "currentSemSubjects": [
          {
              "code": "PHYSIOLOGICAL",
              "name": "CONTROL SYSTEM MODELING",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: A / 100",
              "totalStr": "Tot: 30 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MICROCONTROLLER",
              "name": "AND ITS APPLICATION",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 37 / 100",
              "totalStr": "Tot: 69 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "BIOMEDICAL",
              "name": "SIGNAL PROCESSING",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "THERAPEUTIC",
              "name": "INSTRUMENTS",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "MEDICAL",
              "name": "IMAGING TECHNIQUES",
              "internalStr": "Int: 13 / 25",
              "externalStr": "Ext: 46 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "BIOMECHANICS",
              "name": "(ELECTIVE-II)",
              "internalStr": "Int: 14 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 50 / 75",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "PCSM",
              "name": "LAB",
              "internalStr": "Int: 13 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "MICROCONTROLLER",
              "name": "LAB",
              "internalStr": "Int: 12 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "BIOMEDICAL",
              "name": "DIGITAL SIGNAL PROCESSING LAB",
              "internalStr": "Int: 15 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "BME-6010",
              "name": "SEMINAR",
              "internalStr": "Int: 40 / 75",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 75",
              "grade": "B",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 34,
      "branchRank": 10
  },
  {
      "rollNo": "231351139016",
      "name": "ABHISHEK AHIRWAR",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 5.53,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 4.28
          },
          {
              "sem": 4,
              "sgpa": 7.25
          },
          {
              "sem": 5,
              "sgpa": 5.05
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 80 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 26 / 100",
              "totalStr": "Tot: 56 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 30 / 100",
              "totalStr": "Tot: 54 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 63 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 41 / 100",
              "totalStr": "Tot: 78 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 37 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 13 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 35,
      "branchRank": 11,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: A / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 40 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 21 / 100",
                  "totalStr": "Tot: 63 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 68 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 33 / 40",
                  "externalStr": "Ext: 52 / 60",
                  "totalStr": "Tot: 85 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 23 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 25 / 40",
                  "externalStr": "Ext: 50 / 60",
                  "totalStr": "Tot: 75 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 26 / 100",
                  "totalStr": "Tot: 56 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 24 / 50",
                  "externalStr": "Ext: 30 / 100",
                  "totalStr": "Tot: 54 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 23 / 30",
                  "totalStr": "Tot: 37 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 13 / 20",
                  "externalStr": "Ext: 22 / 30",
                  "totalStr": "Tot: 35 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231351139012",
      "name": "SACHIN KUMAR",
      "branch": "EIE",
      "batch": "2024-25 / 2025-26",
      "cgpa": 5.17,
      "semesters": [
          {
              "sem": 3,
              "sgpa": 3.22
          },
          {
              "sem": 4,
              "sgpa": 7.5
          },
          {
              "sem": 5,
              "sgpa": 4.8
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 38 / 100",
              "totalStr": "Tot: 71 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 26 / 50",
              "externalStr": "Ext: 23 / 100",
              "totalStr": "Tot: 49 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "EIE-505",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 47 / 100",
              "totalStr": "Tot: 82 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "CONTROL",
              "name": "SYSTEM - I LAB",
              "internalStr": "Int: 15 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "INSTRUMENTATION",
              "name": "LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MICROPROCESSOR",
              "name": "LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 36,
      "branchRank": 12,
      "semesterSubjects": {
          "3": [
              {
                  "code": "MATHEMATICS-III",
                  "name": "MATHEMATICS-III",
                  "internalStr": "Int: A / 50",
                  "externalStr": "Ext: 02 / 100",
                  "totalStr": "Tot: 2 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF ELECTRONICS DEVICES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 76 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 74 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "ELECTROMAGNETIC",
                  "name": "ELECTROMAGNETIC FIELD THEORY",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 23 / 100",
                  "totalStr": "Tot: 54 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "FUNDAMENTALS",
                  "name": "FUNDAMENTALS OF NETWORK ANALYSIS AND SYNTHESIS",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 17 / 100",
                  "totalStr": "Tot: 49 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGNEERING LAB - I",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "DIGITAL",
                  "name": "DIGITAL ELECTRONICS LAB - I",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "PCB",
                  "name": "PCB AND ELECTONICS WORKSHOP",
                  "internalStr": "Int: 32 / 40",
                  "externalStr": "Ext: 48 / 60",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "4": [
              {
                  "code": "DATA",
                  "name": "DATA STRUCTURE (SCIENCE BASED OPEN ELECTIVE)",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 88 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS CIRCUITS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "SIGNALS",
                  "name": "SIGNALS AND SYSTEMS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER AND SIGNAL CONDITIONING",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "ELECTRICAL",
                  "name": "ELECTRICAL MEASUREMENTS AND MEASURING INSTRUMENTS",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ELECTRONICS",
                  "name": "ELECTRONICS ENGINEERING LAB-II",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "TRANSDUCER",
                  "name": "TRANSDUCER LAB",
                  "internalStr": "Int: 34 / 40",
                  "externalStr": "Ext: 49 / 60",
                  "totalStr": "Tot: 83 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "MEASUREMENT",
                  "name": "MEASUREMENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 30 / 50",
                  "totalStr": "Tot: 49 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 35 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 38 / 100",
                  "totalStr": "Tot: 71 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 26 / 50",
                  "externalStr": "Ext: 23 / 100",
                  "totalStr": "Tot: 49 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 24 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 77 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 22 / 30",
                  "totalStr": "Tot: 36 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 15 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 22 / 30",
                  "totalStr": "Tot: 36 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231391034013",
      "name": "KUMAR SIDDHARTH",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 4.75,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 4.75
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 28 / 50",
              "externalStr": "Ext: 20 / 100",
              "totalStr": "Tot: 48 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 98 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 24 / 100",
              "totalStr": "Tot: 57 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 23 / 25",
              "externalStr": "Ext: 44 / 50",
              "totalStr": "Tot: 67 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 43 / 50",
              "totalStr": "Tot: 64 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 20 / 30",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 18 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 37,
      "branchRank": 15
  },
  {
      "rollNo": "231391034005",
      "name": "ANSH UPADHYAY",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 4.22,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.55
          },
          {
              "sem": 6,
              "sgpa": 4.9
          }
      ],
      "currentSemSubjects": [
          {
              "code": "OPERATIONS",
              "name": "RESEARCH",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 78 / 150",
              "grade": "B",
              "credit": 4
          },
          {
              "code": "ME-602",
              "name": "I.C. ENGINE",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 37 / 100",
              "totalStr": "Tot: 77 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "FLUID",
              "name": "MACHINERY",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 46 / 100",
              "totalStr": "Tot: 84 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 39 / 100",
              "totalStr": "Tot: 75 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 36 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "FLUID",
              "name": "MACHINERY LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 20 / 30",
              "totalStr": "Tot: 34 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "REFRIGERATION",
              "name": "AND AIR CONDITIONING LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 23 / 30",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ME-609",
              "name": "SEMINAR",
              "internalStr": "Int: 85 / 100",
              "externalStr": "-",
              "totalStr": "Tot: 85 / 100",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 38,
      "branchRank": 16
  },
  {
      "rollNo": "231391034012",
      "name": "KOMAL SINGH",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 3.5,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.5
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 33 / 100",
              "totalStr": "Tot: 71 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 41 / 100",
              "totalStr": "Tot: 79 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 24 / 50",
              "externalStr": "Ext: 08 / 100",
              "totalStr": "Tot: 32 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 43 / 100",
              "totalStr": "Tot: 82 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 10 / 100",
              "totalStr": "Tot: 39 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 61 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 22 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 17 / 20",
              "externalStr": "Ext: 21 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 39,
      "branchRank": 17
  },
  {
      "rollNo": "231391034015",
      "name": "LUCKY VARMA",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 3.3,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.3
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 26 / 100",
              "totalStr": "Tot: 63 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 20 / 100",
              "totalStr": "Tot: 52 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 27 / 50",
              "externalStr": "Ext: 41 / 100",
              "totalStr": "Tot: 68 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 19 / 100",
              "totalStr": "Tot: 53 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 17 / 30",
              "totalStr": "Tot: 32 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 15 / 20",
              "externalStr": "Ext: 19 / 30",
              "totalStr": "Tot: 34 / 50",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 40,
      "branchRank": 18
  },
  {
      "rollNo": "231391034002",
      "name": "ABHAY KUMAR",
      "branch": "ME",
      "batch": "2025-26",
      "cgpa": 1.35,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 1.35
          }
      ],
      "currentSemSubjects": [
          {
              "code": "INDUSTRIAL",
              "name": "ECONOMICS AND PRINCIPLES OF MANAGEMENT",
              "internalStr": "Int: A / 50",
              "externalStr": "Ext: 43 / 100",
              "totalStr": "Tot: 43 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MACHINE",
              "name": "DESIGN-I",
              "internalStr": "Int: 22 / 50",
              "externalStr": "Ext: 03 / 100",
              "totalStr": "Tot: 25 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE",
              "internalStr": "Int: 0 / 50",
              "externalStr": "Ext: 00 / 100",
              "totalStr": "Tot: 0 / 150",
              "grade": "F",
              "credit": 3
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II",
              "internalStr": "Int: 21 / 50",
              "externalStr": "Ext: 40 / 100",
              "totalStr": "Tot: 61 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER",
              "internalStr": "Int: 01 / 50",
              "externalStr": "Ext: 15 / 100",
              "totalStr": "Tot: 16 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "MACHINE",
              "name": "DESIGN - I LAB",
              "internalStr": "Int: 16 / 25",
              "externalStr": "Ext: 30 / 50",
              "totalStr": "Tot: 46 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "DYNAMICS",
              "name": "OF MACHINE LAB",
              "internalStr": "Int: 10 / 25",
              "externalStr": "Ext: 10 / 50",
              "totalStr": "Tot: 20 / 75",
              "grade": "F",
              "credit": 1
          },
          {
              "code": "MANUFACTURING",
              "name": "SCIENCE - II LAB",
              "internalStr": "Int: 8 / 20",
              "externalStr": "Ext: 14 / 30",
              "totalStr": "Tot: 22 / 50",
              "grade": "C",
              "credit": 1
          },
          {
              "code": "HEAT",
              "name": "AND MASS TRANSFER LAB",
              "internalStr": "Int: 4 / 20",
              "externalStr": "Ext: 06 / 30",
              "totalStr": "Tot: 10 / 50",
              "grade": "F",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 3
          }
      ],
      "rank": 41,
      "branchRank": 19
  },
  {
      "rollNo": "241351139501",
      "name": "VANSHIKA AHIRWAR",
      "branch": "EIE",
      "batch": "2025-26",
      "cgpa": 7.4,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.4
          }
      ],
      "currentSemSubjects": [
          {
              "code": "POWER",
              "name": "ELECTRONICS",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 45 / 100",
              "totalStr": "Tot: 83 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "INTEGRATED",
              "name": "CIRCUITS",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "CONTROL",
              "name": "SYSTEMS-I",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 128 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "INDUSTRIAL",
              "name": "INSTRUMENTATION AND MEASUREMENT",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 69 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "MICROPROCESSOR",
              "name": "MICROPROCESSOR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 56 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "IC-LAB",
              "name": "INTEGRATED CIRCUITS LAB",
              "internalStr": "Int: 16 / 20",
              "externalStr": "Ext: 25 / 30",
              "totalStr": "Tot: 41 / 50",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "CS-LAB",
              "name": "CONTROL SYSTEM - I LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "INSTR-LAB",
              "name": "INSTRUMENTATION LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "MP-LAB",
              "name": "MICROPROCESSOR LAB",
              "internalStr": "Int: 14 / 20",
              "externalStr": "Ext: 24 / 30",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ],
      "rank": 42,
      "branchRank": 13,
      "semesterSubjects": {
          "5": [
              {
                  "code": "POWER",
                  "name": "POWER ELECTRONICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 45 / 100",
                  "totalStr": "Tot: 83 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEMS-I",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 128 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL INSTRUMENTATION AND MEASUREMENT",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INTEGRATED",
                  "name": "INTEGRATED CIRCUITS LAB",
                  "internalStr": "Int: 16 / 20",
                  "externalStr": "Ext: 25 / 30",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "CONTROL",
                  "name": "CONTROL SYSTEM - I LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "INSTRUMENTATION",
                  "name": "INSTRUMENTATION LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "MICROPROCESSOR",
                  "name": "MICROPROCESSOR LAB",
                  "internalStr": "Int: 14 / 20",
                  "externalStr": "Ext: 24 / 30",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      }
  },
  {
      "rollNo": "231381030001",
      "name": "ABHINAV KUMAR",
      "fatherName": "AKHILESH KUMAR",
      "motherName": "SONI DEVI",
      "enrollNo": "BU0230601622",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.59,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 8.19
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 73 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 108 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 31 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 52 / 100",
              "totalStr": "Tot: 87 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 73 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030002",
      "name": "ABHISHEK KUMAR",
      "fatherName": "SWAMISHARAN",
      "motherName": "INDU DEVI",
      "enrollNo": "BU0230595701",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.93,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.86
          },
          {
              "sem": 6,
              "sgpa": 8.0
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 31 / 100",
                  "totalStr": "Tot: 71 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 51 / 70",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 51 / 70",
              "totalStr": "Tot: 71 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030003",
      "name": "ADITYA GUPTA",
      "fatherName": "DEENANATH GUPTA",
      "motherName": "GYANTI DEVI",
      "enrollNo": "BU0230596002",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.43,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.71
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 45 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 27 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 23 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 77 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 27 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 111 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 60 / 100",
              "totalStr": "Tot: 96 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 23 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 77 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030004",
      "name": "AKSHANSH PATHAK",
      "fatherName": "SARVAN KUMAR PATHAK",
      "motherName": "KUSUM PATHAK",
      "enrollNo": "BU0230596086",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 5.93,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.71
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 20 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 69 / 150",
                  "grade": "C",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 18 / 100",
                  "totalStr": "Tot: 48 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 25 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 65 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 19 / 100",
                  "totalStr": "Tot: 57 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 20 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 63 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 11 / 25",
                  "externalStr": "Ext: 20 / 50",
                  "totalStr": "Tot: 31 / 75",
                  "grade": "C",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 16 / 25",
                  "externalStr": "Ext: 31 / 50",
                  "totalStr": "Tot: 47 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 50 / 70",
                  "totalStr": "Tot: 70 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 96 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 74 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 53 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 69 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 83 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 95 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 96 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 74 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 53 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030005",
      "name": "ALAN",
      "fatherName": "AFZAL",
      "motherName": "NAZMA BANO",
      "enrollNo": "BU0230596364",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.54,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.9
          },
          {
              "sem": 6,
              "sgpa": 8.19
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 96 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 22 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 96 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 22 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 78 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030006",
      "name": "ALISHA ALI SYED",
      "fatherName": "SYED TAHIR ALI",
      "motherName": "HAZRA KHATOON",
      "enrollNo": "BU0230595918",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.26,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.19
          },
          {
              "sem": 6,
              "sgpa": 8.33
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 47 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 126 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 132 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 77 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 86 / 100",
              "totalStr": "Tot: 126 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 79 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 92 / 100",
              "totalStr": "Tot: 132 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 25 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 77 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030007",
      "name": "ALOK KUMAR DUBEY",
      "fatherName": "HARI GOVIND DUBEY",
      "motherName": "KIRAN DEVI",
      "enrollNo": "BU0230596361",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.81,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.62
          },
          {
              "sem": 6,
              "sgpa": 8.0
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 75 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 25 / 50",
                  "externalStr": "Ext: 30 / 100",
                  "totalStr": "Tot: 55 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 72 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 72 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030008",
      "name": "AMAN KHAN",
      "fatherName": "IMRAN KHAN",
      "motherName": "FAREEMAN",
      "enrollNo": "BU0230596196",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 5.19,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 2.48
          },
          {
              "sem": 6,
              "sgpa": 7.9
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 07 / 100",
                  "totalStr": "Tot: 38 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 27 / 50",
                  "externalStr": "Ext: 17 / 100",
                  "totalStr": "Tot: 44 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 05 / 100",
                  "totalStr": "Tot: 41 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 22 / 100",
                  "totalStr": "Tot: 59 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 85 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 133 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 18 / 30",
                  "externalStr": "Ext: 50 / 70",
                  "totalStr": "Tot: 68 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 32 / 50",
                  "totalStr": "Tot: 51 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 111 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 58 / 100",
              "totalStr": "Tot: 88 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 18 / 30",
              "externalStr": "Ext: 50 / 70",
              "totalStr": "Tot: 68 / 100",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 32 / 50",
              "totalStr": "Tot: 51 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030009",
      "name": "ANIKET YADAV",
      "fatherName": "RAMLAL YADAV",
      "motherName": "RITA YADAV",
      "enrollNo": "BU0230618694",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.47,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 7.95
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 84 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 133 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 17 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 72 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 31 / 50",
                  "totalStr": "Tot: 48 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 35 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 86 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 17 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 72 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 31 / 50",
              "totalStr": "Tot: 48 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 35 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030010",
      "name": "ANISHA YADAV",
      "fatherName": "HARENDRA YADAV",
      "motherName": "RANJANA YADAV",
      "enrollNo": "BU0230595940",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.03,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.48
          },
          {
              "sem": 6,
              "sgpa": 8.57
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 87 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 135 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 79 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 87 / 100",
              "totalStr": "Tot: 121 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 83 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 135 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 26 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 80 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030011",
      "name": "ARMAN ANSARI",
      "fatherName": "NASIR ANSARI",
      "motherName": "SHABANA NISHA",
      "enrollNo": "BU0230595737",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.62,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.14
          },
          {
              "sem": 6,
              "sgpa": 8.1
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 83 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 86 / 100",
                  "totalStr": "Tot: 126 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 15 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 67 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 31 / 50",
              "externalStr": "Ext: 92 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 86 / 100",
              "totalStr": "Tot: 126 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 89 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 15 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 67 / 100",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030012",
      "name": "ARPITA VERMA",
      "fatherName": "UTTAM KUMAR  VERMA",
      "motherName": "SUSHMA VERMA",
      "enrollNo": "BU0230595984",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.03,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.57
          },
          {
              "sem": 6,
              "sgpa": 8.48
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 75 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 93 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 87 / 100",
                  "totalStr": "Tot: 126 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 133 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 75 / 100",
              "totalStr": "Tot: 111 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 87 / 100",
              "totalStr": "Tot: 126 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030013",
      "name": "ASHISH KUMAR YADAV",
      "fatherName": "AKHILESH KUMAR YADAV",
      "motherName": "KUSUM YADAV",
      "enrollNo": "BU0230595983",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.81,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.19
          },
          {
              "sem": 6,
              "sgpa": 8.43
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 29 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 72 / 150",
                  "grade": "C",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 34 / 100",
                  "totalStr": "Tot: 67 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 17 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 34 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 121 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 17 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 71 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 34 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030014",
      "name": "ASHISH SWAIN",
      "fatherName": "KRISHNA CHANDRA SWAIN",
      "motherName": "MAMTA SWAIN",
      "enrollNo": "BU0230596172",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.91,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.43
          },
          {
              "sem": 6,
              "sgpa": 8.38
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 134 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 73 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 39 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 92 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 134 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 73 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030015",
      "name": "ASHUTOSH KUMAR PANDEY",
      "fatherName": "MAHESH PANDEY",
      "motherName": "KUMKUM PANDEY",
      "enrollNo": "BU0230595690",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.44,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.38
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 48 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030016",
      "name": "STUDENT 0016",
      "fatherName": "",
      "motherName": "",
      "enrollNo": "",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.25,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030017",
      "name": "CHHOTELAL CHAUHAN",
      "fatherName": "TULASEE CHAUHAN",
      "motherName": "HEWANTI DEVI",
      "enrollNo": "BU0230596449",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.47,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.81
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 84 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 135 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 23 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 77 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 53 / 100",
              "totalStr": "Tot: 93 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 135 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 23 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 77 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030018",
      "name": "DEEPAK MAURYA",
      "fatherName": "BRIJESH KUMAR MAURYA",
      "motherName": "DINESH KUMARI",
      "enrollNo": "BU0230595718",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.08,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.67
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030019",
      "name": "DIKSHA PATHAK",
      "fatherName": "ASHWANI KUMAR PATHAK",
      "motherName": "SAROJ PATHAK",
      "enrollNo": "BU0230596006",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.16,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.19
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 46 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 25 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 98 / 100",
                  "totalStr": "Tot: 139 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 24 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 39 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 25 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 98 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 61 / 100",
              "totalStr": "Tot: 97 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 98 / 100",
              "totalStr": "Tot: 139 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 24 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 79 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 39 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030020",
      "name": "DIVYANSHU SHARMA",
      "fatherName": "PRAMOD KUMAR SHARMA",
      "motherName": "SARVESH SHARMA",
      "enrollNo": "BU0230596052",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.99,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.48
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 74 / 150",
                  "grade": "C",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030021",
      "name": "GARV KUMAR SHARMA",
      "fatherName": "BHAVESH KUMAR SHARMA",
      "motherName": "GEETA SHARMA",
      "enrollNo": "BU0230595681",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.58,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.67
          },
          {
              "sem": 6,
              "sgpa": 8.48
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 77 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 127 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 127 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030022",
      "name": "HARSH KUMAR",
      "fatherName": "MAHENDRA KUMAR SINGH",
      "motherName": "NEETU SINGH",
      "enrollNo": "BU0230618428",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.55,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.86
          },
          {
              "sem": 6,
              "sgpa": 8.24
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 77 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 83 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 89 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030023",
      "name": "HARSHITA SINGH",
      "fatherName": "SUSHIL KUMAR SINGH",
      "motherName": "PUSHPA SINGH",
      "enrollNo": "BU0230596071",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.12,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.86
          },
          {
              "sem": 6,
              "sgpa": 8.38
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 61 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 93 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 98 / 100",
                  "totalStr": "Tot: 138 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 54 / 100",
              "totalStr": "Tot: 94 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 98 / 100",
              "totalStr": "Tot: 138 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030024",
      "name": "HIMANSHU",
      "fatherName": "MANOJ KUMAR",
      "motherName": "MAMATA",
      "enrollNo": "BU0230595793",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.86,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.67
          },
          {
              "sem": 6,
              "sgpa": 8.05
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 76 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 25 / 100",
                  "totalStr": "Tot: 63 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 81 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 93 / 100",
                  "totalStr": "Tot: 132 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 19 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 111 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 49 / 100",
              "totalStr": "Tot: 87 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 132 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 19 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 71 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030025",
      "name": "JAY RAJPUT",
      "fatherName": "HARIOM",
      "motherName": "KAUSHALYA DEVI",
      "enrollNo": "BU0230628616",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.29,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.62
          },
          {
              "sem": 6,
              "sgpa": 7.95
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 71 / 150",
                  "grade": "C",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 75 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 46 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 93 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 134 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 18 / 30",
                  "externalStr": "Ext: 51 / 70",
                  "totalStr": "Tot: 69 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 79 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 62 / 100",
              "totalStr": "Tot: 101 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 93 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 134 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 18 / 30",
              "externalStr": "Ext: 51 / 70",
              "totalStr": "Tot: 69 / 100",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030026",
      "name": "JAYDEEP MAHAJAN",
      "fatherName": "VINOD KUMAR MAHAJAN",
      "motherName": "MEENA MAHAJAN",
      "enrollNo": "BU0230595682",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.45,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.38
          },
          {
              "sem": 6,
              "sgpa": 8.52
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 48 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 80 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 88 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 127 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 18 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 70 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 88 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 121 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 121 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 99 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 127 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 18 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 70 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030027",
      "name": "KRISHNA AGARWAL",
      "fatherName": "SAURABH AGARWAL",
      "motherName": "NIDHI AGARWAL",
      "enrollNo": "BU0230595680",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.97,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.52
          },
          {
              "sem": 6,
              "sgpa": 8.43
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 132 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 131 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 34 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 132 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 131 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 26 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 79 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 34 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030028",
      "name": "MAHAK GUPTA",
      "fatherName": "SANJAY GUPTA",
      "motherName": "RANJNA GUPTA",
      "enrollNo": "BU0230595936",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.21,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.86
          },
          {
              "sem": 6,
              "sgpa": 8.57
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 100 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 96 / 100",
                  "totalStr": "Tot: 134 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 95 / 100",
                  "totalStr": "Tot: 134 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 96 / 100",
              "totalStr": "Tot: 134 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 95 / 100",
              "totalStr": "Tot: 134 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 26 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 80 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 59 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030029",
      "name": "STUDENT 0029",
      "fatherName": "",
      "motherName": "",
      "enrollNo": "",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.25,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030030",
      "name": "MUKUL KUMAR SAHU",
      "fatherName": "SANJAY KUMAR SAHU",
      "motherName": "SANDHYA SAHU",
      "enrollNo": "BU0230595687",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.47,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.0
          },
          {
              "sem": 6,
              "sgpa": 8.95
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 87 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 88 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 96 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 87 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 88 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 96 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 27 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 80 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 21 / 25",
              "externalStr": "Ext: 41 / 50",
              "totalStr": "Tot: 62 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030031",
      "name": "MUSKAN KUMARI",
      "fatherName": "MURARI LAL",
      "motherName": "MANJU DEVI",
      "enrollNo": "BU0230595937",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.16,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.0
          },
          {
              "sem": 6,
              "sgpa": 8.33
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 126 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 85 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 75 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 108 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 92 / 100",
              "totalStr": "Tot: 126 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 75 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030032",
      "name": "NANCY SINGH",
      "fatherName": "SUNIL KUMAR SINGH",
      "motherName": "SUNITA SINGH",
      "enrollNo": "BU0230463832",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.97,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.33
          },
          {
              "sem": 6,
              "sgpa": 8.62
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 87 / 100",
                  "totalStr": "Tot: 127 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 20 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 74 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 79 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 33 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 87 / 100",
              "totalStr": "Tot: 127 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 67 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 20 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 74 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030033",
      "name": "NIKHIL VERMA",
      "fatherName": "PARVAT SINGH",
      "motherName": "NEELAM VERMA",
      "enrollNo": "BU0230595691",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.08,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.67
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 29 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 69 / 150",
                  "grade": "C",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 59 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030034",
      "name": "NISHANT RAJPUT",
      "fatherName": "BRIJESH KUMAR",
      "motherName": "REKHA RANI",
      "enrollNo": "BU0230595715",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.91,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.67
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 32 / 50",
                  "externalStr": "Ext: 83 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 133 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 19 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 71 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 32 / 50",
              "externalStr": "Ext: 83 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 63 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 19 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 71 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030035",
      "name": "PIYUSH RISHI",
      "fatherName": "LALARAM",
      "motherName": "RAMDEVI",
      "enrollNo": "BU0230602497",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.91,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.48
          },
          {
              "sem": 6,
              "sgpa": 8.33
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 120 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 112 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 24 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 77 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 120 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 112 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 57 / 100",
              "totalStr": "Tot: 99 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 24 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 77 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030036",
      "name": "PIYUSH YADAV",
      "fatherName": "RAMDULAR YADAV",
      "motherName": "SAVITA  YADAV",
      "enrollNo": "BU0230595684",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.97,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.62
          },
          {
              "sem": 6,
              "sgpa": 8.33
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 56 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 63 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 98 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 24 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 77 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 98 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 24 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 77 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 42 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030037",
      "name": "PRACHI GUPTA",
      "fatherName": "VINDHYAVASINI GUPTA",
      "motherName": "SADHANA GUPTA",
      "enrollNo": "BU0230596214",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.09,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.76
          },
          {
              "sem": 6,
              "sgpa": 8.43
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 82 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 71 / 100",
                  "totalStr": "Tot: 113 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 96 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 81 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 77 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 82 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 71 / 100",
              "totalStr": "Tot: 113 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 50 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 96 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 25 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 81 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 45 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030038",
      "name": "PRAVEEN DUBEY",
      "fatherName": "UMESH DUBEY",
      "motherName": "REKHA DUBEY",
      "enrollNo": "BU0230596051",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.86,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.38
          },
          {
              "sem": 6,
              "sgpa": 8.33
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 98 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 88 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 95 / 100",
                  "totalStr": "Tot: 135 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 105 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 88 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 102 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 95 / 100",
              "totalStr": "Tot: 135 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 25 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 78 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 39 / 50",
              "totalStr": "Tot: 58 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030039",
      "name": "RAJ SINGH",
      "fatherName": "MANOJ SINGH",
      "motherName": "MADHUBALA SINGH",
      "enrollNo": "BU0230596448",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.81,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 8.62
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 57 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 42 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 89 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 79 / 100",
                  "totalStr": "Tot: 124 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 133 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 119 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 89 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 79 / 100",
              "totalStr": "Tot: 124 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 133 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 26 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 82 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 60 / 75",
              "grade": "A+",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030040",
      "name": "RITIK SINGH",
      "fatherName": "BRIJESH KUMAR SINGH",
      "motherName": "SAROJ DEVI",
      "enrollNo": "BU0230595677",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.83,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.48
          },
          {
              "sem": 6,
              "sgpa": 8.19
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 102 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 70 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 118 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 47 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 22 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 53 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 45 / 50",
              "externalStr": "Ext: 70 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 118 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 47 / 100",
              "totalStr": "Tot: 86 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 22 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 53 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030041",
      "name": "ROHIT SHARMA",
      "fatherName": "BHAGWAN DASS",
      "motherName": "SAKANDYA DEVI",
      "enrollNo": "BU0230595689",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.83,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.52
          },
          {
              "sem": 6,
              "sgpa": 8.14
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 105 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 97 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 58 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 73 / 100",
                  "totalStr": "Tot: 107 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 88 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 86 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 99 / 100",
                  "totalStr": "Tot: 137 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 74 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 33 / 50",
                  "totalStr": "Tot: 52 / 75",
                  "grade": "B+",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 73 / 100",
              "totalStr": "Tot: 107 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 88 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 51 / 100",
              "totalStr": "Tot: 86 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 99 / 100",
              "totalStr": "Tot: 137 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 74 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 33 / 50",
              "totalStr": "Tot: 52 / 75",
              "grade": "B+",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030042",
      "name": "RUP NARAYAN",
      "fatherName": "MANMOHAN",
      "motherName": "RAJA BAI",
      "enrollNo": "BU0230596954",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.13,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.76
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 28 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 49 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 41 / 100",
                  "totalStr": "Tot: 79 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030043",
      "name": "STUDENT 0043",
      "fatherName": "",
      "motherName": "",
      "enrollNo": "",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.25,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.0
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030044",
      "name": "SACHIN YADAV",
      "fatherName": "SHIV SHANKAR YADAV",
      "motherName": "RAJKALI YADAV",
      "enrollNo": "BU0230595705",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.29,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.05
          },
          {
              "sem": 6,
              "sgpa": 7.52
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 50 / 100",
                  "totalStr": "Tot: 87 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 79 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 42 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 29 / 50",
                  "externalStr": "Ext: 74 / 100",
                  "totalStr": "Tot: 103 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 116 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 59 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 93 / 100",
                  "totalStr": "Tot: 132 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 15 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 70 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 35 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 29 / 50",
              "externalStr": "Ext: 74 / 100",
              "totalStr": "Tot: 103 / 150",
              "grade": "B+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 35 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 116 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 31 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 90 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 59 / 100",
              "totalStr": "Tot: 89 / 150",
              "grade": "B",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 132 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 15 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 70 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 35 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 44 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030045",
      "name": "SAHIL KUMAR",
      "fatherName": "MANOJ KUMAR",
      "motherName": "VINEETA DEVI",
      "enrollNo": "BU0230625457",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 4.67,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 3.24
          },
          {
              "sem": 6,
              "sgpa": 6.1
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 25 / 50",
                  "externalStr": "Ext: 27 / 100",
                  "totalStr": "Tot: 52 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 26 / 50",
                  "externalStr": "Ext: 10 / 100",
                  "totalStr": "Tot: 36 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 18 / 100",
                  "totalStr": "Tot: 53 / 150",
                  "grade": "F",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 40 / 100",
                  "totalStr": "Tot: 78 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 51 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: A / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 64 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 110 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 30 / 50",
                  "externalStr": "Ext: 44 / 100",
                  "totalStr": "Tot: 74 / 150",
                  "grade": "C",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 91 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 15 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 68 / 100",
                  "grade": "B+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 43 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: A / 50",
              "externalStr": "Ext: 64 / 100",
              "totalStr": "Tot: 64 / 150",
              "grade": "F",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 110 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 42 / 50",
              "externalStr": "Ext: 72 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 30 / 50",
              "externalStr": "Ext: 44 / 100",
              "totalStr": "Tot: 74 / 150",
              "grade": "C",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 91 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 15 / 30",
              "externalStr": "Ext: 53 / 70",
              "totalStr": "Tot: 68 / 100",
              "grade": "B+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 43 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030046",
      "name": "SANIDHYA SHUKLA",
      "fatherName": "VINAY KUMAR SHUKLA",
      "motherName": "ARCHANA SHUKLA",
      "enrollNo": "BU0230595688",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 6.58,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 5.67
          },
          {
              "sem": 6,
              "sgpa": 7.5
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 43 / 100",
                  "totalStr": "Tot: 83 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 33 / 50",
                  "externalStr": "Ext: A / 100",
                  "totalStr": "Tot: 33 / 150",
                  "grade": "F",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 96 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 46 / 100",
                  "totalStr": "Tot: 82 / 150",
                  "grade": "B",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 60 / 100",
                  "totalStr": "Tot: 99 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 60 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 46 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "Roll",
                  "name": "Roll No.",
                  "internalStr": "Int: : / Course",
                  "externalStr": "Ext: * / :",
                  "totalStr": "-",
                  "grade": "B+",
                  "credit": 3
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "Roll",
              "name": "Roll No.",
              "internalStr": "Int: : / Course",
              "externalStr": "Ext: * / :",
              "totalStr": "-",
              "grade": "B+",
              "credit": 3
          }
      ]
  },
  {
      "rollNo": "231381030047",
      "name": "SATENDRA",
      "fatherName": "NIRAJ",
      "motherName": "GUDIYA DEVI",
      "enrollNo": "BU0230596003",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.4,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 6.81
          },
          {
              "sem": 6,
              "sgpa": 8.0
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 35 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 89 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 31 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 85 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 51 / 100",
                  "totalStr": "Tot: 94 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 54 / 100",
                  "totalStr": "Tot: 90 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 53 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 25 / 30",
                  "externalStr": "Ext: 53 / 70",
                  "totalStr": "Tot: 78 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 78 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 34 / 50",
                  "externalStr": "Ext: 80 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 76 / 100",
                  "totalStr": "Tot: 115 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 92 / 100",
                  "totalStr": "Tot: 130 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 76 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 41 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 78 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 34 / 50",
              "externalStr": "Ext: 80 / 100",
              "totalStr": "Tot: 114 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 76 / 100",
              "totalStr": "Tot: 115 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 55 / 100",
              "totalStr": "Tot: 91 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 92 / 100",
              "totalStr": "Tot: 130 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 55 / 70",
              "totalStr": "Tot: 76 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 38 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 41 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030048",
      "name": "SATYAM SINGH",
      "fatherName": "JITENDRA SINGH",
      "motherName": "RAMITA DEVI",
      "enrollNo": "BU0230595692",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.27,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.86
          },
          {
              "sem": 6,
              "sgpa": 8.67
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 68 / 100",
                  "totalStr": "Tot: 114 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 69 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 67 / 100",
                  "totalStr": "Tot: 111 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 95 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 64 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 39 / 50",
                  "totalStr": "Tot: 58 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 80 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 44 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 85 / 100",
                  "totalStr": "Tot: 121 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 90 / 100",
                  "totalStr": "Tot: 129 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 122 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 106 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 93 / 100",
                  "totalStr": "Tot: 132 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 21 / 30",
                  "externalStr": "Ext: 54 / 70",
                  "totalStr": "Tot: 75 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 20 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 19 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 55 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 121 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 90 / 100",
              "totalStr": "Tot: 129 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 122 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 63 / 100",
              "totalStr": "Tot: 106 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 93 / 100",
              "totalStr": "Tot: 132 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 21 / 30",
              "externalStr": "Ext: 54 / 70",
              "totalStr": "Tot: 75 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 20 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 56 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 19 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 55 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030049",
      "name": "SHIVA",
      "fatherName": "KAILASH KUMAR",
      "motherName": "GEETA DEVI",
      "enrollNo": "BU0230595686",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 7.88,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 7.29
          },
          {
              "sem": 6,
              "sgpa": 8.48
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 48 / 100",
                  "totalStr": "Tot: 88 / 150",
                  "grade": "B",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 55 / 100",
                  "totalStr": "Tot: 91 / 150",
                  "grade": "B+",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 45 / 50",
                  "externalStr": "Ext: 63 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 52 / 100",
                  "totalStr": "Tot: 92 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 62 / 100",
                  "totalStr": "Tot: 101 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 21 / 25",
                  "externalStr": "Ext: 41 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 38 / 50",
                  "totalStr": "Tot: 56 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 27 / 30",
                  "externalStr": "Ext: 55 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 45 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 36 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 117 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 85 / 100",
                  "totalStr": "Tot: 123 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 41 / 50",
                  "externalStr": "Ext: 84 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 38 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 39 / 50",
                  "externalStr": "Ext: 97 / 100",
                  "totalStr": "Tot: 136 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 22 / 30",
                  "externalStr": "Ext: 52 / 70",
                  "totalStr": "Tot: 74 / 100",
                  "grade": "A",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 18 / 25",
                  "externalStr": "Ext: 36 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 40 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 36 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 117 / 150",
              "grade": "A",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 123 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 41 / 50",
              "externalStr": "Ext: 84 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 38 / 50",
              "externalStr": "Ext: 66 / 100",
              "totalStr": "Tot: 104 / 150",
              "grade": "B+",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 39 / 50",
              "externalStr": "Ext: 97 / 100",
              "totalStr": "Tot: 136 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 22 / 30",
              "externalStr": "Ext: 52 / 70",
              "totalStr": "Tot: 74 / 100",
              "grade": "A",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 18 / 25",
              "externalStr": "Ext: 36 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 40 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  },
  {
      "rollNo": "231381030050",
      "name": "SHIWANI DEVI",
      "fatherName": "RAKESH SINGH",
      "motherName": "RENU SINGH",
      "enrollNo": "BU0230596263",
      "branch": "CSE",
      "batch": "2025-26",
      "cgpa": 8.54,
      "semesters": [
          {
              "sem": 5,
              "sgpa": 8.19
          },
          {
              "sem": 6,
              "sgpa": 8.9
          }
      ],
      "semesterSubjects": {
          "5": [
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS",
                  "internalStr": "Int: 47 / 50",
                  "externalStr": "Ext: 72 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN",
                  "internalStr": "Int: 42 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 119 / 150",
                  "grade": "A",
                  "credit": 4
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY",
                  "internalStr": "Int: 48 / 50",
                  "externalStr": "Ext: 77 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "PRINCIPLE",
                  "name": "PRINCIPLE OF PROGRAMMING LANGUAGES",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 61 / 100",
                  "totalStr": "Tot: 104 / 150",
                  "grade": "B+",
                  "credit": 3
              },
              {
                  "code": "INDUSTRIAL",
                  "name": "INDUSTRIAL ECONOMICS AND PRINCIPLES OF MANAGEMENT",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 66 / 100",
                  "totalStr": "Tot: 109 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER GRAPHICS LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 42 / 50",
                  "totalStr": "Tot: 64 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "COMPILER",
                  "name": "COMPILER DESIGN LAB",
                  "internalStr": "Int: 22 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 62 / 75",
                  "grade": "A+",
                  "credit": 1
              },
              {
                  "code": "WEB",
                  "name": "WEB TECHNOLOGY LAB",
                  "internalStr": "Int: 28 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 84 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 49 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ],
          "6": [
              {
                  "code": "OPRATING",
                  "name": "OPRATING SYSTEM",
                  "internalStr": "Int: 46 / 50",
                  "externalStr": "Ext: 81 / 100",
                  "totalStr": "Tot: 127 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK",
                  "internalStr": "Int: 37 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 131 / 150",
                  "grade": "A+",
                  "credit": 4
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INTELLEGENT",
                  "internalStr": "Int: 40 / 50",
                  "externalStr": "Ext: 85 / 100",
                  "totalStr": "Tot: 125 / 150",
                  "grade": "A+",
                  "credit": 3
              },
              {
                  "code": "OPERATIONAL",
                  "name": "OPERATIONAL RESEARCH",
                  "internalStr": "Int: 43 / 50",
                  "externalStr": "Ext: 65 / 100",
                  "totalStr": "Tot: 108 / 150",
                  "grade": "A",
                  "credit": 3
              },
              {
                  "code": "ORGANISATIONAL",
                  "name": "ORGANISATIONAL BEHAVIOUR",
                  "internalStr": "Int: 44 / 50",
                  "externalStr": "Ext: 94 / 100",
                  "totalStr": "Tot: 138 / 150",
                  "grade": "O",
                  "credit": 3
              },
              {
                  "code": "OPERATING",
                  "name": "OPERATING SYSTEM LAB",
                  "internalStr": "Int: 26 / 30",
                  "externalStr": "Ext: 56 / 70",
                  "totalStr": "Tot: 82 / 100",
                  "grade": "A+",
                  "credit": 2
              },
              {
                  "code": "COMPUTER",
                  "name": "COMPUTER NETWORK LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 37 / 50",
                  "totalStr": "Tot: 54 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "ARTIFICIAL",
                  "name": "ARTIFICIAL INELLEGENT LAB",
                  "internalStr": "Int: 17 / 25",
                  "externalStr": "Ext: 40 / 50",
                  "totalStr": "Tot: 57 / 75",
                  "grade": "A",
                  "credit": 1
              },
              {
                  "code": "GENERAL",
                  "name": "GENERAL PROFECIENCY",
                  "internalStr": "-",
                  "externalStr": "-",
                  "totalStr": "Tot: 38 / 50",
                  "grade": "A",
                  "credit": 0
              }
          ]
      },
      "currentSemSubjects": [
          {
              "code": "OPRATING",
              "name": "OPRATING SYSTEM",
              "internalStr": "Int: 46 / 50",
              "externalStr": "Ext: 81 / 100",
              "totalStr": "Tot: 127 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK",
              "internalStr": "Int: 37 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 131 / 150",
              "grade": "A+",
              "credit": 4
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INTELLEGENT",
              "internalStr": "Int: 40 / 50",
              "externalStr": "Ext: 85 / 100",
              "totalStr": "Tot: 125 / 150",
              "grade": "A+",
              "credit": 3
          },
          {
              "code": "OPERATIONAL",
              "name": "OPERATIONAL RESEARCH",
              "internalStr": "Int: 43 / 50",
              "externalStr": "Ext: 65 / 100",
              "totalStr": "Tot: 108 / 150",
              "grade": "A",
              "credit": 3
          },
          {
              "code": "ORGANISATIONAL",
              "name": "ORGANISATIONAL BEHAVIOUR",
              "internalStr": "Int: 44 / 50",
              "externalStr": "Ext: 94 / 100",
              "totalStr": "Tot: 138 / 150",
              "grade": "O",
              "credit": 3
          },
          {
              "code": "OPERATING",
              "name": "OPERATING SYSTEM LAB",
              "internalStr": "Int: 26 / 30",
              "externalStr": "Ext: 56 / 70",
              "totalStr": "Tot: 82 / 100",
              "grade": "A+",
              "credit": 2
          },
          {
              "code": "COMPUTER",
              "name": "COMPUTER NETWORK LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 37 / 50",
              "totalStr": "Tot: 54 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "ARTIFICIAL",
              "name": "ARTIFICIAL INELLEGENT LAB",
              "internalStr": "Int: 17 / 25",
              "externalStr": "Ext: 40 / 50",
              "totalStr": "Tot: 57 / 75",
              "grade": "A",
              "credit": 1
          },
          {
              "code": "GENERAL",
              "name": "GENERAL PROFECIENCY",
              "internalStr": "-",
              "externalStr": "-",
              "totalStr": "Tot: 38 / 50",
              "grade": "A",
              "credit": 0
          }
      ]
  }
];
