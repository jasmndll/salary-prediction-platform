import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  Clock, 
  Laptop2,
  Code
} from 'lucide-react';
import { estimateQuantiles } from '../data/mockData';

export default function PredictorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [country, setCountry] = useState("United States of America");
  const [role, setRole] = useState("Developer, full-stack");
  const [education, setEducation] = useState("Bachelor's degree");
  const [remoteWork, setRemoteWork] = useState("Remote");
  const [orgSize, setOrgSize] = useState("100 to 499 employees");
  const [experience, setExperience] = useState(8);
  const [workExperience, setWorkExperience] = useState(6);
  const [selectedLangs, setSelectedLangs] = useState(["JavaScript", "TypeScript", "SQL"]);
  
  const [prediction, setPrediction] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const availableLanguages = [
    "JavaScript", "HTML/CSS", "SQL", "Python", "Bash/Shell (all shells)",
    "TypeScript", "C#", "Java", "PowerShell", "C++", "Go", "C", "PHP", "Rust", "Kotlin"
  ];

  const handleToggleLang = (lang) => {
    if (selectedLangs.includes(lang)) {
      setSelectedLangs(selectedLangs.filter(l => l !== lang));
    } else {
      setSelectedLangs([...selectedLangs, lang]);
    }
  };

  const handlePredict = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const res = estimateQuantiles({
        country,
        role,
        education,
        remoteWork,
        orgSize,
        experience,
        workExperience,
        languages: selectedLangs
      });
      setPrediction(res);
      setIsCalculating(false);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 text-slate-900 dark:bg-[#16171b] dark:border-dark-border dark:text-gray-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-dark-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Quantile Salary Prediction Engine</h2>
              <p className="text-xs text-slate-500 dark:text-gray-400">Calibrated against 15,940 Stack Overflow 2025 developers</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-800 dark:text-gray-400 dark:hover:bg-dark-card dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4 py-5 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Country */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="United States of America">United States of America</option>
                <option value="United Kingdom of Great Britain and Northern Ireland">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Poland">Poland</option>
                <option value="Brazil">Brazil</option>
                <option value="India">India</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Developer Role */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                Developer Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Developer, full-stack">Developer, full-stack</option>
                <option value="Developer, back-end">Developer, back-end</option>
                <option value="Developer, front-end">Developer, front-end</option>
                <option value="Developer, desktop or enterprise">Developer, desktop or enterprise</option>
                <option value="Developer, mobile">Developer, mobile</option>
                <option value="DevOps specialist">DevOps specialist</option>
                <option value="Engineering manager">Engineering manager</option>
                <option value="Data scientist or machine learning specialist">Data scientist / ML</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Education Level */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                Education Level
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Bachelor's degree">Bachelor's degree</option>
                <option value="Master's degree">Master's degree</option>
                <option value="Some college/university study without earning a degree">Some college / Associate</option>
                <option value="Secondary school">Secondary school</option>
                <option value="Professional degree">Professional / Doctorate</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Work Modality */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
                <Laptop2 className="h-3.5 w-3.5 text-amber-500 dark:text-amber-400" />
                Work Modality
              </label>
              <select
                value={remoteWork}
                onChange={(e) => setRemoteWork(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="In-person">In-person</option>
              </select>
            </div>

          </div>

          {/* Org Size */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
              Company Headcount
            </label>
            <select
              value={orgSize}
              onChange={(e) => setOrgSize(e.target.value)}
              className="w-full h-9 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-dark-border dark:bg-dark-surface dark:text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="100 to 499 employees">100 to 499 employees</option>
              <option value="20 to 99 employees">20 to 99 employees</option>
              <option value="1,000 to 4,999 employees">1,000 to 4,999 employees</option>
              <option value="10,000 or more employees">10,000 or more employees</option>
              <option value="2 to 9 employees">2 to 9 employees</option>
              <option value="Just me - I am a freelancer, sole proprietor, etc.">Solo / Freelancer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex justify-between items-center text-slate-700 dark:text-gray-300">
                <span className="font-medium">Total Coding Experience:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{experience} Years</span>
              </div>
              <input
                type="range"
                min={0}
                max={40}
                value={experience}
                onChange={(e) => setExperience(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-dark-surface dark:border-dark-border">
              <div className="flex justify-between items-center text-slate-700 dark:text-gray-300">
                <span className="font-medium">Professional Work Exp:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{workExperience} Years</span>
              </div>
              <input
                type="range"
                min={0}
                max={40}
                value={workExperience}
                onChange={(e) => setWorkExperience(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

          </div>

          {/* Languages selection pills */}
          <div className="space-y-2 pt-2">
            <label className="font-semibold text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
              <Code className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
              Primary Languages & Technologies
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableLanguages.map(lang => {
                const isSelected = selectedLangs.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => handleToggleLang(lang)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-dark-surface dark:text-gray-400 dark:hover:bg-dark-card border border-slate-200 dark:border-dark-border'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Prediction Results Display */}
        {prediction && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                <CheckCircle2 className="h-4 w-4" />
                <span>Quantile Prediction ($USD / Year)</span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-gray-400">Values rounded to nearest $100</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              
              <div className="p-3 rounded-xl bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
                <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium">p25 (Conservative)</span>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                  ${prediction.p25.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 shadow-xs">
                <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-bold">p50 (Median Benchmark)</span>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-1">
                  ${prediction.p50.toLocaleString()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 dark:bg-dark-card dark:border-dark-border shadow-xs">
                <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium">p75 (Optimistic)</span>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                  ${prediction.p75.toLocaleString()}
                </div>
              </div>

            </div>

            {/* Range bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-gray-400">
                <span>Range Width: ${(prediction.p75 - prediction.p25).toLocaleString()}</span>
                <span>Calibrated 50% Confidence Interval</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-dark-card rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-600/40 w-1/4" />
                <div className="h-full bg-emerald-500 w-1/2" />
                <div className="h-full bg-emerald-600/40 w-1/4" />
              </div>
            </div>

          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePredict}
            disabled={isCalculating}
            className="px-6 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
          >
            {isCalculating ? (
              <span>Calculating Quantiles...</span>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Estimate Salary Range</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
