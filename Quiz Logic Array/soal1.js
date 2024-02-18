/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

const targetTerdekat = (arr) => {
    let selisih = []
    let hurufO = 0
    let hurufX = []
    for(let i = 0; i < arr.length - 1; i++) {
        (arr[i] === 'x') ? hurufX.push(i) : (arr[i] === 'o') ? hurufO = i : undefined;
    }
    if (hurufX.length === 0) return 0;  
    else {
          for(let j = 0;j<=hurufX.length - 1;j++) {
          selisih.push(Math.abs(hurufX[j] - hurufO));
          selisih.sort();
          }
          return selisih[0]
         }
};

  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
  console.log(targetTerdekat([' ', ' ', 'o', ' ']));
  console.log(targetTerdekat([" ","o"," ","x","x"," "," ","x"]))

