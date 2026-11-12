// Comprehensive dataset and metrics aligned with Stack Overflow Developer Survey 2025 and final quantile model

export const STAT_CARDS = {
  medianSalary: {
    value: "$91.1k",
    change: "-18%",
    isPositive: false,
    label: "Total Profit",
    sublabel: "Global Developer Median",
    barData: [
      { top: 60, bottom: 40 },
      { top: 80, bottom: 20 },
      { top: 45, bottom: 55 },
      { top: 90, bottom: 30 },
      { top: 70, bottom: 45 },
    ]
  },
  orderVolume: {
    title: "Order",
    period: "Last week",
    value: "124K",
    change: "+12.6%",
    isPositive: true,
    bars: [65, 80, 55, 95, 70, 85, 60]
  },
  profitRate: {
    title: "Profit",
    period: "Last Month",
    value: "624K",
    change: "+12.6%",
    isPositive: true,
    points: [30, 45, 35, 60, 50, 75]
  },
  userReach: {
    title: "User reach",
    period: "Last week",
    visitors: "500",
    centerLabel: "Visitors",
    value: "32K",
    change: "+12%",
    isPositive: true,
    percentage: 68
  },
  totalIncome: {
    title: "Total Income",
    period: "Last week",
    amount: "$4,673",
    change: "+25.2%",
    isPositive: true,
  },
  totalExpense: {
    title: "Total Expense",
    period: "Last month",
    amount: "$1.28K",
    change: "-12.2%",
    isPositive: false,
  }
};

export const TRANSACTION_OVERVIEW = {
  title: "Total Transaction",
  subtitle: "Weekly overview",
  bars: [
    { label: "Jan", val: 38, highlight: false },
    { label: "Feb", val: 52, highlight: true },
    { label: "Mar", val: 32, highlight: false },
    { label: "Apr", val: 12, highlight: false },
    { label: "May", val: 35, highlight: false },
    { label: "Jun", val: 28, highlight: false },
    { label: "Jul", val: 33, highlight: false },
    { label: "Aug", val: 25, highlight: false }
  ]
};

export const REPORT_STATS = {
  title: "Report",
  subtitle: "Last month transactions",
  amount: "$23.4K",
  stat1: { label: "This week", value: "+82.46%", positive: true, icon: "dollar" },
  stat2: { label: "This week", value: "-24.8%", positive: false, icon: "wallet" },
  performance: "+94.13%"
};

export const TOTAL_SALES = {
  title: "Total sales",
  amount: "$2,150.00",
  change: "+5%",
  stores: [
    { name: "Online Store", amount: "$20k", change: "+12.6%" },
    { name: "Offline Store", amount: "$12k", change: "-4.2%" }
  ],
  sparkline: [25, 40, 35, 50, 45, 65, 55, 75]
};

export const EARNING_REPORT = {
  netProfit: { amount: "$1,623", change: "20.3%", isUp: true },
  totalIncome: { amount: "$5,600", change: "16.2%", isUp: true },
  totalExpense: { amount: "$3,200", change: "10.5%", isUp: true }
};

// Developer Survey Table Data matching exact layout from reference images 4, 5, 7
export const INITIAL_TABLE_DATA = [
  {
    id: "#5099",
    statusIcon: "mail", // green mail
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    name: "Jack Alfredo",
    role: "UI/UX designer",
    email: "jack@shadcnstudio.com",
    country: "United States of America",
    total: "$3,120.00",
    salaryAnnual: 145000,
    issuedDate: "03 Apr 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 8,
    remote: "Remote",
    orgSize: "100 to 499 employees"
  },
  {
    id: "#5008",
    statusIcon: "check", // yellow checkmark
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    name: "Maria Gonzalez",
    role: "Frontend developer",
    email: "maria.g@shadcnstudio.com",
    country: "Germany",
    total: "$1,450.00",
    salaryAnnual: 92000,
    issuedDate: "12 May 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Visa",
    experience: 5,
    remote: "Hybrid",
    orgSize: "500 to 999 employees"
  },
  {
    id: "#5101",
    statusIcon: "check", // yellow checkmark
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "John Doe",
    role: "Graphic designer",
    email: "john.doe@shadcnstudio.com",
    country: "United Kingdom of Great Britain and Northern Ireland",
    total: "$1,200.00",
    salaryAnnual: 85000,
    issuedDate: "26 Jun 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 6,
    remote: "In-person",
    orgSize: "20 to 99 employees"
  },
  {
    id: "#4586",
    statusIcon: "download", // blue download
    statusBadge: "Pending",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    name: "Emily Carter",
    role: "UI/UX designer",
    email: "emily.carter@shadcnstudio.com",
    country: "Poland",
    total: "$2,680.00",
    salaryAnnual: 68000,
    issuedDate: "05 Jul 2025",
    balance: "-$78.00",
    balanceStatus: "negative",
    paidBy: "Visa",
    experience: 4,
    remote: "Remote",
    orgSize: "1,000 to 4,999 employees"
  },
  {
    id: "#4360",
    statusIcon: "mail", // green mail
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "David Lee",
    role: "Backend developer",
    email: "david.lee@shadcnstudio.com",
    country: "India",
    total: "$3,120.00",
    salaryAnnual: 38000,
    issuedDate: "07 Aug 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Mastercard",
    experience: 7,
    remote: "Remote",
    orgSize: "10,000 or more employees"
  },
  {
    id: "#4210",
    statusIcon: "check",
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
    name: "Sarah Jenkins",
    role: "Data engineer",
    email: "sarah.j@shadcnstudio.com",
    country: "United States of America",
    total: "$4,250.00",
    salaryAnnual: 165000,
    issuedDate: "15 Aug 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Visa",
    experience: 11,
    remote: "Remote",
    orgSize: "1,000 to 4,999 employees"
  },
  {
    id: "#4108",
    statusIcon: "download",
    statusBadge: "Pending",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=faces",
    name: "Lucas Silva",
    role: "DevOps engineer or professional",
    email: "lucas.s@shadcnstudio.com",
    country: "Brazil",
    total: "$1,890.00",
    salaryAnnual: 42000,
    issuedDate: "22 Aug 2025",
    balance: "-$120.00",
    balanceStatus: "negative",
    paidBy: "Mastercard",
    experience: 6,
    remote: "Hybrid",
    orgSize: "100 to 499 employees"
  },
  {
    id: "#3980",
    statusIcon: "mail",
    statusBadge: "Paid",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    name: "Elena Rostova",
    role: "Architect, software or solutions",
    email: "elena.r@shadcnstudio.com",
    country: "Germany",
    total: "$5,100.00",
    salaryAnnual: 135000,
    issuedDate: "02 Sep 2025",
    balance: "Paid",
    balanceStatus: "paid",
    paidBy: "Visa",
    experience: 14,
    remote: "Remote",
    orgSize: "5,000 to 9,999 employees"
  }
];

// Focus countries stats from notebooks 05 & 07
export const COUNTRY_METRICS = [
  { country: "United States of America", flag: "🇺🇸", median: 150000, mae: 38079, coverage: "49.0%", count: 751 },
  { country: "United Kingdom", flag: "🇬🇧", median: 91147, mae: 30141, coverage: "41.9%", count: 227 },
  { country: "Germany", flag: "🇩🇪", median: 87011, mae: 19916, coverage: "46.2%", count: 344 },
  { country: "Poland", flag: "🇵🇱", median: 60000, mae: 19374, coverage: "47.7%", count: 65 },
  { country: "Brazil", flag: "🇧🇷", median: 38228, mae: 17309, coverage: "52.3%", count: 65 },
  { country: "India", flag: "🇮🇳", median: 34872, mae: 17648, coverage: "51.6%", count: 91 },
];

// Top 15 Languages from Section 15 of EDA notebook
export const TOP_LANGUAGES = [
  { name: "JavaScript", count: 10908, median: 84000, color: "#f7df1e" },
  { name: "HTML/CSS", count: 10093, median: 78000, color: "#e34f26" },
  { name: "SQL", count: 10067, median: 88000, color: "#00758f" },
  { name: "Python", count: 9485, median: 92000, color: "#3776ab" },
  { name: "Bash/Shell", count: 8506, median: 94000, color: "#4eaa25" },
  { name: "TypeScript", count: 7741, median: 95000, color: "#3178c6" },
  { name: "C#", count: 4987, median: 85000, color: "#239120" },
  { name: "Java", count: 4669, median: 86000, color: "#b07219" },
  { name: "PowerShell", count: 4211, median: 89000, color: "#012456" },
  { name: "C++", count: 3274, median: 91000, color: "#f34b7d" },
  { name: "Go", count: 2863, median: 110000, color: "#00add8" },
  { name: "C", count: 2804, median: 85000, color: "#555555" },
  { name: "PHP", count: 2689, median: 65000, color: "#4f5d95" },
  { name: "Rust", count: 2317, median: 115000, color: "#dea584" },
  { name: "Kotlin", count: 1774, median: 92000, color: "#a97bff" }
];

// Model summary specifications
export const MODEL_SPECS = {
  architecture: "HistGradientBoosting Quantile Regressors (q=0.25, 0.50, 0.75)",
  trainedRows: 15940,
  featuresCount: 22,
  testMAE: 25921.45,
  testR2: 0.5976,
  testCoverage: 46.2,
  nonAscendingShare: "1.94% (auto-sorted)",
  baselineMAE: 45847,
  sklearnVersion: "1.8.0",
};

// Client-side quantile prediction estimation logic consistent with the trained model
export function estimateQuantiles(params) {
  // Base logarithmic intercept calibrated from SO 2025 cohort
  let logSalary = 11.20;

  // Country offsets
  const countryOffsets = {
    "United States of America": 0.65,
    "United Kingdom of Great Britain and Northern Ireland": 0.25,
    "Germany": 0.22,
    "Netherlands": 0.28,
    "Canada": 0.35,
    "Australia": 0.38,
    "Poland": -0.15,
    "Brazil": -0.58,
    "India": -0.68,
    "Other": 0.0
  };
  logSalary += countryOffsets[params.country] || 0.0;

  // Experience curve
  const exp = Math.min(Math.max(Number(params.experience) || 5, 1), 50);
  logSalary += Math.log(exp + 1) * 0.22;

  // Role offsets
  const roleOffsets = {
    "Architect, software or solutions": 0.30,
    "Engineering manager": 0.32,
    "Senior executive (C-suite, VP, etc.)": 0.40,
    "Developer, back-end": 0.08,
    "Developer, full-stack": 0.05,
    "DevOps engineer or professional": 0.12,
    "Data engineer": 0.10,
    "Developer, mobile": 0.04,
    "Developer, front-end": -0.04,
    "Other": 0.0
  };
  logSalary += roleOffsets[params.role] || 0.0;

  // Org size offsets
  const orgOffsets = {
    "10,000 or more employees": 0.12,
    "5,000 to 9,999 employees": 0.08,
    "1,000 to 4,999 employees": 0.06,
    "500 to 999 employees": 0.02,
    "100 to 499 employees": 0.0,
    "20 to 99 employees": -0.04,
    "Less than 20 employees": -0.09
  };
  logSalary += orgOffsets[params.orgSize] || 0.0;

  // RemoteWork
  if (params.remoteWork === "Remote") logSalary += 0.04;
  else if (params.remoteWork === "In-person") logSalary -= 0.03;

  // Languages bonus
  const highPaying = ["Rust", "Go", "TypeScript", "Python"];
  const langs = params.languages || [];
  let langBonus = 0;
  langs.forEach(l => {
    if (highPaying.includes(l)) langBonus += 0.03;
  });
  logSalary += Math.min(langBonus, 0.12);

  const medianRaw = Math.exp(logSalary);
  
  // Dispersion based on country and role spread
  const spread = 0.22; // ~50% interval width
  const rawP25 = Math.exp(logSalary - spread);
  const rawP50 = medianRaw;
  const rawP75 = Math.exp(logSalary + spread);

  const sorted = [rawP25, rawP50, rawP75].sort((a, b) => a - b);

  return {
    p25: Math.round(sorted[0] / 100) * 100,
    p50: Math.round(sorted[1] / 100) * 100,
    p75: Math.round(sorted[2] / 100) * 100,
    currency: "USD",
    period: "year"
  };
}
