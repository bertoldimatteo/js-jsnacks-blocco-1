// Crea un array di numeri interi e 
// fai la somma di tutti gli elementi  che sono in posizione dispari

const number = [10,2,3,5,8,7,6,20,12,4];

const oddNumber = [];

const position = number.length;

if (position % 2 == 1) {
    oddNumber.push(position);
}

console.log(oddNumber);