// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

let start = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    start += "*";
  }
  start += "\n";
  console.log(start);
}