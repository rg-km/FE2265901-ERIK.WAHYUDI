/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  if (typeof plat !== "string") return "invalid data";
  if (plat === "") return "plat tidak ditemukan";

  var platArr = plat.split(";");
  let ganjil = [];
  let genap = [];

  for (var i = 0; i < platArr.length; i++) {
    if (platArr[i] % 2 == 0) {
      genap.push(platArr[i]);
    } else {
      ganjil.push(platArr[i]);
    }
  }

  if (ganjil.length == 0) {
    return `plat genap sebanyak ${genap.length} dan plat ganjil tidak ditemukan`;
  }
  if (genap.length == 0) {
    return `plat ganjil sebanyak ${ganjil.length} dan plat genap tidak ditemukan`;
  }
  return `plat genap sebanyak ${genap.length} dan plat ganjil sebanyak ${ganjil.length}`;
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data

module.exports = ganjilGenap