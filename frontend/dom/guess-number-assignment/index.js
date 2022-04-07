/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let newGameBtn = document.getElementsByClassName('new-game')[0];
let randomNumber = document.getElementsByClassName('number')[0];
let message = document.getElementsByClassName('message')[0];
let displayScore = document.getElementsByClassName('score-label')[0];
let input = document.getElementsByClassName("input")[0];
let checkBtn = document.getElementsByClassName('check')[0];
let score = document.getElementsByClassName('score')[0];

checkBtn.addEventListener('click', checkNumber);
newGameBtn.addEventListener('click', resetGame);
randomNumber = Math.floor(Math.random() * 10) + 1;

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  score.innerHTML = parseInt('10', 10);
  displayMessage('Lets start guessing...');
  document.location.reload(true);
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  let check = input.value; 
  
  if (score.innerHTML === '0') {
    displayMessage('Oops, you lost the game');
  } else if (check < 1 || check > 10) {
    displayMessage('Guess any number between 1 and 10');
  } else if (check > randomNumber) {
    score.innerHTML = parseInt(score.innerHTML, 10) - 1;
    displayMessage('Oww... thats too big!');
  } else if (check < randomNumber) {
    score.innerHTML = parseInt(score.innerHTML, 10) - 1;
    displayMessage('Too small, buddy!');
  } else if (check == randomNumber) {
    score.innerHTML = parseInt(score.innerHTML, 10) + 1;
    displayMessage('Yeay! you guessed it!');
    document.getElementsByClassName('number')[0].innerHTML = randomNumber;
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber