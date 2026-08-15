import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { 
  Lock, 
  Unlock, 
  Shield, 
  Radio, 
  PlusCircle, 
  Trash2, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Sliders, 
  Save, 
  X,
  Eye,
  AlertCircle
} from 'lucide-react';
import { TimelineEntry } from '../types';

export const AdminPortal: React.FC = () => {
  const { 
    settings, 
    login, 
    logout, 
    setMedicalPrivacyMode, 
    setDefaultTopicMode, 
    updateSiteHeadline, 
    customTimelineEntries, 
    addCustomTimelineEntry, 
    deleteCustomTimelineEntry,
    showAdminModal,
    setShowAdminModal,
    exportAllDataJSON
  } = useAdmin();

  const [emailInput, setEmailInput] = useState<string>(settings.userEmail || 'jscthebrand@gmail.com');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [headlineEdit, setHeadlineEdit] = useState<string>(settings.siteHeadline);

  // New Timeline Entry Form State
  const [newEventDate, setNewEventDate] = useState<string>('Feb 2026');
  const [newEventYear, setNewEventYear] = useState<number>(2026);
  const [newEventTitle, setNewEventTitle] = useState<string>('');
  const [newEventCategory, setNewEventCategory] = useState<'legal' | 'medical' | 'detention' | 'civil' | 'labor' | 'investigative' | 'environmental'>('investigative');
  const [newEventCaseNumber, setNewEventCaseNumber] = useState<string>('');
  const [newEventLocation, setNewEventLocation] = useState<string>('Seattle, WA');
  const [newEventSummary, setNewEventSummary] = useState<string>('');
  const [newEventQuote, setNewEventQuote] = useState<string>('');
  const [newEventAnomalies, setNewEventAnomalies] = useState<string>('');
  const [formSuccessMessage, setFormSuccessMessage] = useState<string>('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = login(emailInput, passwordInput);
    if (!success) {
      setLoginError('Invalid credentials. Please enter your email or admin access key.');
    }
  };

  const handleCreateTimelineEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim() || !newEventSummary.trim()) {
      alert('Please provide a title and summary for the timeline entry.');
      return;
    }

    const entry: TimelineEntry = {
      id: `custom-tl-${Date.now()}`,
      date: newEventDate,
      year: newEventYear,
      title: newEventTitle.trim(),
      category: newEventCategory,
      caseNumber: newEventCaseNumber.trim() || undefined,
      location: newEventLocation.trim() || 'Seattle, WA',
      summary: newEventSummary.trim(),
      quote: newEventQuote.trim() || undefined,
      anomalies: newEventAnomalies.trim() ? newEventAnomalies.split('\n').filter(Boolean) : undefined,
      statusTag: 'DOCUMENTED'
    };

    addCustomTimelineEntry(entry);
    setFormSuccessMessage('Timeline entry added successfully! It is now live in the Master Timeline.');
    setNewEventTitle('');
    setNewEventSummary('');
    setNewEventQuote('');
    setNewEventAnomalies('');
    setTimeout(() => setFormSuccessMessage(''), 4000);
  };

  const handleCopyJSON = () => {
    const data = exportAllDataJSON();
    navigator.clipboard.writeText(data);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleDownloadJSON = () => {
    const data = exportAllDataJSON();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `demopocrisy-admin-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!showAdminModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F8F7F4] border-[2px] border-[#111111] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-[#111111]">
        
        {/* Modal Close Button */}
        <button
          onClick={() => setShowAdminModal(false)}
          className="absolute top-4 right-4 p-1.5 bg-white border border-[#111111] hover:bg-[#CC0000] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="border-b border-[#111111] pb-4 space-y-1">
          <div className="mono text-[#CC0000] flex items-center space-x-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Administrative Control & Author Dashboard</span>
          </div>
          <h2 className="h-hero text-2xl sm:text-3xl text-[#111111]">
            Content Management & Privacy Configuration
          </h2>
          <p className="font-serif-body text-xs sm:text-sm text-zinc-700">
            Control public visibility of personal medical records, configure the Electronic Harassment/V2K dossier topic, add timeline entries, and export updates.
          </p>
        </div>

        {/* Not Logged In - Sign In Form */}
        {!settings.isLoggedIn ? (
          <div className="bg-white border border-[#111111] p-6 space-y-4 max-w-lg mx-auto">
            <div className="flex items-center space-x-2 text-[#111111] font-serif-headline font-bold text-lg">
              <Shield className="w-5 h-5 text-[#CC0000]" />
              <span>Sign In as Author / Site Administrator</span>
            </div>

            <p className="text-xs font-serif-body text-zinc-600">
              Sign in to manage privacy settings and post direct updates to the ledger.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-3">
              <div>
                <label className="block mono text-[11px] text-[#111111] mb-1">
                  Author Email:
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="jscthebrand@gmail.com"
                  className="w-full bg-[#EFEDE8] border border-[#111111] px-3 py-2 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#CC0000]"
                />
              </div>

              <div>
                <label className="block mono text-[11px] text-[#111111] mb-1">
                  Access Key / Password:
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter access key or leave blank for owner auto-auth"
                  className="w-full bg-[#EFEDE8] border border-[#111111] px-3 py-2 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#CC0000]"
                />
              </div>

              {loginError && (
                <div className="text-xs font-mono text-[#CC0000] bg-red-50 p-2 border border-[#CC0000]">
                  {loginError}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full py-2 bg-[#111111] hover:bg-[#CC0000] text-white text-xs font-mono font-bold uppercase transition-colors border border-[#111111] cursor-pointer"
                >
                  Authorize & Unlock Admin Controls
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Logged In - Full Control Center */
          <div className="space-y-6">
            
            {/* User Session Bar */}
            <div className="bg-[#EFEDE8] border border-[#111111] p-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-pulse" />
                <span className="font-bold text-[#111111]">Active Admin: {settings.userEmail}</span>
                <span className="text-zinc-500">({settings.adminName})</span>
              </div>

              <button
                onClick={logout}
                className="px-3 py-1 bg-white hover:bg-[#CC0000] hover:text-white border border-[#111111] text-[11px] font-mono font-bold uppercase cursor-pointer"
              >
                Sign Out
              </button>
            </div>

            {/* Privacy & Scope Controls Section */}
            <div className="bg-white border border-[#111111] p-5 space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#111111] pb-2">
                <Sliders className="w-4 h-4 text-[#CC0000]" />
                <h3 className="font-serif-headline text-lg font-bold text-[#111111]">
                  1. Public Visibility & Topic Focus Settings
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Medical Privacy Setting */}
                <div className="bg-[#EFEDE8] p-4 border border-[#111111] space-y-2">
                  <label className="block mono text-xs font-bold text-[#111111]">
                    Medical / CSF Lab Privacy Setting:
                  </label>
                  <p className="text-xs font-serif-body text-zinc-700">
                    Controls whether personal diagnostic lab data is visible or redacted to protect medical privacy:
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {[
                      { id: 'redacted', label: 'Redacted (Recommended)', desc: 'Masks personal clinical values while preserving legal criticism of institutional flaws' },
                      { id: 'private', label: 'Private / Dedicated V2K Mode', desc: 'Hides medical CSF records entirely; page focuses 100% on Electronic Harassment & V2K evidence' },
                      { id: 'public', label: 'Public / Full Lab Transparency', desc: 'Displays full unredacted laboratory panel' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMedicalPrivacyMode(opt.id as any)}
                        className={`w-full text-left p-2 border text-xs font-mono transition-colors cursor-pointer ${
                          settings.medicalPrivacyMode === opt.id
                            ? 'bg-[#111111] text-white border-[#111111] font-bold'
                            : 'bg-white text-[#111111] hover:bg-zinc-100 border-zinc-300'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{opt.label}</span>
                          {settings.medicalPrivacyMode === opt.id && <Check className="w-3.5 h-3.5 text-[#FFE600]" />}
                        </div>
                        <div className="text-[11px] font-serif-body text-zinc-400 mt-0.5">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Default Page Topic Mode */}
                <div className="bg-[#EFEDE8] p-4 border border-[#111111] space-y-2">
                  <label className="block mono text-xs font-bold text-[#111111]">
                    Primary Section 4 Topic Mode:
                  </label>
                  <p className="text-xs font-serif-body text-zinc-700">
                    Choose which topic is highlighted when visitors click Section 4 in navigation:
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {[
                      { id: 'surveillance', label: 'Electronic Harassment & V2K Evidence', desc: 'Frey Effect, Directional Audio, RF Spectrum Audits & Defense Patents' },
                      { id: 'dual', label: 'Dual Track (Acoustic Evidence + Medicalization)', desc: 'Direct side-by-side comparison with psychiatric diagnostic mechanisms' },
                      { id: 'medical', label: 'Clinical Laboratory Audit', desc: 'Traditional CSF serology critique' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setDefaultTopicMode(opt.id as any)}
                        className={`w-full text-left p-2 border text-xs font-mono transition-colors cursor-pointer ${
                          settings.defaultTopicMode === opt.id
                            ? 'bg-[#111111] text-white border-[#111111] font-bold'
                            : 'bg-white text-[#111111] hover:bg-zinc-100 border-zinc-300'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{opt.label}</span>
                          {settings.defaultTopicMode === opt.id && <Check className="w-3.5 h-3.5 text-[#FFE600]" />}
                        </div>
                        <div className="text-[11px] font-serif-body text-zinc-400 mt-0.5">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Timeline Event Form */}
            <div className="bg-white border border-[#111111] p-5 space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#111111] pb-2">
                <PlusCircle className="w-4 h-4 text-[#CC0000]" />
                <h3 className="font-serif-headline text-lg font-bold text-[#111111]">
                  2. Add New Forensic Record / Timeline Event
                </h3>
              </div>

              <form onSubmit={handleCreateTimelineEntry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block mono text-[11px] text-[#111111] mb-1">Date Display:</label>
                    <input
                      type="text"
                      value={newEventDate}
                      onChange={(e) => setNewEventDate(e.target.value)}
                      placeholder="e.g. Feb 2026"
                      className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block mono text-[11px] text-[#111111] mb-1">Year (Integer):</label>
                    <input
                      type="number"
                      value={newEventYear}
                      onChange={(e) => setNewEventYear(parseInt(e.target.value) || 2026)}
                      className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block mono text-[11px] text-[#111111] mb-1">Category:</label>
                    <select
                      value={newEventCategory}
                      onChange={(e) => setNewEventCategory(e.target.value as any)}
                      className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                    >
                      <option value="investigative">Investigative / Surveillance</option>
                      <option value="legal">Legal & Court Orders</option>
                      <option value="detention">Arrests & Jail Custody</option>
                      <option value="medical">Medical / Psychiatric Holds</option>
                      <option value="civil">Civil & Housing</option>
                      <option value="labor">Labor Union Negotiations</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block mono text-[11px] text-[#111111] mb-1">Event Title:</label>
                    <input
                      type="text"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                      placeholder="e.g. Spectrum Audit Log of 915 MHz Nocturnal Burst Signals"
                      className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block mono text-[11px] text-[#111111] mb-1">Case # or Docket (Optional):</label>
                    <input
                      type="text"
                      value={newEventCaseNumber}
                      onChange={(e) => setNewEventCaseNumber(e.target.value)}
                      placeholder="e.g. 26-2-01443-1 SEA"
                      className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mono text-[11px] text-[#111111] mb-1">Summary / Forensic Narrative:</label>
                  <textarea
                    rows={3}
                    value={newEventSummary}
                    onChange={(e) => setNewEventSummary(e.target.value)}
                    placeholder="Enter detailed facts, measurements, or procedural findings..."
                    className="w-full bg-[#EFEDE8] border border-[#111111] p-2.5 text-xs font-serif-body"
                  />
                </div>

                <div>
                  <label className="block mono text-[11px] text-[#111111] mb-1">Key Quote or Transcript Excerpt (Optional):</label>
                  <input
                    type="text"
                    value={newEventQuote}
                    onChange={(e) => setNewEventQuote(e.target.value)}
                    placeholder="e.g. 'Signal frequency modulated with audible heterodyne components.'"
                    className="w-full bg-[#EFEDE8] border border-[#111111] px-2.5 py-1.5 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block mono text-[11px] text-[#111111] mb-1">Procedural Anomalies / Bullet Points (One per line):</label>
                  <textarea
                    rows={2}
                    value={newEventAnomalies}
                    onChange={(e) => setNewEventAnomalies(e.target.value)}
                    placeholder="• Anomaly 1&#10;• Anomaly 2"
                    className="w-full bg-[#EFEDE8] border border-[#111111] p-2.5 text-xs font-mono"
                  />
                </div>

                {formSuccessMessage && (
                  <div className="bg-emerald-50 text-emerald-800 p-2.5 border border-emerald-600 text-xs font-mono font-bold flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>{formSuccessMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#CC0000] hover:bg-[#111111] text-white text-xs font-mono font-bold uppercase transition-colors border border-[#111111] cursor-pointer"
                >
                  Publish New Event to Ledger
                </button>
              </form>

              {/* Display Custom Entries Added */}
              {customTimelineEntries.length > 0 && (
                <div className="pt-4 border-t border-[#111111] space-y-2">
                  <div className="mono text-xs text-[#111111] font-bold">
                    Custom Added Timeline Entries ({customTimelineEntries.length}):
                  </div>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto">
                    {customTimelineEntries.map((item) => (
                      <div key={item.id} className="bg-[#EFEDE8] p-2 border border-[#111111] flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="font-bold text-[#CC0000] mr-2">[{item.date}]</span>
                          <span className="text-[#111111] font-semibold">{item.title}</span>
                        </div>
                        <button
                          onClick={() => deleteCustomTimelineEntry(item.id)}
                          className="p-1 text-zinc-600 hover:text-[#CC0000] hover:bg-white border border-transparent hover:border-[#111111] cursor-pointer"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Export & Data Backup Section */}
            <div className="bg-[#EFEDE8] border border-[#111111] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="space-y-0.5">
                <div className="font-bold text-[#111111] uppercase">Export & Sync Ledger Data</div>
                <div className="text-[11px] text-zinc-600">Export modified settings and timeline additions as JSON.</div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyJSON}
                  className="px-3 py-1.5 bg-white hover:bg-[#111111] hover:text-white border border-[#111111] font-bold uppercase cursor-pointer flex items-center space-x-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedNotification ? 'Copied!' : 'Copy JSON'}</span>
                </button>

                <button
                  onClick={handleDownloadJSON}
                  className="px-3 py-1.5 bg-[#111111] hover:bg-[#CC0000] text-white border border-[#111111] font-bold uppercase cursor-pointer flex items-center space-x-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Backup</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
