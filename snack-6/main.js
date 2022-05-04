// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.

let userInput = prompt("Digita un numero");
let incremental = userInput++;

if ( userInput % 2 == 0 ) {
    console.log(userInput);
} else if ( userInput % 2 == 1) {
    console.log(incremental);
}
