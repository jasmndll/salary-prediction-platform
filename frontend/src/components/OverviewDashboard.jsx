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
  CheckCircle2
} from 'lucide-react';
import { 
  STAT_CARDS, 
  TRANSACTION_OVERVIEW, 
  REPORT_STATS, 
  TOTAL_SALES, 
  EARNING_REPORT 
} from '../data/mockData';

export default function OverviewDashboard({ onOpenPredictor, onGoToDataTable }) {
  return (
    <div className="space-y-6">

      {/* 1. TOP STAT CARDS ROW (6 Cards matching Image 1 & 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        
        {/* Card 1: $88.5k -18% Total Profit with two-tone segmented pill bars */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white">$88.5k</span>
              <span className="text-xs font-semibold text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded">
                -18%
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Total Profit</p>
          </div>

          {/* Segmented Pill Bars matching reference */}
          <div className="flex items-end justify-between gap-1.5 h-24 mt-4 px-1">
            {[
              { teal: 35, purple: 25 },
              { teal: 50, purple: 35 },
              { teal: 25, purple: 45 },
              { teal: 65, purple: 30 },
              { teal: 40, purple: 40 },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-1 w-full h-full justify-end">
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

        {/* Card 2: Order Last week 124K +12.6% with bars */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Order</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400">Last week</p>
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
            <span className="text-base font-bold text-slate-900 dark:text-white">124K</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">+12.6%</span>
          </div>
        </div>

        {/* Card 3: Profit Last Month 624K +12.6% with green line */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Profit</span>
            <p className="text-xs text-slate-500 dark:text-gray-400">Last Month</p>
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
            <span className="text-base font-bold text-slate-900 dark:text-white">624K</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">+12.6%</span>
          </div>
        </div>

        {/* Card 4: User reach Last week 500 Visitors 32K +12% with radial gauge */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">User reach</span>
            <p className="text-xs text-slate-500 dark:text-gray-400">Last week</p>
          </div>

          {/* Circular Donut Gauge matching Image 1 (Pink) and Image 3 (Orange) */}
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
                strokeDashoffset="60"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-900 dark:text-white">500</span>
              <span className="text-[9px] text-slate-500 dark:text-gray-400">Visitors</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base font-bold text-slate-900 dark:text-white">32K</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">+12%</span>
          </div>
        </div>

        {/* Card 5: Total Income Last week $4,673 +25.2% with green dollar icon */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>

          <div className="my-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Total Income</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Last week</p>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">$4,673</div>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-2 py-0.5 rounded w-fit">
            <span>+25.2%</span>
          </div>
        </div>

        {/* Card 6: Total Expense Last month $1.28K -12.2% with blue/orange card icon */}
        <div className="rounded-2xl p-4 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-xl bg-amber-500/15 dark:bg-blue-500/15 flex items-center justify-center text-amber-600 dark:text-blue-400">
              <CreditCard className="h-5 w-5" />
            </div>
          </div>

          <div className="my-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Total Expense</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Last month</p>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">$1.28K</div>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-100 dark:text-rose-400 dark:bg-rose-500/10 px-2 py-0.5 rounded w-fit">
            <span>-12.2%</span>
          </div>
        </div>

      </div>


      {/* 2. MIDDLE ROW (Total Transaction, Report, Total Sales matching Image 1 & 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Middle Left (Col 5): Total Transaction Weekly overview */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Total Transaction</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Weekly overview</p>
            </div>
            <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Multi-month Column Bars matching reference */}
          <div className="flex items-end justify-between gap-3 h-52 pt-6 pb-2 px-2">
            {TRANSACTION_OVERVIEW.bars.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end flex-1">
                <span className="text-[11px] font-semibold text-slate-600 dark:text-gray-400">{item.val}K</span>
                <div 
                  className={`w-full max-w-[28px] rounded-lg transition-all duration-300 hover:opacity-90 ${
                    item.highlight 
                      ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-lg shadow-emerald-500/20' 
                      : 'bg-emerald-100 dark:bg-[#1b342b]'
                  }`}
                  style={{ height: `${(item.val / 55) * 100}%` }}
                />
                <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Center (Col 4): Report Last month transactions */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Report</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Last month transactions</p>
              <span className="text-xs font-semibold text-slate-700 dark:text-gray-300 mt-1 block">$23.4K</span>
            </div>
            <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="h-8 w-8 rounded-lg bg-amber-500/15 dark:bg-rose-500/15 flex items-center justify-center text-amber-600 dark:text-rose-400 mb-2">
                <DollarSign className="h-4 w-4" />
              </div>
              <span className="text-xs text-slate-500 dark:text-gray-400">This week</span>
              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">+82.46%</div>
            </div>

            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="h-8 w-8 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                <Wallet className="h-4 w-4" />
              </div>
              <span className="text-xs text-slate-500 dark:text-gray-400">This week</span>
              <div className="text-sm font-bold text-rose-500 dark:text-rose-400 mt-0.5">-24.8%</div>
            </div>
          </div>

          {/* Bottom Performance & View Report button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-dark-border">
            <div>
              <span className="text-xs text-slate-500 dark:text-gray-400">Performance</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">+94.13%</div>
            </div>
            <button 
              onClick={onGoToDataTable}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-dark-surface dark:hover:bg-dark-border dark:text-white transition-colors"
            >
              View Report
            </button>
          </div>
        </div>

        {/* Middle Right (Col 3): Total Sales $2,150.00 +5% */}
        <div className="lg:col-span-3 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Total sales</span>
            </div>
            <button 
              onClick={onGoToDataTable}
              className="px-2.5 py-1 text-xs rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-dark-surface dark:text-gray-300 dark:hover:text-white dark:border-dark-border"
            >
              Details
            </button>
          </div>

          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">$2,150.00</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">+5%</span>
            </div>
          </div>

          {/* Sparkline line graph */}
          <div className="h-16 w-full my-2">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <path
                d="M 5,30 L 20,15 L 35,22 L 50,8 L 65,18 L 80,12 L 95,2"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-between text-[10px] text-slate-400 dark:text-gray-500 mt-1">
              <span>11:00</span>
              <span>14:00</span>
              <span>17:00</span>
              <span>20:00</span>
            </div>
          </div>

          {/* Store breakdown */}
          <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-dark-border text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Online Store</span>
              </div>
              <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                <span>$20k</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">+12.6%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-slate-400 dark:bg-gray-500" />
                <span>Offline Store</span>
              </div>
              <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                <span>$12k</span>
                <span className="text-rose-500 dark:text-rose-400 text-[11px]">-4.2%</span>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* 3. BOTTOM ROW (Upgrade Plan / Predictor, Earning Report, Master Class matching Image 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Bottom Left (Col 4): Upgrade your plan / Quantile Model card */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Upgrade your plan</h3>
            <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
            To fully enjoy all the amazing features and benefits of our premium model pipeline.
          </p>

          {/* Platinum tier pill card matching reference */}
          <div className="my-5 rounded-xl p-4 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-slate-200 dark:bg-[#252830] flex items-center justify-center text-slate-700 dark:text-gray-200">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Platinum</div>
                <div className="text-[11px] text-slate-500 dark:text-gray-400">Last 6 months</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold text-slate-900 dark:text-white">$5,550<span className="text-xs font-normal text-slate-500 dark:text-gray-400">/Year</span></div>
            </div>
          </div>

          {/* Payment details with card badges */}
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 block mb-2">Payment details</span>
            <div className="rounded-xl p-3 bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-6 w-9 rounded bg-[#ea001b]/20 flex items-center justify-center font-bold text-[10px] text-rose-600 dark:text-orange-400">
                  MC
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-900 dark:text-white">Credit card</div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-400">5688 xxxx xxxx 2356</div>
                </div>
              </div>
              <span className="text-xs text-slate-600 dark:text-gray-400 px-2 py-0.5 rounded border border-slate-300 dark:border-dark-border">CVC</span>
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

        {/* Bottom Center (Col 4): Earning Report Weekly Earning overview */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Earning Report</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Weekly Earning overview</p>
            </div>
            <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Breakdown items matching reference */}
          <div className="space-y-4 my-6">
            
            {/* Net profit */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Net profit</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">Sales</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">$1,623</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> 20.3%
                </div>
              </div>
            </div>

            {/* Total income */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <DollarSign className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Total income</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">Sales, Affiliation</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">$5,600</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> 16.2%
                </div>
              </div>
            </div>

            {/* Total expense */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-rose-500/15 flex items-center justify-center text-rose-600 dark:text-rose-400">
                  <Wallet className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Total expense</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">ADVT, Operational</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">$3,200</div>
                <div className="text-[11px] text-rose-600 dark:text-rose-400 flex items-center justify-end gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> 10.5%
                </div>
              </div>
            </div>

          </div>

          <div className="pt-2 text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-between">
            <span>Model Calibration: 46.2% coverage</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Nominal 50.0%</span>
          </div>
        </div>

        {/* Bottom Right (Col 4): Design strategy master class card */}
        <div className="lg:col-span-4 rounded-2xl p-6 bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop" 
                alt="Instructor" 
                className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-300 dark:ring-gray-600" 
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Design strategy master class</h3>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">07 Jun 2025 at 10:00 PM</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Photo with 12 Dec Badge matching Image 2 */}
          <div className="relative my-4 rounded-xl overflow-hidden h-36 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-dark-border">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop" 
              alt="Class session" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute left-3 top-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-center border border-white/10">
              <span className="text-xs font-bold text-white block">12</span>
              <span className="text-[9px] text-gray-400 uppercase font-medium">Dec</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
              How to improve your next design's compensation value
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1 line-clamp-2">
              Empirical insights from the 2025 Developer Survey on high-value skills, cloud frameworks, and leadership roles.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
