import React, { useState } from 'react';
import { CSF_PANEL_LABS, DIAGNOSTIC_CASCADE_STEPS } from '../data/medicalAuditData';
import { 
  SURVEILLANCE_EVIDENCE_ITEMS, 
  TECHNICAL_COMPARISON_MATRIX, 
  SCIENTIFIC_REFERENCES_V2K 
} from '../data/surveillanceData';
import { useAdmin } from '../context/AdminContext';
import { 
  Radio, 
  Shield, 
  ShieldAlert, 
  Lock, 
  Eye, 
  EyeOff, 
  FileText, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Waves, 
  BookOpen, 
  Sliders, 
  Search
} from 'lucide-react';

export const SurveillanceAndAuditView: React.FC = () => {
  const { settings, setMedicalPrivacyMode, setDefaultTopicMode, setShowAdminModal } = useAdmin();
  
  const [activeTab, setActiveTab] = useState<'surveillance' | 'medicalization' | 'labs' | 'matrix'>(
    settings.defaultTopicMode === 'medical' ? 'labs' : 'surveillance'
  );
  
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSurveillance = SURVEILLANCE_EVIDENCE_ITEMS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.technicalMechanism.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-[#111111]">
      
      {/* Privacy & Admin Control Banner */}
      <div className="bg-[#EFEDE8] border-[1.5px] border-[#111111] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[#111111] text-white">
            <Radio className="w-5 h-5 text-[#FFE600]" />
          </div>
          <div>
            <div className="mono text-[#CC0000] flex items-center space-x-1.5">
              <span>Evidentiary Scope & Privacy Configuration</span>
              <span className="text-zinc-500">•</span>
              <span className="uppercase text-zinc-700">Mode: {settings.medicalPrivacyMode}</span>
            </div>
            <h3 className="font-serif-headline text-base font-bold text-[#111111]">
              Technological Surveillance, RF / V2K Acoustic Audits & Institutional Response
            </h3>
          </div>
        </div>

        {/* Quick Admin Settings Selector */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="mono text-[10px] text-zinc-600 hidden lg:inline">Medical Privacy:</span>
          <button
            onClick={() => setMedicalPrivacyMode('redacted')}
            title="Redact specific clinical values for privacy while showing technical findings"
            className={`px-2.5 py-1 text-xs font-mono font-bold uppercase border transition-colors cursor-pointer flex items-center space-x-1 ${
              settings.medicalPrivacyMode === 'redacted'
                ? 'bg-[#111111] text-[#FFE600] border-[#111111]'
                : 'bg-white text-[#111111] hover:bg-zinc-200 border-[#111111]'
            }`}
          >
            <Shield className="w-3 h-3" />
            <span>Redacted</span>
          </button>

          <button
            onClick={() => setMedicalPrivacyMode('private')}
            title="Dedicate page exclusively to Electronic Harassment / V2K and hide medical records"
            className={`px-2.5 py-1 text-xs font-mono font-bold uppercase border transition-colors cursor-pointer flex items-center space-x-1 ${
              settings.medicalPrivacyMode === 'private'
                ? 'bg-[#CC0000] text-white border-[#CC0000]'
                : 'bg-white text-[#111111] hover:bg-zinc-200 border-[#111111]'
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>V2K Only (Private Labs)</span>
          </button>

          <button
            onClick={() => setMedicalPrivacyMode('public')}
            title="Show full CSF laboratory forensic audit"
            className={`px-2.5 py-1 text-xs font-mono font-bold uppercase border transition-colors cursor-pointer flex items-center space-x-1 ${
              settings.medicalPrivacyMode === 'public'
                ? 'bg-emerald-900 text-white border-emerald-900'
                : 'bg-white text-[#111111] hover:bg-zinc-200 border-[#111111]'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Full Labs</span>
          </button>

          {!settings.isLoggedIn && (
            <button
              onClick={() => setShowAdminModal(true)}
              className="px-2.5 py-1 text-xs font-mono font-bold uppercase bg-[#111111] text-white hover:bg-[#CC0000] transition-colors border border-[#111111] cursor-pointer ml-2"
            >
              Admin Sign-In
            </button>
          )}
        </div>
      </div>

      {/* Main Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <div className="mono text-[#CC0000]">
          Section 4.0 // Technical Dossier & Empirical Bioeffects
        </div>
        <h2 className="h-hero text-3xl sm:text-4xl text-[#111111]">
          Electronic Harassment, Voice-to-Skull (V2K) & Institutional Medicalization
        </h2>
        <p className="editorial-text text-sm sm:text-base text-zinc-700 max-w-2xl mx-auto">
          Scientific documentation on the Microwave Auditory (Frey) Effect, directional parametric acoustic heterodyning, urban RF spectrum anomalies, and the institutional mechanism that weaponizes clinical labels against physical surveillance reports.
        </p>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex justify-center">
        <div className="bg-[#EFEDE8] p-1 border-[1.5px] border-[#111111] flex flex-wrap gap-1">
          <button
            onClick={() => setActiveTab('surveillance')}
            className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeTab === 'surveillance'
                ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-[#FFE600]" />
            <span>V2K & Acoustic Tech Evidence</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>Technical vs. Psychiatric Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('medicalization')}
            className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeTab === 'medicalization'
                ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>The Medicalization Loop (5-Step)</span>
          </button>

          {settings.medicalPrivacyMode !== 'private' && (
            <button
              onClick={() => setActiveTab('labs')}
              className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === 'labs'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                  : 'bg-transparent text-[#111111] border-transparent hover:border-[#111111] hover:bg-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {settings.medicalPrivacyMode === 'redacted' ? 'Redacted CSF Lab Review' : 'Full CSF Serology Audit'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: Electronic Harassment / V2K & Acoustic Tech Evidence */}
      {activeTab === 'surveillance' && (
        <div className="space-y-6">
          
          {/* Filter & Category Controls */}
          <div className="bg-[#EFEDE8] border-[1.5px] border-[#111111] p-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search technical foundations, Frey effect, patents..."
                className="w-full bg-white border border-[#111111] pl-8 pr-3 py-1.5 text-xs text-[#111111] font-mono focus:outline-none focus:border-[#CC0000]"
              />
              <Search className="w-3.5 h-3.5 text-[#111111] absolute left-2.5 top-2.5" />
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto">
              {[
                { id: 'all', label: 'All Evidence' },
                { id: 'technical_foundation', label: 'Biophysics & MAE' },
                { id: 'declassified_doc', label: 'Declassified DoD' },
                { id: 'patent_citation', label: 'US Patents' },
                { id: 'empirical_log', label: 'Spectrum Logs' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2 py-1 text-xs font-mono font-bold uppercase transition-colors border cursor-pointer shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] hover:bg-[#EFEDE8] border-[#111111]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evidence Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSurveillance.map((item) => (
              <div
                key={item.id}
                className="bg-white border-[1.5px] border-[#111111] p-6 space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#111111] pb-2">
                    <span className="mono text-[#CC0000]">{item.dateOrYear}</span>
                    <span className="text-[10px] font-mono font-bold uppercase bg-[#EFEDE8] px-2 py-0.5 border border-[#111111] text-[#111111]">
                      {item.category.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-headline font-bold text-[#111111]">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-zinc-700">
                    <strong>Source / Citation:</strong> {item.source}
                  </div>

                  <p className="font-serif-body text-sm text-zinc-800 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Technical Biophysics / Mechanism Box */}
                  <div className="bg-[#EFEDE8] border-l-4 border-[#111111] p-3 space-y-1 text-xs font-serif-body text-zinc-800">
                    <div className="mono text-[#111111] font-bold">Physical / Engineering Mechanism:</div>
                    <p>{item.technicalMechanism}</p>
                  </div>

                  {/* Key Parameters */}
                  {item.keyParameters && (
                    <div className="bg-white border border-[#111111] p-3 text-xs font-mono space-y-1.5">
                      {item.keyParameters.frequencyRange && (
                        <div className="flex justify-between border-b border-zinc-200 pb-1">
                          <span className="text-zinc-600">Frequency Band:</span>
                          <span className="font-bold text-[#111111]">{item.keyParameters.frequencyRange}</span>
                        </div>
                      )}
                      {item.keyParameters.modulationType && (
                        <div className="flex justify-between border-b border-zinc-200 pb-1">
                          <span className="text-zinc-600">Modulation:</span>
                          <span className="font-bold text-[#111111]">{item.keyParameters.modulationType}</span>
                        </div>
                      )}
                      {item.keyParameters.biologicalEffect && (
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Bioeffect:</span>
                          <span className="font-bold text-[#CC0000]">{item.keyParameters.biologicalEffect}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Institutional Weaponization Warning */}
                  <div className="bg-red-50 border border-[#CC0000] p-3 text-xs font-serif-body text-[#111111] space-y-1">
                    <div className="mono text-[#CC0000] font-bold flex items-center">
                      <ShieldAlert className="w-3.5 h-3.5 mr-1" /> Institutional Weaponization Pattern:
                    </div>
                    <p>{item.institutionalWeaponization}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-[#111111]/20 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 bg-[#EFEDE8] border border-[#111111] text-[#111111] font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Reference Bibliography */}
          <div className="bg-[#EFEDE8] border-[1.5px] border-[#111111] p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#CC0000]" />
              <h4 className="font-serif-headline text-lg font-bold text-[#111111]">
                Peer-Reviewed Scientific Foundations & Literature (Frey Effect & Acoustic Phasing)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {SCIENTIFIC_REFERENCES_V2K.map((ref) => (
                <div key={ref.id} className="bg-white border border-[#111111] p-3 space-y-1 text-xs">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="font-bold text-[#CC0000]">Ref [{ref.id}]</span>
                    <span className="text-zinc-600 font-bold">{ref.year}</span>
                  </div>
                  <div className="font-serif-headline font-bold text-[#111111] text-sm">
                    {ref.title}
                  </div>
                  <div className="text-zinc-700 font-serif-body">
                    {ref.authors} — <em>{ref.journal}</em>
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 pt-1">
                    {ref.doiOrCitation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Technical vs. Psychiatric Assumptions Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-6">
          <div className="bg-white border-[1.5px] border-[#111111] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-[#111111] pb-4 space-y-2">
              <div className="mono text-[#CC0000]">Systemic Discrepancy Audit</div>
              <h3 className="font-serif-headline text-2xl font-bold text-[#111111]">
                Physical Electronic Surveillance vs. Psychiatric Institutional Assumptions
              </h3>
              <p className="font-serif-body text-sm text-zinc-800">
                A direct analytical side-by-side comparison between documented biophysical microwave/acoustic principles and the subjective diagnostic assumptions utilized by municipal court evaluators.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[#111111] text-xs">
                <thead>
                  <tr className="bg-[#111111] text-white font-mono">
                    <th className="p-3.5 border border-[#111111] w-1/4">Forensic Dimension</th>
                    <th className="p-3.5 border border-[#111111] w-3/8 text-[#FFE600]">
                      Physical Electronic & Acoustic Reality (Empirical)
                    </th>
                    <th className="p-3.5 border border-[#111111] w-3/8 text-zinc-300">
                      Psychiatric & Court Label (Administrative)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111111]">
                  {TECHNICAL_COMPARISON_MATRIX.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#EFEDE8]'}>
                      <td className="p-3.5 font-mono font-bold text-[#111111] border border-[#111111]">
                        {row.characteristic}
                      </td>
                      <td className="p-3.5 font-serif-body text-zinc-900 border border-[#111111] leading-relaxed">
                        <strong className="text-[#CC0000] font-mono mr-1">✓</strong> {row.electronicSurveillance}
                      </td>
                      <td className="p-3.5 font-serif-body text-zinc-700 border border-[#111111] leading-relaxed">
                        <strong className="text-zinc-500 font-mono mr-1">✗</strong> {row.clinicalPsychiatricAssumption}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#EFEDE8] border-l-4 border-[#CC0000] p-4 text-xs sm:text-sm font-serif-body text-zinc-800 leading-relaxed">
              <strong>Forensic Legal Conclusion:</strong> Treating physical complaints of acoustic directionality and electromagnetic exposure as internal neurochemical hallucinations without performing standard environmental spectrum analysis or digital subpoenas creates a constitutional due process failure, denying the individual evidentiary discovery under the Fourth and Fourteenth Amendments.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: The 5-Step Medicalization Loop */}
      {activeTab === 'medicalization' && (
        <div className="space-y-6">
          <div className="bg-white border-[1.5px] border-[#111111] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-[#111111] pb-4 space-y-2">
              <div className="mono text-[#CC0000]">Administrative Workflow Mapping</div>
              <h3 className="font-serif-headline text-2xl font-bold text-[#111111]">
                The Diagnostic Displacement Pipeline (RCW 10.77 Incompetency Loop)
              </h3>
              <p className="font-serif-body text-sm text-zinc-800">
                How administrative institutions transform whistleblowing, landlord disputes, and digital surveillance reports into court-ordered medical detentions.
              </p>
            </div>

            <div className="space-y-4">
              {DIAGNOSTIC_CASCADE_STEPS.map((step) => (
                <div key={step.step} className="bg-[#EFEDE8] border border-[#111111] p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex md:flex-col items-center justify-center shrink-0 w-12 h-12 bg-[#111111] text-white font-mono font-bold text-lg border border-[#111111]">
                    0{step.step}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-serif-headline text-lg font-bold text-[#111111]">
                        {step.title}
                      </h4>
                      <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 border border-[#111111] text-[#111111]">
                        Actor: {step.actor}
                      </span>
                    </div>
                    <p className="font-serif-body text-sm text-zinc-800 leading-relaxed">
                      <strong>Procedural Action:</strong> {step.action}
                    </p>
                    <div className="text-xs font-mono text-[#CC0000] font-bold bg-white p-2 border border-[#111111]">
                      Systemic Impact: {step.effect}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Redacted or Full CSF Laboratory Audit */}
      {activeTab === 'labs' && settings.medicalPrivacyMode !== 'private' && (
        <div className="space-y-6">
          <div className="bg-white border-[1.5px] border-[#111111] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-[#111111] pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="mono text-[#CC0000]">Clinical Serology Review</div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 uppercase border ${
                  settings.medicalPrivacyMode === 'redacted'
                    ? 'bg-[#111111] text-[#FFE600] border-[#111111]'
                    : 'bg-emerald-800 text-white border-emerald-800'
                }`}>
                  {settings.medicalPrivacyMode === 'redacted' ? 'Privacy Redacted Mode' : 'Public Disclosed Mode'}
                </span>
              </div>
              <h3 className="font-serif-headline text-2xl font-bold text-[#111111]">
                Harborview Medical Center CSF Panel & Pathological Discrepancies
              </h3>
              <p className="font-serif-body text-sm text-zinc-800">
                {settings.medicalPrivacyMode === 'redacted'
                  ? 'Specific personal diagnostic numbers are summarized and redacted to protect medical privacy while preserving the legal analysis of diagnostic contradictions.'
                  : 'Full unredacted pathological records comparing hospital diagnostic claims with laboratory findings.'}
              </p>
            </div>

            <div className="space-y-4">
              {CSF_PANEL_LABS.map((item, idx) => (
                <div key={idx} className="bg-[#EFEDE8] border border-[#111111] p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#111111]/20 pb-2">
                    <span className="font-mono text-xs font-bold text-[#111111]">{item.testName}</span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 border ${
                      item.status === 'contradictory' ? 'bg-[#CC0000] text-white border-[#CC0000]' :
                      item.status === 'unconfirmed' ? 'bg-amber-600 text-white border-amber-600' :
                      'bg-[#111111] text-white border-[#111111]'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 border border-[#111111] space-y-1">
                      <div className="mono text-zinc-600">Hospital Claimed Interpretation:</div>
                      <p className="font-serif-body text-zinc-800">{item.clinicalInterpretation}</p>
                    </div>

                    <div className="bg-white p-3 border border-[#111111] space-y-1">
                      <div className="mono text-[#CC0000]">Forensic Laboratory Contradiction:</div>
                      <p className="font-serif-body text-zinc-800 font-medium">
                        {settings.medicalPrivacyMode === 'redacted'
                          ? item.forensicContradiction.replace(/\b\d+ cells\/uL\b/g, '[REDACTED COUNT]')
                          : item.forensicContradiction}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 border border-[#111111] text-xs font-mono text-zinc-700">
                    <strong>Court & Legal Disposition Impact:</strong> {item.diagnosticImpact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
