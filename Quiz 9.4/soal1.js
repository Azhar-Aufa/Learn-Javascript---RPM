/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
    let faktor = [];
    let hasil = [];
    for(let i = 0;i<=angka;i++) {
      if(angka % i === 0)faktor.push(i);  
    }
    for(let j = 0;j<=faktor.length;j++) {
      for(let k = faktor.length;k >= 0; k--) {
        let kali = faktor[j] * faktor[k]
        if(kali === angka) hasil.push(`${faktor[j]}${faktor[k]}`);
      }
    }
    hasil.sort((a, b) => a-b);
    return hasil[0].length;
  }
  console.log(digitPerkalianMinimum(24));
  console.log(digitPerkalianMinimum(90));
  console.log(digitPerkalianMinimum(20));
  console.log(digitPerkalianMinimum(179));
  console.log(digitPerkalianMinimum(1));
