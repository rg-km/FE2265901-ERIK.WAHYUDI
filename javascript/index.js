// * -Umur < 2 tahun: gratis
//  * -Umur 2-10:  Harga dasar
//  * -Umur 11-18:  Harga dasar dikalikan 1.5
//  * -Umur 19 keatas: Harga dasar dikalikan 2
//  * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age'

//let nama = "Erik";
//let tahun = 19;
//let harga = 10000;

//if (tahun < 2) {
  //console.log(nama, "Gratis");
//} else if (tahun >= 2 && tahun <= 10) {
  //console.log(nama, harga);
//}  else if (tahun >= 11 && tahun <= 18) {
  //console.log(nama, harga * 1.5);
//} else if (tahun >= 19) {
  //console.log(nama, harga * 2);
//} else if (tahun <= 119) {
  //console.log(nama, "Invalid Age");
//}


//var word
//var word = 'JavaScript';
//var second = 'is';
//var third = 'awesome';
//var fourth = 'and';
//var fifth = 'I';
//var sixth = 'love';
//var seventh = 'it!';

//console.log(word + " " + second + " " + third +  " " + fourth + " " + fifth +  " " + sixth + " " + seventh);
//console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);


//var word = "wow JavaScript is so cool";
//var exampleFirstWord = word[0] + word[1] + word[2];
//var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
//var thirdWord = word[15] + word[16];
//var fourthWord = word[18] + word[19];
//var fifthWord = word[21] + word[22] + word[23] + word[24];

//console.log("First Word: " + exampleFirstWord);
//console.log("Second Word: " + secondWord);
//console.log("Third Word: " + thirdWord);
//console.log("Fourth Word: " + fourthWord);
//console.log("Fifth Word: " + fifthWord);


//var exampleFirstWord = word.substring(0, 3); //(0, 1, 2)
//var exampleSecondWord = word.substring(4, 14); //(0, 1, 2)

//var nama = "dito";
//var nilai = 69.5;
//var absen = 4;

//if (nilai >= 70 && absen < 5) {
  //console.log(`${nama} lulus`)
//}
//else {
  //console.log(`${nama} tidak lulus`)
//}

//let name = 'revan'; // silakan berikan nilai bebas
 //let citizenship = 'Sitka'; //silahkan berikan nilai bebas
 //let grade = 79; //silahkan berikan nilai angka bebas;
 
 // TULIS KODE KAMU DIBAWAH INI:
 //if(name === '') {
   //console.log('NAMA ANDA KOSONG!TOLONG DICEK KEMBALI');
 //}
 //else if(citizenship === '') {
   //console.log('TOLONG ISI KEWARGANEGARAAN ANDA SESUAI KARTU IDENTITAS!')
 //}
 //else if(grade === '') {
   //console.log('Nilai SNMPTN Kosong! ANDA TIDAK DAPAT MENGIKUTI PROSES SELEKSI')
 //} else if(citizenship === 'Indonesia' && grade >= 80) {
  //console.log(`${name} LULUS SELEKSI PROGRAM NASIONAL`);
//}
//else if(citizenship !== 'Indonesia' && grade >= 80) {
  //console.log(`${name} LULUS SELEKSI PROGRAM INTERNASIONAL`);
//}
//else if(grade < 80) {
  //console.log(`${name} TIDAK LULUS SELEKSI`);
//}


//1. Menentukan looping dengan for
//var hasil = "";

//console.log("LOOPING FOR PERTAMA");
//for (var i = 1; i <= 5; i++) {
  //hasil = `${i} - I love coding `;
  //console.log(hasil);
//}

//console.log("LOOPING FOR KEDUA");
//for (var i = 5; i >= 1; i--) {
  //hasil = `${i} - I will become frontend developer`;
  //console.log(hasil);
//}

//console.log();

// Ubahlah setiap huruf dari kalimat di bawah ini menjadi kapital:
// function tukarBesarKecil(kalimat) {
//   // you can only write your code here!
//   var hasil = "";
//   for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === kalimat[i].toUpperCase()) {
//       hasil += kalimat[i].toLowerCase();
//     } else {
//       hasil += kalimat[i].toUpperCase();
//     }
//   }
//   return hasil;
// }

// // TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

//Jumlah kalimat
// function hitungJumlahKata(kalimat) {
//   var hasil = "";
//   var jumlah = 0;
//   if (kalimat != "" && kalimat != " ") {
//     jumlah = jumlah + 1;
//   }
//   for (i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] != " ") {
//       hasil += kalimat[i];
//     }
//     else if (kalimat[i] === " " && hasil != "") {
//       jumlah = jumlah + 1
//     }
//   }
//   return jumlah
// }

// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('I believe I can code')); // 5
// console.log(hitungJumlahKata('I'));

//Palindrome
// function palindrome(kata) {
//   var hasil = "";
//   for (var i = kata.length - 1; i >= 0; i--) {
//     hasil += kata[i];
//   }
//   if (kata === hasil) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("katak"));

// function cekJumlahHuruf(kata) {
//   var tipe1 = 0;
//   var tipe2 = 0;
//   for (var i = 0; i < kata.length; i++) {
//     if (kata[i] === "x") {
//       tipe1 += 1
//     }
//     else if (kata[i] === "o") {
//       tipe2 += 1
//     }
//   }
//   if (tipe1 === tipe2) {
//     return true
//   }
//   else {
//     return false
//   }
// }

// console.log(cekJumlahHuruf("xoxxooox")); // true
// console.log(cekJumlahHuruf("xoxoxoxo")); // true
// console.log(cekJumlahHuruf("xxxoxox")); // false
// console.log(cekJumlahHuruf("ooxoxxooo")); // false


/**
 * Kali ini tugas kamu adalah memisahkan setiap kata dalam kalimat. 
 * gunakannlah built-in function dan cari panjang dari setiap kata tersebut.
 */

 var word = 'wow JavaScript is so cool and i will become frontend developer';
 var exampleFirstWord = word.substring(0, 3);
 
 console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
 console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
 console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
 console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
 console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
 console.log('Sixth Word: ' + sixthhWord + ', with length: ' + sixthhWordLength);
 console.log('Seventh Word: ' + seventhWord + ', with length: ' + seventhWordLength);
 console.log('Eighth Word: ' + eighthWord + ', with length: ' + eighthWordLength);
 console.log('Ninth Word: ' + ninthWord + ', with length: ' + ninthWordLength);
 console.log('Tenth Word: ' + tenthWord + ', with length: ' + tenthWordLength);
 console.log('Eleventh Word: ' + eleventhWord + ', with length: ' + eleventhWordLength);
