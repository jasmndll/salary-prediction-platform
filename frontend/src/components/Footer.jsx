import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPredictor }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="mt-12 py-6 border-t border-slate-200 dark:border-dark-border text-xs text-slate-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© 2026 </span>
          <span className="font-semibold text-slate-900 dark:text-white">shadcn/studio</span>
          <span>, Made for better web design</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#license" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">License</a>
          <a href="#dashboards" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">More Dashboards</a>
          <a href="#docs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Documentation</a>
          <a href="#support" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Support</a>
        </div>
      </footer>

      {/* Floating Action Buttons in bottom right matching Image 4 & 5 */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={onOpenPredictor}
          className="h-10 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs hover:opacity-90 shadow-2xl transition-transform hover:scale-105 flex items-center gap-1.5"
        >
          Buy Now
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
