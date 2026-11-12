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
  const [currentTab, setCurrentTab] = useState('overview');
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

  // Dynamic radius helper
  const getRadiusClass = () => {
    switch (radius) {
      case 'none': return 'rounded-none';
      case 'sm': return 'rounded-lg';
      case 'lg': return 'rounded-3xl';
      default: return 'rounded-2xl';
    }
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-[#0e0f12] text-gray-100' 
          : 'bg-[#f8fafc] text-gray-900'
      }`}
      style={{ fontFamily: font }}
    >
      {/* Sidebar Navigation */}
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
          
          {/* Overview Dashboard (Matching Image 1, 2, 3) */}
          {(currentTab === 'overview' || currentTab === 'sales' || currentTab === 'finance') && (
            <OverviewDashboard 
              onOpenPredictor={() => setPredictorOpen(true)}
              onGoToDataTable={() => setCurrentTab('datatable')}
            />
          )}

          {/* Data Table Section (Matching Image 4, 5, 7) */}
          {currentTab === 'datatable' && (
            <DataTableSection 
              onOpenPredictor={() => setPredictorOpen(true)}
            />
          )}

          {/* Statistics & Chart Section */}
          {(currentTab === 'statistics' || currentTab === 'charts' || currentTab === 'analytics' || currentTab === 'campaign') && (
            <StatisticsSection 
              onOpenPredictor={() => setPredictorOpen(true)}
            />
          )}

          {/* Other fallbacks default to Overview */}
          {!['overview', 'sales', 'finance', 'datatable', 'statistics', 'charts', 'analytics', 'campaign'].includes(currentTab) && (
            <OverviewDashboard 
              onOpenPredictor={() => setPredictorOpen(true)}
              onGoToDataTable={() => setCurrentTab('datatable')}
            />
          )}

          {/* Footer matching reference design */}
          <Footer onOpenPredictor={() => setPredictorOpen(true)} />
        </main>

      </div>

      {/* Theme Customizer Drawer matching Image 4 */}
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
