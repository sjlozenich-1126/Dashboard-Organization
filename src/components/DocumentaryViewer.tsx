import React, { useState } from 'react';
import { 
  Archive, 
  Search, 
  Copy, 
  Check, 
  Printer, 
  FileText, 
  ShieldAlert, 
  Activity, 
  ExternalLink,
  Users,
  Radio,
  Building,
  Terminal
} from 'lucide-react';

interface StatementDoc {
  id: string;
  title: string;
  category: string;
  date: string;
  icon: React.ReactNode;
  summary: string;
  fullText: string[];
  publicStats?: string[];
  keyTerms?: string[];
}

export const STATEMENTS_ARCHIVE: StatementDoc[] = [
  {
    id: 'v2k-statement',
    title: 'Voice-to-Skull (V2K) & Electronic Harassment Statement',
    category: 'Sensory & Technological Intrusion',
    date: '2020 – Present',
    icon: <Radio className="w-4 h-4 text-purple-400" />,
    summary: 'Personal account of continuous remote-directed sensory intrusion, physical symptoms, Swedish Hospital visit, and the systemic dismissal by institutions as psychiatric symptoms.',
    fullText: [
      "Prior to my arrest, I went to the emergency room at Swedish Hospital to report that I was being tortured through electronic harassment. During my visit, hospital staff used a magnet over the top of my head and told me there was a microchip implanted in my skull, then abruptly told me to leave. I still do not understand why they said this or what it meant.",
      "Every day since, I am forced to endure relentless psychological and physical torment through what I believe to be advanced weaponry—so-called 'voice-to-skull' technology or psycho-electromagnetic devices. My abusers use remote-directed signals—microwaves, plasma rays, radio frequencies—that connect directly to my skull and nervous system. These signals create constant sounds inside my head: people taunting me, reading aloud anything I read, making vile sexual remarks to destabilize me. Worse, I am forced to hear the horrifying sounds of children crying, being assaulted, and murdered—sounds so graphic and cruel that they push me toward despair.",
      "This constant assault causes anxiety, sleeplessness, loss of concentration, and physical pain: relentless itching, stomach pain, muscle aches, and sudden sharp sensations that feel like targeted attacks. My abusers threaten me daily, urging me to kill myself. They claim they can access my thoughts, my senses—hearing what I hear and seeing what I see—wherever I am.",
      "I fear my abusers intend to cause permanent damage or kill me outright. I believe they have used EMP-like attacks on my body, dropping my heart rate in seconds to mimic a heart attack, or targeting my brain with signals that cause my face muscles to sag and my speech to slur, as if inducing a stroke. One night while I slept, I woke to a piercing beep inside my skull and heard someone say, 'This is a CSC data breach,' followed by the sensation of my chest collapsing and my body dropping weightlessly.",
      "This technology is invisible, undetectable by standard medical imaging—MRIs and X-rays have shown nothing, nor did jail medical checks. But the damage and terror are real. I am terrified that if this continues, I will be permanently harmed, silenced, or killed."
    ],
    keyTerms: ['Voice-to-Skull (V2K)', 'Swedish Hospital Magnet Exam', 'CSC Data Breach', 'Sensory Intrusion', 'Acoustic Harassment']
  },
  {
    id: 'missing-neighbors',
    title: 'Statement Regarding Missing Neighbors & Real Estate Churn',
    category: 'Environmental & Neighborhood Observations',
    date: '2020 – 2021',
    icon: <Users className="w-4 h-4 text-amber-400" />,
    summary: 'Observations of neighbor disappearances, emergency response 911 calls across two blocks, and rapid rezoning from single-family homes to multi-family condos.',
    fullText: [
      "In the neighborhood where I once lived in Seattle, I began to notice that several of my neighbors had gone missing. Concerned for their safety, I reported what I observed. On one occasion, I called the police to request a wellness check at the house next door. I had not seen my neighbor or her children for several months, and one evening I heard what sounded like a young girl’s scream being muffled by the noise of a blow dryer.",
      "Not long after, I began experiencing what I can only describe as harassment and electronic torture—tactics that appeared designed to drive me from the neighborhood or discredit me. This campaign of intimidation coincided with my eventual arrest, the filing of a protection order against me, and repeated claims that I was 'delusional.'",
      "After being forced from the home I was renting, I looked into the situation further. What I discovered was alarming: emergency response logs showed 911 calls to nearly every house across two blocks of the street where I had lived. Soon afterward, those same homes were vacated, sold in rapid succession, and slated for redevelopment. The entire area was rezoned from single-family residences to multi-family condos, and demolition for new construction is now underway.",
      "Around the same time, the county publicly announced it was scrubbing 'racist language' from housing deeds—a move positioned as a gesture of equity. But I believe this served another purpose: quietly altering deed records to cover the unlawful transfer of homes taken from missing residents. From my perspective, what has been presented publicly as urban renewal conceals something much darker: a pattern of disappearances, forced turnover, and possible real estate crime."
    ],
    keyTerms: ['Wellness Check 911 Call', 'Deed Registry Scrubbing', 'Neighborhood Rezoning', 'Property Turnover']
  },
  {
    id: 'child-abuse-records',
    title: 'Statement on Child Exploitation & Documented Public Records',
    category: 'Public Records & Watchdog Data',
    date: '2021 – 2024 Context',
    icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
    summary: 'Connecting personal auditory reports with officially published government data and nonprofit statistics regarding child trafficking and missing minors in King County.',
    fullText: [
      "Beyond what I am forced to hear, the public record is full of evidence of systemic child exploitation. Each year, reports are released documenting widespread trafficking and sexual abuse. Whistleblowers and former officials have spoken of this issue from classified perspectives.",
      "Closer to home, more than 100 state employees at a juvenile detention center were identified as convicted sex offenders, the former head of Kitsap County 911 was arrested in a King County sex sting, and even a King County Sheriff’s Office employee was exposed as a child molester.",
      "Despite this evidence, whenever I have raised my concerns with agencies or departments, I have been ignored, dismissed, or even arrested—told I am 'delusional' rather than taken seriously. Yet the abuse of children is real, documented, and ongoing."
    ],
    publicStats: [
      '300 to 500 children: Port of Seattle 2018 human trafficking report',
      '500 to 700 children: King County Prosecuting Attorney / FBI 2024 report',
      '1,901 missing persons in WA State (WSP MUPU May 2020), 861 under age 17',
      '733 recovered child trafficking victims assisted by NCMEC in 2021'
    ],
    keyTerms: ['WSP MUPU Records', 'Port of Seattle Statistics', 'Kitsap 911 Arrest', 'NCMEC Data']
  },
  {
    id: 'helicopter-tracking',
    title: 'Statement on Aerial Tracking & Audio Verification',
    category: 'Technical Verification',
    date: '2021 – 2023',
    icon: <Activity className="w-4 h-4 text-cyan-400" />,
    summary: 'Correlating reported auditory intrusions with physical real-time flight tracking applications over residence.',
    fullText: [
      "After each event, I would hear the sound of helicopters in the background—presumably involved in transport—followed, typically within an hour, by the same helicopter passing directly over my apartment building.",
      "In order to verify these occurrences, I used a publicly available app that tracks real-time air traffic. When I would hear a helicopter via the auditory intrusion, I would simultaneously hear it physically flying over my residence. I would then consult the flight tracking app and visually confirm its direction.",
      "This pattern occurred multiple times and was made easier to track by the limited number of helicopters in the area, most of the other traffic consisting of airplanes."
    ],
    keyTerms: ['ADS-B Flight Tracking', 'Acoustic Verification', 'Physical Correlation']
  },
  {
    id: 'traceroutes-logs',
    title: 'Statement on Terrorism, Data Logs & Network Traceroutes',
    category: 'Network Forensics',
    date: '2021 – 2022',
    icon: <Terminal className="w-4 h-4 text-emerald-400" />,
    summary: 'Analysis of unauthorized IP routing, network hops, and server activity logs pulled from personal devices during detention periods.',
    fullText: [
      "The traceroutes and data logs presented here are direct records pulled from my own devices—evidence of unauthorized activity routed through my network. These logs reveal connections to IP addresses both domestic and international, exposing a hidden web of data movement tied to criminal and trafficking operations.",
      "My personal devices were exploited as silent tools in these actions, used without consent to facilitate the movement of illicit data and activity. This is the digital fingerprint of a crime in motion.",
      "Traceroutes are diagnostic tools that map the path your data takes across the internet. When you send information from your computer to another device, it often passes through multiple servers or 'hops.' A traceroute shows each stop along the way, including the IP addresses of intermediate systems. In legal settings, this kind of technical evidence provides verifiable, objective proof that can confirm or challenge claims about who accessed what, from where, and when."
    ],
    keyTerms: ['Network Hops', 'IP Routing Evidence', 'Unauthorized Network Nodes', 'Digital Fingerprint']
  },
  {
    id: 'scidpda-dossier',
    title: 'SCIDpda Bush Hotel Eviction Dossier & Repayment Refusal',
    category: 'Housing & Civil Litigation',
    date: '2023 – 2026',
    icon: <Building className="w-4 h-4 text-rose-400" />,
    summary: 'Complete case file on landlord refusal of certified third-party Telecare Corp repayment, money order receipts, and 8-day KIRO news interview retaliation.',
    fullText: [
      "In 2022, I signed a lease for an apartment managed by SCIDpda in Seattle. On August 8, 2022, I was arrested by a group who gained access to my secure building without a warrant. I spent ten months in jail and was released in May 2023. This caused me to lose my job and fall behind on rent.",
      "While in jail, an organization called Telecare Corp. offered to pay off the back rent and assist with future payments. They assigned me a case manager in June 2023 to coordinate directly with my building manager. By October 2023, after numerous emails, we were informed that the building manager was unwilling to provide an invoice or accept payment. With no other option, I continued making monthly payments from gig work.",
      "In addition to regular rent, I paid an additional $250 each month under a payment plan. I saved all my money order receipts and located the receipts for those months. On June 3, 2024, I was interviewed on KIRO News about neighborhood safety. Eight days later, on June 11th, I was served with court paperwork for an unlawful detainer.",
      "After extensive pro se motions challenging accounting discrepancies and jurisdiction, a Full Satisfaction of Judgment was officially filed in Superior Court on January 7, 2026."
    ],
    keyTerms: ['Telecare Corp Case Management', 'Payment Plan Receipts', 'KIRO 7 News (06/03/24)', 'Satisfaction of Judgment (01/07/26)']
  }
];

export const DocumentaryViewer: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>(STATEMENTS_ARCHIVE[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedDocId, setCopiedDocId] = useState<string | null>(null);

  const activeDoc = STATEMENTS_ARCHIVE.find((d) => d.id === selectedDocId) || STATEMENTS_ARCHIVE[0];

  const handleCopyText = (doc: StatementDoc) => {
    const textToCopy = `${doc.title}\nDate: ${doc.date}\nCategory: ${doc.category}\n\n${doc.fullText.join('\n\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDocId(doc.id);
    setTimeout(() => setCopiedDocId(null), 2000);
  };

  const filteredDocs = STATEMENTS_ARCHIVE.filter((doc) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      doc.title.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q) ||
      doc.summary.toLowerCase().includes(q) ||
      doc.fullText.some((p) => p.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 text-[#111111]">
      {/* Header - Marshall Project Style */}
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#111111] text-[#FFE600] font-mono text-xs font-bold uppercase tracking-widest border border-[#111111]">
          <Archive className="w-3.5 h-3.5 text-[#FFE600]" />
          <span>Primary Source Statements & Documentary Archive</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-headline font-black text-[#111111] tracking-tight">
          Investigator Dossiers & First-Person Statements
        </h2>
        <p className="font-serif-body text-base text-zinc-800 max-w-2xl mx-auto leading-relaxed">
          The complete indexed collection of personal statements, technological observations, public safety audits, and civil litigation records.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Statement Navigation */}
        <div className="lg:col-span-4 space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search statements, keywords, and dates..."
              className="w-full bg-white border border-[#111111] pl-8 pr-3 py-2 text-xs font-mono text-[#111111] placeholder-zinc-500 focus:outline-none focus:bg-[#FFE600]/10 focus:border-[#111111] shadow-xs"
            />
            <Search className="w-3.5 h-3.5 text-zinc-600 absolute left-2.5 top-3" />
          </div>

          <div className="space-y-2">
            {filteredDocs.map((doc) => {
              const isSelected = doc.id === activeDoc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`w-full text-left p-3.5 border transition-all cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-[#111111] text-[#FFE600] border-[#111111] shadow-md'
                      : 'bg-white text-[#111111] border-[#111111] hover:bg-[#F4F0E8]'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={isSelected ? 'text-[#FFE600]' : 'text-[#CC0000]'}>{doc.icon}</span>
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {doc.category}
                    </span>
                  </div>

                  <h4 className={`font-serif-headline text-sm font-bold line-clamp-1 ${isSelected ? 'text-[#FFE600]' : 'text-[#111111]'}`}>
                    {doc.title}
                  </h4>

                  <p className={`font-serif-body text-xs mt-1 line-clamp-2 leading-snug ${isSelected ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {doc.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Statement Reader */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-[#111111] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Header */}
            <div className="space-y-2 pb-5 border-b border-[#111111]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#CC0000] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  {activeDoc.icon}
                  <span>{activeDoc.category}</span>
                </span>
                <span className="text-xs font-mono text-zinc-600 font-bold bg-[#F4F0E8] px-2 py-0.5 border border-[#111111]">{activeDoc.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-headline font-bold text-[#111111]">
                {activeDoc.title}
              </h3>

              {/* Action Toolbar */}
              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  onClick={() => handleCopyText(activeDoc)}
                  className="flex items-center space-x-1.5 text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#FFE600] px-2.5 py-1 bg-[#F4F0E8] border border-[#111111] transition-colors cursor-pointer"
                >
                  {copiedDocId === activeDoc.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-1.5 text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#FFE600] px-2.5 py-1 bg-[#F4F0E8] border border-[#111111] transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            {/* Statement Paragraphs */}
            <div className="space-y-4 font-serif-body text-base sm:text-[17px] text-zinc-900 leading-relaxed">
              {activeDoc.fullText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Public Statistics / Data Box if available */}
            {activeDoc.publicStats && (
              <div className="bg-[#F4F0E8] border border-[#111111] p-4 space-y-2">
                <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
                  Associated Official Statistics & Agency Reports:
                </span>
                <ul className="space-y-1 text-xs font-mono text-zinc-800">
                  {activeDoc.publicStats.map((stat, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2">
                      <span className="text-[#CC0000] font-bold">•</span>
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Term Tags */}
            {activeDoc.keyTerms && (
              <div className="pt-4 border-t border-[#111111] flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-zinc-600 font-bold">Forensic Tags:</span>
                {activeDoc.keyTerms.map((kt, i) => (
                  <span key={i} className="text-[11px] font-mono font-bold px-2 py-0.5 bg-[#F4F0E8] border border-[#111111] text-[#111111]">
                    #{kt}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
