function updateClock() {
            const clockElement = document.getElementById('clock');
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;
            clockElement.textContent = timeString;
        }

        setInterval(updateClock, 1000);