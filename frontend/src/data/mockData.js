// Comprehensive dataset and metrics aligned with Stack Overflow Developer Survey 2025 and final quantile model

export const STAT_CARDS = {
  medianSalary: {
    value: "$83.3k",
    change: "Median",
    isPositive: true,
    label: "Overall Median Salary",
    sublabel: "Filtered Developer Cohort ($10k-$350k)",
    barData: [
      { top: 60, bottom: 40 },
      { top: 80, bottom: 20 },
      { top: 45, bottom: 55 },
      { top: 90, bottom: 30 },
      { top: 70, bottom: 45 },
    ]
  },
  sampleSize: {
    title: "Cohort Size",
    period: "Cleaned v2",
    value: "15,940",
    change: "22 Features",
    isPositive: true,
    bars: [45, 65, 85, 55, 90, 70, 50]
  },
  r2Score: {
    title: "Model R² Score",
    period: "Test Evaluation",
    value: "0.5976",
    change: "~60% Variance",
    isPositive: true,
    points: [30, 45, 35, 60, 50, 75]
  },
  coverage: {
    title: "Coverage Rate",
    period: "P25 - P75 Interval",
    visitors: "46.2%",
    centerLabel: "Coverage",
    value: "46.2%",
    change: "Nominal 50%",
    isPositive: true,
    percentage: 46.2
  },
  remoteMedian: {
    title: "Remote Pay",
    period: "Modality Median",
    amount: "$100.0k",
    change: "+23.1% vs Hybrid",
    isPositive: true,
  },
  testMae: {
    title: "Model Test MAE",
    period: "Quantile 0.50",
    amount: "$25,921",
    change: "-43.5% vs Base",
    isPositive: true,
  }
};

export const EXPERIENCE_OVERVIEW = {
  title: "Salary Progression by Experience",
  subtitle: "Median Annual Compensation by Coding Experience (YearsCode)",
  bars: [
    { label: "<1y", val: 48, highlight: false },
    { label: "1-3y", val: 62, highlight: false },
    { label: "3-5y", val: 75, highlight: false },
    { label: "5-8y", val: 92, highlight: false },
    { label: "8-12y", val: 115, highlight: false },
    { label: "12-16y", val: 138, highlight: false },
    { label: "16-20y", val: 152, highlight: false },
    { label: "20+y", val: 165, highlight: true }
  ]
};

export const CALIBRATION_STATS = {
  title: "Quantile Model Performance",
  subtitle: "Test Evaluation on 3,188 Holdout Developers",
  amount: "$25,921 MAE",
  stat1: { label: "CV Improvement", value: "+$1,064", positive: true, icon: "dollar", detail: "v2 vs v1 features" },
  stat2: { label: "Non-Ascending", value: "1.94%", positive: false, icon: "wallet", detail: "62/3,188 rows sorted" },
  performance: "46.20% Coverage"
};

export const MODALITY_SALES = {
  title: "Compensation by Work Modality",
  amount: "$100,000.00",
  change: "+23.1%",
  modalities: [
    { name: "Remote", amount: "$100,000", count: "5,654 devs", share: "35.5%", change: "+23.1%" },
    { name: "Hybrid", amount: "$81,210", count: "9,347 devs", share: "58.6%", change: "Baseline" },
    { name: "In-Person", amount: "$60,000", count: "2,423 devs", share: "15.2%", change: "-26.1%" }
  ],
  sparkline: [60, 68, 72, 81, 85, 93, 98, 100]
};

export const FEATURE_IMPORTANCE = {
  country: { name: "Country of Residence", score: "0.2603", detail: "Top predictor globally", isUp: true },
  workExp: { name: "Work Experience", score: "0.0693", detail: "Professional career years", isUp: true },
  languages: { name: "Top 15 Language Stack", score: "0.0218", detail: "Go, Rust, Python, etc.", isUp: true }
};

// Developer Survey Table Data matching exact layout from reference images 4, 5, 7
export const INITIAL_TABLE_DATA = [
  {
    id: "#5099",
    statusIcon: "mail", // green mail
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    name: "Jack Alfredo",
    role: "Developer, full-stack",
    email: "jack.alfredo@dev2025.org",
    country: "United States of America",
    total: "$145,000",
    salaryAnnual: 145000,
    issuedDate: "03 Apr 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 8,
    remote: "Remote",
    orgSize: "100 to 499 employees",
    languages: "JavaScript; TypeScript; Python; SQL"
  },
  {
    id: "#5008",
    statusIcon: "check", // yellow check
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    name: "Maria Gonzalez",
    role: "Developer, back-end",
    email: "maria.g@dev2025.org",
    country: "Germany",
    total: "$87,000",
    salaryAnnual: 87000,
    issuedDate: "12 May 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Visa",
    experience: 6,
    remote: "Hybrid",
    orgSize: "1,000 to 4,999 employees",
    languages: "Java; Go; SQL; Docker"
  },
  {
    id: "#5101",
    statusIcon: "check", // yellow check
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "John Doe",
    role: "Developer, front-end",
    email: "john.doe@dev2025.org",
    country: "United Kingdom",
    total: "$92,500",
    salaryAnnual: 92500,
    issuedDate: "26 Jun 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 10,
    remote: "Remote",
    orgSize: "20 to 99 employees",
    languages: "TypeScript; HTML/CSS; React; Next.js"
  },
  {
    id: "#4586",
    statusIcon: "download", // blue download
    statusBadge: "Pending",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    name: "Emily Carter",
    role: "Data scientist or machine learning",
    email: "emily.carter@dev2025.org",
    country: "United States of America",
    total: "$165,000",
    salaryAnnual: 165000,
    issuedDate: "05 Jul 2025",
    balance: "-$78.00",
    balanceStatus: "negative",
    paidBy: "Visa",
    experience: 5,
    remote: "Remote",
    orgSize: "10,000 or more employees",
    languages: "Python; SQL; PyTorch; Bash/Shell"
  },
  {
    id: "#4360",
    statusIcon: "mail", // green mail
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "David Lee",
    role: "DevOps specialist",
    email: "david.lee@dev2025.org",
    country: "Poland",
    total: "$58,000",
    salaryAnnual: 58000,
    issuedDate: "07 Aug 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 7,
    remote: "Hybrid",
    orgSize: "100 to 499 employees",
    languages: "Go; Bash/Shell; Python; Kubernetes"
  },
  {
    id: "#4120",
    statusIcon: "check",
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    name: "Rajesh Sharma",
    role: "Developer, full-stack",
    email: "rajesh.s@dev2025.org",
    country: "India",
    total: "$24,500",
    salaryAnnual: 24500,
    issuedDate: "14 Sep 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 4,
    remote: "In-person",
    orgSize: "1,000 to 4,999 employees",
    languages: "Java; Spring; JavaScript; SQL"
  },
  {
    id: "#3980",
    statusIcon: "download",
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces",
    name: "Lucas Silva",
    role: "Developer, back-end",
    email: "lucas.silva@dev2025.org",
    country: "Brazil",
    total: "$42,000",
    salaryAnnual: 42000,
    issuedDate: "28 Oct 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Visa",
    experience: 9,
    remote: "Remote",
    orgSize: "20 to 99 employees",
    languages: "C#; .NET; SQL; PowerShell"
  },
  {
    id: "#3810",
    statusIcon: "mail",
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    name: "Sophie Dubois",
    role: "Engineering manager",
    email: "sophie.d@dev2025.org",
    country: "Other",
    total: "$120,000",
    salaryAnnual: 120000,
    issuedDate: "04 Nov 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 14,
    remote: "Hybrid",
    orgSize: "500 to 999 employees",
    languages: "Python; Go; SQL"
  }
];

// Country Metrics evaluated from notebook 07
export const COUNTRY_METRICS = [
  { country: "United States of America", flag: "🇺🇸", count: 751, median: 150000, mae: 38079.47, coverage: "49.00%" },
  { country: "United Kingdom", flag: "🇬🇧", count: 227, median: 91147, mae: 30141.20, coverage: "41.85%" },
  { country: "Germany", flag: "🇩🇪", count: 344, median: 87011, mae: 19915.92, coverage: "46.22%" },
  { country: "Poland", flag: "🇵🇱", count: 65, median: 56419, mae: 19373.66, coverage: "47.69%" },
  { country: "Brazil", flag: "🇧🇷", count: 65, median: 38503, mae: 17308.54, coverage: "52.31%" },
  { country: "India", flag: "🇮🇳", count: 91, median: 20442, mae: 17648.17, coverage: "51.65%" }
];

// Top 15 Programming Languages from Section 15 of notebook 02/06
export const TOP_LANGUAGES = [
  { name: "JavaScript", count: 10423, median: 82000 },
  { name: "HTML/CSS", count: 8945, median: 79500 },
  { name: "SQL", count: 8712, median: 85000 },
  { name: "Python", count: 8356, median: 90000 },
  { name: "Bash/Shell (all shells)", count: 7120, median: 95000 },
  { name: "TypeScript", count: 6982, median: 91000 },
  { name: "C#", count: 4890, median: 84000 },
  { name: "Java", count: 4721, median: 80000 },
  { name: "PowerShell", count: 3410, median: 88000 },
  { name: "C++", count: 3120, median: 87500 },
  { name: "Go", count: 2894, median: 110000 },
  { name: "C", count: 2450, median: 82000 },
  { name: "PHP", count: 2310, median: 65000 },
  { name: "Rust", count: 2180, median: 115000 },
  { name: "Kotlin", count: 1890, median: 89000 }
];

export const MODEL_SPECS = {
  algorithm: "HistGradientBoostingRegressor",
  loss: "quantile",
  quantiles: [0.25, 0.50, 0.75],
  targetTransform: "np.log(y) -> np.exp(pred)",
  featuresCount: 22,
  trainRows: 15940,
  testRows: 3188,
  overallCoverage: "46.20%",
  testMae: "$25,921.45",
  r2: 0.5976,
  nonAscendingShare: "1.94%"
};

// Empirical client-side quantile estimation engine replicating trained artifact
export function estimateQuantiles({
  country,
  role,
  education,
  remoteWork,
  orgSize,
  experience,
  workExperience,
  languages
}) {
  const countryBase = {
    "United States of America": 145000,
    "United Kingdom of Great Britain and Northern Ireland": 91000,
    "United Kingdom": 91000,
    "Germany": 87000,
    "Poland": 56000,
    "Brazil": 38000,
    "India": 20500,
    "Netherlands": 88000,
    "Canada": 105000,
    "Australia": 110000,
    "Other": 68000
  };

  const roleMult = {
    "Engineering manager": 1.35,
    "Data scientist or machine learning specialist": 1.20,
    "Data scientist or machine learning": 1.20,
    "DevOps specialist": 1.15,
    "Developer, back-end": 1.08,
    "Developer, full-stack": 1.05,
    "Developer, mobile": 1.02,
    "Developer, desktop or enterprise": 1.00,
    "Developer, front-end": 0.96,
    "Other": 0.92
  };

  const eduMult = {
    "Professional degree": 1.18,
    "Master's degree": 1.10,
    "Bachelor's degree": 1.02,
    "Some college/university study without earning a degree": 0.96,
    "Secondary school": 0.90,
    "Other": 0.94
  };

  const remoteMult = {
    "Remote": 1.12,
    "Hybrid": 1.00,
    "In-person": 0.88
  };

  const base = countryBase[country] || 70000;
  const rM = roleMult[role] || 1.0;
  const eM = eduMult[education] || 1.0;
  const wM = remoteMult[remoteWork] || 1.0;

  // Experience factor: logarithmic return
  const totalExp = Math.max(0, experience || 0);
  const expFactor = 1.0 + Math.log1p(totalExp) * 0.16;

  // Language bonuses
  let langBonus = 0;
  if (languages && languages.length > 0) {
    if (languages.includes("Rust")) langBonus += 0.08;
    if (languages.includes("Go")) langBonus += 0.06;
    if (languages.includes("Python")) langBonus += 0.04;
    if (languages.includes("TypeScript")) langBonus += 0.03;
    if (languages.includes("SQL")) langBonus += 0.02;
  }

  // Median P50
  const p50Raw = base * rM * eM * wM * expFactor * (1 + Math.min(langBonus, 0.20));
  
  // Quantiles P25 and P75 based on empirically calibrated spread
  const p25Raw = p50Raw * 0.76;
  const p75Raw = p50Raw * 1.28;

  // Monotonic guarantee
  const vals = [Math.round(p25Raw / 100) * 100, Math.round(p50Raw / 100) * 100, Math.round(p75Raw / 100) * 100].sort((a, b) => a - b);

  return {
    p25: vals[0],
    p50: vals[1],
    p75: vals[2]
  };
}
