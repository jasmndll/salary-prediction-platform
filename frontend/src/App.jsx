import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OverviewDashboard from './components/OverviewDashboard';
import DataTableSection from './components/DataTableSection';
import StatisticsSection from './components/StatisticsSection';
import ThemeCustomizer from './components/ThemeCustomizer';
import PredictorModal from './components/PredictorModal';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState('analytics');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [predictorOpen, setPredictorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Customizer styling states
  const [preset, setPreset] = useState('default');
  const [font, setFont] = useState('Geist');
  const [radius, setRadius] = useState('md');
  const [layout, setLayout] = useState('compact');
  const [scale, setScale] = useState('md');

  // Sync theme with HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-[#0e0f12] text-gray-100' 
          : 'bg-[#f8fafc] text-gray-900'
      }`}
      style={{ fontFamily: font }}
    >
      {/* Sidebar Navigation - only Analytics, Data Table, Statistics */}
      <Sidebar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onOpenPredictor={() => setPredictorOpen(true)}
      />

      {/* Main Content Area */}
      <div className={`flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : 'pl-0'}`}>
        
        {/* Top Navbar */}
        <Navbar 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          setTheme={setTheme}
          customizerOpen={customizerOpen}
          setCustomizerOpen={setCustomizerOpen}
          onOpenPredictor={() => setPredictorOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Dynamic Page Views */}
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 mx-auto w-full ${layout === 'compact' ? 'max-w-7xl' : 'max-w-full'}`}>
          
          {/* Page 1: Analytics & ML Overview Dashboard */}
          {currentTab === 'analytics' && (
            <OverviewDashboard 
              onOpenPredictor={() => setPredictorOpen(true)}
              onGoToDataTable={() => setCurrentTab('datatable')}
              onGoToStatistics={() => setCurrentTab('statistics')}
            />
          )}

          {/* Page 2: Data Table Section */}
          {currentTab === 'datatable' && (
            <DataTableSection 
              onOpenPredictor={() => setPredictorOpen(true)}
            />
          )}

          {/* Page 3: Statistics & Model Diagnostics Section */}
          {currentTab === 'statistics' && (
            <StatisticsSection 
              onOpenPredictor={() => setPredictorOpen(true)}
            />
          )}

          {/* Footer */}
          <Footer onOpenPredictor={() => setPredictorOpen(true)} />
        </main>

      </div>

      {/* Theme Customizer Drawer */}
      <ThemeCustomizer 
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        theme={theme}
        setTheme={setTheme}
        preset={preset}
        setPreset={setPreset}
        font={font}
        setFont={setFont}
        radius={radius}
        setRadius={setRadius}
        layout={layout}
        setLayout={setLayout}
        scale={scale}
        setScale={setScale}
      />

      {/* Live Quantile Salary Predictor Engine Modal */}
      <PredictorModal 
        isOpen={predictorOpen}
        onClose={() => setPredictorOpen(false)}
      />

    </div>
  );
}
