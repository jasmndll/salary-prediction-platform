import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer({ onOpenPredictor }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="mt-12 py-6 border-t border-slate-200 dark:border-dark-border text-xs text-slate-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© 2026 </span>
          <span className="font-semibold text-slate-900 dark:text-white">Employee Salary Prediction Model</span>
          <span> · Stack Overflow 2025 Intelligence</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#overview" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Overview</a>
          <a href="#dataset" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">15.9K Dataset</a>
          <a href="#models" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Quantile Models</a>
          <a href="https://github.com/jasmndll/salary-prediction-platform" target="_blank" rel="noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">GitHub Repo</a>
        </div>
      </footer>

      {/* Floating Action Buttons in bottom right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={onOpenPredictor}
          className="h-10 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl shadow-emerald-500/30 transition-transform hover:scale-105 flex items-center gap-1.5"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Predict Salary
        </button>
        <button
          onClick={scrollToTop}
          className="h-10 w-10 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 dark:bg-[#202227] dark:text-white dark:border-dark-border dark:hover:bg-[#2b2e35] shadow-xl flex items-center justify-center transition-all hover:scale-105"
          title="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
