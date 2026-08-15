import React, { useState } from 'react';
import { RESEARCH_SECTIONS, REFERENCES_LIST } from '../data/narrativeContent';
import { 
  BookOpen, 
  ChevronRight, 
  Share2, 
  Download, 
  Scale, 
  ShieldCheck, 
  Check, 
  FileText, 
  Info, 
  Camera,
  ExternalLink
} from 'lucide-react';

export const ForensicNarrative: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-executive-summary');
  const [selectedRef, setSelectedRef] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTextWithFootnotes = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const refId = parseInt(match[1], 10);
        const refItem = REFERENCES_LIST.find((r) => r.id === refId);
        return (
          <button
            key={i}
            onClick={() => setSelectedRef(refId)}
            className="inline-flex items-center px-1 py-0.5 text-[11px] font-mono font-bold text-[#CC0000] hover:bg-[#FFE600] hover:text-[#111111] border border-[#111111]/20 rounded-none mx-0.5 align-super cursor-pointer transition-colors"
            title={refItem ? `${refItem.title} (${refItem.year})` : `Reference [${refId}]`}
          >
            [{refId}]
          </button>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-[#111111]">
      {/* Editorial Article Meta Header in Marshall Project Style */}
      <div className="max-w-4xl mx-auto mb-10 pb-6 border-b border-[#111111]">
        <div className="flex flex-wrap items-center space-x-2 text-xs font-mono text-[#111111] mb-3">
          <span className="marshall-kicker">RESEARCH SYNTHESIS & LEGAL BRIEF</span>
          <span className="text-zinc-400">•</span>
          <span className="font-bold">15 Min In-Depth Read</span>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-600">Updated: February 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-headline font-black text-[#111111] leading-tight mb-4">
          Demopocrisy: The Institutional Displacement of Evidentiary Review and the Erosion of Due Process (2021–2026)
        </h1>

        <p className="text-lg sm:text-xl font-serif-body text-zinc-800 leading-relaxed mb-6">
          A forensic examination of how criminal, medical, and housing institutions in King County substituted constitutional discovery obligations with clinical narratives, unvetted competency petitions, and administrative momentum.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#111111] pt-4 border-t border-[#111111]">
          <div>
            <span className="text-zinc-500 font-bold uppercase">Author & Lead Investigator:</span>{' '}
            <span className="text-[#111111] font-bold bg-[#FFE600] px-1">Shane Jonathan Lozenich / Jonathan Shane Concepts</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-1 hover:text-[#CC0000] font-bold uppercase transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Paper'}</span>
            </button>
            <span>•</span>
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1 hover:text-[#CC0000] font-bold uppercase transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Sticky Section Outline + Article Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Sticky Table of Contents */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white border border-[#111111] p-4 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#111111] mb-3">
                <h3 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#CC0000]" /> Investigation Outline
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">6 Sections</span>
              </div>
              <nav className="space-y-1">
                {RESEARCH_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setActiveSectionId(sec.id);
                      const el = document.getElementById(sec.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-mono transition-all flex items-start space-x-2 border cursor-pointer ${
                      activeSectionId === sec.id
                        ? 'bg-[#111111] text-[#FFE600] font-bold border-[#111111] shadow-xs'
                        : 'bg-white text-[#111111] border-transparent hover:bg-[#F4F0E8] hover:border-[#111111]'
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold opacity-80 shrink-0">{sec.number}</span>
                    <span className="line-clamp-2 leading-snug font-serif-body font-bold">{sec.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Investigative Editorial Image: Evidence Dossiers */}
            <div className="border border-[#111111] bg-white shadow-xs overflow-hidden">
              <div className="relative aspect-4/3 w-full bg-zinc-100">
                <img
                  src="/src/assets/images/evidence_archive_files_1786728035995.jpg"
                  alt="Forensic case dossiers and King County court stamped filings"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[#111111]/90 text-[#FFE600] px-2 py-0.5 text-[9px] font-mono uppercase font-bold tracking-wider border border-[#111111]">
                  Primary Evidence Files
                </div>
              </div>
              <div className="p-2.5 bg-[#F4F0E8] border-t border-[#111111] text-[10px] font-mono text-zinc-800 leading-tight">
                <strong>Archive Docket:</strong> Verified court orders, police reports, and lab filings analyzed across all 8 proceedings.
              </div>
            </div>

            {/* Quick Reference Inspector Drawer */}
            {selectedRef && (
              <div className="bg-white border-2 border-[#111111] p-4 text-xs space-y-2 shadow-lg animate-in fade-in text-[#111111]">
                <div className="flex items-center justify-between text-[#111111] font-mono pb-1 border-b border-[#111111]">
                  <span className="bg-[#FFE600] text-[#111111] px-1.5 py-0.5 font-bold uppercase tracking-wider text-[10px]">
                    Verified Citation [{selectedRef}]
                  </span>
                  <button 
                    onClick={() => setSelectedRef(null)}
                    className="text-zinc-500 hover:text-black font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                {(() => {
                  const r = REFERENCES_LIST.find((item) => item.id === selectedRef);
                  if (!r) return <p className="text-zinc-600">Reference details not found.</p>;
                  return (
                    <div className="space-y-1.5">
                      <p className="font-serif-body text-[#111111] font-bold text-sm leading-snug">{r.title}</p>
                      <div className="flex items-center space-x-2 font-mono text-[10px] text-[#111111]">
                        <span className="px-1.5 py-0.5 bg-[#F4F0E8] border border-[#111111] font-bold uppercase">{r.type}</span>
                        <span className="text-zinc-600">Year: {r.year}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </aside>

        {/* Center Editorial Article Content */}
        <main className="lg:col-span-8 space-y-12 max-w-3xl">
          {RESEARCH_SECTIONS.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-32 pt-2 border-b border-[#111111] pb-10 space-y-6"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#CC0000] tracking-widest uppercase">
                  Section {sec.number}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-headline font-bold text-[#111111] tracking-tight">
                  {sec.title}
                </h2>
                <p className="font-mono text-xs font-bold text-zinc-600 tracking-widest uppercase">
                  // {sec.subtitle}
                </p>
              </div>

              {/* Lead Paragraph with Marshall Project high-contrast vertical rule */}
              <div className="font-serif-body text-lg text-[#111111] leading-relaxed font-bold pl-4 border-l-4 border-[#FFE600] bg-white p-3 border border-y-0 border-r-0 shadow-xs">
                {renderTextWithFootnotes(sec.lead)}
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 font-serif-body text-base sm:text-[17px] text-zinc-900 leading-relaxed tracking-normal">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>
                    {renderTextWithFootnotes(p)}
                  </p>
                ))}
              </div>

              {/* Key Takeaway Callout Card in Marshall Project Style */}
              {sec.keyTakeaway && (
                <div className="bg-[#F4F0E8] border border-[#111111] p-4 sm:p-5 flex items-start space-x-3.5 shadow-xs">
                  <Info className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest">
                      Forensic Synthesis // Key Docket Finding:
                    </span>
                    <p className="font-serif-body text-sm text-zinc-900 italic font-medium leading-relaxed">
                      "{sec.keyTakeaway}"
                    </p>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Parallel Review Framework Specific Callout */}
          <div className="bg-white border-2 border-[#111111] p-6 space-y-5 shadow-xs">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-6 h-6 text-[#CC0000]" />
              <h3 className="font-serif-headline text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                The Parallel Review Model: The Proposed Dual-Track Solution
              </h3>
            </div>

            <p className="font-serif-body text-zinc-800 text-sm sm:text-base leading-relaxed">
              Under the proposed legislative and judicial reform, clinical evaluation and factual discovery operate in parallel rather than as an exclusionary filter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F4F0E8] border border-[#111111] p-4 space-y-2">
                <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-blue-700"></span>
                  <span>Track 1: Clinical Care Track</span>
                </div>
                <p className="font-serif-body text-xs text-zinc-800 leading-relaxed">
                  Provides immediate medical screening, voluntary stabilization, and evidence-based clinical diagnostics with full informed consent and strict independent laboratory verification.
                </p>
              </div>

              <div className="bg-[#F4F0E8] border border-[#111111] p-4 space-y-2">
                <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-[#CC0000]"></span>
                  <span>Track 2: Evidentiary Track</span>
                </div>
                <p className="font-serif-body text-xs text-zinc-800 leading-relaxed">
                  The state’s burden of proof remains active. The court compels production of key discovery (e.g., voicemail transcripts, device warrants, dispatch logs) and independent technical forensic review of data breach claims.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

