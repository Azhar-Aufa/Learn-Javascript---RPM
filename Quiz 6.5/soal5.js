// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
// //*
// //**
// //***
// //****
// //*****
let bintang = ``;
for(let i = 1; i < 6; i++) {
    for(let j = 0; j < i; j++) {
        bintang += '*';
        
    }
    bintang += '\n';
};

console.log(bintang);