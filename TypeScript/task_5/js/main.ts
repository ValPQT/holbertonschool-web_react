// ============================================================================
// TÂCHE 10 : Brand convention & Nominal typing
// ============================================================================

// --- Interfaces avec système de Branding ---
export interface MajorCredits {
  credits: number;
  // Propriété brand unique pour identifier MajorCredits
  __brand: 'MajorCredits.brand';
}

export interface MinorCredits {
  credits: number;
  // Propriété brand unique pour identifier MinorCredits
  __brand: 'MinorCredits.brand';
}

// --- Fonctions de somme ---

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits; // Le Type Assertion "as" est nécessaire pour satisfaire la signature à cause du brand virtuel
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}
