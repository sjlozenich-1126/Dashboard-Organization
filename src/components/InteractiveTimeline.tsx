import React, { useState, useMemo } from 'react';
import { MASTER_TIMELINE } from '../data/timelineData';
import { useAdmin } from '../context/AdminContext';
import { 
  Clock, 
  Search, 
  ShieldAlert, 
  Activity, 
  Building2, 
  Scale, 
  ChevronDown, 
  ChevronUp, 
  MapPin,
  FileText,
  PlusCircle
} from 'lucide-react';

export const InteractiveTimeline: React.FC = () => {
  const { customTimelineEntries, setShowAdminModal, settings } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [timelineSearch, setTimelineSearch] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'tl-1': true,
    'tl-5': true,
    'tl-9': true,
    'tl-12': true,
    'tl-15': true,
    'tl-20': true
  });

  const fullTimeline = useMemo(() => {
    return [...customTimelineEntries, ...MASTER_TIMELINE];
  }, [customTimelineEntries]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    fullTimeline.forEach((e) => (all[e.id] = true));
    setExpandedItems(all);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'legal', label: 'Legal & Court Orders', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'detention', label: 'Arrests & Jail Custody', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'medical', label: 'Psychiatric & Medical Holds', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'civil', label: 'Civil & Housing (SCIDpda)', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'environmental', label: 'Data Breaches & Context', icon: <FileText className="w-3.5 h-3.5" /> }
  ];

  const caseFilterOptions = [
    { id: 'all', label: 'All 8 Matters' },
    { id: '658931', label: 'Case 658931 (No Complaint)' },
    { id: '658959', label: 'Case 658959 (Harborview)' },
    { id: '660121', label: 'Case 660121 (Tactical)' },
    { id: '21-1-04342', label: 'Case 21-1-04342 (45-Day Order)' },
    { id: '664676', label: 'Case 664676 (Union Bonus)' },
    { id: '22-1-04242', label: 'Case 22-1-04242 (Gov Threats)' },
    { id: '25-2-17456', label: 'Case 25-2-17456 (Eviction)' },
    { id: '26-2-01443', label: 'Case 26-2-01443 (Keystone)' }
  ];

  const years = ['all', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];

  const filteredTimeline = useMemo(() => {
    return fullTimeline.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (selectedCase !== 'all') {
        if (!item.caseNumber || !item.caseNumber.toLowerCase().includes(selectedCase.toLowerCase())) {
          return false;
        }
      }
      if (selectedYear !== 'all' && item.year.toString() !== selectedYear) return false;
      if (timelineSearch.trim()) {
        const q = timelineSearch.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inAnomalies = item.anomalies?.some((a) => a.toLowerCase().includes(q)) || false;
        const inCase = item.caseNumber?.toLowerCase().includes(q) || false;
        const inJudge = item.judge?.toLowerCase().includes(q) || false;
        const inLocation = item.location.toLowerCase().includes(q);
        if (!inTitle && !inSummary && !inAnomalies && !inCase && !inJudge && !inLocation) {
          return false;
        }
      }
      return true;
    });
  }, [fullTimeline, selectedCategory, selectedCase, selectedYear, timelineSearch]);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'legal':
        return 'bg-[#EFEDE8] text-[#111111] border-[#111111]';
      case 'detention':
        return 'bg-[#CC0000] text-white border-[#CC0000]';
      case 'medical':
        return 'bg-[#111111] text-white border-[#111111]';
      case 'civil':
        return 'bg-[#EFEDE8] text-[#111111] border-[#111111]';
      case 'environmental':
        return 'bg-[#EFEDE8] text-[#111111] border-[#111111]';
      default:
        return 'bg-[#EFEDE8] text-[#111111] border-[#111111]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 space-y-2">
        <div className="mono text-[#CC0000]">
          Section 1.0 // Chronological Forensic Record
        </div>
        <h2 className="h-hero text-3xl sm:text-4xl text-[#111111]">
          Master Narrative & Legal Timeline (2020–2026)
        </h2>
        <p className="editorial-text text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto">
          An indexed chronological synthesis tracing six arrests, two involuntary psychiatric holds, procedural ruptures, and the Feb 2026 forensic competency restoration.
        </p>
      </div>

      {/* Control Filters Bar */}
      <div className="bg-[#EFEDE8] border-[1.5px] border-[#111111] p-4 mb-8 space-y-4 shadow-xs text-[#111111]">
        {/* Search & Bulk Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={timelineSearch}
              onChange={(e) => setTimelineSearch(e.target.value)}
              placeholder="Search timeline events, judges, transcripts..."
              className="w-full bg-white border border-[#111111] pl-8 pr-3 py-1.5 text-xs text-[#111111] placeholder-zinc-500 focus:outline-none focus:border-[#CC0000] font-mono"
            />
            <Search className="w-3.5 h-3.5 text-[#111111] absolute left-2.5 top-2.5" />
            {timelineSearch && (
              <button
                onClick={() => setTimelineSearch('')}
                className="absolute right-2.5 top-2 text-zinc-500 hover:text-black text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="mono text-[#111111]">{filteredTimeline.length} events mapped</span>
            <span className="text-zinc-400">|</span>
            <button
              onClick={expandAll}
              className="text-[#111111] hover:bg-[#CC0000] hover:text-white px-2.5 py-1 bg-white border border-[#111111] font-mono font-bold uppercase text-[11px] cursor-pointer transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-zinc-700 hover:bg-[#CC0000] hover:text-white px-2.5 py-1 bg-white/70 border border-[#111111] font-mono font-bold uppercase text-[11px] cursor-pointer transition-colors"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Categories, Cases, and Year Filter Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-[#111111]">
          {/* Category Filter */}
          <div>
            <label className="block mono text-[#111111] mb-1">
              Category Filter:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-[#111111] text-[#111111] text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#CC0000] font-mono"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Case Filter */}
          <div>
            <label className="block mono text-[#111111] mb-1">
              Specific Matter:
            </label>
            <select
              value={selectedCase}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="w-full bg-white border border-[#111111] text-[#111111] text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#CC0000] font-mono"
            >
              {caseFilterOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Year Fast Selector */}
          <div>
            <label className="block mono text-[#111111] mb-1">
              Year Range:
            </label>
            <div className="flex items-center space-x-1 overflow-x-auto">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-2 py-1 text-xs font-mono uppercase transition-colors border cursor-pointer ${
                    selectedYear === y
                      ? 'bg-[#111111] text-white font-bold border-[#111111]'
                      : 'bg-white text-[#111111] hover:bg-[#EFEDE8] border-[#111111]'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-[1.5px] border-[#111111] ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8 pb-12">
        {filteredTimeline.map((item) => {
          const isExpanded = !!expandedItems[item.id];
          return (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 border-2 border-white ring-[1.5px] ring-[#111111] ${
                  item.category === 'detention'
                    ? 'bg-[#CC0000]'
                    : item.category === 'medical'
                    ? 'bg-[#111111]'
                    : item.category === 'legal'
                    ? 'bg-[#CC0000]'
                    : 'bg-[#111111]'
                }`}
              />

              {/* Date Badge placed on left in desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 mono text-[#111111] mb-1 sm:mb-0 sm:text-right sm:w-28">
                {item.date}
              </div>

              {/* Event Card */}
              <div className="bg-white hover:bg-[#F8F7F4] border-[1.5px] border-[#111111] p-4 sm:p-5 transition-all shadow-xs">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${getCategoryColor(item.category)} uppercase tracking-wider`}>
                      {item.category.toUpperCase()}
                    </span>

                    {item.caseNumber && (
                      <span className="text-[11px] font-mono font-bold bg-[#EFEDE8] border border-[#111111] text-[#111111] px-2 py-0.5">
                        {item.caseNumber}
                      </span>
                    )}

                    {item.statusTag && (
                      <span className="text-[10px] font-mono bg-[#CC0000] text-white font-bold px-2 py-0.5 uppercase tracking-wider">
                        {item.statusTag}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="text-[#111111] hover:bg-[#EFEDE8] px-2 py-1 border border-[#111111] text-xs font-mono font-bold uppercase flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less' : 'Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h3 
                  onClick={() => toggleExpand(item.id)}
                  className="text-lg sm:text-xl font-serif-headline font-bold text-[#111111] tracking-tight cursor-pointer hover:text-[#CC0000] transition-colors"
                >
                  {item.title}
                </h3>

                {/* Location / Officers / Judges Metadata */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-700 mt-1 mb-3">
                  <span className="flex items-center font-medium">
                    <MapPin className="w-3 h-3 mr-1 text-[#111111]" /> {item.location}
                  </span>
                  {item.judge && (
                    <span className="flex items-center text-[#111111] font-bold bg-[#EFEDE8] px-1.5 border border-[#111111]">
                      <Scale className="w-3 h-3 mr-1 text-[#CC0000]" /> {item.judge}
                    </span>
                  )}
                  {item.attorney && (
                    <span className="text-zinc-600">
                      Counsel: {item.attorney}
                    </span>
                  )}
                </div>

                {/* Summary */}
                <p className="font-serif-body text-sm sm:text-base text-zinc-800 leading-relaxed">
                  {item.summary}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#111111] space-y-3.5 animate-in fade-in">
                    {/* Primary Quote */}
                    {item.quote && (
                      <div className="bg-[#EFEDE8] border-l-4 border-[#CC0000] p-3 text-xs sm:text-sm font-serif-body italic text-zinc-800 border-t border-r border-b border-[#111111]">
                        {item.quote}
                      </div>
                    )}

                    {/* Procedural Anomalies Callout */}
                    {item.anomalies && item.anomalies.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="mono text-[#CC0000] flex items-center">
                          <ShieldAlert className="w-3.5 h-3.5 mr-1 text-[#CC0000]" /> Documented Procedural Anomalies:
                        </span>
                        <ul className="space-y-1 pl-2">
                          {item.anomalies.map((anom, aIdx) => (
                            <li key={aIdx} className="text-xs font-serif-body text-zinc-800 flex items-start space-x-2">
                              <span className="text-[#CC0000] font-mono font-bold">•</span>
                              <span>{anom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Systemic Variables / Evidence Document */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-zinc-600">
                      {item.systemicVariables && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.systemicVariables.map((v, vIdx) => (
                            <span key={vIdx} className="px-1.5 py-0.5 bg-[#EFEDE8] border border-[#111111] text-[#111111] font-bold">
                              #{v}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.evidenceDoc && (
                        <span className="text-zinc-600 italic font-medium">
                          Ref: {item.evidenceDoc}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredTimeline.length === 0 && (
          <div className="bg-white border border-[#111111] p-8 text-center space-y-2">
            <p className="font-serif-headline text-[#111111] text-lg font-bold">No events match your current filter.</p>
            <p className="text-xs text-zinc-600 font-mono">Try resetting search keywords or category filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCase('all');
                setSelectedYear('all');
                setTimelineSearch('');
              }}
              className="mt-2 px-3 py-1.5 bg-[#CC0000] hover:bg-[#111111] text-white text-xs font-mono font-bold uppercase cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
