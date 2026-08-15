import React, { useState, useEffect } from 'react';
import { CASES_DATA } from '../data/casesData';
import { 
  Briefcase, 
  Scale, 
  ShieldAlert, 
  Calendar, 
  ChevronRight,
  Activity
} from 'lucide-react';

interface CaseDossiersProps {
  selectedCaseId?: string;
  onSelectCase?: (id: string) => void;
}

export const CaseDossiers: React.FC<CaseDossiersProps> = ({
  selectedCaseId,
  onSelectCase
}) => {
  const [activeCaseId, setActiveCaseId] = useState<string>(selectedCaseId || CASES_DATA[0].id);

  useEffect(() => {
    if (selectedCaseId) {
      setActiveCaseId(selectedCaseId);
    }
  }, [selectedCaseId]);

  const activeCase = CASES_DATA.find((c) => c.id === activeCaseId) || CASES_DATA[0];

  const handleCaseChange = (id: string) => {
    setActiveCaseId(id);
    if (onSelectCase) onSelectCase(id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-[#111111]">
      {/* Dossier Hub Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 space-y-2">
        <div className="mono text-[#CC0000]">
          Section 2.0 // Case-Specific Evidentiary Archive
        </div>
        <h2 className="h-hero text-3xl sm:text-4xl text-[#111111]">
          Forensic Case Dossiers (8 Legal Matters)
        </h2>
        <p className="editorial-text text-sm sm:text-base max-w-2xl mx-auto text-zinc-700">
          Comprehensive legal, clinical, and procedural dossiers examining the 8 interconnected cases in the Demopocrisy forensic repository.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Case Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <div className="mono text-[#111111] pb-2 border-b-[1.5px] border-[#111111] flex items-center justify-between">
            <span>Repository Cases</span>
            <span className="text-[#CC0000]">8 Files</span>
          </div>

          <div className="space-y-1.5">
            {CASES_DATA.map((c) => {
              const isSelected = c.id === activeCase.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCaseChange(c.id)}
                  className={`w-full text-left p-3.5 border-[1.5px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                      : 'bg-white text-[#111111] border-[#111111] hover:bg-[#EFEDE8]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-white' : 'text-[#111111]'}`}>
                      {c.caseNumber}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {c.dates.split('–')[0].trim()}
                    </span>
                  </div>

                  <h4 className={`font-serif-headline text-sm font-bold mt-1 line-clamp-1 ${isSelected ? 'text-white' : 'text-[#111111]'}`}>
                    {c.title}
                  </h4>

                  <p className={`font-serif-body text-xs mt-1 line-clamp-1 ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {c.caption}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 border font-bold ${
                      isSelected
                        ? 'bg-[#CC0000] border-[#CC0000] text-white'
                        : 'bg-[#EFEDE8] border-[#111111]/30 text-[#111111]'
                    }`}>
                      {c.court}
                    </span>
                    {isSelected && (
                      <span className="mono text-white text-[9px] flex items-center">
                        Active Dossier <ChevronRight className="w-3 h-3 ml-0.5" />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Case Dossier Deep Dive */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border-[1.5px] border-[#111111] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Case Dossier Masthead */}
            <div className="space-y-3 pb-6 border-b border-[#111111]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#CC0000] text-white uppercase tracking-widest">
                  {activeCase.caseNumber}
                </span>
                <span className="text-xs font-mono font-bold text-[#111111] bg-[#EFEDE8] px-2 py-0.5 border border-[#111111]">
                  {activeCase.court}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-headline font-bold text-[#111111] leading-snug">
                {activeCase.title}
              </h2>

              <p className="font-serif-body text-lg text-zinc-700 italic">
                {activeCase.caption}
              </p>

              {/* Case Metadata Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
                <div className="bg-[#EFEDE8] p-2.5 border border-[#111111]">
                  <div className="mono text-zinc-600 text-[9px]">Judge</div>
                  <div className="text-xs font-serif-headline font-bold text-[#111111] mt-0.5">{activeCase.judge}</div>
                </div>

                <div className="bg-[#EFEDE8] p-2.5 border border-[#111111]">
                  <div className="mono text-zinc-600 text-[9px]">Cause of Action</div>
                  <div className="text-xs font-serif-headline text-[#111111] mt-0.5 truncate font-medium" title={activeCase.cause}>
                    {activeCase.cause}
                  </div>
                </div>

                <div className="bg-[#EFEDE8] p-2.5 border border-[#111111]">
                  <div className="mono text-zinc-600 text-[9px]">Incarceration Window</div>
                  <div className="text-xs font-mono text-[#CC0000] font-bold mt-0.5">
                    {activeCase.incarcerationDates || 'None'}
                  </div>
                </div>

                <div className="bg-[#EFEDE8] p-2.5 border border-[#111111]">
                  <div className="mono text-zinc-600 text-[9px]">Current Status</div>
                  <div className="text-xs font-mono text-[#111111] font-bold mt-0.5 truncate" title={activeCase.status}>
                    {activeCase.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Headline Banner from the Historical Record */}
            <div className="bg-[#EFEDE8] border-l-4 border-[#CC0000] p-4 space-y-1 border-t border-r border-b border-[#111111]">
              <span className="mono text-zinc-600">
                Documented Archival Headline
              </span>
              <div className="text-base sm:text-lg font-serif-headline font-bold text-[#111111] italic">
                "{activeCase.headline}"
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h4 className="mono text-[#111111] text-xs">
                Executive Summary & Legal Disposition
              </h4>
              <p className="font-serif-body text-base text-zinc-800 leading-relaxed">
                {activeCase.summary}
              </p>
            </div>

            {/* Context & Background */}
            <div className="space-y-2">
              <h4 className="mono text-[#111111] text-xs">
                Contextual Origins & Systemic Backdrop
              </h4>
              <p className="font-serif-body text-base text-zinc-800 leading-relaxed">
                {activeCase.background}
              </p>
            </div>

            {/* Harborview Hospital Special Detail if Case 658959 */}
            {activeCase.hospitalizationDetail && (
              <div className="bg-[#EFEDE8] border border-[#111111] p-5 space-y-4">
                <div className="flex items-center space-x-2 text-[#CC0000]">
                  <Activity className="w-5 h-5" />
                  <h4 className="font-serif-headline text-lg font-bold text-[#111111]">
                    Medicalization Pipeline: {activeCase.hospitalizationDetail.facility}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 border border-[#111111] space-y-1">
                    <span className="mono text-[#111111]">Diagnoses Assigned:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-zinc-800 font-serif-body">
                      {activeCase.hospitalizationDetail.diagnosesAssigned.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 border border-[#111111] space-y-1">
                    <span className="mono text-[#CC0000]">Forced Medications:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-zinc-800 font-serif-body">
                      {activeCase.hospitalizationDetail.medicationsForced.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-3 border border-[#111111] space-y-1.5 text-xs font-serif-body text-zinc-800">
                  <span className="mono text-[#CC0000]">
                    Diagnostic Contradictions Documented in CSF Labs:
                  </span>
                  <ul className="space-y-1">
                    {activeCase.hospitalizationDetail.contradictoryFindings.map((cf, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#CC0000] font-mono">⚠️</span>
                        <span>{cf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Documented Procedural Anomalies */}
            <div className="space-y-3 pt-2">
              <h4 className="mono text-[#CC0000] text-xs flex items-center">
                <ShieldAlert className="w-4 h-4 mr-1.5 text-[#CC0000]" /> Documented Procedural Anomalies
              </h4>
              <div className="bg-[#EFEDE8] border border-[#111111] p-4 divide-y divide-[#111111]">
                {activeCase.proceduralAnomalies.map((anom, i) => (
                  <div key={i} className="py-2 first:pt-0 last:pb-0 flex items-start space-x-3 text-xs sm:text-sm font-serif-body text-zinc-800">
                    <span className="font-mono text-xs text-[#CC0000] font-bold">[{i + 1}]</span>
                    <span>{anom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Due Process Violations & Constitutional Analysis */}
            <div className="space-y-3">
              <h4 className="mono text-[#111111] text-xs flex items-center">
                <Scale className="w-4 h-4 mr-1.5 text-[#CC0000]" /> Constitutional Violations Identified
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCase.dueProcessViolations.map((v, i) => (
                  <div key={i} className="bg-[#EFEDE8] border border-[#111111] p-3 text-xs font-serif-body text-zinc-800">
                    <span className="text-[#CC0000] font-mono mr-1">⚖️</span> {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Chronological Dates */}
            <div className="space-y-3 pt-2">
              <h4 className="mono text-[#111111] text-xs flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-[#CC0000]" /> Case Milestone Timeline
              </h4>
              <div className="border border-[#111111] overflow-hidden divide-y divide-[#111111] text-xs">
                {activeCase.keyDates.map((kd, idx) => (
                  <div key={idx} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between bg-white hover:bg-[#EFEDE8] gap-1">
                    <span className="font-mono font-bold text-[#111111] shrink-0 sm:w-32 uppercase">{kd.date}</span>
                    <span className="font-serif-body text-zinc-800">{kd.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence & Case Citations */}
            <div className="space-y-2 pt-2">
              <h4 className="mono text-[#111111] text-xs">
                Documentary Proof & Court Citations
              </h4>
              <ul className="space-y-1 bg-[#EFEDE8] p-3 border border-[#111111] text-xs font-mono text-zinc-700">
                {activeCase.evidenceCitations.map((ec, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-[#CC0000] font-bold">📁</span>
                    <span>{ec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
