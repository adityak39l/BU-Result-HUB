# Bundelkhand University (BU Jhansi) B.Tech Result Hub

A student-built academic results, leaderboards, and analytics platform for **Bundelkhand University (BU Jhansi)** covering all **7 B.Tech Branches**:
- Computer Science & Engineering (CSE)
- Electronics & Communication Engineering (ECE)
- Mechanical Engineering (ME)
- Civil Engineering (CE)
- Electrical Engineering (EE)
- Information Technology (IT)
- Biotechnology (BT)

---

## 🚀 Features

1. **Instant Search & Gazette Marksheets**: Look up student results by Roll Number or Name.
2. **Branch Leaderboards**: Real-time rank calculation and topper lists for all 7 branches.
3. **Analytics Dashboard**: Branch-wise CGPA performance curves and grade distribution statistics.
4. **Compare Students**: Side-by-side head-to-head SGPA trajectory comparison.
5. **Subject Difficulty Map**: Identify toughest & easiest subjects based on grade analytics.
6. **CGPA Calculator**: Interactive target SGPA and cumulative CGPA calculator.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, Lucide Icons, Recharts
- **Scraper Pipeline**: Python 3, Requests, BeautifulSoup4, pdfplumber, Pandas

---

## 💻 How to Run Locally

### 1. Install Node.js Dependencies & Start Web Application

Open your terminal in `E:\BU_RESULT_WEBSITE`:

```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. How to Run the Python Scraper

To fetch fresh results from the BU Jhansi examination portal (`exam.bujhansi.ac.in`):

```bash
# Navigate to scraper directory
cd scraper

# Install Python requirements
pip install -r requirements.txt

# Run Web Scraper for a range of roll numbers
python bu_scraper.py --start 210010501001 --end 210010501060

# Or parse a Gazette PDF file
python pdf_parser.py path/to/result_gazette.pdf
```
