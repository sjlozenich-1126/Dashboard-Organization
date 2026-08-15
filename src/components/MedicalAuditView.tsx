import React, { useState } from 'react';
import { CSF_PANEL_LABS, DIAGNOSTIC_CASCADE_STEPS } from '../data/medicalAuditData';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  ArrowDown, 
  ShieldAlert, 
  Stethoscope,
  Microscope,
  Info,
  Scale,
  Camera
} from 'lucide-react';

export const MedicalAuditView: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredLabs = CSF_PANEL_LABS.filter((lab) => {
    if (filterStatus === 'all') return true;
    return lab.status === filterStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10 text-[#111111]">
      {/* Header - The Marshall Project Signature Investigative Kicker */}
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#111111] text-[#FFE600] font-mono text-xs font-bold uppercase tracking-widest border border-[#111111]">
          <Microscope className="w-3.5 h-3.5 text-[#FFE600]" />
          <span>Forensic Clinical & Laboratory Audit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-headline font-black text-[#111111] tracking-tight">
          Harborview Medical Center CSF & Diagnostic Audit (2021)
        </h2>
        <p className="font-serif-body text-base text-zinc-800 max-w-2xl mx-auto leading-relaxed">
          An objective laboratory review analyzing contradictory spinal fluid markers, unconfirmed infectious pathology, and their weaponization in judicial competency proceedings.
        </p>
      </div>

      {/* Two Mandatory Lines from the Historical Medical Record Banner with Photo Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-[#111111] p-5 sm:p-6 shadow-xs">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-start space-x-3">
            <Stethoscope className="w-6 h-6 text-[#CC0000] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">
                Primary Hospital Serology Citation (Harborview 03/27/2021 – 04/07/2021):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#F4F0E8] p-3 border border-[#111111] text-[#111111] font-bold">
                  • “FTA Result, CSF: <span className="bg-[#FFE600] px-1">Reactive !</span>”
                </div>
                <div className="bg-[#F4F0E8] p-3 border border-[#111111] text-[#111111] font-bold">
                  • “Serology: <span className="bg-[#FFE600] px-1">Positive !</span>” (VDRL 1:4)
                </div>
              </div>
              <p className="text-xs sm:text-sm font-serif-body text-zinc-800 leading-relaxed pt-1">
                These two lines formed the sole basis for clinical problem-list inflation, despite laboratory warnings of blood contamination and spinal fluid cell counts that contradicted neurosyphilis.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Lab Audit Editorial Image */}
        <div className="lg:col-span-4 border border-[#111111] overflow-hidden bg-zinc-100 flex flex-col justify-between">
          <div className="relative aspect-16/10 w-full">
            <img
              src="/src/assets/images/forensic_csf_audit_1786728018410.jpg"
              alt="Medical laboratory microscope, CSF serology vials, and forensic pathology records"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 left-2 bg-[#111111]/90 text-[#FFE600] px-2 py-0.5 text-[9px] font-mono uppercase font-bold tracking-wider border border-[#111111]">
              Clinical Pathology Audit
            </div>
          </div>
          <div className="p-2.5 bg-[#F4F0E8] border-t border-[#111111] text-[10px] font-mono text-zinc-800">
            <strong>Lab Audit Fig 2.0:</strong> Microscopic and CSF assay records cross-referenced against CDC diagnostic standards.
          </div>
        </div>
      </div>

      {/* Forensic Laboratory Findings Matrix */}
      <div className="bg-white border border-[#111111] p-5 sm:p-7 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#111111]">
          <div>
            <h3 className="font-serif-headline text-2xl font-bold text-[#111111]">
              Cerebrospinal Fluid (CSF) & Diagnostic Panel Analysis
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-0.5">
              Comparing hospital problem list assertions against laboratory printout data and pathology standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 font-mono text-xs">
            {['all', 'contradictory', 'abnormal', 'unconfirmed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 uppercase font-bold border transition-all cursor-pointer ${
                  filterStatus === status
                    ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-xs'
                    : 'bg-[#F4F0E8] text-[#111111] hover:bg-[#FFE600] border-[#111111]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLabs.map((lab, idx) => (
            <div
              key={idx}
              className="p-4 border border-[#111111] bg-[#FCFAF6] space-y-3 shadow-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-serif-headline text-base sm:text-lg font-bold text-[#111111]">
                  {lab.testName}
                </h4>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 border font-bold ${
                  lab.status === 'contradictory'
                    ? 'bg-[#CC0000] text-white border-[#CC0000]'
                    : lab.status === 'unconfirmed'
                    ? 'bg-[#FFE600] text-[#111111] border-[#111111]'
                    : 'bg-blue-100 text-blue-900 border-blue-400'
                }`}>
                  {lab.status}
                </span>
              </div>

              {/* Lab Result Reported */}
              <div className="bg-[#F4F0E8] p-2.5 border border-[#111111] font-mono text-xs text-[#111111]">
                <span className="text-zinc-600 text-[10px] block uppercase font-bold">Reported Result:</span>
                <span className="font-bold text-[#CC0000]">{lab.resultReported}</span>
              </div>

              {/* Forensic Breakdown */}
              <div className="space-y-2 text-xs font-serif-body">
                <div>
                  <span className="font-mono text-[10px] text-[#111111] uppercase font-bold block">
                    Hospital Clinical Interpretation:
                  </span>
                  <p className="text-zinc-800 leading-relaxed">{lab.clinicalInterpretation}</p>
                </div>

                <div className="bg-white p-2.5 border-l-4 border-[#CC0000] border-r border-t border-b border-[#111111]">
                  <span className="font-mono text-[10px] text-[#CC0000] uppercase font-bold flex items-center mb-1">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Forensic Contradiction:
                  </span>
                  <p className="text-zinc-900 leading-relaxed font-bold">{lab.forensicContradiction}</p>
                </div>

                <div className="text-[11px] text-zinc-800 font-serif-body pt-1">
                  <strong className="text-[#111111] font-mono uppercase text-[10px]">Court Impact:</strong> {lab.diagnosticImpact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Diagnostic Cascade & Competency Loop Visualizer */}
      <div className="bg-white border border-[#111111] p-5 sm:p-7 space-y-6 shadow-xs">
        <div className="pb-3 border-b border-[#111111]">
          <h3 className="font-serif-headline text-2xl font-bold text-[#111111]">
            The Medical-Legal Diagnostic Cascade
          </h3>
          <p className="text-xs font-mono text-zinc-600 mt-0.5">
            Step-by-step breakdown of how hospital diagnostics substituted for courtroom discovery (2021–2026).
          </p>
        </div>

        <div className="space-y-3 relative">
          {DIAGNOSTIC_CASCADE_STEPS.map((s, sIdx) => (
            <div key={sIdx} className="relative bg-[#F4F0E8] border border-[#111111] p-4 sm:p-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-[#111111] text-[#FFE600] font-mono font-bold text-xs flex items-center justify-center border border-[#111111]">
                    {s.step}
                  </span>
                  <h4 className="font-serif-headline text-base sm:text-lg font-bold text-[#111111]">
                    {s.title}
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#111111] font-bold bg-white px-2 py-0.5 border border-[#111111] uppercase">
                  Actor: {s.actor}
                </span>
              </div>

              <p className="font-serif-body text-sm text-zinc-900 leading-relaxed pl-8">
                {s.action}
              </p>

              <div className="pl-8 pt-1 text-xs font-mono text-[#CC0000] font-bold flex items-center space-x-1.5 uppercase">
                <span>Systemic Consequence:</span>
                <span className="text-[#111111] font-serif-body normal-case font-medium">{s.effect}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

