import { CaseRecord } from '../types';

export const CASES_DATA: CaseRecord[] = [
  {
    id: 'case-658931',
    caseNumber: 'Case No. 658931',
    title: 'Arrest Without Complaint & Ghost Detention',
    caption: 'The City of Seattle vs. Shane Lozenich',
    cause: 'Alleged Violation of Domestic Violence No-Contact Order',
    court: 'Seattle Municipal Court',
    judge: 'Judge Catherine McDowall',
    dates: 'March 7, 2021 – June 12, 2021',
    incarcerationDates: '03/07/2021 – 03/08/2021',
    status: 'Dismissed Without Prejudice (Case Closed)',
    verdictOutcome: 'Dismissed Without Prejudice — No Criminal Complaint Ever Filed',
    headline: 'Data Breach Exposes 1.6 Million WA State Residents Who Filed Unemployment Claims in 2020',
    summary: 'Case No. 658931 represents the baseline "No Complaint Filed" pattern. Following a major data breach compromising the personal information of 1.6 million residents, the subject reported intense digital stalking and harassment to law enforcement, which went uninvestigated due to pandemic closures. On March 7, 2021, two Seattle Police Department officers entered the defendant\'s bedroom and arrested him. After an overnight booking in King County Jail and an in-custody arraignment, the City Attorney failed to submit a formal complaint, resulting in dismissal without prejudice. This represents a "ghost detention"—deprivation of liberty without any formal written legal charge.',
    background: 'Originated during the peak of COVID-19 isolation and domestic friction in a shared rental. The State Auditor’s Office had suffered a massive Accellion data breach. Simultaneously, the defendant experienced targeted electronic harassment and uninvestigated physical assaults by a roommate. While the defendant\'s own 911 calls were turned away, the roommate secured a protective order that was weaponized to execute an arrest.',
    proceduralAnomalies: [
      'Arrest executed inside private bedroom without contemporaneous warrant presentation',
      'No formal criminal complaint was ever drafted or filed by the City Attorney',
      'Defendant marked "NOT PRESENT" in court minutes despite being held in direct custody',
      'Police refused to document prior 911 reports of physical violence and digital stalking',
      'Arrest record permanently retained in municipal archives despite lack of underlying charges'
    ],
    dueProcessViolations: [
      'Fourth Amendment: Warrantless entry and seizure of individual in residence',
      'Fifth & Fourteenth Amendments: Deprivation of liberty without formal charge or probable cause record',
      'Sixth Amendment: Arraignment proceedings without assigned defense representation',
      'Selective Enforcement: Immediate action on petitioner complaint while ignoring victim crime reports'
    ],
    systemicVariables: [
      'Pandemic Administrative Dilation (Precinct closures and reduced staffing)',
      'Accellion Data Breach (Exposure of 1.6M WA unemployment claimants)',
      'Low Threshold for Protective Orders (Unvetted ex-parte filings weaponized for eviction)',
      'Infrastructure of Digital Erasure (Failure to log civilian crime reports)'
    ],
    proposedReforms: [
      'Mandatory Real-Time Prosecutorial Linking: Automated trigger releasing detainees if no complaint filed within 72 hours',
      'Higher Evidentiary Thresholds for Restraining Orders: Pre-issuance cross-checking of active reciprocal complaints',
      'Mandatory Incident Logging: Prohibiting law enforcement from refusing 911 intake due to emergency declarations'
    ],
    evidenceCitations: [
      'King County Jail Booking Record BA# 221002695',
      'Seattle Municipal Court Docket Entry 03/08/2021: "CHARGE #1... NO COMPLAINT FILED"',
      'Washington State Auditor\'s Office Data Breach Notification (Accellion incident)',
      'Seattle Municipal Court Closure Order 06/12/2021: "CASE CLOSED, OBLIGATIONS RESOLVED"'
    ],
    keyDates: [
      { date: '2020 Autumn', event: 'Accellion data breach exposes 1.6M WA residents; digital stalking begins' },
      { date: 'Feb 24, 2021', event: 'Roommate files ex-parte petition; temporary order issued' },
      { date: 'March 7, 2021', event: 'SPD officers enter bedroom; arrest executed without warrant (BA# 221002695)' },
      { date: 'March 8, 2021', event: 'In-custody arraignment; prosecution files no complaint; released' },
      { date: 'June 12, 2021', event: 'Case officially closed without prejudice' }
    ]
  },
  {
    id: 'case-658959',
    caseNumber: 'Case No. 658959',
    title: 'The Medicalization Pipeline & Forced Treatment Hold',
    caption: 'The City of Seattle vs. Shane Lozenich',
    cause: 'Violation of No Contact Order, Theft ($40)',
    court: 'Seattle Municipal Court / Harborview Medical Center',
    judge: 'Judge Catherine McDowall & Judge Damon Shadid',
    attorney: 'Elizabeth Mustin (Stand-in Public Defender)',
    dates: 'March 10, 2021 – June 26, 2021',
    incarcerationDates: '03/10/2021 – 03/24/2021 (Jail) | 03/24/2021 – 04/15/2021 (Hospital)',
    status: 'Dismissed w/o Prejudice; Involuntary 22-Day Confinement',
    verdictOutcome: 'Dismissed by Reason of Incompetency; 71.05 Involuntary Medical Hold',
    headline: 'World TB Day: King County Officials Warn of 100,000 Latent Cases',
    summary: 'Case No. 658959 acts as the primary harm propagator in the Demopocrisy archive. Returning to retrieve personal belongings with roommate consent, the subject was arrested by officers accompanied by an unidentified individual in full military camouflage. Rather than defending on the merits or establishing consent for borrowed funds, a stand-in public defender immediately moved for RCW 10.77 competency evaluation. Upon charge dismissal on March 24, 2021, the subject was transferred to Harborview Medical Center without documented judicial release orders, held involuntarily for 22 days, physically restrained to bed rails, and administered forced neuroleptic injections (Haloperidol, Risperdal) causing severe acute dystonia.',
    background: 'Occurred during heightened public health anxieties over tuberculosis and syphilis in King County. Hospital diagnostic teams constructed an extreme neuropsychiatric profile (Neurosyphilis, Psychosis, AIDS, Sepsis) based on contradictory CSF findings (95% neutrophils instead of lymphocytes, normal glucose, unconfirmed HIV) and maintained involuntary confinement 10 days past insurance provider discharge recommendations.',
    proceduralAnomalies: [
      'Unidentified personnel in military camouflage participating in municipal arrest',
      'Unexplained 1-hour detention in secure fenced police vehicle lot prior to booking',
      'Public defender reflexively triggered competency evaluation before reviewing case facts',
      'March 24 hearing conducted in absentia with immediate transfer to hospital without court order',
      'Apple Health insurance notice recommended release on April 5; hospital retained patient until April 15'
    ],
    dueProcessViolations: [
      'Right to Due Process: Detention and hospital transfer without documented judicial authorization',
      'Informed Consent & Bodily Autonomy: Forced intramuscular injections and spinal tap under duress',
      'Freedom from Cruel & Unusual Punishment: Confinement in windowless supply closet and bed rail restraints',
      'Right to Effective Counsel: Stand-in attorney weaponizing competency to bypass factual investigation'
    ],
    systemicVariables: [
      'The Competency "Procedural Bypass" (Substituting clinical labeling for trial adjudication)',
      'Diagnostic Inflation (Assigning severe infectious-psychiatric labels without confirmatory labs)',
      'Public Health Surveillance Overreach (Post-pandemic clinical protocols applied coercively)',
      'Documentary Asymmetry (Omission of transfer orders in release paperwork)'
    ],
    proposedReforms: [
      'Documented Judicial Authorization: Strict ban on jail-to-hospital transfers lacking signed court orders',
      'Informed Consent Protocols in Forensic Transfers: Mandatory independent ethical review before neuroleptic administration',
      'Decoupled Evidentiary Inquiry: Prohibition against using competency referrals to suspend state discovery obligations'
    ],
    evidenceCitations: [
      'Seattle Municipal Court Docket 03/11/2021: "DEFENSE RAISES 1077"',
      'Seattle Municipal Court Docket 03/24/2021: "DISMISSED BY REASON OF INCOMPETENCY. REFERRED FOR 71.05 EVAL."',
      'Harborview CSF Panel Lab: FTA-ABS Reactive, VDRL 1:4 with 95% neutrophils & normal glucose (62 mg/dL)',
      'Apple Health Discharge Recommendation Letter (04/05/2021)'
    ],
    keyDates: [
      { date: 'March 10, 2021', event: 'Arrested by officers & camouflage-clad individual; detained in fenced lot (BA# 221002824)' },
      { date: 'March 11, 2021', event: 'Arraignment; stand-in defender raises 10.77; judge orders competency evaluation' },
      { date: 'March 24, 2021', event: 'Charges dismissed for incompetency; unverified transfer to Harborview ER' },
      { date: 'March 25-29, 2021', event: 'Forced Haloperidol/Risperdal injection; acute dystonic reaction; lumbar puncture' },
      { date: 'April 5, 2021', event: 'Apple Health recommends discharge; hospital refuses release' },
      { date: 'April 15, 2021', event: 'Released after 22 days of involuntary clinical confinement' },
      { date: 'June 26, 2021', event: 'Case officially closed in municipal records' }
    ],
    hospitalizationDetail: {
      facility: 'Harborview Medical Center (Floor 8 / Psychiatric Unit)',
      duration: '22 Days (March 24 – April 15, 2021)',
      diagnosesAssigned: ['Neurosyphilis (Principal)', 'AIDS', 'Psychosis', 'Sepsis (unknown source)', 'Abnormal CSF'],
      contradictoryFindings: [
        'CSF showed 95% neutrophils (bacterial meningitis/traumatic tap pattern) vs. expected lymphocytic neurosyphilis',
        'CSF glucose normal at 62 mg/dL, contradicting bacterial meningitis',
        'No positive HIV antibody, viral load, or CD4 count present in lab records',
        'Normal WBC (4.7 -> 6.6) with zero identified organisms for sepsis'
      ],
      medicationsForced: ['Haloperidol 5mg BID + IM PRN', 'Risperdal', 'Penicillin G IV (500mL/day)', 'Benztropine (dystonia counter)']
    }
  },
  {
    id: 'case-660121',
    caseNumber: 'Case No. 660121',
    title: 'Database Misclassification & Tactical Over-Escalation',
    caption: 'The City of Seattle vs. Shane Lozenich',
    cause: 'Alleged Violation of a Court Order',
    court: 'Seattle Municipal Court',
    judge: 'Judge Faye Chess',
    attorney: 'Elizabeth Mustin',
    dates: 'May 15, 2021 – May 17, 2021',
    incarcerationDates: '05/15/2021 – 05/17/2021',
    status: 'Dismissed Without Prejudice (Unexecuted Deferral)',
    verdictOutcome: 'Dismissed Based on Recycled Competency Evaluation; "Dismiss & Refer" Never Executed',
    headline: 'Seattle Police Union Files Grievance to Block January 6 Investigation Records',
    summary: 'On May 15, 2021, the defendant went to collect forwarded mail after receiving a text confirmation from his former roommate. Finding the mailbox empty, he departed toward the bus stop. Approached by a cruiser, trauma-induced panic prompted him to flee into a hotel parking lot. The response escalated into a multi-vehicle tactical containment. The arrest was justified by a 911 call attributed to a neighbor—despite the defendant having previously notified police that the actual homeowners were missing. At arraignment, the court recycled the competency evaluation from Case 658959 and issued a "Dismiss and Refer" order to Mental Health Court that was never functionally executed.',
    background: 'Unfolded against the backdrop of intense legal battles between the City of Seattle and the Seattle Police Officers Guild (SPOG) over unredacted public records involving off-duty SPD officers present at the January 6 Capitol rally. The juxtaposition highlights how institutional anonymity is vigorously protected for state actors while private citizens are subjected to aggressive tactical containment.',
    proceduralAnomalies: [
      'Probable cause predicated on unverified 911 call from an address with missing homeowners',
      'Disproportionate tactical pursuit involving multiple vehicles for non-violent misdemeanor',
      'Court recycled stale competency evaluation from prior dismissed case rather than examining facts',
      'Judicial "Dismiss and Refer" order completely abandoned with zero administrative follow-through'
    ],
    dueProcessViolations: [
      'Fourth Amendment: Deprivation of liberty based on uncorroborated third-party hearsay',
      'Excessive Force (Graham v. Connor): Tactical containment and high-risk vehicular pursuit',
      'Procedural Due Process: Failure of the court and probation services to execute judicial referral directives'
    ],
    systemicVariables: [
      'Administrative Momentum (Lingering database alerts overriding dismissals)',
      'Institutional Anonymity Privilege (SPOG public records shielding vs citizen surveillance)',
      'Verification Collapse (Failure of dispatch to confirm caller identity or property occupancy)'
    ],
    proposedReforms: [
      'Mandatory Caller Verification: Strict protocols for confirming 911 caller identities in protective order reports',
      'Automated Database Synchronization: Immediate purging of inactive orders across municipal dispatch systems',
      'Compliance Audits for Court Referrals: Tracking mechanisms ensuring "Dismiss & Refer" orders are executed'
    ],
    evidenceCitations: [
      'King County Jail Booking Record BA# 221005541',
      'Seattle Municipal Court Docket 05/17/2021: "PARTIES ACCEPT OPINIONS IN CMPTCY EVAL DATE 03/22/21 UNDER 658959"',
      'SPOG Union Grievance Filings re: Jan 6 OPA Investigation Records (2021-2025)',
      'SPD Dispatch Audio Logs (May 15, 2021)'
    ],
    keyDates: [
      { date: 'May 15, 2021', event: 'Text received to pick up mail; tactical pursuit and arrest at highway hotel (BA# 221005541)' },
      { date: 'May 17, 2021', event: 'Arraignment before Judge Faye Chess; prior competency evaluation accepted; case dismissed' },
      { date: 'May 17, 2021', event: '"Dismiss and Refer" order issued; defendant released without referral execution' }
    ]
  },
  {
    id: 'case-21-1-04342-2',
    caseNumber: 'Case No. 21-1-04342-2 / 21-1-04347-2 SEA',
    title: 'The 45-Day Restoration Order & Procedural Rupture',
    caption: 'The State of Washington vs. Shane Lozenich',
    cause: 'Felony Harassment, Felony Telephone Harassment (Cyberstalking), Threats to Bomb/Injure Property',
    court: 'King County Superior Court',
    judge: 'Judge Melinda Young & Judge Karen Donohue',
    attorney: 'Amy Parker (Public Defender)',
    dates: 'July 23, 2021 – Present (Pending Trial)',
    incarcerationDates: '07/23/2021 – 01/05/2022 (6 Months)',
    status: 'Pending Superior Court Trial (Competency Restored Feb 2026)',
    verdictOutcome: 'Pretrial Detention / Western State Hospital Restoration / Trial Prep',
    headline: 'Seattle Officers Seek Anonymity in Supreme Court Case Tied to Jan. 6 Rally Attendance',
    summary: 'One of the most structurally revealing entries in the Demopocrisy archive. On July 23, 2021, the defendant was ambushed on a downtown Seattle street by unidentified agents in unmarked vehicles with no badges. Officers produced a photocopy of a stranger\'s passport claiming it came from his backpack and seized his phone without a warrant. The prosecution listed the Mayor\'s Office and a detective as protected parties. On September 13, 2021, Judge Melinda Young issued a 45-day inpatient restoration order to Western State Hospital without a formal competency evaluation and with defense counsel absent (marked "approved on record"). In February 2026, forensic evaluator Dr. Jamie Leavey determined competency was fully restored.',
    background: 'Demonstrates the stark double standard of transparency: state actors (such as SPD officers attending Jan 6) obtained court-sanctioned anonymity, while the defendant\'s documentation of municipal vulnerabilities was reframed as "Cyberstalking" and "Felony Harassment". During his confinement at Western State Hospital, forced Olanzapine administration was retroactively justified by an uneventful 2017 DSHS food stamp appointment.',
    proceduralAnomalies: [
      'Arrest executed by plainclothes agents operating without badges or visible agency insignia',
      'Production of extraneous identity documents (passport photocopy) not belonging to defendant',
      'Warrantless seizure and extraction of mobile device data during booking',
      'Judge Melinda Young signed 45-day restoration order without evaluation or defense counsel presence',
      'Two-month delay between restoration order issuance and actual physical transfer to Western State'
    ],
    dueProcessViolations: [
      'Fourth Amendment: Warrantless seizure of mobile phone and search without probable cause warrant',
      'Fifth Amendment: Complete absence of Miranda warning upon physical seizure',
      'Sixth Amendment: Issuance of psychiatric confinement order in the total absence of defense counsel',
      'Speedy Trial Clause: Prolonged multi-year procedural limbo under continuous competency continuances'
    ],
    systemicVariables: [
      'Narrative Inversion (Institutional security failures reframed as personal threats by the accused)',
      'Anonymity Privilege (Shielding state agents while subjecting the accused to total surveillance)',
      'Diagnostic Fluidity (Diagnoses shifting from acute psychosis to provisional outpatient remission)',
      'The "Compassion Mask" (Using involuntary treatment as an administrative containment substitute)'
    ],
    proposedReforms: [
      'Mandatory Officer Credential Display: Prohibition of plainclothes arrests without immediate badge presentation',
      'Exclusionary Rule for Warrantless Device Extractions: Strict suppression of digital evidence seized pre-warrant',
      'Statutory Hearing Requirements for Restoration Orders: Automatic voiding of restoration orders issued in absentia'
    ],
    evidenceCitations: [
      'King County Superior Court Motion for Probable Cause (07/28/2021)',
      'Court Order for 45-Day Inpatient Restoration signed by Judge Melinda Young (09/13/2021)',
      'Western State Hospital Intake & Medication Chart (20mg Olanzapine, 11/22/2021)',
      'Office of Forensic Mental Health Services Competency Evaluation by Dr. Jamie Leavey (02/11/2026)'
    ],
    keyDates: [
      { date: 'July 23, 2021', event: 'Ambushed near 4th & Columbia by unmarked vehicles; warrantless arrest & phone seizure' },
      { date: 'August 10, 2021', event: 'Public defender Amy Parker suggests competency evaluation instead of trial' },
      { date: 'Sept 13, 2021', event: 'Judge Melinda Young signs 45-day restoration order without counsel or hearing' },
      { date: 'Nov 22, 2021', event: 'Rerouted from court hearing to Western State Hospital; forced 20mg Olanzapine' },
      { date: 'Jan 5, 2022', event: 'Declared restored early and returned to jail; released late January without program orders' },
      { date: 'Feb 11, 2026', event: 'Forensic evaluation by Dr. Jamie Leavey affirms defendant competent to stand trial' },
      { date: 'May/Aug 2026', event: 'Scheduled Superior Court trial calendars' }
    ]
  },
  {
    id: 'case-664676',
    caseNumber: 'Case No. 664676',
    title: 'Procedural Vacancy & Economic Detention Correlation',
    caption: 'The City of Seattle vs. Shane Lozenich',
    cause: 'Violation of a Court Order',
    court: 'Seattle Municipal Court',
    judge: 'Judge Damon Shadid',
    dates: 'March 30, 2022 – July 2, 2022',
    incarcerationDates: '03/30/2022 – 03/31/2022',
    status: 'Case Closed (Dismissed Overnight)',
    verdictOutcome: 'Dismissed — No Complaint Filed, No Counsel Appointed',
    headline: 'King County Finalizes Recruitment Bonus for KCSO ($7,500 – $15,000)',
    summary: 'Case No. 664676 demonstrates complete procedural vacancy. Released from jail into homelessness, the defendant was permitted by his former roommate to temporarily stay at the residence. While leaving together for groceries, police intercepted them in the yard and arrested the defendant, stating the court order superseded the petitioner\'s consent. The defendant was detained overnight in King County Jail, no attorney was appointed, and no formal complaint was filed. The case was dismissed the following day. This arrest directly coincided with King County corrections and sheriff union negotiations for high-value recruitment bonuses, highlighting a correlation between administrative detention churn and law enforcement budget leverage.',
    background: 'Exposes how protective orders act as rigid automated arrest triggers that override human consent and context. The administrative churn of low-level arrests without complaints provided the operational data metrics used during collective bargaining to justify departmental retention bonuses.',
    proceduralAnomalies: [
      'Arrest executed despite explicit on-scene consent and co-presence of the protected party',
      'Defendant held overnight in county jail without legal representation ever being assigned',
      'No formal charging document was ever authored or filed by the prosecuting agency',
      'Referral to Mental Health Court opened on April 1 and cleared on July 2 without contact'
    ],
    dueProcessViolations: [
      'Sixth Amendment Right to Counsel: Overnight incarceration without access to or appointment of counsel',
      'Fourteenth Amendment Due Process: Deprivation of physical liberty without written charging basis',
      'Rigid Weaponization of Orders: Complete disregard for petitioner consent'
    ],
    systemicVariables: [
      'Labor-Detention Alignment (Incarceration spikes overlapping with collective bargaining cycles)',
      'Operational Data Leveraging (Using booking volume to justify staffing budget increases)',
      'Dual-Authority Conflict (Private mutual consent vs rigid bureaucratic court order)'
    ],
    proposedReforms: [
      'Immediate Consent Affirmation: Field discretion protocols allowing officers to verify petitioner consent',
      'Mandatory Counsel at Initial Booking: Statutory right to public defense advocate upon intake',
      'Independent Audit of Union Bonus Timing vs Incarceration Waves'
    ],
    evidenceCitations: [
      'King County Jail Intake Ledger (03/30/2022)',
      'Seattle Municipal Court Docket 03/31/2022: "NO COMPLAINT FILED - DEFENDANT RELEASED"',
      'King County Police Officers Guild Collective Bargaining Agreement (CBA) MOA (March 2022)',
      'King County Corrections Retention Bonus Resolution ($7,500 - $15,000)'
    ],
    keyDates: [
      { date: 'Jan 2022', event: 'Released from Western State Hospital into housing precarity' },
      { date: 'March 30, 2022', event: 'Arrested in front yard while leaving for groceries with roommate; booked overnight' },
      { date: 'March 31, 2022', event: 'Morning arraignment stricken; afternoon hearing notes "No Complaint Filed"; released' },
      { date: 'April 14, 2022', event: 'Public defense assessment documented post-release' },
      { date: 'July 2, 2022', event: 'Case closed and obligations cleared' }
    ]
  },
  {
    id: 'case-22-1-04242-3',
    caseNumber: 'Case No. 22-1-04242-3 SEA',
    title: 'Executive Threat Prosecution & Missing Discovery',
    caption: 'The State of Washington vs. Shane Lozenich',
    cause: 'Felony Threats Against the Governor of Washington State (RCW 9A.36.041)',
    court: 'King County Superior Court',
    judge: 'Judge Michael Scott',
    attorney: 'Jordan Murov-Goodman, Christine (Rotating Public Defenders)',
    dates: 'August 10, 2022 – Present (Pending Trial)',
    incarcerationDates: '08/10/2022 – 05/05/2023 (10 Months)',
    status: 'Pending Superior Court Adjudication (Released on Time Served Credit)',
    verdictOutcome: '10 Months Pretrial Custody Without Trial, Conviction, or Plea Deal',
    headline: '"Inslee is Incompetent and Not Running for Re-election" — Political Asymmetry in Threat Enforcement',
    summary: 'Originating from an alleged threatening voicemail left on Governor Jay Inslee\'s office line, this felony matter exemplifies how political sensitivity accelerates psychiatric overreach. On August 10, 2022, plainclothes and military-clad officers staged an ambush arrest inside the defendant\'s secure apartment building. The defendant was interrogated in a public hallway without counsel or Miranda warnings. Despite ten months of pretrial detention—during which the jail water supply was contaminated and the defendant was brutally assaulted by an ex-Marine cellmate—the central piece of prosecution evidence (the voicemail recording and transcript) was never produced to the defense in discovery.',
    background: 'Contrasts sharply with the January 6, 2021 mansion breach in Olympia, where 100-125 protesters forced open perimeter gates and occupied the Governor\'s lawn without immediate arrest. The defendant experienced repeated public defender turnover ("revolving door"), multiple competency continuances, and an unconstitutional restoration order signed a day before the scheduled hearing.',
    proceduralAnomalies: [
      'Unlawful entry into secure key-fob apartment building by arresting squad',
      'Interrogation in public residential hallway without attorney or Miranda administration',
      'The central corpus delicti—the voicemail transcript—never produced in discovery across 3+ years',
      'Pre-signed 45-day restoration commitment order delivered prior to hearing date',
      'Jail failed to press charges or notify defense after defendant suffered fractured nose from cell assault'
    ],
    dueProcessViolations: [
      'Sixth Amendment Speedy Trial: 10 months pretrial detention followed by multi-year delay without trial',
      'Brady v. Maryland: Failure to produce primary exculpatory or inculpatory evidence (voicemail audio)',
      'Eighth Amendment: Failure to protect inmate from physical assault and exposure to contaminated water',
      'Fifth Amendment: Custodial interrogation without Miranda waiver'
    ],
    systemicVariables: [
      'Political Sensitivity Bias (Aggressive prosecution of remote speech vs leniency for physical breaches)',
      'The "Revolving Door" of Counsel (Frequent attorney transfers preventing consistent trial preparation)',
      'Competency as an Indefinite Delay Tactic (Using psychological referrals to toll speedy trial clocks)',
      'Correctional Labor Bargaining Window B (Detention overlapping with King County 2022-2023 CBA cycle)'
    ],
    proposedReforms: [
      'Mandatory Evidence Disclosure Deadlines: Automatic dismissal if core electronic evidence is unproduced within 60 days',
      'Strict Limits on Competency Delay: Statutory prima facie evidentiary review before competency tolling',
      'Independent Pretrial Detention Safety Oversight: Mandatory reporting of in-custody assaults to defense counsel'
    ],
    evidenceCitations: [
      'King County Superior Court Information 22-1-04242-3 SEA (08/10/2022)',
      'King County Jail Inmate Incident & Medical Report: Fractured nasal bone & assault (Fall 2022)',
      'DSHS Psychiatric Evaluation Summary (09/08/2022)',
      'Superior Court Release Order on Hand Motion (05/05/2023)'
    ],
    keyDates: [
      { date: 'Jan 6, 2021', event: 'Protesters breach Governor mansion grounds in Olympia; no on-scene arrests made' },
      { date: 'August 10, 2022', event: 'Ambush arrest in apartment hallway; booked for felony threats to Governor' },
      { date: 'Sept 13, 2022', event: '45-day restoration commitment signed before hearing; bed unavailable' },
      { date: 'Late 2022', event: 'Contaminated jail water; assaulted by cellmate; solitary confinement' },
      { date: 'May 5, 2023', event: 'Released after 10 months with credit for time served; charges remain pending' },
      { date: 'Feb 2026', event: 'Evaluated competent to stand trial by Dr. Jamie Leavey' }
    ]
  },
  {
    id: 'case-25-2-17456-5',
    caseNumber: 'Case No. 25-2-17456-5 SEA',
    title: 'Retaliatory Eviction & Landlord-Tenant Churn',
    caption: 'SCIDpda Bush Residential LLC vs. Shane Lozenich',
    cause: 'Unlawful Detainer / Eviction for Non-Payment',
    court: 'King County Superior Court (Civil)',
    judge: 'Judge Jennifer Petersen',
    dates: 'June 11, 2025 – January 7, 2026',
    status: 'Closed (Full Satisfaction of Judgment Filed)',
    verdictOutcome: 'Default Judgment Vacated / Full Satisfaction of Judgment Filed',
    headline: 'KIRO News Safety Interview Precedes Unlawful Detainer Service by Eight Days',
    summary: 'Case No. 25-2-17456-5 exposes how civil eviction mechanisms are weaponized against individuals destabilized by prior state incarceration. Following a 10-month pretrial detention that cost the defendant his job, certified third-party agency Telecare Corp. offered to pay all rental arrears in full. The building management repeatedly refused to provide an invoice or accept third-party payment, manufacturing a default. After the defendant appeared on KIRO News advocating for Chinatown-International District safety, eviction paperwork was served eight days later. While defending Pro Se against eviction, the defendant was simultaneously subjected to weekly competency hearings in criminal court. The matter was resolved on January 7, 2026, with a Full Satisfaction of Judgment.',
    background: 'Demonstrates the intersection of housing precarity, administrative obstruction, and retaliatory civil litigation following protected speech. The court prioritized expedited summary eviction over investigating payment obstruction or excusable neglect caused by state-induced detention.',
    proceduralAnomalies: [
      'Landlord refused third-party payment mitigation from certified social service agency (Telecare Corp.)',
      'Money order payments submitted by tenant were returned without explanation',
      'Eviction served 8 days after tenant spoke on KIRO News regarding neighborhood safety',
      'Defendant required to defend civil trial Pro Se while criminal courts questioned his mental competency'
    ],
    dueProcessViolations: [
      'First Amendment Retaliation: Temporal proximity between media advocacy and eviction filing',
      'Duty to Mitigate Damages: Civil landlord refusal of certified third-party repayment',
      'Procedural Due Process: Default judgment entered despite documented excusable neglect from incarceration'
    ],
    systemicVariables: [
      'Incarceration-Induced Economic Collapse (Loss of employment and housing stability)',
      'Administrative Non-Cooperation (Blocking third-party rental relief)',
      'Parallel Civil-Criminal Churn (Contradictory state standards for competence and agency)'
    ],
    proposedReforms: [
      'Mandatory Acceptance of Third-Party Rental Relief: Landlords prohibited from refusing certified aid',
      'Enhanced Retaliation Injunctions: Scrutiny of eviction filings within 30 days of public civic testimony',
      'Integrated Civil-Criminal Notice: Automatic stay of civil proceedings during active competency inquiries'
    ],
    evidenceCitations: [
      'King County Superior Court Civil Complaint 25-2-17456-5 SEA (06/11/2025)',
      'Telecare Corp. Case Management Email Logs (June - October 2023)',
      'KIRO 7 News Video Broadcast & Article (06/03/2024)',
      'Full Satisfaction of Judgment Certificate (01/07/2026)'
    ],
    keyDates: [
      { date: 'June 2023', event: 'Telecare Corp. offers full arrears payment; landlord refuses invoice' },
      { date: 'June 3, 2024', event: 'KIRO News interview broadcast advocating for CID security' },
      { date: 'June 11, 2024', event: 'Served with Unlawful Detainer summons 8 days post-interview' },
      { date: 'July 15, 2025', event: 'Civil show cause hearing certified for trial on same day as criminal competency hearing' },
      { date: 'August 29, 2025', event: 'Writ of restitution entered; defendant files CR 60(b) motion' },
      { date: 'Jan 7, 2026', event: 'Full Satisfaction of Judgment filed; civil matter closed' }
    ]
  },
  {
    id: 'case-26-2-01443-4',
    caseNumber: 'Case No. 26-2-01443-4 SEA',
    title: 'The Keystone Jurisdictional Challenge & Majorat Governance',
    caption: 'Shane Lozenich vs. The State of Washington et al.',
    cause: 'Quiet Title, Declaratory Judgment, Sovereign Corridor Jurisdictional Challenge',
    court: 'King County Superior Court / Intergovernmental Petition',
    judge: 'En Banc Review Requested',
    dates: '2026 – Present',
    status: 'Active Macro-Legal Strategy',
    verdictOutcome: 'Structural Indictment of Quasi-Governmental Immunity & Administrative Layering',
    headline: 'Keystone Case Reframes Systemic Violations into Broad Jurisdictional Challenge',
    summary: 'Case No. 26-2-01443-4 SEA flips the polarity of the Demopocrisy archive. Here, the individual acts as petitioner in a comprehensive Quiet Title and Declaratory Judgment action challenging the lawful authority of quasi-governmental entities (Port of Seattle, 4Culture, KCRHA, SPD, KCSO). It asserts that administrative indemnity shields created under RCW 39.34 and interlocal agreements have produced a shadow jurisdiction that bypasses constitutional due process. The petition synthesizes the prior criminal and civil harms into a demand for institutional accountability and the establishment of a Sovereign Security Corridor.',
    background: 'Integrates forensic audits of public authorities—including the collapse of KCRHA ($13M unaccounted, -$44.7M cash position)—as evidence of structural insolvency. It demands that if municipal and military agencies deny jurisdiction over technological and procedural harms, the sovereign authority of the corridor must be formally recognized.',
    proceduralAnomalies: [
      'Multi-agency jurisdictional vacuum: Civilian courts and Puget Sound Naval Shipyard IG both disclaiming authority',
      'Use of interlocal agreements (ILAs) and bond covenants to insulate administrative actions from constitutional review',
      'Scrubbing of historic deed registries under administrative equity initiatives'
    ],
    dueProcessViolations: [
      'Systemic deprivation of constitutional remedy across layered quasi-governmental agencies',
      'Unchecked administrative immunity operating beyond statutory legislative charters',
      'Subordination of individual fundamental rights to institutional self-preservation'
    ],
    systemicVariables: [
      'Quasi-Governmental Immunity Shields (RCW 39.34 Interlocal agreements)',
      'Structural Financial Insolvency (KCRHA audit revealing severe internal control collapse)',
      'Jurisdictional Denial (Shifting responsibility between municipal, county, and federal bodies)'
    ],
    proposedReforms: [
      'The "Parallel Review" Framework: Mandatory dual-track separation of clinical care and evidentiary investigation',
      'Dissolution of Unconstitutional Immunity Pacts: Judicial scrutiny of interlocal liability shields',
      'Establishment of an Independent Sovereign Evidentiary Oversight Commission'
    ],
    evidenceCitations: [
      'Petition for Declaratory Judgment & Quiet Title (Case 26-2-01443-4 SEA)',
      'State Auditor\'s Forensic Audit of King County Regional Homelessness Authority (KCRHA)',
      'Department of Homeland Security (DHS) FOIA Logs on Directed Energy Weapons (2021-2022)',
      'Washington State Legislature House Bill 1321 (Paramilitary restriction)'
    ],
    keyDates: [
      { date: '2021-2025', event: 'Repository of 8 interconnected cases compiled documenting systemic due process gap' },
      { date: '2025-2026', event: 'KCRHA audit exposes $13M unaccounted & internal control failure' },
      { date: 'Early 2026', event: 'Keystone petition filed challenging quasi-governmental indemnity shields' }
    ]
  }
];
