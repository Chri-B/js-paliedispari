/*
    1. Word input by prompt
        1.1 word check (isNaN)
        1.2 word toLowerCase
    2. Creation of a function for palindrome words
    3. display result by console log.
*/

var parolaInserita = prompt('Inserisci una parola per scoprire se è palindroma'); // 1. word input by PROMPT

// 1.1 word check (so that's not a number)
while (!isNaN(parolaInserita)) {
    var parolaInserita = prompt('Attenzione: inserisci una parola!')
}

var parolaInseritaLowercase = parolaInserita.toLowerCase(); // 1.2 making the word lowercase
var checkPalindrom = isPalindrom(parolaInseritaLowercase);

if (checkPalindrom) { // display result by console log
    console.log('Yes, your word', parolaInserita, 'is palindrome!');
} else {
    console.log('No, your word', parolaInserita, 'is NOT palindrome!');
}

// 2. creation of a function for palindrome words
function isPalindrom (str) {
    return str == str.split('').reverse().join('');
}
