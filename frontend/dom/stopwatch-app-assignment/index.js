/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

let stopwatch = {
    value: 0,
    start: function() {
        this.value = setInterval(function() {
            stopwatch.value += 1;
            console.log(stopwatch.value);
        }, 1000);
    },
    stop: function() {
        clearInterval(this.value);
    },
    reset: function() {
        this.value = 0;
        console.log(this.value);
    }
}
let startbtn = document.getElementById('start');
startbtn.addEventListener('click', start);
let stopbtn = document.getElementById('stop');
stopbtn.addEventListener('click', stop);
let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);


function start() {
    stopwatch.start();
}

function stop() {
    stopwatch.stop();
}

function reset() {
    stopwatch.reset();
}

function runTime() {
    let time = stopwatch.value;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let result = minutes + ':' + seconds;
    document.getElementById('time').innerHTML = result;
}