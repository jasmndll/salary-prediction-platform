import React from 'react';
import { 
  X, 
  RotateCcw, 
  HelpCircle, 
  Sun, 
  Moon, 
  Monitor,
  Ban
} from 'lucide-react';

export default function ThemeCustomizer({
  isOpen,
  onClose,
  theme,
  setTheme,
  preset,
  setPreset,
  font,
  setFont,
  radius,
  setRadius,
  layout,
  setLayout,
  scale,
  setScale
}) {
  if (!isOpen) return null;

  const presets = [
    { id: 'default', name: 'Default', color: '#10b981' },
    { id: 'violet', name: 'Violet', color: '#8b5cf6' },
    { id: 'blue', name: 'Blue', color: '#3b82f6' },
    { id: 'amber', name: 'Amber', color: '#f59e0b' },
    { id: 'rose', name: 'Rose', color: '#f43f5e' }
  ];

  const fonts = [
    { id: 'Geist', name: 'Geist' },
    { id: 'Inter', name: 'Inter' },
    { id: 'Plus Jakarta Sans', name: 'Plus Jakarta Sans' },
    { id: 'Outfit', name: 'Outfit' }
  ];

  const radii = [
    { id: 'none', label: 'None', icon: Ban },
    { id: 'sm', label: 'SM' },
    { id: 'md', label: 'MD' },
    { id: 'lg', label: 'LG' }
  ];

  const handleReset = () => {
    setTheme('dark');
    setPreset('default');
    setFont('Geist');
    setRadius('md');
    setLayout('compact');
    setScale('md');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-80 sm:w-96 border-l border-slate-200 bg-white text-slate-900 dark:border-dark-border dark:bg-[#16171b] dark:text-gray-200 shadow-2xl flex flex-col transition-all duration-300">
        
        {/* Header matching Image 4 */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-dark-border">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                Theme Customizer
              </h2>
              <button title="Help" className="text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-gray-200">
                <HelpCircle className="h-4 w-4" />
              </button>
              <button 
                onClick={handleReset}
                title="Reset to default" 
                className="text-slate-400 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 ml-1 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
              Customize your theme to your liking.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-dark-card dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable controls */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

          {/* Theme Preset */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Theme Preset
            </label>
            <div className="relative">
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
                className="w-full h-10 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
              >
                {presets.map(p => (
                  <option key={p.id} value={p.id} className="bg-white text-slate-900 dark:bg-dark-card dark:text-white py-1">
                    {p.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <span 
                  className="h-3 w-3 rounded-full" 
                  style={{ backgroundColor: presets.find(p => p.id === preset)?.color || '#10b981' }} 
                />
              </div>
            </div>
          </div>

          {/* Font */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Font
            </label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full h-10 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {fonts.map(f => (
                <option key={f.id} value={f.id} className="bg-white text-slate-900 dark:bg-dark-card dark:text-white">
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          {/* Color Mode matching Image 4 */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Color Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                  theme === 'light'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                  theme === 'dark'
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                Dark
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                  theme === 'system'
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                System
              </button>
            </div>
          </div>

          {/* Radius matching Image 4 */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Radius
            </label>
            <div className="grid grid-cols-4 gap-2">
              {radii.map(r => (
                <button
                  key={r.id}
                  onClick={() => setRadius(r.id)}
                  className={`flex items-center justify-center py-2 px-2 rounded-lg border text-xs font-medium transition-all ${
                    radius === r.id
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {r.icon ? <r.icon className="h-3.5 w-3.5" /> : r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Layout matching Image 4 */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Content Layout
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setLayout('compact')}
                className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                  layout === 'compact'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Compact
              </button>
              <button
                onClick={() => setLayout('full')}
                className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all ${
                  layout === 'full'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Full
              </button>
            </div>
          </div>

          {/* Scale matching Image 4 */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
              Scale
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['sm', 'md', 'lg'].map(s => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={`py-2 px-3 rounded-lg border text-xs font-medium uppercase transition-all ${
                    scale === s
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400 font-semibold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-dark-border dark:bg-dark-surface dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
