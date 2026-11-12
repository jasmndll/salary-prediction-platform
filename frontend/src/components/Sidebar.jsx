import React from 'react';
import { 
  BarChart3, 
  Table, 
  PieChart, 
  Sparkles,
  Layers,
  Activity,
  Cpu
} from 'lucide-react';

export default function Sidebar({ 
  currentTab, 
  setCurrentTab, 
  sidebarOpen, 
  setSidebarOpen,
  onOpenPredictor 
}) {
  const navItems = [
    { 
      id: "analytics", 
      label: "Analytics & Overview", 
      icon: BarChart3, 
      description: "Model summary & salary metrics",
      badge: "Page 1" 
    },
    { 
      id: "datatable", 
      label: "Data Table", 
      icon: Table, 
      description: "15.9K developer records",
      badge: null 
    },
    { 
      id: "statistics", 
      label: "Statistics & Diagnostics", 
      icon: PieChart, 
      description: "Country errors & feature importance",
      badge: null 
    },
  ];

  const handleItemClick = (id) => {
    setCurrentTab(id);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 border-r transition-transform duration-300 ease-in-out
        border-slate-200 bg-white dark:border-dark-border dark:bg-dark-sidebar
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Brand Header */}
        <div className="flex h-16 items-center gap-3 px-4 border-b border-slate-200 dark:border-dark-border">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-xs tracking-tight text-slate-900 dark:text-white truncate">
              Employee Salary
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold -mt-0.5 truncate">
              Prediction Model
            </span>
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
          
          <div className="space-y-1">
            <div className="px-3 text-[10px] font-bold tracking-wider text-slate-400 dark:text-gray-500 uppercase">
              Core Modules
            </div>
            <div className="mt-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group text-left
                      ${isActive 
                        ? 'bg-emerald-50 text-emerald-800 dark:bg-[#212328] dark:text-white shadow-xs border border-emerald-200/60 dark:border-dark-border' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-[#1a1b20]'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' 
                          : 'bg-slate-100 dark:bg-dark-card text-slate-500 dark:text-gray-400 group-hover:text-slate-700 dark:group-hover:text-gray-200'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold truncate">{item.label}</span>
                        <span className="text-[10px] text-slate-400 dark:text-gray-500 truncate -mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </div>

                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Model Engine Action */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-dark-border/60">
            <div className="px-3 text-[10px] font-bold tracking-wider text-slate-400 dark:text-gray-500 uppercase">
              Inference Tool
            </div>
            <button
              onClick={onOpenPredictor}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 border border-dashed border-slate-300 dark:border-dark-border transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Cpu className="h-4 w-4 text-emerald-500" />
                <span className="font-semibold">Quantile Estimator</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded">
                p25-p75
              </span>
            </button>
          </div>

        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-200 dark:border-dark-border bg-slate-50/70 dark:bg-[#101114]/50">
          <div className="rounded-xl p-3 bg-white dark:bg-dark-card/60 border border-slate-200 dark:border-dark-border shadow-xs flex items-center justify-between">
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-slate-800 dark:text-gray-200 truncate">
                Stack Overflow 2025
              </span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                15,940 Survey Cohort
              </span>
            </div>
            <button 
              onClick={onOpenPredictor}
              className="shrink-0 ml-2 px-2.5 py-1 text-[11px] font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-sm transition-all"
            >
              Predict
            </button>
          </div>
        </div>

      </aside>
    </>
  );
}
