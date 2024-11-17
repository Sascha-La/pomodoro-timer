const currentTime = document.getElementById('pomodoro-time');

let startMinutes = 1500;

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#start');

const timeId = startButton.addEventListener('click', function countTime() {
    const minutes = Math.floor(startMinutes / 60).toString().padStart(2, '0');
    const seconds = (startMinutes % 60).toString().padStart(2, '0');
    currentTime.textContent = `${minutes}:${seconds}`;

    if (startMinutes > 0) {
        startMinutes--;
        setTimeout(countTime, 1000);
    }

    if (startButton) {
        startButton.textContent = "stop";
    }

})

startButton.addEventListener('click', function stopTime() {
    clearTimeout(timeId);
})