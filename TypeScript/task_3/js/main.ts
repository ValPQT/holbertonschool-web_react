/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// 1. Création d'un objet row de type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// 2. Insertion de la ligne et récupération de l'ID généré
const newRowID: RowID = CRUD.insertRow(row);

// 3. Création d'une copie mise à jour contenant l'âge
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// 4. Appel des commandes de mise à jour et de suppression
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
