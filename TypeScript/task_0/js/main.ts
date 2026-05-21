// 1. Déclaration de l'interface représentant un étudiant
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Création des deux variables étudiants en respectant l'interface
const student1: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 25,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Columbia",
};

// 3. Stockage des étudiants dans un tableau explicitement typé
const studentsList: Student[] = [student1, student2];

// 4. Génération dynamique du tableau HTML via Vanilla JS
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");
  
  // Assignation des valeurs textuelles
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  // Construction de la structure de la ligne
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Ajout de la ligne au corps du tableau
  tbody.appendChild(row);
});

// Assemblage final et injection dans le DOM (body de la page)
table.appendChild(tbody);
document.body.appendChild(table);
