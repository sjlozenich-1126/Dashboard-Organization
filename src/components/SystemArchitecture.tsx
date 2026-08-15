import React, { useState } from 'react';
import { 
  GitFork, 
  ArrowRight, 
  ArrowDown, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Scale, 
  Building2, 
  AlertTriangle,
  RefreshCw,
  FileText,
  Camera
} from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'loop' | 'parallel' | 'immunity'>('loop');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-[#111111]">
      {/* Header - Marshall Project Style */}
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#111111] text-[#FFE600] font-mono text-xs font-bold uppercase tracking-widest border border-[#111111]">
          <GitFork className="w-3.5 h-3.5 text-[#FFE600]" />
          <span>Structural Process Mapping</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-headline font-black text-[#111111] tracking-tight">
          System Architecture & Institutional Flowcharts
        </h2>
        <p className="font-serif-body text-base text-zinc-800 max-w-2xl mx-auto leading-relaxed">
          Comparing the cyclical failure of the "Competency Bypass" against the structural reforms of the "Parallel Review" Dual-Track System.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="bg-[#F4F0E8] p-1 border border-[#111111] flex flex-wrap gap-1">
          <button
            onClick={() => setActiveDiagram('loop')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeDiagram === 'loop'
                ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-xs'
                : 'bg-white text-[#111111] border-transparent hover:border-[#111111] hover:bg-[#FFE600]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>The Diagnostic Bypass Loop (Current)</span>
          </button>

          <button
            onClick={() => setActiveDiagram('parallel')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeDiagram === 'parallel'
                ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-xs'
                : 'bg-white text-[#111111] border-transparent hover:border-[#111111] hover:bg-[#FFE600]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Parallel Review Framework (Proposed)</span>
          </button>

          <button
            onClick={() => setActiveDiagram('immunity')}
            className={`flex items-center space-x-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeDiagram === 'immunity'
                ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-xs'
                : 'bg-white text-[#111111] border-transparent hover:border-[#111111] hover:bg-[#FFE600]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Quasi-Governmental Immunity Map (RCW 39.34)</span>
          </button>
        </div>
      </div>

      {/* Top Graphic Banner with Photo Embed */}
      <div className="bg-white border border-[#111111] p-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs">
        <div className="lg:col-span-8 space-y-3">
          <div className="font-mono text-xs text-[#CC0000] font-bold uppercase tracking-wider">
            SYSTEMIC ANALYSIS & REFORM PARADIGM
          </div>
          <h3 className="text-2xl font-serif-headline font-bold text-[#111111]">
            Breaking the Closed Institutional Feedback Loop
          </h3>
          <p className="font-serif-body text-sm sm:text-base text-zinc-800 leading-relaxed">
            In municipal criminal prosecutions, when a defendant files formal evidence regarding systemic civil issues (such as data theft or unlawful displacement), the criminal division triggers RCW 10.77. This halts all state discovery and channels the individual into psychiatric holds where evidence is re-diagnosed as symptomatology.
          </p>
        </div>

        <div className="lg:col-span-4 border border-[#111111] overflow-hidden bg-zinc-100">
          <div className="relative aspect-16/10 w-full">
            <img
              src="/src/assets/images/systemic_reform_justice_1786728050391.jpg"
              alt="Scales of justice balancing due process against institutional bureaucracy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 left-2 bg-[#111111]/90 text-[#FFE600] px-2 py-0.5 text-[9px] font-mono uppercase font-bold border border-[#111111]">
              System Reform Model
            </div>
          </div>
          <div className="p-2 bg-[#F4F0E8] border-t border-[#111111] text-[10px] font-mono text-zinc-800">
            <strong>Architecture Fig. 3.0:</strong> Procedural balance between clinical care and discovery.
          </div>
        </div>
      </div>

      {/* Diagram 1: The Diagnostic Bypass Loop */}
      {activeDiagram === 'loop' && (
        <div className="bg-white border border-[#111111] p-6 sm:p-8 space-y-6 animate-in fade-in shadow-xs">
          <div className="pb-4 border-b border-[#111111]">
            <h3 className="font-serif-headline text-2xl font-bold text-[#111111] flex items-center">
              <span className="text-[#CC0000] mr-2">●</span> The Competency Bypass Diagnostic Loop (Observed 2021–2026)
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-1">
              How the state shifts the burden of proof from investigating factual allegations to pathologizing the defendant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
            {/* Step 1 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-4 flex flex-col justify-between space-y-3">
              <div className="w-7 h-7 mx-auto bg-white border border-[#111111] text-[#111111] font-mono text-xs flex items-center justify-center font-bold">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-headline text-sm font-bold text-[#111111]">Citizen Report</h4>
                <p className="text-xs text-zinc-800 font-serif-body">
                  Citizen reports data breach (Accellion 1.6M) or technical stalking to police.
                </p>
              </div>
              <span className="text-[10px] font-mono text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 font-bold uppercase">
                Reports Ignored / Closed
              </span>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-4 flex flex-col justify-between space-y-3">
              <div className="w-7 h-7 mx-auto bg-white border border-[#111111] text-[#111111] font-mono text-xs flex items-center justify-center font-bold">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-headline text-sm font-bold text-[#111111]">Arrest & Low Threshold</h4>
                <p className="text-xs text-zinc-800 font-serif-body">
                  Arrest executed without warrant / complaint or via unvetted ex-parte order.
                </p>
              </div>
              <span className="text-[10px] font-mono text-white bg-[#CC0000] border border-[#CC0000] px-2 py-0.5 font-bold uppercase">
                Ghost Detention
              </span>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-4 flex flex-col justify-between space-y-3">
              <div className="w-7 h-7 mx-auto bg-white border border-[#111111] text-[#111111] font-mono text-xs flex items-center justify-center font-bold">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-headline text-sm font-bold text-[#111111]">Competency Bypass</h4>
                <p className="text-xs text-zinc-800 font-serif-body">
                  Defender/Court triggers RCW 10.77. Factual discovery suspended immediately.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#111111] bg-[#FFE600] border border-[#111111] px-2 py-0.5 font-bold uppercase">
                Discovery Tolled
              </span>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-4 flex flex-col justify-between space-y-3">
              <div className="w-7 h-7 mx-auto bg-white border border-[#111111] text-[#111111] font-mono text-xs flex items-center justify-center font-bold">
                4
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-headline text-sm font-bold text-[#111111]">Involuntary Hold</h4>
                <p className="text-xs text-zinc-800 font-serif-body">
                  Transfer to Harborview or Western State. Forced medication & diagnostic inflation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-white bg-[#CC0000] border border-[#CC0000] px-2 py-0.5 font-bold uppercase">
                Coercive Custody
              </span>
            </div>

            {/* Step 5 */}
            <div className="bg-[#F4F0E8] border-2 border-[#CC0000] p-4 flex flex-col justify-between space-y-3">
              <div className="w-7 h-7 mx-auto bg-[#CC0000] text-white font-mono text-xs flex items-center justify-center font-bold">
                5
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-headline text-sm font-bold text-[#111111]">Diagnostic Loop</h4>
                <p className="text-xs text-zinc-900 font-serif-body font-bold">
                  Documentation of failures is cited as "delusion", justifying further oversight.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#111111] bg-[#FFE600] px-2 py-0.5 flex items-center justify-center font-bold uppercase border border-[#111111]">
                <RefreshCw className="w-2.5 h-2.5 mr-1" /> Cycles Repeat
              </span>
            </div>
          </div>

          <div className="bg-[#F4F0E8] border-l-4 border-[#CC0000] p-4 text-xs sm:text-sm font-serif-body text-zinc-900 leading-relaxed border-t border-r border-b border-[#111111]">
            <strong className="text-[#111111] font-mono uppercase text-[11px] block mb-1">
              Structural Outcome of Current Architecture:
            </strong>
            The state avoids having to disprove complex allegations by converting the claimant into a patient, while avoiding standard speedy trial rules through endless competency continuances.
          </div>
        </div>
      )}

      {/* Diagram 2: The Parallel Review Framework */}
      {activeDiagram === 'parallel' && (
        <div className="bg-white border border-[#111111] p-6 sm:p-8 space-y-6 animate-in fade-in shadow-xs">
          <div className="pb-4 border-b border-[#111111]">
            <h3 className="font-serif-headline text-2xl font-bold text-[#111111] flex items-center">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mr-2" /> The "Parallel Review" Dual-Track System (Reform Model)
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-1">
              Decoupling clinical care from legal and evidentiary discovery obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Track 1 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-5 space-y-4">
              <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-widest">
                <span>Track 1: Clinical & Healthcare Stream</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-serif-body text-zinc-800">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Strict Informed Consent:</strong> Prohibiting forced neuroleptic administration without judicial hearing and independent second opinion.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Laboratory Verification:</strong> Requiring confirmatory diagnostic assays before problem-list entries (e.g. CD4 for HIV, lymphocytic ratio for neurosyphilis).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>No Legal Substitution:</strong> Clinical notes cannot be cited by prosecutors to dismiss factual claims.</span>
                </li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-[#F4F0E8] border border-[#111111] p-5 space-y-4">
              <div className="flex items-center space-x-2 text-blue-900 font-mono text-xs font-bold uppercase tracking-widest">
                <span>Track 2: Evidentiary & Due Process Stream</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-serif-body text-zinc-800">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span><strong>72-Hour Automatic Release Trigger:</strong> Jail booking software linked to prosecutors with mandatory release if no formal complaint filed.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span><strong>Independent Technical Forensics:</strong> Claims of data breach, traceroute traffic, or signal interference reviewed by certified IT/forensic experts.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span><strong>Prima Facie Evidence Threshold:</strong> State must demonstrate threshold proof of crime before competency proceedings can toll trial clocks.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Diagram 3: Quasi-Governmental Immunity Map */}
      {activeDiagram === 'immunity' && (
        <div className="bg-white border border-[#111111] p-6 sm:p-8 space-y-6 animate-in fade-in shadow-xs">
          <div className="pb-4 border-b border-[#111111]">
            <h3 className="font-serif-headline text-2xl font-bold text-[#111111] flex items-center">
              <Building2 className="w-6 h-6 text-[#CC0000] mr-2" /> Quasi-Governmental Immunity & Administrative Layering
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-1">
              How Interlocal Agreements (ILAs) under RCW 39.34 create indemnity shields that obscure constitutional accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#F4F0E8] p-4 border border-[#111111] space-y-2">
              <span className="font-mono font-bold text-[#111111] uppercase tracking-wider block">Port of Seattle</span>
              <p className="font-serif-body text-zinc-800 leading-relaxed">
                Operates under special port district authority with independent police and proprietary real estate charters.
              </p>
            </div>

            <div className="bg-[#F4F0E8] p-4 border border-[#111111] space-y-2">
              <span className="font-mono font-bold text-[#CC0000] uppercase tracking-wider block">KCRHA (Homelessness Auth.)</span>
              <p className="font-serif-body text-zinc-800 leading-relaxed">
                Interlocal entity with $13M unaccounted funds and -$44.7M cash deficit; currently facing legislative dissolution.
              </p>
            </div>

            <div className="bg-[#F4F0E8] p-4 border border-[#111111] space-y-2">
              <span className="font-mono font-bold text-[#111111] uppercase tracking-wider block">4Culture / SCIDpda</span>
              <p className="font-serif-body text-zinc-800 leading-relaxed">
                Public Development Authorities (PDAs) blending municipal housing subsidies with private corporate eviction protocols.
              </p>
            </div>

            <div className="bg-[#F4F0E8] p-4 border border-[#111111] space-y-2">
              <span className="font-mono font-bold text-blue-900 uppercase tracking-wider block">SPD / SPOG Union Pacts</span>
              <p className="font-serif-body text-zinc-800 leading-relaxed">
                Collective bargaining agreements establishing indemnity shields and record secrecy for off-duty activities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

