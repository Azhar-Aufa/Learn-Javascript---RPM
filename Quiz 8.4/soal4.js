function pasanganTerbesar(num) {
  let sNum = num.toString();
  let xPas = 0;
  for (let i = 0; i < sNum.length - 1; i++) {
    const yPas = parseInt(sNum[i] + sNum[i + 1]);
    if (yPas > xPas) {
      xPas = yPas;
    }
  }

  return xPas;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(767754687)); // 87
