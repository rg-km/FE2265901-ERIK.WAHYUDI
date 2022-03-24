// 1. Reassign
//var x = 'hello';
//var x = 'world';
//console.log(x); // result: hello

//let x = 'hello';
//let x = 'world';
//console.log(x); // Error: duplicate declaration "x"

// 2. Hoisting: memungkinkan variabel/fungsi digunakan sebelum dideklarasi.
//x = 10;
//var x;
//console.log(x); // result: 10

//x = 10;
//let x;
//console.log(x); // Error: x is not defined

// 3. Scope
//var a = 0;
//let b = 0;
//const c = 0;

//if (true) {
  //var a = 1;
  //let b = 1;
  //const c = 1;
//}

//console.log(a); // result: 1, tidak menerapkan block scope
//console.log(b); // result: 0, menerapkan block scope
//console.log(c); // result: 0, menerapkan block scope

//const a = 3;
//if (a === 1) {
  //console.log("berhasil");
//} else if (a === 2) {
  //console.log("Gagal");
//} else {
  //console.log(a);
//}

//let a = "hanto";
//let result = a === "hantu" ? "Benar" : "Salah";

//console.log(result);

// contoh 4
//const a = 2;

// operator strict equal
//console.log(a === 2); // result: true
//console.log(a === '2'); // result: false

//console.log(0 === false); // result: false
//console.log('' === false); // result: false

// contoh 6: menambah kondisi pada pernyataan if
//let hour = 12;
//let isWeekend = true;

//if (hour < 9 || hour > 18 || isWeekend) {
  //alert('The office is closed.');
//}

// contoh 8
//let firstName = "";
//let lastName = "";
//let nickName = "SuperCoder";

//console.log(firstName || lastName || nickName || "Anonymous");

//console.log(true || "not printed");
//console.log("printed" || false || "printed2");

//switch ("Bukan andi" || "irfan") {
  //case "andi":
    //console.log("andi");
    //break;
  //case "Bukan andi":
    //console.log("Irfan");
    //break;

  //default:
    //console.log("Bukan andi");
    //break;
//}

// contoh 10
//const a = true,
  //b = false;
//const c = 4;

//console.log(a && a); // result: true
//console.log(a && b); // result: false

//console.log(c > 0 && c < 2); // result: false
//console.log(c > 2 && c < 6); // result: true


// contoh 16
//let firstName = null;
//let lastName = null;
//let nickName = 'Supercoder';

// contoh 17, apakah hasilnya?
//console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');

// contoh 19
//let height = null;
//let width = null;

//let area = (height ?? 100) * (width ?? 50);

//console.log(area);

// contoh 2
const n = 5;

// looping dari i = 1 ke 5
//for (let i = 1; i <= n; i++) {
  //let a = i;
  //console.log(`Test a ${a}`);
//}

// contoh 4
//let i = 0;
//while (i < 3) {
  //console.log(i);
  //i++;
//}

//let i = 3;
//while (i) {
  //console.log(i);
  //i--;
//}

// contoh 6
//let result = 0;
//let i = 0;

//do {
  //i = i + 1;
  //result = result + i;
//} while (i < 5);

console.log(result);

//for (let i = 0; i < 10; i++) {
  // jika true, lewati sisa kode dan lanjut ke loop berikutnya
  //if (i % 2 == 0) continue;

  //console.log(i); // result: 1, 3, 5, 7, 9
//}

