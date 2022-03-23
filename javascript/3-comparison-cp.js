const score = parseInt(prompt("Masukan nilai: "));
let nilai;
if (score <= 50) {
  nilai = "E";
} else if (score <= 60) {
  nilai = "D";
} else if (score <= 70) {
  nilai = "C";
} else if (score <= 90) {
  nilai = "B";
} else if (score <= 100) {
  nilai = "A";
}

switch (nilai) {
  case "E":
    console.log("Nilai E");
    break;
  case "D":
    console.log("Nilai D");
    break;
  case "C":
    console.log("Nilai C");
    break;
  case "B":
    console.log("Nilai B");
    break;
  case "E":
}