// --- TÂCHE 1 : Interface Teacher ---
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// --- TÂCHE 2 : Interface Directors ---
// On utilise 'extends' pour hériter de toutes les propriétés de Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// --- ZONE DE TEST (Exemples) ---

// Exemple Tâche 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Exemple Tâche 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Propriété obligatoire spécifique à Directors
};

console.log(teacher3);
console.log(director1);
