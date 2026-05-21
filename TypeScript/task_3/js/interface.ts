// Définition du type RowID qui est un alias pour un number
export type RowID = number;

// Définition de l'interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optionnel grâce au '?'
}
