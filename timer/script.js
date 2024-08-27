let timerElement = document.getElementById('timer');
let startPauseButton = document.getElementById('start-pause');
let adjustTimerButton = document.getElementById('adjust-timer');
let changeBackgroundButton = document.getElementById('change-background');
let fullscreenButton = document.getElementById('fullscreen');

let dateTimeModal = document.getElementById('date-time-modal');
let backgroundModal = document.getElementById('background-modal');
let setTimerButton = document.getElementById('set-timer');
let closeDateTimeModalButton = document.getElementById('close-date-time-modal');
let closeBackgroundModalButton = document.getElementById('close-background-modal');
let startDateTimeInput = document.getElementById('start-datetime');
let endDateTimeInput = document.getElementById('end-datetime');
let backgroundUrlInput = document.getElementById('background-url');
let setBackgroundButton = document.getElementById('set-background');

let countdown;
let timeRemaining = 60 * 60; // 60 minutos em segundos
let isPaused = false;

function updateTimerDisplay(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    countdown = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            countdown = null;
            timerElement.textContent = "00:00";
            return;
        }
        timeRemaining--;
        updateTimerDisplay(timeRemaining);
    }, 1000);
}

startPauseButton.addEventListener('click', function() {
    if (!countdown && !isPaused) {
        startTimer();
        startPauseButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/ffffff/pause.png"/>';
    } else if (countdown && !isPaused) {
        clearInterval(countdown);
        countdown = null;
        isPaused = true;
        startPauseButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/ffffff/play.png"/>';
    } else if (isPaused) {
        startTimer();
        isPaused = false;
        startPauseButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/ffffff/pause.png"/>';
    }
});

adjustTimerButton.addEventListener('click', function() {
    dateTimeModal.style.display = "flex";
});

setTimerButton.addEventListener('click', function() {
    let startDateTime = startDateTimeInput.value;
    let endDateTime = endDateTimeInput.value;

    if (startDateTime && endDateTime) {
        let startTime = new Date(startDateTime).getTime();
        let endTime = new Date(endDateTime).getTime();
        let now = new Date().getTime();

        if (startTime <= now && endTime > now) {
            timeRemaining = Math.floor((endTime - now) / 1000);
            updateTimerDisplay(timeRemaining);
            if (countdown) {
                clearInterval(countdown);
                countdown = null;
            }
            startPauseButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/ffffff/play.png"/>';
            isPaused = true;
            dateTimeModal.style.display = "none";
        } else {
            alert("As datas e horas informadas são inválidas.");
        }
    }
});

closeDateTimeModalButton.addEventListener('click', function() {
    dateTimeModal.style.display = "none";
});

changeBackgroundButton.addEventListener('click', function() {
    backgroundModal.style.display = "flex";
});

setBackgroundButton.addEventListener('click', function() {
    let imageUrl = backgroundUrlInput.value;
    if (imageUrl) {
        document.body.style.background = `url('${imageUrl}') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';
        backgroundModal.style.display = "none";
    }
});

closeBackgroundModalButton.addEventListener('click', function() {
    backgroundModal.style.display = "none";
});

fullscreenButton.addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
