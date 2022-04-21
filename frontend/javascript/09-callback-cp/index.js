// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let result = '';
  for(let i = 0 ; i < str.length;i++){
    result += str[i] + str[i];
  }
  return result;
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let result = '';
  for(let i = 0; i < str.length;i++){
    for(let j = 0; j < num;j++){
      result += cb(str[i]);
    }
  }
  return result;
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}