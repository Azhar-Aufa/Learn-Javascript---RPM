// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


// let word4 = 'wow JavaScript is so cool';
// let exampleFirstWord4 = word4.substring(0, 3);

// let firstWordLength = exampleFirstWord4.length;

// console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

let word = 'wow JavaScript is so cool';

let firstWord = word.substring(0, 3);
let firstWordLength = firstWord.length;

let secondWord = word.substring(4, 14);
let secondWordLength = secondWord.length;

let thirdWord = word.substring(15, 17);
let thirdWordLength = thirdWord.length;

let fourthWord = word.substring(18, 20);
let fourthWordLength = fourthWord.length;

let fifthWord = word.substring(21, 25);
let fifthWordLength = fifthWord.length;

console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord +  ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
