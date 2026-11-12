import React from 'react';
import { 
  MoreVertical, 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard, 
  DollarSign, 
  Wallet, 
  TrendingUp, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { 
  STAT_CARDS, 
  EXPERIENCE_OVERVIEW, 
  CALIBRATION_STATS, 
  MODALITY_SALES, 
  FEATURE_IMPORTANCE 
} from '../data/mockData';

export default function OverviewDashboard({ onOpenPredictor, onGoToDataTable, onGoToStatistics }) {
  return (
    <div className="space-y-6">

      {/* 1. TOP STAT CARDS ROW (6 Cards matching Image 1 & 3, aligned with ML Project) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        
        {/* Card 1: $83.3k Overall Median Salary with two-tone segmented pill bars */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white">$83.3k</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Median
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Cohort Median</p>
          </div>

          {/* Segmented Pill Bars showing quartile density */}
          <div className="flex items-end justify-between gap-1.5 h-24 mt-4 px-1">
            {[
              { teal: 35, purple: 25 },
              { teal: 50, purple: 35 },
              { teal: 25, purple: 45 },
              { teal: 65, purple: 30 },
              { teal: 40, purple: 40 },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-1 w-full h-full justify-end" title={`Percentile Bucket ${i+1}`}>
                <div 
                  className="w-2.5 rounded-full bg-emerald-400 transition-all hover:opacity-80" 
                  style={{ height: `${bar.teal}%` }} 
                />
                <div 
                  className="w-2.5 rounded-full bg-purple-500 dark:bg-purple-500 light:bg-amber-500 transition-all hover:opacity-80" 
                  style={{ height: `${bar.purple}%` }} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Cleaned Cohort 15,940 with bars */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Cohort Size</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400">Cleaned v2</p>
          </div>

          {/* Vertical Bars: Blue in Dark mode, Orange in Light mode matching Image 3 */}
          <div className="flex items-end justify-between gap-1 h-20 my-2 px-1">
            {[45, 65, 85, 55, 90, 70, 50].map((h, i) => (
              <div 
                key={i} 
                className={`w-2.5 rounded-full transition-all hover:opacity-80 ${
                  i === 3 
                    ? 'bg-amber-400 dark:bg-blue-400' 
                    : 'bg-orange-500 dark:bg-blue-600'
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base font-bold text-slate-900 dark:text-white">15,940</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">22 Feat</span>
          </div>
        </div>

        {/* Card 3: Model R² Score 0.5976 with green line */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Model R² Score</span>
            <p className="text-xs text-slate-500 dark:text-gray-400">Test Evaluation</p>
          </div>

          {/* Line Chart SVG with glowing dots */}
          <div className="h-20 my-2 flex items-center">
            <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 50">
              <path
                d="M 5,42 Q 25,15 45,35 T 85,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="5" cy="42" r="3" fill="#10b981" />
              <circle cx="25" cy="20" r="3" fill="#10b981" />
              <circle cx="45" cy="35" r="3" fill="#10b981" />
              <circle cx="65" cy="22" r="3" fill="#10b981" />
              <circle cx="85" cy="10" r="3" fill="#10b981" />
            </svg>
          </div>

          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base font-bold text-slate-900 dark:text-white">0.5976</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">~60% R²</span>
          </div>
        </div>

        {/* Card 4: Coverage Rate 46.2% with radial gauge */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Coverage</span>
            <p className="text-xs text-slate-500 dark:text-gray-400">P25–P75 Range</p>
          </div>

          {/* Circular Donut Gauge matching Image 1 & 3 */}
          <div className="relative flex items-center justify-center h-20 my-2">
            <svg className="w-20 h-20 -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="30"
                fill="transparent"
                className="stroke-slate-100 dark:stroke-[#2a2c34]"
                strokeWidth="7"
              />
              <circle
                cx="40"
                cy="40"
                r="30"
                fill="transparent"
                className="stroke-amber-500 dark:stroke-[#f43f5e]"
                strokeWidth="7"
                strokeDasharray="188.4"
                strokeDashoffset="75"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-900 dark:text-white">46.2%</span>
              <span className="text-[9px] text-slate-500 dark:text-gray-400">Coverage</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base font-bold text-slate-900 dark:text-white">Nominal</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">50.0%</span>
          </div>
        </div>

        {/* Card 5: Remote Work Pay $100.0k with green dollar icon */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>

          <div className="my-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Remote Median</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">5,654 Developers</p>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">$100.0k</div>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-2 py-0.5 rounded w-fit">
            <span>+23.1% vs Hyb</span>
          </div>
        </div>

        {/* Card 6: Model Test MAE $25,921 with metric icon */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-xl bg-amber-500/15 dark:bg-blue-500/15 flex items-center justify-center text-amber-600 dark:text-blue-400">
              <Cpu className="h-5 w-5" />
            </div>
          </div>

          <div className="my-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Test MAE</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Quantile 0.50</p>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">$25,921</div>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-2 py-0.5 rounded w-fit">
            <span>-43.5% vs Base</span>
          </div>
        </div>

      </div>


      {/* 2. MIDDLE ROW (Salary Progression, Calibration Report, Work Modality Breakdown) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Middle Left (Col 5): Salary Progression by Experience */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {EXPERIENCE_OVERVIEW.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                {EXPERIENCE_OVERVIEW.subtitle}
              </p>
            </div>
            <button 
              onClick={onGoToStatistics}
              className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
              title="View Statistics"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Multi-month / Experience Column Bars matching reference */}
          <div className="flex items-end justify-between gap-3 h-52 pt-6 pb-2 px-2">
            {EXPERIENCE_OVERVIEW.bars.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end flex-1">
                <span className="text-[11px] font-semibold text-slate-600 dark:text-gray-400">${item.val}k</span>
                <div 
                  className={`w-full max-w-[28px] rounded-lg transition-all duration-300 hover:opacity-90 ${
                    item.highlight 
                      ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-lg shadow-emerald-500/20' 
                      : 'bg-emerald-100 dark:bg-[#1b342b]'
                  }`}
                  style={{ height: `${(item.val / 170) * 100}%` }}
                />
                <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Center (Col 4): Model Calibration & Validation Report */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {CALIBRATION_STATS.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                {CALIBRATION_STATS.subtitle}
              </p>
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300 mt-1 block">
                {CALIBRATION_STATS.amount}
              </span>
            </div>
            <button 
              onClick={onGoToStatistics}
              className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
              title="View Statistics"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="h-8 w-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="text-xs text-slate-500 dark:text-gray-400">{CALIBRATION_STATS.stat1.label}</span>
              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {CALIBRATION_STATS.stat1.value}
              </div>
              <span className="text-[10px] text-slate-400 dark:text-gray-500 block mt-0.5">
                {CALIBRATION_STATS.stat1.detail}
              </span>
            </div>

            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="h-8 w-8 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-xs text-slate-500 dark:text-gray-400">{CALIBRATION_STATS.stat2.label}</span>
              <div className="text-sm font-bold text-slate-800 dark:text-gray-200 mt-0.5">
                {CALIBRATION_STATS.stat2.value}
              </div>
              <span className="text-[10px] text-slate-400 dark:text-gray-500 block mt-0.5">
                {CALIBRATION_STATS.stat2.detail}
              </span>
            </div>
          </div>

          {/* Bottom Performance & View Diagnostics button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-dark-border">
            <div>
              <span className="text-xs text-slate-500 dark:text-gray-400">Coverage (P25–P75)</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">
                {CALIBRATION_STATS.performance}
              </div>
            </div>
            <button 
              onClick={onGoToStatistics}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-dark-surface dark:hover:bg-dark-border dark:text-white transition-colors"
            >
              View Diagnostics
            </button>
          </div>
        </div>

        {/* Middle Right (Col 3): Work Modality Pay Premium */}
        <div className="lg:col-span-3 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Work Modality</span>
            </div>
            <button 
              onClick={onGoToDataTable}
              className="px-2.5 py-1 text-xs rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-dark-surface dark:text-gray-300 dark:hover:text-white dark:border-dark-border"
            >
              Data Table
            </button>
          </div>

          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{MODALITY_SALES.amount}</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Remote +23%
              </span>
            </div>
          </div>

          {/* Sparkline line graph */}
          <div className="h-16 w-full my-2">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <path
                d="M 5,30 L 20,24 L 35,26 L 50,18 L 65,15 L 80,10 L 95,4"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-between text-[10px] text-slate-400 dark:text-gray-500 mt-1">
              <span>In-Person</span>
              <span>Hybrid</span>
              <span>Remote</span>
            </div>
          </div>

          {/* Modality breakdown */}
          <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-dark-border text-xs">
            {MODALITY_SALES.modalities.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                  <span className={`h-2 w-2 rounded-full ${
                    idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-blue-400' : 'bg-slate-400 dark:bg-gray-500'
                  }`} />
                  <span>{m.name}</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                  <span>{m.amount}</span>
                  <span className={`text-[10px] ${
                    idx === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                  }`}>
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* 3. BOTTOM ROW (Live Prediction Pipeline, Permutation Drivers, SO 2025 Findings) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Bottom Left (Col 4): Live Quantile Model Pipeline */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Quantile Salary Estimator</h3>
            <button 
              onClick={onOpenPredictor}
              className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
            Deploying 3 quantile regressors (p25, p50, p75) trained on log(salary) across 15,940 developers.
          </p>

          {/* Model info card matching reference layout */}
          <div className="my-5 rounded-xl p-4 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">HistGB Ensemble</div>
                <div className="text-[11px] text-slate-500 dark:text-gray-400">15,940 Survey Records</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                22<span className="text-xs font-normal text-slate-500 dark:text-gray-400"> Features</span>
              </div>
            </div>
          </div>

          {/* Predictor Feature Highlights */}
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 block mb-2">
              Top Permutation Drivers
            </span>
            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-6 w-9 rounded bg-emerald-500/20 flex items-center justify-center font-bold text-[10px] text-emerald-700 dark:text-emerald-400">
                  ML
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-900 dark:text-white">Country + Experience + Stack</div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-400">Explains 59.76% log-variance</div>
                </div>
              </div>
              <span className="text-xs text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded border border-slate-300 dark:border-dark-border">
                46.2% CI
              </span>
            </div>
          </div>

          <button
            onClick={onOpenPredictor}
            className="w-full mt-5 py-2.5 px-4 rounded-xl font-semibold text-xs bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Launch Live Salary Estimator
          </button>
        </div>

        {/* Bottom Center (Col 4): Permutation Feature Importance */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Key Salary Drivers</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Permutation Importance on Test Set</p>
            </div>
            <button 
              onClick={onGoToStatistics}
              className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Breakdown items matching reference */}
          <div className="space-y-4 my-6">
            
            {/* Country */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Globe2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.country.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">{FEATURE_IMPORTANCE.country.detail}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.country.score}</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> Dominant
                </div>
              </div>
            </div>

            {/* Work Exp */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.workExp.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">{FEATURE_IMPORTANCE.workExp.detail}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.workExp.score}</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> Seniority
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.languages.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">{FEATURE_IMPORTANCE.languages.detail}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">{FEATURE_IMPORTANCE.languages.score}</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> +$1,064 CV
                </div>
              </div>
            </div>

          </div>

          <div className="pt-2 text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-between">
            <span>Decision: CV gain $1,064 &gt; std $163</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">v2 Features Selected</span>
          </div>
        </div>

        {/* Bottom Right (Col 4): Stack Overflow 2025 Key Findings */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                SO
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Survey Insights & Trends</h3>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">Stack Overflow 2025 Developer Study</p>
              </div>
            </div>
            <button 
              onClick={onGoToStatistics}
              className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Photo with SO 2025 Badge */}
          <div className="relative my-4 rounded-xl overflow-hidden h-36 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-dark-border">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop" 
              alt="Developer engineering team" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute left-3 top-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-center border border-white/10">
              <span className="text-xs font-bold text-white block">2025</span>
              <span className="text-[9px] text-emerald-400 uppercase font-medium">SO</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
              Key Empirical Takeaways from 15,940 Developers
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1 line-clamp-2">
              US developers lead with a $150k median, followed by UK ($91.1k) and Germany ($87.0k). Modern languages (Rust, Go) provide a statistically validated CV gain over base features.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
