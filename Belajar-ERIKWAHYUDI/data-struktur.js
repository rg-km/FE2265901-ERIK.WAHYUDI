// // deklarasi array
// let animals = ["dog", "cat", "elephant"]

// // menghitung jumlah elemen dalam array
// console.log(animals.length) // results: 3

// // menambah elemen array
// animals.push("lion");
// console.log(animals) // results: ["dog", "cat", "elephant", "lion"]

// animals.splice(3, 0, "tiger"); // menambah elemen di index ke 3
// console.log(animals); // results: ["dog", "cat", "elephant", "tiger", "lion"]

// let fruits = ["apple", "orange", "melon"];

// // looping elemen array
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }  
// // results: apple orange melon

// // mencari posisi dari elemen
// console.log(fruits.indexOf("melon"));

// menghitung jumlah elemen dalam array
// let fruits = ["apple", "orange", "apple", "melon", "apple"];

// function countItems(array, element) {
//   let count = 0;
//   for(let i = 0; i < array.length; ++i) {
//     if(array[i] === element)
//         count++;
//   }

//   return count
// }

// console.log(countItems(fruits, "apple")) // results: 2

// function largest(arr) {
//     let i;
//     let max = arr[0];
     
//     for (i = 1; i < arr.length; i++) {
//       if (arr[i] > max)
//         max = arr[i];
//     }
//     return max;
//   }
  
//   let arr = [10, 32, 45, 12];
//   console.log("result: ", largest(arr))  

const employees = new Map();

employees.set("08123456789", ["Andi", "17/08/93"]);
employees.set("08198765432", ["Budi", "11/02/97"]);
employees.set("08123450003", ["Charlie", "07/12/93"]);

// mengambil value berdasarkan satu key
console.log(employees.get("08123456789")); // results: "Andi", "17/08/93"

// mengubah value
employees.set("08123456789", ["Doni", "23/01/92"]);

console.log(employees.get("08123456789")); // results: "Doni", "23/01/92"