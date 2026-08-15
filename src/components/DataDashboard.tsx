import React, { useState } from 'react';
import { 
  LABOR_DETENTION_CORRELATION, 
  DUE_PROCESS_GAP_METRICS, 
  SECURITY_THREAT_TRENDS, 
  PUBLIC_HEALTH_EPIDEMIOLOGY, 
  CASE_CHURN_BREAKDOWN,
  SYSTEMIC_FAILURE_CATEGORIES
} from '../data/dashboardStats';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldAlert, 
  Activity, 
  Scale, 
  Layers, 
  DollarSign, 
  AlertCircle,
  FileCheck,
  Building
} from 'lucide-react';

export const DataDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'labor' | 'dueprocess' | 'threats' | 'health' | 'cases'>('labor');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111111] border border-[#111111] p-3 shadow-xl text-xs font-mono text-[#F8F7F4]">
          <p className="font-bold mb-1 uppercase text-[#FFE600]">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="flex justify-between space-x-4">
              <span className="text-zinc-300">{entry.name}:</span>
              <span className="font-bold text-white">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-[#111111]">
      {/* Dashboard Title & Overview Header */}
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <div className="mono text-[#CC0000]">
          Section 3.0 // Empirical Systems Mapping
        </div>
        <h2 className="h-hero text-3xl sm:text-4xl text-[#111111]">
          Systemic Patterns & Institutional Data Dashboard
        </h2>
        <p className="editorial-text text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto">
          Visualizing the statistical intersections between municipal labor negotiations, detention windows, regional security threats, and the procedural due process gap.
        </p>
      </div>

      {/* Metric Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="bg-[#EFEDE8] p-1 border border-[#111111] flex flex-wrap gap-1">
          {[
            { id: 'labor', label: 'Labor-Detention Cycles', icon: <DollarSign className="w-3.5 h-3.5" /> },
            { id: 'dueprocess', label: 'Due Process Gap Index', icon: <Scale className="w-3.5 h-3.5" /> },
            { id: 'cases', label: 'Case Churn Matrix', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'threats', label: 'Security & Cyber Trends', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
            { id: 'health', label: 'Public Health Vectors', icon: <Activity className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                  : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Labor Bargaining vs Detention Cycles */}
      {activeTab === 'labor' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1A1A1A]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase italic">
                  Temporal Correlation: Correctional Labor Bargaining & Incarceration Windows
                </h3>
                <p className="text-xs font-serif text-zinc-700 mt-0.5">
                  Mapping defendant pretrial incarceration days against active King County Corrections & Police Guild CBA bargaining cycles and retention bonus negotiations.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-mono">
                <span className="inline-block w-3 h-3 bg-red-600"></span>
                <span className="text-[#1A1A1A] font-bold uppercase">Detention Days</span>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={LABOR_DETENTION_CORRELATION} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="detentionColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#DC2626" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E2DC" />
                  <XAxis dataKey="month" stroke="#1A1A1A" tick={{ fontSize: 10, fill: '#1A1A1A', fontFamily: 'monospace' }} angle={-35} textAnchor="end" />
                  <YAxis stroke="#1A1A1A" tick={{ fontSize: 10, fill: '#1A1A1A', fontFamily: 'monospace' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="detentionDays" name="Days In Custody" stroke="#DC2626" strokeWidth={2} fillOpacity={1} fill="url(#detentionColor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Key Incarceration Windows Callout Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#1A1A1A]">
              <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-900 uppercase">
                    Window A: July 2021 – January 2022 (6 Months)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-[#1A1A1A] font-bold text-[#1A1A1A]">
                    Case 21-1-04342-2
                  </span>
                </div>
                <p className="font-serif text-xs text-zinc-700 leading-relaxed">
                  Directly overlapped with King County coalition labor bargaining and the negotiation of emergency pandemic retention packages. Ended promptly when defendant completed restoration ahead of schedule.
                </p>
              </div>

              <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-900 uppercase">
                    Window B: August 2022 – May 2023 (10 Months)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-[#1A1A1A] font-bold text-[#1A1A1A]">
                    Case 22-1-04242-3
                  </span>
                </div>
                <p className="font-serif text-xs text-zinc-700 leading-relaxed">
                  Concurrent with KCSO Police Officers' Guild ratification of $7,500–$15,000 recruitment incentives. The administrative churn of pretrial detainees generated the operational headcount metrics used in budget advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: The Due Process Gap */}
      {activeTab === 'dueprocess' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-5 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase italic">
                The Due Process Gap: Formal Rights vs. Observed Realities
              </h3>
              <p className="text-xs font-serif text-zinc-700">
                Comparing constitutional standards with the documented procedural omission rate across the 8 archive matters.
              </p>

              <div className="space-y-4 pt-2">
                {DUE_PROCESS_GAP_METRICS.map((m, idx) => (
                  <div key={idx} className="space-y-1.5 bg-[#EEECE9] p-3 border border-[#1A1A1A]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#1A1A1A] font-bold">{m.metric}</span>
                      <span className="text-red-600 font-bold">
                        {m.value} of {m.total} ({m.percentage.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="w-full bg-white border border-[#1A1A1A] h-2 overflow-hidden">
                      <div 
                        className={`h-full ${m.percentage > 50 ? 'bg-red-600' : 'bg-amber-600'}`}
                        style={{ width: `${Math.max(m.percentage, 5)}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] text-zinc-600 font-mono">
                      Statutory Benchmark: {m.benchmark}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A] uppercase italic">
                Systemic Anomaly Distribution
              </h3>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SYSTEMIC_FAILURE_CATEGORIES}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="count"
                    >
                      {SYSTEMIC_FAILURE_CATEGORIES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2 text-xs font-mono">
                {SYSTEMIC_FAILURE_CATEGORIES.map((cat, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between text-[#1A1A1A] border-b border-[#EEECE9] pb-1">
                    <div className="flex items-center space-x-2 truncate">
                      <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: cat.color }}></span>
                      <span className="truncate font-medium">{cat.name}</span>
                    </div>
                    <span className="font-bold">{cat.count} cases</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Case Churn Breakdown */}
      {activeTab === 'cases' && (
        <div className="bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-5 animate-in fade-in shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase italic">
                Case Processing & Pretrial Churn Matrix
              </h3>
              <p className="text-xs font-serif text-zinc-700 mt-0.5">
                Total days in custody vs. court appearances and resolution outcomes across municipal and superior dockets.
              </p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CASE_CHURN_BREAKDOWN} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E2DC" />
                <XAxis dataKey="name" stroke="#1A1A1A" tick={{ fontSize: 10, fill: '#1A1A1A', fontFamily: 'monospace' }} angle={-25} textAnchor="end" />
                <YAxis stroke="#1A1A1A" tick={{ fontSize: 10, fill: '#1A1A1A', fontFamily: 'monospace' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                <Bar dataKey="daysInCustody" name="Days In Custody" fill="#DC2626" />
                <Bar dataKey="hearingsCount" name="Hearings Count" fill="#2563EB" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto pt-4">
            <table className="w-full text-xs font-mono text-left border border-[#1A1A1A]">
              <thead>
                <tr className="border-b border-[#1A1A1A] text-[#1A1A1A] bg-[#EEECE9] font-bold uppercase">
                  <th className="p-2.5">Case Reference</th>
                  <th className="p-2.5">Incarceration Duration</th>
                  <th className="p-2.5">Written Complaint Filed?</th>
                  <th className="p-2.5">Formal Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/20 text-[#1A1A1A]">
                {CASE_CHURN_BREAKDOWN.map((c, i) => (
                  <tr key={i} className="hover:bg-[#EEECE9]">
                    <td className="p-2.5 font-bold">{c.name}</td>
                    <td className="p-2.5 text-red-700 font-bold">{c.daysInCustody} Days</td>
                    <td className="p-2.5">{c.complaintFiled}</td>
                    <td className="p-2.5 text-zinc-700">{c.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Security & Cyber Threats */}
      {activeTab === 'threats' && (
        <div className="bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-6 animate-in fade-in shadow-sm">
          <div className="pb-3 border-b border-[#1A1A1A]">
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase italic">
              National & Regional Security Escalation Vectors (2015–2022)
            </h3>
            <p className="text-xs font-serif text-zinc-700 mt-0.5">
              Source: U.S. Bomb Data Center (USBDC), Check Point Threat Research, & Washington State Auditor Data Breach (1.6M records).
            </p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SECURITY_THREAT_TRENDS} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E2DC" />
                <XAxis dataKey="year" stroke="#1A1A1A" tick={{ fill: '#1A1A1A', fontFamily: 'monospace' }} />
                <YAxis stroke="#1A1A1A" tick={{ fill: '#1A1A1A', fontFamily: 'monospace' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                <Line type="monotone" dataKey="bombThreats" name="U.S. Bomb Threats (USBDC)" stroke="#D97706" strokeWidth={2} />
                <Line type="monotone" dataKey="suspiciousPackages" name="Suspicious Packages" stroke="#DC2626" strokeWidth={2} />
                <Line type="monotone" dataKey="cyberAttacksWeekly" name="Weekly Cyberattacks / Org" stroke="#0284C7" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 text-center">
              <div className="text-2xl font-mono font-bold text-amber-800">+56%</div>
              <div className="text-xs font-mono text-[#1A1A1A] mt-1 font-bold uppercase">Explosive Incidents Surge (2015-2021)</div>
            </div>
            <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 text-center">
              <div className="text-2xl font-mono font-bold text-cyan-800">+50%</div>
              <div className="text-xs font-mono text-[#1A1A1A] mt-1 font-bold uppercase">Global Cyberattacks YoY (2021)</div>
            </div>
            <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 text-center">
              <div className="text-2xl font-mono font-bold text-red-700">1.6M</div>
              <div className="text-xs font-mono text-[#1A1A1A] mt-1 font-bold uppercase">WA Residents in Accellion Breach</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Public Health Vectors */}
      {activeTab === 'health' && (
        <div className="bg-white border border-[#1A1A1A] p-5 sm:p-6 space-y-6 animate-in fade-in shadow-sm">
          <div className="pb-3 border-b border-[#1A1A1A]">
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A] uppercase italic">
              Public Health Epidemic Trends in King County (2019–2023)
            </h3>
            <p className="text-xs font-serif text-zinc-700 mt-0.5">
              Source: Public Health — Seattle & King County Syphilis Task Force & WA State TB Surveillance Reports.
            </p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PUBLIC_HEALTH_EPIDEMIOLOGY} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E2DC" />
                <XAxis dataKey="year" stroke="#1A1A1A" tick={{ fill: '#1A1A1A', fontFamily: 'monospace' }} />
                <YAxis stroke="#1A1A1A" tick={{ fill: '#1A1A1A', fontFamily: 'monospace' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                <Bar dataKey="syphilisCasesWA" name="WA State Syphilis Cases" fill="#7C3AED" />
                <Bar dataKey="tbHospitalizationRate" name="King County TB Hospitalization Rate (%)" fill="#DB2777" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-[#EEECE9] border border-[#1A1A1A] p-4 text-xs font-serif text-zinc-800 space-y-2">
            <span className="font-mono text-[11px] font-bold text-purple-900 uppercase tracking-widest">
              Diagnostic Context Analysis:
            </span>
            <p className="leading-relaxed">
              In 2021, King County was experiencing an accelerating epidemic of syphilis (+49%) and congenital syphilis (+67%), alongside a major tuberculosis resurgence in correctional facilities (48% hospitalization rate). Harborview Medical Center's clinical team placed Neurosyphilis and TB on the defendant's problem list despite spinal fluid test contradictions, demonstrating how regional public health pressures influenced individualized forensic diagnostics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
