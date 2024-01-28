// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = "wow JavaScript is so cool";
let exampleFirstWord = word[0] + word[1] + word[2];

console.log("First Word: " + exampleFirstWord);

// // ---------------------------------------
let word1 = 'Wow JavaScript is so cool';

let kata1 = word1.slice(0, 3);
let kata2 = word1.slice(4, 14);
let kata3 = word1.slice(15, 17);
let kata4 = word1.slice(18, 20);
let kata5 = word1.slice(21, 25);

console.log(kata1 + ' ' + kata2 + ' ' + kata3 + ' ' + kata4 + ' ' + kata5);
// // ---------------------------------------


