function openPopup() {
    // Criar o conteúdo do popup (formulário)
    const popupContent = `
        <div class="popup-container">
            <h2>Configurar Temporizador</h2>
            <form class="popup-form" id="timer-form">
                <label for="timer-name">Nome do Temporizador:</label>
                <input type="text" id="timer-name" name="timer-name" required><br>
                <label for="timer-date">Data:</label>
                <input type="date" id="timer-date" name="timer-date" required><br>
                <label for="timer-time">Hora:</label>
                <input type="time" id="timer-time" name="timer-time" required><br>
                <button type="submit">Salvar</button>
            </form>
        </div>
    `;

    // Adicionar o popup ao documento
    document.body.insertAdjacentHTML('beforeend', popupContent);

    // Adicionar evento de submissão do formulário
    const form = document.getElementById('timer-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obter valores do formulário
        const timerName = document.getElementById('timer-name').value;
        const timerDate = document.getElementById('timer-date').value;
        const timerTime = document.getElementById('timer-time').value;

        // Combina data e hora fornecidas em um único objeto Date
        const endTime = new Date(`${timerDate}T${timerTime}`);

        // Atualizar o temporizador na página principal
        updateMainTimer(timerName, endTime);

        // Fechar o popup
        document.querySelector('.popup-container').remove();
    });
}

function updateMainTimer(timerName, endTime) {
    const timerNameElement = document.getElementById('timer-name');
    timerNameElement.textContent = timerName;

    const timerDisplay = document.getElementById('timer');
    setInterval(function() {
        const currentTime = new Date();
        const timeDiff = endTime - currentTime;

        if (timeDiff < 0) {
            timerDisplay.textContent = 'Tempo Expirado';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        timerDisplay.textContent = `${hours} horas e ${minutes} minutos restantes`;
    }, 1000);
}
