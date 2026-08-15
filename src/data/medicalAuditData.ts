import { MedicalAuditItem } from '../types';

export const CSF_PANEL_LABS: MedicalAuditItem[] = [
  {
    testName: 'CSF VDRL (Venereal Disease Research Lab)',
    resultReported: 'Positive (Titer 1:4) — "Serology: Positive !"',
    clinicalInterpretation: 'Reported by hospital as active central nervous system infection (Neurosyphilis)',
    forensicContradiction: 'Lab itself prints warning: "Detection of antibodies may reflect blood contamination or blood-brain barrier breakdown, not true CNS infection." Positive VDRL can be false-positive from systemic inflammation, viral presence, or prior non-neurological exposures.',
    diagnosticImpact: 'Directly fed into court finding of legal incompetency and justified involuntary administration of high-dose Penicillin G IV and anti-psychotics.',
    status: 'contradictory'
  },
  {
    testName: 'FTA-ABS in CSF (Fluorescent Treponemal Antibody)',
    resultReported: 'Reactive — "FTA Result, CSF: Reactive !"',
    clinicalInterpretation: 'Cited as corroboration of secondary/tertiary neurosyphilis',
    forensicContradiction: 'Extremely high sensitivity but very low specificity in CSF; any trace transudation of serum IgG yields a reactive result without indicating active parenchymal disease.',
    diagnosticImpact: 'Used as an unquestioned clinical marker to override defendant\'s factual statements as "delusional".',
    status: 'abnormal'
  },
  {
    testName: 'CSF Nucleated Cell Count & Differential',
    resultReported: '87 cells/uL (Elevated) — 95% Neutrophils',
    clinicalInterpretation: 'Assumed to represent infectious inflammation',
    forensicContradiction: 'CRITICAL CONTRADICTION: Neurosyphilis classically presents with lymphocytic pleocytosis (lymphocytes > 90%). An overwhelmingly neutrophilic count (95% neutrophils) is indicative of acute bacterial meningitis or traumatic tap, NOT neurosyphilis.',
    diagnosticImpact: 'Incompatible with neurosyphilis pathophysiology, yet the diagnosis was affirmed and transferred into criminal court records.',
    status: 'contradictory'
  },
  {
    testName: 'CSF Glucose & Protein Level',
    resultReported: 'Glucose: 62 mg/dL (Normal) | Protein: 47 mg/dL (Mild elevation)',
    clinicalInterpretation: 'Mild protein elevation cited as CNS pathology',
    forensicContradiction: 'Normal glucose (62 mg/dL) directly refutes acute bacterial meningitis (which typically drops glucose <40). Mild protein is completely nonspecific.',
    diagnosticImpact: 'Contradicts both the neutrophil-driven bacterial theory and active syphilitic meningitis.',
    status: 'contradictory'
  },
  {
    testName: 'Infectious Polymerase Chain Reaction (PCR) Panels',
    resultReported: 'Varicella Zoster PCR: Negative | HSV-1 / HSV-2 PCR: Negative | TB PCR: Negative | AFB Cultures: Negative',
    clinicalInterpretation: 'Screening for opportunistic and infectious meningitis',
    forensicContradiction: 'Every viral, mycobacterial, and acid-fast bacillus study returned completely negative.',
    diagnosticImpact: 'Demonstrates zero confirmed identifiable pathogen in CSF.',
    status: 'negative'
  },
  {
    testName: 'HIV / AIDS Diagnostic Verification',
    resultReported: '"AIDS" added to permanent problem list; Dolutegravir & Truvada prescribed',
    clinicalInterpretation: 'Treated as active advanced immunosuppressive HIV infection',
    forensicContradiction: 'CRITICAL ABSENCE: Zero HIV antibody tests, zero HIV viral load assays, zero CD4 lymphocyte counts in laboratory records. Instead, a secondary "genotypic resistance assay" was ordered prematurely.',
    diagnosticImpact: 'Created a severe presumption of neurocognitive disorder (HAND) before municipal judges without evidentiary lab backing.',
    status: 'unconfirmed'
  },
  {
    testName: 'Sepsis Diagnostics',
    resultReported: '"Sepsis, due to unspecified organism, unknown source" on chart',
    clinicalInterpretation: 'Systemic life-threatening infection requiring emergency hold',
    forensicContradiction: 'WBC count was normal (4.7 -> 6.6 k/uL), vitals stable, blood cultures showed no growth, zero organ dysfunction documented.',
    diagnosticImpact: 'Used as a placeholder diagnosis to justify emergency admission and lockdown in medical wards.',
    status: 'unconfirmed'
  },
  {
    testName: 'Psychosis & Neuroleptic Administration',
    resultReported: 'Haloperidol 5mg BID + IM PRN, Risperdal, Benztropine',
    clinicalInterpretation: 'Treated for acute primary psychosis and delusional disorder',
    forensicContradiction: 'Zero documented formal psychiatric examination, mental status exam, or toxicology screen prior to forced injection. Acute dystonic reaction (severe muscle spasms, locked neck) resulted within hours.',
    diagnosticImpact: 'The clinical label "Psychosis" was weaponized to dismiss factual reporting of digital leaks, surveillance, and physical assault.',
    status: 'contradictory'
  }
];

export const DIAGNOSTIC_CASCADE_STEPS = [
  {
    step: 1,
    title: 'Arrest & Stand-in Diversion',
    actor: 'Seattle Municipal Court / Stand-in Public Defender',
    action: 'Defendant arrested without warrant/complaint; counsel reflexively requests RCW 10.77 competency evaluation instead of testing state evidence or consent.',
    effect: 'State burden of proof is immediately suspended.'
  },
  {
    step: 2,
    title: 'Involuntary Hospital Transfer',
    actor: 'King County Jail & Harborview Medical Center',
    action: 'Upon charge dismissal w/o prejudice, subject is transferred across street without a documented signed court order in release files.',
    effect: 'Individual enters civil-psychiatric detention outside criminal discovery safeguards.'
  },
  {
    step: 3,
    title: 'Diagnostic Inflation & Flawed Labs',
    actor: 'Hospital ER & Clinical Pathology',
    action: 'Severe diagnoses (Neurosyphilis, AIDS, Psychosis, Sepsis) assigned based on 1:4 VDRL titer despite 95% neutrophils and zero confirmatory HIV tests.',
    effect: 'Permanent medical record problem list updated with high-severity pathology.'
  },
  {
    step: 4,
    title: 'Judicial Acceptance Without Scrutiny',
    actor: 'Superior Court & Public Prosecutors',
    action: 'Courts receive the clinical problem list and reflexively rule the defendant incompetent ("PARTIES ACCEPT OPINIONS IN CMPTCY EVAL").',
    effect: 'Evidentiary claims regarding data breaches and surveillance are dismissed as "psychiatric symptoms".'
  },
  {
    step: 5,
    title: 'Restoration Reversal Paradox (2026)',
    actor: 'Office of Forensic Mental Health Services (Dr. Jamie Leavey)',
    action: 'Forensic evaluation determines subject is highly engaged, understands complex law, and is fully competent to stand trial.',
    effect: 'The 5-year diagnostic loop collapses, exposing competency orders as instruments of delay rather than clinical necessity.'
  }
];
