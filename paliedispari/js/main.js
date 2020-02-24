/*
    1. user chooses odd or even by prompt
        1.1 check on user choice
    2. user chooses a number
        2.1 check on user choice
    3. computer generates a random number using a function
    4. sum of the two numbers
    5. check if the sum is odd or even using a function
    6. compare user choice (point 1) with the result of point 5.
    7. display who won;
*/

// 1.
var sceltaUtente = parseInt(prompt('Inserisci "2" se vuoi scegliere PARI, altrimenti inserisci "1" per scegliere DISPARI'));
while ((sceltaUtente != '1') && (sceltaUtente != '2')) { // 1.1
    var sceltaUtente = parseInt(prompt('Devi inserire il numero "1" per dispari, o "2" per pari!'));
}
//console.log('2 pari 1 dispari', sceltaUtente);

// 2.
var numeroUtente = parseInt(prompt('Ora scegli un numero da 1 a 5 per giocare!'));
while ((isNaN(numeroUtente)) || (numeroUtente > '5') || (numeroUtente < '1')) { // 2.1
    var numeroUtente = parseInt(prompt('Devi inserire un numero da 1 a 5!'));
}
//console.log('utente:', numeroUtente);

var numeroComputer = randomNumberGenerator(1, 5); // 3.
//console.log('computer:', numeroComputer);

var sommaNumeri = numeroComputer + numeroUtente; // 4.
//console.log('somma:', sommaNumeri);

var pariODispari = isPari(sommaNumeri); //5.
//console.log(pariODispari);

// 6. 7.
if ((pariODispari == true) && (sceltaUtente == '2')) {
    console.log('Hai scelto', numeroUtente, 'e il computer ha scelto', numeroComputer, 'la cui somma è:', sommaNumeri, 'che è un numero PARI; tu hai scelto pari e quindi HAI VINTO!');
} else if ((pariODispari == true) && (sceltaUtente == '1')) {
    console.log('Hai scelto', numeroUtente, 'e il computer ha scelto', numeroComputer, 'la cui somma è:', sommaNumeri, 'che è un numero PARI; tu hai scelto dispari e quindi HAI PERSO!');
} else if ((pariODispari == false) && (sceltaUtente == '1')) {
    console.log('Hai scelto', numeroUtente, 'e il computer ha scelto', numeroComputer, 'la cui somma è:', sommaNumeri, 'che è un numero DISPARI; tu hai scelto dispari e quindi HAI VINTO!');
} else {
    console.log('Hai scelto', numeroUtente, 'e il computer ha scelto', numeroComputer, 'la cui somma è:', sommaNumeri, 'che è un numero DISPARI; tu hai scelto pari e quindi HAI PERSO!');
}

// 3.
function randomNumberGenerator(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}

// 5.
function isPari(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
