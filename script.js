const currentTime = document.getElementById('pomodoro-time');

let startMinutes = 1500;

const startButton = document.querySelector('#start');
var isRunning;

const timeCounter = startButton.addEventListener('click', function countTime() {
    const minutes = Math.floor(startMinutes / 60).toString().padStart(2, '0');
    const seconds = (startMinutes % 60).toString().padStart(2, '0');
    currentTime.textContent = `${minutes}:${seconds}`;


    if (isRunning) {
        isRunning = clearInterval(isRunning);
        startButton.textContent = "start";
    } else {
        isRunning = setInterval(countTime, 1000);
        startButton.textContent = "stop";
    }



    if (startMinutes > 0) {
        startMinutes--;
    }

    // if (startButton) {
    //      startButton.textContent = "stop";
    //   }

})

//startButton.addEventListener('click', function stopTime() {
//   clearTimeout(countTime);
//})