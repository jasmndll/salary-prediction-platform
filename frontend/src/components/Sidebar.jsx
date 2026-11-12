import React from 'react';
import { 
  Flame, 
  DollarSign, 
  Truck, 
  CheckSquare, 
  Megaphone, 
  BarChart3, 
  CreditCard, 
  ShoppingCart, 
  Package, 
  Layers, 
  Mail, 
  MessageSquare, 
  Kanban, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Wand2, 
  Table, 
  Box, 
  TrendingUp, 
  PieChart, 
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function Sidebar({ 
  currentTab, 
  setCurrentTab, 
  sidebarOpen, 
  setSidebarOpen,
  onOpenPredictor 
}) {
  const sections = [
    {
      title: "DASHBOARD & LAYOUTS",
      items: [
        { id: "overview", label: "Sales", icon: Flame, badge: null },
        { id: "finance", label: "Finance", icon: DollarSign, badge: null },
        { id: "logistics", label: "Logistics", icon: Truck, badge: null },
        { id: "productivity", label: "Productivity", icon: CheckSquare, badge: null },
        { id: "campaign", label: "Campaign", icon: Megaphone, badge: null },
        { id: "analytics", label: "Analytics", icon: BarChart3, badge: null },
        { id: "payments", label: "Payments", icon: CreditCard, badge: null },
        { id: "ecommerce", label: "eCommerce", icon: ShoppingCart, badge: null },
        { id: "predictor", label: "Orders", icon: Package, badge: "New" },
        { id: "layouts", label: "Layouts", icon: Layers, hasSubmenu: true },
      ]
    },
    {
      title: "APPS",
      items: [
        { id: "mail", label: "Mail", icon: Mail },
        { id: "chat", label: "Chat", icon: MessageSquare },
        { id: "kanban", label: "Kanban", icon: Kanban },
        { id: "calendar", label: "Calendar", icon: Calendar },
      ]
    },
    {
      title: "FORMS & TABLES",
      items: [
        { id: "form-layouts", label: "Form Layouts", icon: FileText, hasSubmenu: true },
        { id: "form-validation", label: "Form Validation", icon: CheckCircle2 },
        { id: "form-wizard", label: "Form Wizard", icon: Wand2, hasSubmenu: true },
        { id: "datatable", label: "Data Table", icon: Table, isHighlight: true },
      ]
    },
    {
      title: "COMPONENTS & CHARTS",
      items: [
        { id: "components", label: "Components", icon: Box, isExternal: true },
        { id: "charts", label: "Charts", icon: TrendingUp, isExternal: true },
        { id: "statistics", label: "Statistics", icon: PieChart, isExternal: true },
        { id: "card-nav", label: "Card Nav", icon: Layers, isExternal: true },
        { id: "widgets", label: "Widgets", icon: Box, isExternal: true },
      ]
    },
    {
      title: "MISCELLANEOUS",
      items: [
        { id: "menu-level", label: "Menu Level", icon: Layers, hasSubmenu: true },
        { id: "support", label: "Support", icon: MessageSquare, isExternal: true },
        { id: "documentation", label: "Documentation", icon: FileText, isExternal: true },
      ]
    }
  ];

  const handleItemClick = (id) => {
    if (id === 'predictor') {
      onOpenPredictor();
      return;
    }
    if (['overview', 'datatable', 'statistics', 'charts', 'analytics', 'finance', 'campaign'].includes(id)) {
      setCurrentTab(id);
    } else {
      setCurrentTab(id);
    }
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
        <div className="flex h-16 items-center gap-3 px-5 border-b border-slate-200 dark:border-dark-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
              AdminCN
            </span>
            <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium -mt-0.5">
              Dashboard Template
            </span>
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 dark:text-gray-500 uppercase">
                {section.title}
              </div>
              <div className="mt-1 space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id || (item.id === 'overview' && currentTab === 'sales');
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all group
                        ${isActive 
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-[#212328] dark:text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-[#1a1b20]'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 group-hover:text-slate-600 dark:text-gray-400 dark:group-hover:text-gray-200'}`} />
                        <span>{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {item.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                            {item.badge}
                          </span>
                        )}
                        {item.hasSubmenu && (
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-gray-400 transition-transform group-hover:translate-x-0.5" />
                        )}
                        {item.isExternal && (
                          <ExternalLink className="h-3 w-3 text-slate-400 dark:text-gray-400 opacity-60 group-hover:opacity-100" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-[#101114]/50">
          <div className="rounded-lg p-2.5 bg-white dark:bg-dark-card/50 border border-slate-200 dark:border-dark-border flex items-center justify-between shadow-xs">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-800 dark:text-gray-300">Stack Overflow 2025</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400">15.9K Quantile Cohort</span>
            </div>
            <button 
              onClick={onOpenPredictor}
              className="px-2 py-1 text-[11px] font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded transition-colors"
            >
              Predict
            </button>
          </div>
        </div>

      </aside>
    </>
  );
}
