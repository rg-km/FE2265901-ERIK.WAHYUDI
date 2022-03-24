// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// masukan teks
const string = prompt('Masukan string: ');

// memanggil fungsi palindrom
const value = checkPalindrome(string);

console.log(value);