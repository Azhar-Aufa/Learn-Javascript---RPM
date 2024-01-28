let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  // Mengubah index 1 sampai 4 (index terakhir tidak dibaca oleh {splice}, oleh karena itu {splice} sampai index ke 5)
  input.splice(1, 5, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);

  let dateA = input[3].split("/");
  if (dateA[1] === "05") {
    console.log("Mei");
  }

  let dateB = [dateA[2], dateA[0], dateA[1]];
  console.log(dateB);
  console.log(dateA.join("-"));
  console.log(input[1].slice(0, 15));
}

// dataHandling2(input);

/**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
//  */
