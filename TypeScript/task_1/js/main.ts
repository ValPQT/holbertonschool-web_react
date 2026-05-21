// --- Interfaces ---
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

// --- Classe Director ---
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

// --- Classe Teacher ---
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

// --- Fonction Factory (création d'employé) ---
// salary: number | string utilise un type d'union (soit l'un, soit l'autre)
// Le type de retour est soit Director, soit Teacher
const createEmployee = (salary: number | string): Director | Teacher => {
  // Si le salaire est un nombre et inférieur à 500, on crée un Teacher
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Dans tous les autres cas (nombre >= 500 ou chaîne de caractères comme '$500'), on crée un Director
  return new Director();
};

// --- ZONE DE TEST ---
console.log(createEmployee(200));   // Devrait afficher l'objet Teacher
console.log(createEmployee(1000));  // Devrait afficher l'objet Director
console.log(createEmployee('$500')); // Devrait afficher l'objet Director
