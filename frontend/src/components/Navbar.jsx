import React from 'react';
import { 
  Menu, 
  Search, 
  Activity, 
  Bell, 
  Sun, 
  Moon, 
  Palette, 
  Columns 
} from 'lucide-react';

export default function Navbar({ 
  sidebarOpen, 
  setSidebarOpen, 
  theme, 
  setTheme, 
  customizerOpen, 
  setCustomizerOpen,
  onOpenPredictor,
  searchQuery,
  setSearchQuery
}) {
  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-dark-border dark:bg-dark-bg/90 transition-colors">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        
        {/* Left: Sidebar Toggle & Search Input */}
        <div className="flex items-center gap-3 md:gap-4 flex-1 max-w-xl">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors dark:border-dark-border dark:bg-dark-surface dark:hover:bg-dark-card dark:text-gray-300"
            title="Toggle Sidebar"
          >
            <Columns className="h-4 w-4" />
          </button>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Type to search... ⌘K"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-12 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors dark:border-dark-border dark:bg-dark-surface dark:text-gray-200 dark:placeholder-gray-500"
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 dark:border-dark-border">
              ⌘K
            </span>
          </div>
        </div>

        {/* Right: Quick actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Activity / Model Live Status */}
          <button 
            onClick={onOpenPredictor}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:text-emerald-600 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:text-emerald-400 dark:hover:bg-dark-surface"
            title="Model Live Status & Predictor"
          >
            <Activity className="h-4 w-4" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-dark-surface"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            </button>
          </div>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:text-amber-500 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:text-amber-400 dark:hover:bg-dark-surface"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Theme Customizer Trigger */}
          <button
            onClick={() => setCustomizerOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:text-emerald-600 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:text-emerald-400 dark:hover:bg-dark-surface"
            title="Theme Customizer"
          >
            <Palette className="h-4 w-4" />
          </button>

          {/* User Profile Avatar with Online Dot */}
          <div className="relative ml-1 flex items-center cursor-pointer">
            <div className="h-9 w-9 rounded-full ring-2 ring-emerald-500/30 overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-dark-bg" />
          </div>

        </div>

      </div>
    </header>
  );
}
