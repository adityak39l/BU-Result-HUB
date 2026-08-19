'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  GraduationCap, Award, BarChart3, Users, BookOpen, Calculator, 
  Search, Menu, X, Sun, Moon 
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Sync Theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('bu_theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('bu_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: GraduationCap },
    { href: '/result', label: 'Results', icon: Search },
    { href: '/leaderboard', label: 'Leaderboard', icon: Award },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/compare', label: 'Compare', icon: Users },
    { href: '/subjects', label: 'Subjects', icon: BookOpen },
    { href: '/twin', label: 'Twin', icon: Users, special: true },
    { href: '/tools/cgpa', label: 'CGPA Calc', icon: Calculator },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800/80 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Brand Logo & Title (#68c2e3 Sky Blue) */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#68c2e3] to-sky-600 flex items-center justify-center text-slate-950 font-black text-base sm:text-xl shadow-md shadow-[#68c2e3]/20 group-hover:scale-105 transition-transform">
            BU
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 dark:text-white">
                RESULT<span className="text-[#68c2e3]">HUB</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#68c2e3]/10 text-[#68c2e3] border border-[#68c2e3]/30">
                IET B.Tech
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium hidden md:block">Bundelkhand University, Jhansi</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#68c2e3]/15 text-[#68c2e3] border border-[#68c2e3]/30 shadow-sm'
                    : link.special
                    ? 'text-[#68c2e3] bg-[#68c2e3]/10 border border-[#68c2e3]/30 hover:bg-[#68c2e3]/20 hover:text-[#68c2e3]'
                    : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
                {link.special && <span className="text-[9px] font-black bg-[#68c2e3] text-slate-950 px-1 rounded uppercase">New</span>}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action Toolbar (Cleaned without branch dropdown) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-[#68c2e3] flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Theme"
            title="Switch Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Search Button Link */}
          <Link
            href="/result"
            className="w-8 h-8 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#68c2e3] to-sky-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 active:scale-95 transition-all"
            title="Search Results"
          >
            <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Search</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-gray-200 flex items-center justify-center hover:text-[#68c2e3] active:scale-95 transition-all"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down App Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-gray-800 bg-white/98 dark:bg-navy-950/98 backdrop-blur-2xl px-3 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Theme Switcher in Mobile Drawer */}
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-between text-xs font-bold">
            <span className="text-slate-500 dark:text-gray-400">THEME PREFERENCE</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 text-[11px] font-extrabold text-[#68c2e3] bg-[#68c2e3]/10 px-2.5 py-1 rounded border border-[#68c2e3]/20"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-xs font-bold transition-all border ${
                    isActive
                      ? 'bg-[#68c2e3]/15 text-[#68c2e3] border-[#68c2e3]/40 shadow-sm'
                      : 'bg-slate-50 dark:bg-gray-900/60 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-gray-800 hover:bg-slate-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#68c2e3]" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
