function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

function toggleFullScreen() {
    var elem = document.documentElement;

    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    document.body.classList.toggle('fullscreen', !!document.fullscreenElement);
});
