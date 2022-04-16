/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  module.exports = sumTotalArray