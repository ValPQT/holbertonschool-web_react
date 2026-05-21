// 1. Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optionnel grâce au '?'
  location: string;
  [propName: string]: any;     // Permet d'ajouter n'importe quelle autre propriété dynamique
}

// 2. Test avec l'exemple fourni dans l'énoncé
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Propriété dynamique acceptée grâce à [propName: string]: any
};

console.log(teacher3);
