'use client';
import { useState, useEffect } from 'react';
import { 
  Star, MessageSquareHeart, Send, X, CheckCircle2, 
  Sparkles, Loader2, User, GraduationCap, Calendar, Heart 
} from 'lucide-react';

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('CSE');
  const [year, setYear] = useState('3rd Year');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const ratingLabels = {
    1: '🙁 Needs Improvement',
    2: '😐 Fair',
    3: '🙂 Good',
    4: '😊 Very Good!',
    5: '🌟 Outstanding / Loved it!',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!feedback.trim()) {
      setError('Please write a short review or suggestion.');
      return;
    }

    setLoading(true);
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const payload = {
      timestamp,
      name: name.trim(),
      branch,
      year,
      rating,
      feedback: feedback.trim(),
    };

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9KENycxQszxLc9khFAU2AmMuDm0CB33hJhdodrlzJhALy60KG_qSYzsivD5p1qBhR/exec';

    try {
      // 1. Send directly to Google Sheet Webhook (Runs in real-time from browser)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 2. Send email notification directly via Web3Forms
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: 'a888c3a9-e2b2-4d56-82b4-367f082e0e5a',
            subject: `⭐ New Student Review (${rating}/5 Stars) - ${name.trim()} (${branch}, ${year})`,
            from_name: 'BU IET ResultHub Feedback',
            to_email: 'adityakverma945085@gmail.com',
            'Student Name': name.trim(),
            'Branch': branch,
            'Academic Year': year,
            'Star Rating': `${rating} / 5 Stars ${'⭐'.repeat(Number(rating) || 5)}`,
            'Feedback / Suggestion': feedback.trim(),
            'Submitted At (IST)': timestamp,
          }),
        });
      } catch (e) {
        console.warn('Email dispatch notice:', e);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setFeedback('');
    setRating(5);
    setSubmitted(false);
    setError('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Feedback & Reviews"
          className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-amber-400/40 hover:border-amber-400 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Subtle Glow Ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 group-hover:opacity-40 blur transition duration-300" />

          {/* Star Icon */}
          <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          </span>

          <span className="relative text-xs sm:text-sm font-bold tracking-tight text-slate-100 flex items-center gap-1.5">
            <span>Feedback</span>
            <span className="hidden sm:inline text-amber-300 font-semibold">& Reviews</span>
          </span>

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Click Outside to Close */}
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden z-10">
            {/* Top Glowing Header Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-[#68c2e3] to-emerald-500" />

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <MessageSquareHeart className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-black text-white tracking-tight">
                      Student Review & Feedback
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Aapka review BU IET ResultHub ko behtar banane mein madad karega! 🚀
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                /* Success View */
                <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-lg font-black text-white">Thank You, {name || 'Student'}! ⭐</h4>
                    <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                      Aapka feedback aur rating record ho gaya hai. Aapke support ke liye bahut-bahut shukriya!
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all shadow-md hover:scale-105"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                      {error}
                    </div>
                  )}

                  {/* 1. Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#68c2e3]" />
                      Student Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-[#68c2e3] focus:ring-1 focus:ring-[#68c2e3] text-xs text-slate-100 placeholder-slate-500 outline-none transition"
                    />
                  </div>

                  {/* 2. Branch & Year Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Branch */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <GraduationCap className="w-3 h-3 text-cyan-400" />
                        Branch
                      </label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-100 outline-none transition"
                      >
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EIE">EIE</option>
                        <option value="BME">BME</option>
                        <option value="ME">ME</option>
                        <option value="BTE">BTE</option>
                        <option value="FT">FT</option>
                        <option value="Other">Other Branch</option>
                      </select>
                    </div>

                    {/* Year */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-violet-400" />
                        Academic Year
                      </label>
                      <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-xs text-slate-100 outline-none transition"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Alumni / Passout">Passout / Alumni</option>
                      </select>
                    </div>
                  </div>

                  {/* 3. Star Rating */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Rating
                      </label>
                      <span className="text-[11px] font-bold text-amber-300">
                        {ratingLabels[hoverRating || rating]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= (hoverRating || rating);
                        return (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 rounded-lg hover:bg-slate-800/60 transition-transform active:scale-90"
                            aria-label={`Rate ${star} Stars`}
                          >
                            <Star
                              className={`w-6 h-6 transition-colors duration-150 ${
                                isFilled
                                  ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                                  : 'text-slate-600 hover:text-slate-400'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Feedback / Message */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                      <span>Review / Suggestion <span className="text-rose-400">*</span></span>
                      <span className="text-[10px] text-slate-500 font-normal">What did you like / What to improve?</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Website ka kaunsa feature sabse accha laga? Ya koi naya feature chahiye?"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-[#68c2e3] focus:ring-1 focus:ring-[#68c2e3] text-xs text-slate-100 placeholder-slate-500 outline-none resize-none transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Review...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
