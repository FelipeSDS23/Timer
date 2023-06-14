const display = document.querySelector('#display');
const start = document.querySelector('#start');
const pause = document.querySelector('#stop');
const reset = document.querySelector('#reset');

start.addEventListener('click', startTimer);
pause.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

let hours = 00;
let minutes = 00;
let seconds = 00;

let time;

function startTimer() {
    //zera intervalo anterior
    clearInterval(time);

    time = setInterval(() => {
        display.style.color = '#32DF4D';
        //hours
        if (seconds === 59) {
            minutes++;
            seconds = 0;
        }
        else {
            seconds++;
        }
        //minutes
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        //seconds
        if (hours === 100) {
            clearInterval(time);
            resetTimer();
        }
        //fim
        display.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }, 1000);
}

function stopTimer() {
    clearInterval(time);
    display.style.color = 'red';
}

function resetTimer() {
    display.style.color = '#32DF4D';
    clearInterval(time);
    hours = 00;
    minutes = 00;
    seconds = 00;
    display.innerHTML = '00:00:00';
}




