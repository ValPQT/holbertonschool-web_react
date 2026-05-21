// ============================================================================
// TÂCHE 5 : Interfaces et Classes pour Director et Teacher
// ============================================================================

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Fonction Factory (création d'un employé selon le salaire)
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

// ============================================================================
// TÂCHE 6 : Fonctions spécifiques aux employés (Type Guards)
// ============================================================================

// Type predicate pour vérifier si l'employé est un directeur
const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee as Director).workDirectorTasks !== undefined;
};

// Fonction pour exécuter le travail spécifique à la classe détectée
const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
};

// ============================================================================
// TÂCHE 7 : String literal types
// ============================================================================

// Définition du String Literal Type
type Subjects = 'Math' | 'History';

// Fonction teachClass restreinte au type Subjects
const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
};

// ============================================================================
// ZONE DE TEST (Vérification dans la console)
// ============================================================================

// Tests Tâche 5
console.log('--- Tests Tâche 5 (createEmployee) ---');
console.log(createEmployee(200));    // Affiche l'instance de Teacher
console.log(createEmployee(1000));   // Affiche l'instance de Director
console.log(createEmployee('$500'));  // Affiche l'instance de Director

// Tests Tâche 6
console.log('\n--- Tests Tâche 6 (executeWork) ---');
console.log(executeWork(createEmployee(200)));    // Affiche : Getting to work
console.log(executeWork(createEmployee(1000)));   // Affiche : Getting to director tasks

// Tests Tâche 7
console.log('\n--- Tests Tâche 7 (teachClass) ---');
console.log(teachClass('Math'));    // Affiche : Teaching Math
console.log(teachClass('History')); // Affiche : Teaching History
