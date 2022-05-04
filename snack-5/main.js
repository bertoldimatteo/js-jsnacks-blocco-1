// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array.

const array = [];

for ( let i = 0; i < 6; i++) {
    let userInput = prompt("Digita un numero");
    if ( userInput % 2 === 1) {
        array.push(userInput);
    };
};
console.log(array);