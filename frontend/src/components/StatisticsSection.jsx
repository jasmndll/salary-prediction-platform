import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Globe2, 
  Code2, 
  Award, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { 
  COUNTRY_METRICS, 
  TOP_LANGUAGES, 
  MODEL_SPECS 
} from '../data/mockData';

export default function StatisticsSection({ onOpenPredictor }) {
  return (
    <div className="space-y-8">
      
      {/* 1. Header Banner */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-50 via-white to-white dark:from-emerald-950/40 dark:via-dark-card dark:to-dark-card border border-emerald-200 dark:border-emerald-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 mb-2">
            <Award className="h-3.5 w-3.5" />
            Stack Overflow 2025 Model Benchmark
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Statistical Insights & Model Diagnostics</h2>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 max-w-2xl">
            Empirical compensation breakdown across 15,940 salaried developers, 6 benchmark countries, and 15 major programming languages evaluated against our final Quantile Regression pipeline.
          </p>
        </div>
        <button
          onClick={onOpenPredictor}
          className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-500/20 w-fit"
        >
          Test Quantile Predictor
        </button>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="rounded-2xl p-5 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Model Test MAE</span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$25,921.45</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
            <span>+43.5% vs Median Baseline</span>
          </div>
        </div>

        <div className="rounded-2xl p-5 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Test R² Score</span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">0.5976</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
            <span>Explains ~60% variance</span>
          </div>
        </div>

        <div className="rounded-2xl p-5 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Empirical Coverage</span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">46.20%</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
            <span>Well-calibrated to nominal 50%</span>
          </div>
        </div>

        <div className="rounded-2xl p-5 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Cleaned Sample Size</span>
          <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">15,940</div>
          <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-1">
            <span>22 curated feature columns</span>
          </div>
        </div>

      </div>

      {/* 3. Focus Country Benchmarks */}
      <div className="rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Focus Country Compensation & Coverage</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Test evaluation results from notebook 07</p>
          </div>
          <span className="text-xs text-slate-500 dark:text-gray-400">N = 3,188 Test Rows</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {COUNTRY_METRICS.map((c, i) => (
            <div key={i} className="rounded-xl p-4 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[150px]">{c.country}</span>
                </div>
                <span className="text-[10px] text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                  n = {c.count}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 dark:text-gray-400">Median Salary</span>
                <div className="text-xl font-bold text-slate-900 dark:text-white">${c.median.toLocaleString()}</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-dark-border text-[11px]">
                <span className="text-slate-500 dark:text-gray-400">MAE: <b className="text-slate-800 dark:text-gray-200">${c.mae.toLocaleString()}</b></span>
                <span className="text-slate-500 dark:text-gray-400">Coverage: <b className="text-emerald-600 dark:text-emerald-400">{c.coverage}</b></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Top Programming Languages Pay & Frequency */}
      <div className="rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Top 15 Programming Languages Compensation</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Extracted from LanguageHaveWorkedWith (Section 15 of EDA)</p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-2 py-0.5 rounded">
            Filtered Cohort
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {TOP_LANGUAGES.map((lang, idx) => (
            <div key={idx} className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono text-slate-400 dark:text-gray-500 w-5">#{idx + 1}</span>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{lang.name}</div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-400">{lang.count.toLocaleString()} developers</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">${lang.median.toLocaleString()}</span>
                <div className="text-[9px] text-slate-400 dark:text-gray-500">Median</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
