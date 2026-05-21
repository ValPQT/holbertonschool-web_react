// ============================================================================
// TÂCHE 1 : Interface Teacher
// ============================================================================
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optionnel grâce au '?'
  location: string;
  [propName: string]: any;     // Permet d'ajouter des attributs dynamiques
}

// ============================================================================
// TÂCHE 2 : Interface Directors (Héritage)
// ============================================================================
interface Directors extends Teacher {
  numberOfReports: number;    // Attribut requis spécifique aux directeurs
}

// ============================================================================
// TÂCHE 3 : Fonction printTeacher et son Interface
// ============================================================================
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ============================================================================
// TÂCHE 4 : Classe StudentClass et ses Interfaces
// ============================================================================
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// ============================================================================
// ZONE DE TEST (Vérification des exemples dans la console)
// ============================================================================

// Test Tâche 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log('--- Test Tâche 1 (Teacher) ---');
console.log(teacher3);

// Test Tâche 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log('\n--- Test Tâche 2 (Directors) ---');
console.log(director1);

// Test Tâche 3
console.log('\n--- Test Tâche 3 (printTeacher) ---');
console.log(printTeacher("John", "Doe"));

// Test Tâche 4
const student = new StudentClass('Valentin', 'Doe');
console.log('\n--- Test Tâche 4 (StudentClass) ---');
console.log(student.displayName());
console.log(student.workOnHomework());
