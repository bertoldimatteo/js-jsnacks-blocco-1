// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore.

// creo prompt per primo numero
const firstNumber = prompt("Digita il primo numero:");

// creo prompt per secondo numero
const secondNumber = prompt("Digita il secondo numero:");

if ( firstNumber > secondNumber) {
    console.log(firstNumber);
} else if ( secondNumber > firstNumber ) {
    console.log (secondNumber);
};