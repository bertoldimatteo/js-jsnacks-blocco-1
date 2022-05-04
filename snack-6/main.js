// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.


for ( let i = 0; i < 6; i++) {
    const userInput = prompt("Digita un numero");
    if ( userInput % 2 === 0 ) {
        console.log(userInput);
    };
};
