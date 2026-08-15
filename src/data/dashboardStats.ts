export const LABOR_DETENTION_CORRELATION = [
  { month: 'Jan 2021', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'SAO Accellion Breach' },
  { month: 'Mar 2021', detentionDays: 16, bargainingActive: false, bonusActivity: false, label: 'Arrests 658931 & 658959' },
  { month: 'May 2021', detentionDays: 3, bargainingActive: false, bonusActivity: false, label: 'Arrest 660121' },
  { month: 'Jul 2021', detentionDays: 9, bargainingActive: true, bonusActivity: false, label: 'Window A Starts (Felony Arrest)' },
  { month: 'Sep 2021', detentionDays: 30, bargainingActive: true, bonusActivity: false, label: 'Restoration Order Signed' },
  { month: 'Nov 2021', detentionDays: 30, bargainingActive: true, bonusActivity: false, label: 'Western State Hospital' },
  { month: 'Jan 2022', detentionDays: 6, bargainingActive: true, bonusActivity: false, label: 'Window A Closes (Restored)' },
  { month: 'Mar 2022', detentionDays: 2, bargainingActive: false, bonusActivity: true, label: 'KCSO $15k Bonus Ratification' },
  { month: 'May 2022', detentionDays: 0, bargainingActive: false, bonusActivity: true, label: 'Union Bonus MOA Executed' },
  { month: 'Aug 2022', detentionDays: 22, bargainingActive: true, bonusActivity: false, label: 'Window B Starts (Gov Threat)' },
  { month: 'Nov 2022', detentionDays: 30, bargainingActive: true, bonusActivity: false, label: 'Assault in Jail / Contaminated Water' },
  { month: 'Feb 2023', detentionDays: 28, bargainingActive: true, bonusActivity: false, label: 'Omnibus Continuances' },
  { month: 'May 2023', detentionDays: 5, bargainingActive: true, bonusActivity: false, label: 'Window B Closes (Released 10 Mos)' },
  { month: 'Oct 2023', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'SCIDpda Blocks Repayment' },
  { month: 'Jun 2024', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'KIRO News Interview & Eviction' },
  { month: 'Jul 2025', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'Civil/Criminal Parallel Churn' },
  { month: 'Jan 2026', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'Satisfaction Filed' },
  { month: 'Feb 2026', detentionDays: 0, bargainingActive: false, bonusActivity: false, label: 'Dr. Leavey Restores Competency' }
];

export const DUE_PROCESS_GAP_METRICS = [
  { metric: 'Arrests With No Criminal Complaint Filed', value: 2, total: 6, percentage: 33.3, benchmark: '0% (Standard Due Process)' },
  { metric: 'Restoration Orders Issued Without Counsel Present', value: 2, total: 3, percentage: 66.7, benchmark: '0% (Constitutional Minimum)' },
  { metric: 'Cases Dismissed / Suspended for Incompetency', value: 4, total: 8, percentage: 50.0, benchmark: '<5% Regional Baseline' },
  { metric: 'Core Prosecution Discovery Produced (Voicemail)', value: 0, total: 1, percentage: 0.0, benchmark: '100% (Brady Rule Compliance)' },
  { metric: 'Hospital Transfers with Documented Court Orders', value: 0, total: 2, percentage: 0.0, benchmark: '100% Mandatory Statutory' },
  { metric: 'Court-Ordered Mental Health Referrals Actually Executed', value: 0, total: 2, percentage: 0.0, benchmark: '100% Compliance' }
];

export const SECURITY_THREAT_TRENDS = [
  { year: '2015', bombThreats: 1200, suspiciousPackages: 3100, cyberAttacksWeekly: 450 },
  { year: '2017', bombThreats: 1350, suspiciousPackages: 3600, cyberAttacksWeekly: 580 },
  { year: '2019', bombThreats: 1520, suspiciousPackages: 4100, cyberAttacksWeekly: 690 },
  { year: '2020', bombThreats: 1680, suspiciousPackages: 4400, cyberAttacksWeekly: 760 },
  { year: '2021', bombThreats: 1876, suspiciousPackages: 4935, cyberAttacksWeekly: 925 },
  { year: '2022', bombThreats: 1940, suspiciousPackages: 5120, cyberAttacksWeekly: 1150 }
];

export const PUBLIC_HEALTH_EPIDEMIOLOGY = [
  { year: '2019', syphilisCasesWA: 2450, congenitalSyphilisKingCounty: 12, tbHospitalizationRate: 35 },
  { year: '2020', syphilisCasesWA: 2890, congenitalSyphilisKingCounty: 16, tbHospitalizationRate: 40 },
  { year: '2021', syphilisCasesWA: 3650, congenitalSyphilisKingCounty: 22, tbHospitalizationRate: 48 },
  { year: '2022', syphilisCasesWA: 4100, congenitalSyphilisKingCounty: 29, tbHospitalizationRate: 46 },
  { year: '2023', syphilisCasesWA: 4600, congenitalSyphilisKingCounty: 37, tbHospitalizationRate: 51 }
];

export const CASE_CHURN_BREAKDOWN = [
  { name: 'Case 658931', daysInCustody: 2, hearingsCount: 2, complaintFiled: 'No', outcome: 'Dismissed w/o Prejudice' },
  { name: 'Case 658959', daysInCustody: 36, hearingsCount: 4, complaintFiled: 'Yes (Bypassed)', outcome: '71.05 Involuntary Hold' },
  { name: 'Case 660121', daysInCustody: 3, hearingsCount: 2, complaintFiled: 'No', outcome: 'Unexecuted Refer' },
  { name: 'Case 21-1-04342', daysInCustody: 166, hearingsCount: 14, complaintFiled: 'Yes (Felony)', outcome: 'Restored / Pending Trial' },
  { name: 'Case 664676', daysInCustody: 2, hearingsCount: 2, complaintFiled: 'No', outcome: 'Dismissed Overnight' },
  { name: 'Case 22-1-04242', daysInCustody: 268, hearingsCount: 21, complaintFiled: 'Yes (No Discovery)', outcome: 'Time Served / Pending' },
  { name: 'Case 25-2-17456', daysInCustody: 0, hearingsCount: 8, complaintFiled: 'Civil Eviction', outcome: 'Full Satisfaction Filed' },
  { name: 'Case 26-2-01443', daysInCustody: 0, hearingsCount: 3, complaintFiled: 'Petitioner Quiet Title', outcome: 'Active Jurisdictional Action' }
];

export const SYSTEMIC_FAILURE_CATEGORIES = [
  { name: 'Competency Bypass & Diagnostic Loop', count: 6, color: '#e11d48', desc: 'Substituting psychiatric labels for state burden of proof' },
  { name: 'Documentary Asymmetry & Missing Evidence', count: 5, color: '#f59e0b', desc: 'Unproduced voicemails, missing transfer orders, redacted records' },
  { name: 'Unidentified Arresting Agents & Plainclothes Tactics', count: 3, color: '#8b5cf6', desc: 'Arrests by agents with no badges, unmarked vehicles, military camouflage' },
  { name: 'Ghost Detentions (No Complaint Filed)', count: 3, color: '#3b82f6', desc: 'Physical booking and overnight custody without formal criminal complaint' },
  { name: 'Labor & Economic Alignment Churn', count: 4, color: '#10b981', desc: 'Incarceration waves coinciding with police/corrections union bargaining windows' },
  { name: 'Retaliatory Civil Litigation', count: 2, color: '#ec4899', desc: 'Evictions and show-cause orders served days following public media advocacy' }
];
