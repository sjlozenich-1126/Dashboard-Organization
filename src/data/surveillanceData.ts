import { SurveillanceEvidenceItem } from '../types';

export const SURVEILLANCE_EVIDENCE_ITEMS: SurveillanceEvidenceItem[] = [
  {
    id: 'v2k-01',
    category: 'technical_foundation',
    title: 'The Frey Effect (Microwave Auditory Effect - MAE)',
    source: 'Allan H. Frey, Journal of Applied Physiology (Vol. 17, No. 4)',
    dateOrYear: '1961 / 1962',
    summary: 'Seminal peer-reviewed scientific discovery demonstrating that human subjects perceive auditory sound (clicks, buzzes, chirps, and tones) when exposed to pulsed radiofrequency (RF) energy in the 200 MHz to 3 GHz range, without acoustic transducers.',
    technicalMechanism: 'Thermoelastic Expansion: Microscopic absorption of pulsed electromagnetic waves causes rapid thermal expansion (on the order of 10^-6 °C), creating minute pressure shockwaves within cranial tissue that conduct through bone to the cochlea.',
    institutionalWeaponization: 'When individuals report hearing localized pulsed RF sounds without an external acoustic speaker, medical triage and court-appointed evaluators reflexively diagnose "auditory hallucinations" and "schizoaffective disorder," disregarding proven physical biophysics.',
    tags: ['Frey Effect', 'Microwave Auditory', 'Thermoelastic Expansion', 'Biophysics', 'Cochlear Stimulation'],
    keyParameters: {
      frequencyRange: '200 MHz – 3.0 GHz (Peak absorption ~1.2 GHz)',
      modulationType: 'Short RF pulses (1–50 microseconds pulse width)',
      biologicalEffect: 'Intracranial acoustic acoustic wave propagation (~10-50 kHz cochlear stimulation)',
      countermeasureTested: 'High-attenuation conductive shielding (RF mesh, mu-metal, copper grounded enclosures)'
    }
  },
  {
    id: 'v2k-02',
    category: 'declassified_doc',
    title: 'Bioeffects of Selected Nonlethal Weapons (Declassified Army Intelligence)',
    source: 'U.S. Army Intelligence and Security Command (INSCOM) / NGIC-1147-101-98',
    dateOrYear: '1998',
    summary: 'Declassified military intelligence assessment detailing the operational feasibility of synthetic telepathy, voice-to-skull (V2K) transmission, and microwave auditory bioeffects for psychological operations and targeted incapacitation.',
    technicalMechanism: 'Intelligible Voice Modulation: RF carrier waves modulated with voice signals pulse-coded into microwave frequencies, producing comprehensible speech directly perceived inside the target subject’s cranium.',
    institutionalWeaponization: 'Court dockets treat any mention of declassified microwave auditory transmission as evidence of "persecutory delusions," completely erasing government admissions of operational nonlethal acoustic capabilities.',
    tags: ['INSCOM', 'V2K', 'Nonlethal Weapons', 'Declassified', 'Psychological Operations'],
    keyParameters: {
      frequencyRange: 'UHF & Microwave Bands (300 MHz – 3 GHz)',
      modulationType: 'Pulse-rate modulation / Intelligible speech coding',
      biologicalEffect: 'Targeted intracranial voice transmission without external sound bleed',
      countermeasureTested: 'Broadband RF spectrum detection, real-time waterfall FFT monitoring'
    }
  },
  {
    id: 'v2k-03',
    category: 'patent_citation',
    title: 'U.S. Patent 4,877,027: Hearing System Using Microwave Energy',
    source: 'United States Patent and Trademark Office (Inventor: Wayne B. Brunkan)',
    dateOrYear: 'October 31, 1989',
    summary: 'Patented apparatus and method for inducing sound perception in the head of a person using bursts of microwave energy in the range of 100 MHz to 10 GHz, modulated by voice intelligence.',
    technicalMechanism: 'Apparatus generates microwave pulses at pulse repetition frequencies within the audible range (20 Hz to 20 kHz), converting analog audio waveforms into microsecond-duration microwave pulse packets.',
    institutionalWeaponization: 'Patented, functional technologies are categorized in court documents as "impossible science fiction" when raised by unrepresented defendants.',
    tags: ['US Patent 4877027', 'Direct Hearing', 'Audio Modulation', 'Microwave Hardware'],
    keyParameters: {
      frequencyRange: '100 MHz to 10 GHz',
      modulationType: 'Pulse-burst audio amplitude envelope modulation',
      biologicalEffect: 'Direct perception of spoken words within brain auditory cortex'
    }
  },
  {
    id: 'v2k-04',
    category: 'technical_foundation',
    title: 'Parametric Acoustic Heterodyning & Directional Ultrasonic Arrays',
    source: 'Audio Engineering Society / Bell Labs & American Technology Corp (Audio Spotlight)',
    dateOrYear: '2001–Present',
    summary: 'Ultrasound non-linear self-demodulation technology that projects laser-tight beams of audible sound across long distances. The audio is audible ONLY along the narrow collimated beam path and silent to bystanders inches away.',
    technicalMechanism: 'Heterodyning in air: Two high-frequency ultrasonic carriers (e.g., 40 kHz) modulated with audio mix in the non-linear air medium, producing secondary audible beat frequencies (20 Hz - 20 kHz) exclusively at the focal point.',
    institutionalWeaponization: 'Targeted subjects hear discrete voices or sounds that surrounding individuals cannot hear. Witnesses confirm "I hear nothing," leading police and doctors to conclude psychiatric hallucination rather than directional acoustic hardware.',
    tags: ['Parametric Array', 'Audio Spotlight', 'Ultrasonic Heterodyne', 'Directional Audio'],
    keyParameters: {
      frequencyRange: 'Ultrasonic carrier: 38 kHz – 65 kHz | Audio: 100 Hz – 15 kHz',
      modulationType: 'DSB / SSB ultrasonic amplitude modulation',
      biologicalEffect: 'Localized beam acoustic projection (dispersion angle < 3 degrees)',
      countermeasureTested: 'Ultrasonic acoustic spectral sensors (microphones rated to 100 kHz)'
    }
  },
  {
    id: 'v2k-05',
    category: 'empirical_log',
    title: 'King County Urban RF Anomaly & Spectrum Monitoring Logs',
    source: 'Independent Forensic Spectrum Audits (Seattle / SCIDpda Housing Corridor)',
    dateOrYear: '2021–2025',
    summary: 'Documented continuous electromagnetic spectrum recordings showing anomalous pulsed microsecond burst transmissions in ISM bands (433 MHz, 915 MHz, 2.4 GHz) correlating with localized auditory interference and severe sleep disruption cycles.',
    technicalMechanism: 'Intermittent, high-peak-power pulsed bursts occurring during quiet nocturnal hours (01:00 - 05:00), displaying repetition frequencies matching human auditory and neurological delta/theta bands (2 Hz - 14 Hz).',
    institutionalWeaponization: 'Refusal by municipal housing authority (SCIDpda) and law enforcement to permit technical inspection or environmental radio audits, treating physical signal logs as psychiatric symptoms.',
    tags: ['Spectrum Audit', 'ISM Bands', 'Nocturnal Bursts', 'King County', 'Sleep Deprivation'],
    keyParameters: {
      frequencyRange: '433.92 MHz, 902–928 MHz, 2.400–2.483 GHz',
      modulationType: 'High-PRF narrow pulse bursts / Frequency hopping',
      biologicalEffect: 'Chronic sleep fragmentation, circadian disruption, somatic stress elevation',
      countermeasureTested: 'Silver-threaded grounding canopies, RF line filters, SDR spectrum analyzers'
    }
  },
  {
    id: 'v2k-06',
    category: 'institutional_mechanism',
    title: 'The Systemic Medicalization Loop ("Competency as a Gag Order")',
    source: 'Demopocrisy Institutional Forensic Analysis',
    dateOrYear: '2021–2026',
    summary: 'The administrative mechanism whereby criminal courts, landlords, and medical systems convert reports of electronic surveillance and targeted acoustic interference into psychiatric diagnoses (RCW 10.77 competency evaluations), insulating institutions from evidentiary discovery.',
    technicalMechanism: 'Administrative Displacement: Instead of subpoenaing telecom records, building surveillance feeds, or deploying spectrum analyzers, the state suspends trial proceedings and subjects the complainant to psychotropic chemical intervention.',
    institutionalWeaponization: 'Prevents the accused from cross-examining witnesses, introducing digital forensics, or exposing retaliatory harassment in open court.',
    tags: ['Medicalization Loop', 'RCW 10.77', 'Due Process Gap', 'Administrative Gag', 'Whistleblower Suppression']
  }
];

export const TECHNICAL_COMPARISON_MATRIX = [
  {
    characteristic: 'Physical Mechanism',
    electronicSurveillance: 'Pulsed microwave thermoelastic expansion / Ultrasonic parametric heterodyning in air',
    clinicalPsychiatricAssumption: 'Endogenous neurochemical imbalance (Dopamine/Serotonin hypothesis)'
  },
  {
    characteristic: 'Directionality & Perception',
    electronicSurveillance: 'Collimated beam (<3° dispersion) or localized RF hotspot; audible only to recipient',
    clinicalPsychiatricAssumption: 'Assumed non-physical hallucination because bystander cannot hear it'
  },
  {
    characteristic: 'Measurability & Instrumentation',
    electronicSurveillance: 'Detectable via Software Defined Radios (SDR), wideband spectrum analyzers, ultrasonic hydro/microphones',
    clinicalPsychiatricAssumption: 'Dismissed without conducting physical RF or acoustic measurements'
  },
  {
    characteristic: 'Legal & Court Response',
    electronicSurveillance: 'Suppression of evidentiary hearings; reflexive referral to RCW 10.77 competency evaluation',
    clinicalPsychiatricAssumption: 'Assignment of permanent "Psychosis" label; forced neuroleptics'
  },
  {
    characteristic: 'Remedy / Resolution',
    electronicSurveillance: 'RF shielding, technical audits, legal subpoenas, whistleblower protections',
    clinicalPsychiatricAssumption: 'Chemical sedation (Haloperidol, Risperidone) which fails to stop external acoustic signals'
  }
];

export const SCIENTIFIC_REFERENCES_V2K = [
  {
    id: 1,
    title: 'Human Auditory System Response to Modulated Electromagnetic Energy',
    authors: 'Allan H. Frey',
    journal: 'Journal of Applied Physiology',
    year: '1962',
    doiOrCitation: '17(4): 689–692'
  },
  {
    id: 2,
    title: 'Auditory Perception of Radio-Frequency Electromagnetic Energy',
    authors: 'Chou, C.K., Guy, A.W., Galambos, R.',
    journal: 'Science',
    year: '1982',
    doiOrCitation: 'Science 209: 1143–1145'
  },
  {
    id: 3,
    title: 'Bioeffects of Selected Nonlethal Weapons (U.S. Army INSCOM Report)',
    authors: 'National Ground Intelligence Center / Department of Defense',
    journal: 'Declassified under Freedom of Information Act',
    year: '1998',
    doiOrCitation: 'NGIC-1147-101-98'
  },
  {
    id: 4,
    title: 'Acoustic Heterodyning and Parametric Arrays in Air',
    authors: 'F. Joseph Pompei',
    journal: 'Massachusetts Institute of Technology / Audio Spotlight Research',
    year: '1999–2002',
    doiOrCitation: 'MIT Media Lab Colloquium'
  },
  {
    id: 5,
    title: 'Microwave Auditory Effects and Applications',
    authors: 'James C. Lin, Ph.D.',
    journal: 'Springfield, IL: Charles C Thomas Publisher',
    year: '1978 / 2021',
    doiOrCitation: 'IEEE Transactions on Microwave Theory and Techniques'
  }
];
