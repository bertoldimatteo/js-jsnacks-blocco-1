// Generatore di "nomi cognomi" casuali: 
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let names = ["Alberto","Marco","Luca","Federico"];
let randomName = names.slice(Math.floor((Math.random() * 4) + 1);

let surname = ["DeMedici","Filippi","Antoniazzi","Accrasi"];
let randomSurnames = surname.slice(Math.floor((Math.random() * 4) + 1);

console.log(`${surname}${randomSurnames}`);