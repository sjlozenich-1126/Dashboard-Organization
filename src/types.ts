export type ViewMode = 
  | 'narrative' 
  | 'timeline' 
  | 'dashboard' 
  | 'cases' 
  | 'medical' 
  | 'architecture' 
  | 'archive'
  | 'admin';

export type MedicalPrivacyMode = 'public' | 'redacted' | 'private';
export type SurveillanceTopicMode = 'surveillance' | 'medical' | 'dual';

export interface AdminSettings {
  isLoggedIn: boolean;
  userEmail: string;
  adminName: string;
  medicalPrivacyMode: MedicalPrivacyMode;
  defaultTopicMode: SurveillanceTopicMode;
  siteHeadline: string;
  lastUpdated: string;
}

export interface SurveillanceEvidenceItem {
  id: string;
  category: 'technical_foundation' | 'declassified_doc' | 'empirical_log' | 'institutional_mechanism' | 'patent_citation';
  title: string;
  source: string;
  dateOrYear: string;
  summary: string;
  technicalMechanism: string;
  institutionalWeaponization: string;
  tags: string[];
  keyParameters?: {
    frequencyRange?: string;
    modulationType?: string;
    biologicalEffect?: string;
    countermeasureTested?: string;
  };
}

export interface TimelineEntry {
  id: string;
  date: string;
  year: number;
  month?: string;
  title: string;
  category: 'legal' | 'medical' | 'detention' | 'civil' | 'labor' | 'investigative' | 'environmental';
  caseNumber?: string;
  judge?: string;
  attorney?: string;
  location: string;
  summary: string;
  quote?: string;
  anomalies?: string[];
  evidenceDoc?: string;
  statusTag?: string;
  systemicVariables?: string[];
}

export interface CaseRecord {
  id: string;
  caseNumber: string;
  title: string;
  caption: string;
  cause: string;
  court: string;
  judge: string;
  attorney?: string;
  dates: string;
  incarcerationDates?: string;
  status: string;
  verdictOutcome: string;
  headline: string;
  summary: string;
  background: string;
  proceduralAnomalies: string[];
  dueProcessViolations: string[];
  systemicVariables: string[];
  proposedReforms: string[];
  evidenceCitations: string[];
  keyDates: { date: string; event: string }[];
  hospitalizationDetail?: {
    facility: string;
    duration: string;
    diagnosesAssigned: string[];
    contradictoryFindings: string[];
    medicationsForced: string[];
  };
}

export interface MedicalAuditItem {
  testName: string;
  resultReported: string;
  clinicalInterpretation: string;
  forensicContradiction: string;
  diagnosticImpact: string;
  status: 'contradictory' | 'abnormal' | 'negative' | 'unconfirmed';
}

export interface ReferenceItem {
  id: number;
  title: string;
  year: number | string;
  type: string;
  scope: string;
}
