let timeLeft;
let timerInterval;
let timerRunning = false;

function updateTimer(callback) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0 && timerRunning) {
        timeLeft--;
    } else if (timeLeft === 0 && timerRunning) {
        callback();
    }
}

function toggleTimer(callback) {
    if (!timerRunning) {
        // Start or resume the timer
        timerRunning = true;
        timerInterval = setInterval(function () {
            updateTimer(callback);
        }, 1000);
    } else {
        // Pause the timer
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    // Reset the timer to initial state
    clearInterval(timerInterval);
    timerRunning = false;
    updateTimer(() => {});
}
