import React, { useState } from 'react';
import { REFERENCES_LIST, PERSONAL_STATEMENTS } from '../data/narrativeContent';
import { ViewMode } from '../types';
import { useAdmin } from '../context/AdminContext';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Globe,
  Lock,
  Unlock
} from 'lucide-react';

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
  onSelectCase: (caseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  const { settings, setShowAdminModal } = useAdmin();
  const [showAllRefs, setShowAllRefs] = useState<boolean>(false);
  const [refSearch, setRefSearch] = useState<string>('');

  const filteredRefs = REFERENCES_LIST.filter((r) => {
    if (!refSearch.trim()) return true;
    const q = refSearch.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q) ||
      r.scope.toLowerCase().includes(q) ||
      r.id.toString() === q
    );
  });

  return (
    <footer className="border-t-[1.5px] border-[#111111] bg-[#EFEDE8] text-[#111111] text-xs">
      {/* Complete Table of Citations & References [1]–[39] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b-[1.5px] border-[#111111]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="mono text-[#CC0000] mb-1">Citations & Authorities</div>
            <h3 className="font-serif-headline text-2xl font-bold text-[#111111] flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-[#CC0000]" />
              Index of Forensic Citations & Legal Authorities [1]–[39]
            </h3>
            <p className="text-xs font-mono text-zinc-700 mt-1">
              Complete bibliographic record of court dockets, statutory analysis, laboratory audits, and investigative memoranda.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative w-56">
              <input
                type="text"
                value={refSearch}
                onChange={(e) => setRefSearch(e.target.value)}
                placeholder="Filter citations [1-39]..."
                className="w-full bg-white border border-[#111111] px-2.5 py-1 text-xs font-mono text-[#111111] placeholder-zinc-500 focus:outline-none focus:border-[#CC0000]"
              />
            </div>
            <button
              onClick={() => setShowAllRefs(!showAllRefs)}
              className="font-mono text-xs font-bold text-[#111111] hover:bg-[#CC0000] hover:text-white px-2.5 py-1 bg-white border border-[#111111] flex items-center space-x-1 uppercase transition-colors cursor-pointer"
            >
              <span>{showAllRefs ? 'Collapse' : 'Show All 39'}</span>
              {showAllRefs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* References List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
          {(showAllRefs ? filteredRefs : filteredRefs.slice(0, 9)).map((ref) => (
            <div
              key={ref.id}
              className="bg-white border border-[#111111] p-3 hover:bg-[#F8F7F4] transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="font-bold text-[#CC0000]">[{ref.id}]</span>
                <span className="text-zinc-600 font-bold">{ref.year}</span>
              </div>
              <p className="font-serif-headline text-sm text-[#111111] font-bold line-clamp-2" title={ref.title}>
                {ref.title}
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-600 border-t border-[#111111]/10 pt-1.5">
                <span className="mono">{ref.type}</span>
                <span className="text-zinc-800 font-medium">{ref.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links & Author Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="font-serif-headline text-3xl font-bold text-[#111111] tracking-tight">
              Demopocrisy.
            </h4>
            <p className="font-serif-body text-sm text-zinc-800 max-w-md leading-relaxed">
              A forensic repository and investigative legal analysis dedicated to mapping the procedural displacement of evidentiary review, closing the constitutional due process gap, and advocating for the Parallel Review dual-track system.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-700 space-y-1">
              <div>Archive Jurisdiction: Seattle & King County, Washington State</div>
              <div>Principal Investigator: <strong className="text-[#111111]">{PERSONAL_STATEMENTS.authorCredit}</strong></div>
            </div>
          </div>

          {/* Quick Links to Archive Sections */}
          <div className="space-y-2.5">
            <div className="mono text-[#111111] font-bold">
              Investigation Modules
            </div>
            <ul className="space-y-1.5 font-mono text-xs">
              <li>
                <button onClick={() => onSelectView('narrative')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  The Demopocrisy Thesis
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('timeline')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  Master Narrative Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('dashboard')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  Systemic Data Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('medical')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  Surveillance & V2K Evidence
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('architecture')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  Parallel Review Framework
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('archive')} className="hover:text-[#CC0000] transition-colors uppercase cursor-pointer">
                  Statements & Evidence Dossiers
                </button>
              </li>
              <li className="pt-2 border-t border-[#111111]/20">
                <button 
                  onClick={() => setShowAdminModal(true)} 
                  className="text-[#CC0000] font-bold hover:underline uppercase cursor-pointer flex items-center space-x-1"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Access & Settings</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Notices */}
          <div className="space-y-2.5">
            <div className="mono text-[#111111] font-bold">
              Contact & Inquiries
            </div>
            <div className="space-y-2 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_STATEMENTS.email}`}
                className="flex items-center space-x-1.5 text-[#111111] font-bold hover:text-[#CC0000] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#CC0000]" />
                <span>{PERSONAL_STATEMENTS.email}</span>
              </a>
              <div className="flex items-center space-x-1.5 text-zinc-700 font-bold">
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_STATEMENTS.web}</span>
              </div>
            </div>

            <p className="font-serif-body text-[11px] text-zinc-700 pt-3 leading-normal">
              Compiled for legal defense, investigative journalism, and legislative due process reform. All cited docket numbers, minute entries, and forensic records reflect public filings in the State of Washington.
            </p>
          </div>
        </div>

        {/* Bottom copyright & Admin Trigger */}
        <div className="mt-8 pt-6 border-t-[1.5px] border-[#111111] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-700 gap-2">
          <span>© 2021–2026 Demopocrisy Archive. All Rights Reserved.</span>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowAdminModal(true)}
              className="text-zinc-600 hover:text-[#CC0000] underline font-mono cursor-pointer"
            >
              {settings.isLoggedIn ? 'Admin Active (Settings)' : 'Admin Sign-In'}
            </button>
            <span className="font-bold text-[#111111]">Jonathan Shane Concepts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
