/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// function palindrome(kata) {
//   return kata == kata.split("").reverse().join("");
// }

let palindrome = (kata) => kata == kata.split("").reverse().join("");

console.log(kakak)

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
console.log(palindrome("bagab"));
console.log(palindrome("susus"));
console.log(palindrome("bitcoin"));
