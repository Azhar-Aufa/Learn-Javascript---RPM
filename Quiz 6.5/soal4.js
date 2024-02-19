//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


// kelipatan 2 
let angka2 = 100;
for(let i = 1; i <= angka2; i++) {
    console.log((i % 2 == 0 ) ? (i + ' adalah kelipatan 2') : i);
};

// kelipatan 5
let angka5 = 100;
for(let i = 1; i <= angka5; i++) {
    console.log((i % 5 == 0 ) ? (i + ' adalah kelipatan 5') : i);
};

// kelipatan 9
let angka9 = 100;
for(let i = 1; i <= angka9; i++) {
    console.log((i % 9 == 0 ) ? (i + ' adalah kelipatan 9') : i);
};

// MENCOBA UTAK ATIK MATUK
for(let i = 1; i <= 100; i++) {
    const kelipatan2dan5 = () => (i % 5 == 0) ? `dan 5` : ``;
   let result = (i % 2 == 0) ? `${i} adalah kelipatan 2 ${kelipatan2dan5()}` : (i % 5 == 0) ? `${i} adalah kelipatan 5` : (i % 9 == 0) ? `${i} adalah kelipatan 9` : i;
   console.log(result);
};
