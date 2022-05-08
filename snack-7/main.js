// Generatore di "nomi cognomi" casuali:  
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi,  
// e da queste vuole generare una falsa lista di invitati con nome e cognome. 

const names = ["Matteo","Federico","Michele"];
const surnames = ["Bertoldi","Bauce","Urbani"];
const listGuests = [];
const invitations = 5;

while (listGuests.length < invitations) {
    const randomNames = Math.floor(Math.random() * names.length);
    const randomSurnames = Math.floor(Math.random() * surnames.length);
    const newName = names[randomNames] + " " + surnames[randomSurnames];

    if (!listGuests.includes(newName)) {
        listGuests.push(newName);
    }
}

console.log(listGuests);
