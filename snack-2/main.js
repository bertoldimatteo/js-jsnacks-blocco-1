// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Scrivi la prima parola;");
const secondWord = prompt("Scrivi la seconda parola;");

if ( firstWord.length < secondWord.length) {
    console.log(firstWord)
} else if ( secondWord.length < firstWord.length) {
    console.log(secondWord)
} else {
    console.log(firstWord, secondWord);
};