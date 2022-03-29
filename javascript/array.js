// // contoh 1
// let fruits = ['Apple', 'Orange', 'Mango'];

// console.log(fruits[0]); // result: Apple
// console.log(fruits[1]); // result: Orange
// console.log(fruits[2]); // result: Mango

// contoh 3
// let fruits = ['Apple', 'Orange'];
// fruits.push('Pear');
// console.log(fruits); // result: Apple, Orange, Pear

// contoh 4
// let anotherFruits = ['Apple', 'Orange'];
// anotherFruits.unshift('Grape');
// console.log(anotherFruits); // result: Grape, Apple, Orange

// contoh 5
// let activities = ['work', 'eat', 'sleep', 'exercise'];

// // menghapus elemen terakhir
// activities.pop();
// console.log(activities); // result: ['work', 'eat', 'sleep']

// // menghapus kembali elemen terakhir dan simpan ke dalam variabel
// const removedElement = activities.pop();

// // memperoleh elemen yang dihapus
// console.log(removedElement); // result: 'sleep'
// console.log(activities); // result: ['work', 'eat']

// let fruits = ['Orange', 'Apple', 'Lemon'];
// let anotherFruits = ['Pear'];

// let concatFruits = fruits.concat(anotherFruits);
// console.log(concatFruits); // result: ['Orange', 'Apple', 'Lemon', 'Pear']

// let position = fruits.indexOf('Lemon');
// console.log(position); // result: 2

// let includedFruits = fruits.includes('Melon');
// console.log(includedFruits); // result: false

// const slicedFruits = fruits.slice(1);
// console.log(slicedFruits); // result: ['Apple', 'Lemon']

// let sortedFruits = fruits.sort();
// console.log(sortedFruits); // result: ['Apple', 'Lemon', 'Orange']

// Coba tuliskan 5 operasi array berikut
//
// 1. Buatlah array dengan elemen-elemen sebagai berikut: "Ant", "Bee"
// 2. Tambahkan elemen "Cow" ke dalam array tersebut.
// 3. Ubah elemen yang ada di tengah dengan "Owl". Kode yang dibuat untuk mencari nilai yang ada di tengah harus bekerja untuk semua array dengan jumlah ganjil. Misal jumlah array 7, maka "Owl akan ditempatkan pada indeks ke 4".
// 4. Hapus elemen pertama pada array.
// 5. Tambahkan "Eagle" dan "Elephant" di bagian depan dari array.

// let animals = ["Ant", "Bee"];
// animals.push("Cow");
// animals[Math.floor((animals.length - 1) / 2)] = "Owl";
// animals.shift();
// animals.unshift("Eagle", "Elephant");

// console.log(animals);

// Menghapus elemen dalam array yang duplikat
// contoh: 
// ["ant", "bee", "bee", "cow", "ant", "cow", "elephant", "dog", "elephant"]
// hasil:
// ["ant", "bee", "cow", "elephant", "dog"]

let animals = ["ant", "bee", "bee", "cow", "ant", "cow", "elephant", "dog", "elephant"];
  
let unique_animals = [];
animals.forEach((animal) => {
    if (!unique_animals.includes(animal)) {
        unique_animals.push(animal);
    }
  });
  
console.log(unique_animals);

// Menghapus n elemen terakhir dari array
// contoh: 
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// jumlah yang dihapus = 3
// hasil:
// [1, 2, 3, 4, 5, 6]


let numInput = prompt("Masukan urutan bilangan dengan pemisah spasi:");
let numArray = numInput.split(" ");

let counter = parseInt(prompt("Masukan banyaknya bilangan terakhir yang ingin dihapus: "));

while (counter--) {
    numArray.pop();
}
  
console.log("Hasil:", arr);