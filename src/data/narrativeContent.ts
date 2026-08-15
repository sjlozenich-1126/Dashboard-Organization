import { ReferenceItem } from '../types';

export const RESEARCH_SECTIONS = [
  {
    id: 'sec-executive-summary',
    number: '0.0',
    title: 'Executive Summary & The Demopocrisy Thesis',
    subtitle: 'The Institutional Displacement of Evidentiary Review and the Erosion of Due Process (2021–2026)',
    lead: 'Demopocrisy describes a structural phenomenon observed between 2021 and 2026 in which criminal, medical, and administrative institutions systematically displaced ordinary evidentiary review with clinical narratives, competency referrals, and custodial procedures.',
    paragraphs: [
      'By analyzing a forensic repository of eight interconnected legal matters, this study identifies a profound "due process gap"—the distance between formal constitutional protections and the practical reality of administrative momentum and institutional self-protection.',
      'The core of the displacement mechanism lies in the "competency bypass," where reports of technologically mediated harm or systemic failure are reflexively reframed as psychiatric symptoms. This pathologization creates a diagnostic loop that immunizes institutions from accountability while suspending the legal rights of the individual.',
      'Evidence gathered across various jurisdictions reveals recurring patterns of arrests without formal complaints, unauthorized medical transfers, competency orders issued in the absence of counsel or evaluation, and retaliatory administrative actions.',
      'The paper concludes with a proposal for the "Parallel Review" reform framework. This model advocates for a dual-track approach that ensures immediate clinical needs do not serve as a pretext for abandoning the state’s obligation to investigate factual and technical allegations.'
    ],
    keyTakeaway: 'When institutions prioritize administrative equilibrium over constitutional adjudication, the competency process ceases to be a diagnostic safeguard and becomes an extrajudicial instrument of indefinite containment.'
  },
  {
    id: 'sec-procedural-displacement',
    number: '2.0',
    title: 'The Procedural Displacement Mechanism',
    subtitle: 'The Competency Bypass Model and The Diagnostic Loop',
    lead: 'The most potent tool in the Demopocrisy repertoire is the displacement of evidentiary review. This is not a simple rejection of claims but a sophisticated procedural shift that effectively silences the claimant without ever having to disprove their allegations [6].',
    paragraphs: [
      '2.1 The Competency Bypass Model: In a standard criminal-legal workflow, an arrest is followed by a complaint, discovery, and trial. Under the competency bypass, the sequence is interrupted immediately after arrest or early in the pretrial phase. A referral for a competency evaluation is made, often based on the "bizarre" nature of the defendant\'s claims (such as reporting digital surveillance or data breaches) [8].',
      'Once a competency order is issued, the legal process enters a state of suspended animation. The state is no longer required to produce evidence or provide discovery, as the defendant is deemed incapable of assisting counsel [9]. In practice, this allows the state to maintain custodial control over the individual for months or years without ever having to establish a threshold of proof for the underlying charges [10]. This mechanism was observed in at least four of the eight cases analyzed.',
      '2.2 The Diagnostic Loop and Clinical Reframing: Reports of technological surveillance, data compromise, or institutional misconduct are reflexively interpreted through psychiatric frameworks [11]. The reporting of these events is treated as a symptom of a pathology—such as "delusional themes" or "grandiosity"—rather than as a subject for forensic inquiry [1] [12].',
      'This leads to a "diagnostic loop": an individual\'s attempt to document and report institutional failures is cited as evidence of mental illness, which is then used to justify further institutional oversight [13]. This oversight prevents the individual from accessing the legal tools necessary to prove the original failures.'
    ],
    keyTakeaway: 'The clinical narrative becomes a self-fulfilling prophecy: documenting institutional failure is classified as paranoia, which justifies custody, which blocks evidentiary proof.'
  },
  {
    id: 'sec-due-process-gap',
    number: '3.0',
    title: 'The Due Process Gap',
    subtitle: 'Structural Failures in Booking, Charging, and Documentary Asymmetry',
    lead: 'The "due process gap" is the functional distance between the idealized protections of the Bill of Rights and the practical experience of individuals within the legal-administrative complex [2].',
    paragraphs: [
      '3.1 Structural Failures in Booking and Charging: The archive documents a persistent disconnect between law enforcement booking and prosecutorial filing workflows [15]. This failure manifests in "Pattern 1": arrests followed by detention without a formal criminal complaint being filed [16]. In Case 658931 and Case 664676, individuals were arrested and booked, but no complaint was ever filed, leading to dismissals without prejudice after days of detention. This represents a "ghost detention"—deprivation of liberty without any underlying legal charge, facilitated by the lack of automated tracking and escalation alerts [3].',
      '3.2 Documentary Asymmetry and Transparency: The due process gap is maintained through "documentary asymmetry," where the state possesses and controls all relevant records while the affected individual is denied access to them [14].',
      'The research identifies a pattern of missing or redacted materials, including: absent formal complaints despite arrest records [18]; redacted competency evaluations that omit the basis for clinical findings [10]; unavailable body-camera and dash-camera footage [14]; unclear medical transfer authorizations that bypass judicial review [13]; and the non-production of central evidence, such as the voicemail transcription in Case 22-1-04242-3 [19].'
    ],
    keyTakeaway: 'Documentary asymmetry transforms the adversarial legal system from a contest between equals into an unchecked administrative rubber-stamp.'
  },
  {
    id: 'sec-institutional-self-protection',
    number: '4.0',
    title: 'Institutional Self-Protection Mechanisms',
    subtitle: 'Administrative Momentum, Anonymity Privilege, and Labor-Detention Correlation',
    lead: 'Institutions are not passive actors; they actively protect their authority and reputation by developing mechanisms that insulate them from scrutiny [1].',
    paragraphs: [
      '4.1 Administrative Momentum and Inertia: "Administrative momentum" is the phenomenon where institutional actions continue under their own power even after the original legal or evidentiary justification has been removed [4]. In Case 660121, an individual was arrested due to a database misclassification flagging an expired protective order as active [20]. Although dismissed, the "criminal trace" remained in state databases for months, and the individual continued to face administrative hurdles based on the false alert [21].',
      '4.2 Narrative Inversion and Anonymity Privilege: Institutions often engage in "narrative inversion," where the institution’s own threats or systemic failures are reframed as personal threats attributed to the defendant [1]. This is coupled with "anonymity privilege," where government agents (such as unidentified officers in unmarked vehicles in Case 21-1-04347-2) operate with high obscurity while the defendant is subjected to extreme visibility and surveillance [2] [10].',
      '4.3 Economic Incentives and Labor-Detention Correlation: A labor dossier indicates that periods of detention directly overlapped with active collective-bargaining cycles for King County corrections and sheriff staff (CBA bargaining windows in 2021-2022 and 2022-2023, accompanied by $7,500–$15,000 recruitment and retention bonus ratifications) [22] [23].'
    ],
    keyTakeaway: 'The state grants anonymity to its own armed agents while demanding total transparency from the accused, creating an insurmountable structural imbalance.'
  },
  {
    id: 'sec-parallel-review',
    number: '6.0',
    title: 'The "Parallel Review" Reform Framework',
    subtitle: 'Decoupling Clinical Care from Evidentiary Investigation',
    lead: 'The research proposes the "Parallel Review" framework as the primary mechanism for correcting these systemic failures. This model is built on the principle that clinical care and evidentiary investigation must be decoupled [33].',
    paragraphs: [
      '6.1 Principles of the Dual-Track System: The Parallel Review model requires institutions to address immediate medical or safety concerns (the clinical track) while simultaneously and separately investigating the factual, technical, or legal allegations being reported (the evidentiary track) [33]. Under this system: a person may receive medical or clinical evaluation without the clinical interpretation automatically replacing the investigation of evidence [34]; clinical narratives (e.g., "delusional") cannot be used as a legal basis to suspend investigation of technical or procedural facts [1]; and the state maintains a dual obligation: to provide care and to ensure due process.',
      '6.2 Technical and Forensic Safeguards: (1) Independent Forensic Review: Claims of technologically mediated harm (such as digital harassment, sensor interference, or V2K) must be subjected to independent forensic review by technical experts, rather than being reflexively classified as psychiatric symptoms [35]. (2) Digital Evidence Standards: Strict disclosure windows for digital extractions and mandatory preservation policies for metadata and chain-of-custody documentation must be enforced [36]. (3) Statutory Limits on Competency: Lawmakers must impose statutory limits that prevent competency proceedings from indefinitely deferring evidentiary review. The state should be required to present threshold evidence (a "prima facie" case) even while competency is being assessed [37].',
      '6.3 Transparency and Automated Accountability: (1) Real-Time Tracking: Implement an automated tracking system linking jail bookings directly to prosecutorial filing workflows with a 72-hour automatic release trigger if no complaint is filed [38]. (2) Public Disclosure: Arrest records must identify arresting agency, legal authority, and officer identifiers [39]. (3) Rapid Database Correction: Establishing mandatory rapid correction for database errors [21].'
    ],
    keyTakeaway: 'Restoring the dual-track system guarantees that medical triage can never again be weaponized to bury uninvestigated facts.'
  }
];

export const REFERENCES_LIST: ReferenceItem[] = [
  { id: 1, title: 'Demopocrisy Synthesis Document: Research Synthesis, Thesis, Arguments, and Evidence Structure', year: 2026, type: 'Synthesis Dossier', scope: 'Core Institutional Thesis' },
  { id: 2, title: 'Demopocrisy Research Paper Draft Analysis: Thesis and Research Goals', year: 2026, type: 'Working Paper', scope: 'Due Process Gap Analysis' },
  { id: 3, title: 'Proposals for Automated Tracking and Real-Time Prosecutorial Workflows', year: 2026, type: 'Policy Proposal', scope: 'Booking Accountability' },
  { id: 4, title: 'Demopocrisy Project Files: Systemic Failures in Justice and Governance Analysis', year: 2026, type: 'Archive Index', scope: 'Governance Mapping' },
  { id: 5, title: 'Master Report on Medicalized Coercion: Analysis of Case No. 658959', year: 2021, type: 'Clinical Audit', scope: 'Harborview Involuntary Hold' },
  { id: 6, title: 'Procedural Displacement and the Clinical Reframing of Legal Claims, Research Memorandum', year: 2025, type: 'Legal Memo', scope: 'Evidentiary Bypassing' },
  { id: 7, title: 'Analysis of the Competency Bypass Mechanism in King County Superior Court', year: '2021-2026', type: 'Court Analysis', scope: 'RCW 10.77 Misuse' },
  { id: 8, title: 'Institutional Responses to Technologically Mediated Harm and V2K phenomena', year: 2026, type: 'Forensic Review', scope: 'Technical Harm Reframing' },
  { id: 9, title: 'Evidentiary Gaps and Constitutional Violations in Pre-trial Detention', year: '2021-2026', type: 'Constitutional Audit', scope: 'Speedy Trial & Due Process' },
  { id: 10, title: 'Case Study: Procedural Rupture in Case No. 21-1-04347-2 SEA', year: 2021, type: 'Case File', scope: 'Melinda Young 45-Day Order' },
  { id: 11, title: 'Clinical Reframing as a Tool of Institutional Self-Protection', year: 2026, type: 'Research Monograph', scope: 'Institutional Defense' },
  { id: 12, title: 'The Diagnostic Loop: Institutional Self-Protection through Pathologization', year: 2026, type: 'Theoretical Paper', scope: 'Diagnostic Looping' },
  { id: 13, title: 'Investigation into Unauthorized Medical Transfers and Involuntary Holds', year: 2021, type: 'Investigative Report', scope: 'Jail-to-Hospital Pipeline' },
  { id: 14, title: 'Audit of Missing Materials and Documentary Asymmetry in State Records', year: 2026, type: 'Forensic Audit', scope: 'Discovery Withholding' },
  { id: 15, title: 'Statistical Documentation of Arrests Without Complaint in Municipal Systems', year: '2021-2024', type: 'Statistical Data', scope: 'Municipal Court Churn' },
  { id: 16, title: 'Forensic Repository for Legal Systemic Mapping: Merged Docs Analysis', year: 2026, type: 'Archive Synthesis', scope: 'Cross-Case Architecture' },
  { id: 17, title: 'Forensic Analysis of Case No. 658931: Pre-trial Breaches and Booking Failures', year: 2021, type: 'Case Audit', scope: 'Ghost Detention' },
  { id: 18, title: 'Patterns of Arrest Without Complaint in King County (2021-2026)', year: 2026, type: 'Empirical Study', scope: 'Unfiled Complaints' },
  { id: 19, title: 'Discovery Failures and Missing Evidence in Case No. 22-1-04242-3 SEA', year: 2022, type: 'Case Audit', scope: 'Unproduced Voicemail Audio' },
  { id: 20, title: 'Impact of Database Misclassification on Unlawful Detention: Analysis of Case No. 660121', year: 2021, type: 'Technical Review', scope: 'Stale Database Alerts' },
  { id: 21, title: 'Administrative Momentum and the Persistence of Technical Errors', year: 2026, type: 'Systems Analysis', scope: 'Database Inertia' },
  { id: 22, title: 'Economic Incentives and the Labor-Detention Correlation', year: 2026, type: 'Economic Brief', scope: 'Correctional Labor Overlap' },
  { id: 23, title: 'Police-Union Recruitment Bonuses and Incarceration Patterns: A Correlation Study', year: 2025, type: 'Correlation Study', scope: 'SPOG / KCSO Bargaining' },
  { id: 24, title: 'Clinical Inconsistency and Diagnostic Failure in Harborview Medical Center Case Study', year: 2021, type: 'Medical Review', scope: 'CSF Neutrophil Anomaly' },
  { id: 25, title: 'Analysis of Contradictory Lab Findings in Medicalized Coercion Cases', year: 2021, type: 'Lab Forensic Study', scope: 'Unconfirmed HIV & Sepsis' },
  { id: 26, title: 'The Influence of Flawed Medical Data on Competency Findings', year: 2026, type: 'Legal-Medical Analysis', scope: 'Competency Distortion' },
  { id: 27, title: 'Political Sensitivity and the Acceleration of Clinical Reframing', year: 2026, type: 'Policy Study', scope: 'Executive Threat Cases' },
  { id: 28, title: 'Retaliatory Eviction and Administrative Non-cooperation: Analysis of Case No. 25-2-17456-5 SEA', year: 2025, type: 'Housing Case Audit', scope: 'SCIDpda Repayment Block' },
  { id: 29, title: 'Analysis of Administrative Churn in Housing Courts', year: 2026, type: 'Civil Court Study', scope: 'Unlawful Detainer Churn' },
  { id: 30, title: 'The Due Process Gap in Housing and Social Service Systems', year: 2026, type: 'Socio-Legal Report', scope: 'Social Service Vacuums' },
  { id: 31, title: 'Case No. 26-2-01443-4 SEA: A Keystone Analysis of Jurisdictional Failure', year: 2026, type: 'Keystone Dossier', scope: 'Sovereign Corridor Challenge' },
  { id: 32, title: 'Challenges to Quasi-Governmental Immunity and the Sovereign Security Corridor', year: 2026, type: 'Jurisdictional Treatise', scope: 'RCW 39.34 Shield Audit' },
  { id: 33, title: 'Parallel Review: A New Framework for Legal and Clinical Accountability', year: 2026, type: 'Legislative Blueprint', scope: 'Dual-Track System' },
  { id: 34, title: 'Principles of the Dual-Track System for Parallel Review', year: 2026, type: 'Standard of Practice', scope: 'Forensic Medical Decoupling' },
  { id: 35, title: 'Forensic Inquiry vs. Psychiatric Classification: A Critical Review of V2K Investigations', year: 2025, type: 'Technical Protocol', scope: 'RF / Acoustic Forensics' },
  { id: 36, title: 'Technical and Forensic Safeguards for Digital Evidence Preservation', year: 2026, type: 'Evidence Standard', scope: 'Device Seizure Rules' },
  { id: 37, title: 'Statutory Reform for Competency Proceedings: Restoring the Dual-Track System', year: 2026, type: 'Model Legislation', scope: 'RCW 10.77 Amendment' },
  { id: 38, title: 'Proposals for Automated Accountability in Charging and Booking', year: 2026, type: 'System Architecture', scope: '72-Hour Release Engine' },
  { id: 39, title: 'Transparency Standards for Law Enforcement Identification and Property Seizure', year: 2026, type: 'Statutory Guideline', scope: 'Badge & Warrant Display' }
];

export const PERSONAL_STATEMENTS = {
  overviewStatement: "My story is not simply about a single arrest or dispute; it is about what can happen when privacy is violated, when advanced technology is used in harmful ways, and when the legal and mental health systems fail to provide clear, consistent, and just outcomes. I continue to face legal uncertainty, despite never having a full and fair trial to address the allegations against me. My goal now is to bring the facts to light, demand accountability for what I endured, and seek protection from further harm.",
  authorCredit: "Shane Jonathan Lozenich / Jonathan Shane Concepts",
  email: "shane@jonathanshaneconcepts.com",
  web: "techhumano.com"
};
