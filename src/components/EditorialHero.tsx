import React from 'react';
import { ViewMode } from '../types';
import { 
  ArrowRight, 
  FileSearch, 
  Activity, 
  Clock,
  Camera,
  ExternalLink
} from 'lucide-react';

interface EditorialHeroProps {
  onSelectView: (view: ViewMode) => void;
  onSelectCase: (caseId: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onSelectView,
  onSelectCase
}) => {
  return (
    <div className="border-b-[1.5px] border-[#111111] bg-[#F8F7F4] text-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto">
        
        {/* Main Editorial Content Column */}
        <div className="lg:col-span-8 p-6 sm:p-10 lg:border-r-[1.5px] border-[#111111] space-y-8">
          
          <div>
            <div className="mono text-[#CC0000] mb-2">
              Section 0.0 // Executive Summary & Legal Brief
            </div>
            
            <h2 className="h-hero text-[#111111]">
              A Forensic Examination of Institutional Displacement.
            </h2>
          </div>

          <div className="editorial-text space-y-5">
            <p>
              Between 2021 and 2026, an interconnected web of criminal, medical, and housing filings in Seattle reveals a systemic pattern: the routine substitution of courtroom discovery with clinical labeling, unilateral competency orders, and administrative momentum.
            </p>

            {/* Featured Image Container matching Design Variation */}
            <div className="image-container border-2 border-[#111111] bg-white my-8 overflow-hidden shadow-xs">
              <div className="relative aspect-16/9 w-full bg-[#EFEDE8]">
                <img
                  src="/src/assets/images/marshall_hero_court_1786728003661.jpg"
                  alt="King County Justice System"
                  className="w-full h-full object-cover mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[#111111] text-white px-2 py-0.5 mono text-[9px]">
                  Court Docket Fig 1.0 // King County Justice Center
                </div>
              </div>
              <div className="p-3 bg-[#EFEDE8] border-t border-[#111111] flex flex-wrap items-center justify-between text-xs font-mono text-zinc-800 gap-2">
                <span><strong>Archive Record:</strong> Eight interrelated proceedings analyzed across Municipal and Superior courts.</span>
                <span className="mono text-[#CC0000]">Verified 2021–2026</span>
              </div>
            </div>

            <p>
              <strong>Demopocrisy</strong> describes a structural phenomenon in which criminal, medical, and administrative institutions systematically displaced ordinary evidentiary review with clinical narratives, competency referrals, and custodial procedures.
            </p>

            <p>
              Evidence gathered across various jurisdictions reveals recurring patterns of arrests without formal complaints, unauthorized medical transfers, competency orders issued in the absence of counsel or evaluation, and retaliatory administrative actions.
            </p>
          </div>

          {/* Highlight Box matching Design Variation */}
          <div className="highlight-box my-8">
            “When an accused citizen raises complex allegations, the state’s reflexive strategy is to initiate competency evaluations.”
          </div>

          {/* Quick Action Navigation Grid */}
          <div className="pt-4 border-t border-[#111111]/20 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectView('timeline')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#111111] hover:bg-[#CC0000] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all border border-[#111111] cursor-pointer"
            >
              <span>Explore Master Timeline (2020–2026)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectView('dashboard')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white hover:bg-[#EFEDE8] text-[#111111] border border-[#111111] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4 text-[#CC0000]" />
              <span>Data Dashboard</span>
            </button>

            <button
              onClick={() => onSelectView('medical')}
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 bg-white hover:bg-[#EFEDE8] text-[#111111] border border-[#111111] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <FileSearch className="w-4 h-4 text-[#111111]" />
              <span>Harborview CSF Lab Audit</span>
            </button>
          </div>

        </div>

        {/* Sidebar Column matching Design Variation */}
        <aside className="lg:col-span-4 bg-[#EFEDE8] p-6 sm:p-8 flex flex-col justify-between space-y-8">
          
          {/* Forensic Ledger Stat Blocks */}
          <div className="space-y-4">
            <div className="mono border-b border-[#111111] pb-2 flex items-center justify-between">
              <span>Forensic Ledger [8 Matters]</span>
              <span className="text-[#CC0000]">Live Record</span>
            </div>

            <div className="stat-block">
              <span className="mono text-zinc-700">Pretrial Arrests</span>
              <span className="font-mono font-bold text-2xl text-[#111111]">06</span>
            </div>

            <div className="stat-block">
              <span className="mono text-zinc-700">Pretrial Custody</span>
              <span className="font-mono font-bold text-2xl text-[#111111]">268+ Days</span>
            </div>

            <div className="stat-block">
              <span className="mono text-zinc-700">Psychiatric Holds</span>
              <span className="font-mono font-bold text-2xl text-[#111111]">02</span>
            </div>

            <div className="stat-block">
              <span className="mono text-zinc-700">Competency Restored</span>
              <span className="font-mono font-bold text-xl text-emerald-800">Feb 2026</span>
            </div>
          </div>

          {/* Case Dockets list matching Design Variation */}
          <div className="space-y-3">
            <div className="mono border-b border-[#111111] pb-2">
              Case Dockets & Proceedings
            </div>

            <ul className="docket-list">
              {[
                { id: 'case-658931', num: '658931', tag: 'No Complaint' },
                { id: 'case-658959', num: '658959', tag: 'Harborview' },
                { id: 'case-660121', num: '660121', tag: 'Tactical' },
                { id: 'case-21-1-04342-2', num: '21-1-04342-2', tag: '45-Day Order' },
                { id: 'case-664676', num: '664676', tag: 'Union Bonus' },
                { id: 'case-22-1-04242-3', num: '22-1-04242-3', tag: 'Gov Threats' },
                { id: 'case-25-2-17456-5', num: '25-2-17456-5', tag: 'Eviction' },
                { id: 'case-26-2-01443-4', num: '26-2-01443-4', tag: 'Keystone' }
              ].map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectView('cases');
                      onSelectCase(c.id);
                    }}
                    className="w-full flex items-center justify-between text-left group cursor-pointer hover:bg-white/60 px-1 py-0.5"
                  >
                    <span className="font-mono text-xs font-bold text-[#111111] group-hover:text-[#CC0000] transition-colors">
                      {c.num}
                    </span>
                    <span className="mono text-[#CC0000] text-[10px]">
                      {c.tag}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Principal Investigator Box matching Design Variation */}
          <div className="pt-6 border-t border-[#111111]">
            <div className="mono text-zinc-600 mb-1">
              Principal Investigator & Author
            </div>
            <p className="font-serif-headline text-lg font-bold text-[#111111]">
              Shane Jonathan Lozenich
            </p>
            <div className="mono text-zinc-500 text-[10px] mt-0.5">
              Jonathan Shane Concepts // Forensic Research
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};
