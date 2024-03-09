document.addEventListener('DOMContentLoaded', () => {
    obterPrevisaoDoTempo();
});

async function obterPrevisaoDoTempo() {
    const apiKey = 'b5fb2cc0d7129c04c9cbeb88be4f7ee9';
    const cidade = 'Batatais'; // Substitua pelo nome da sua cidade
    const unidade = 'metric'; // Unidade de temperatura (metric para Celsius, imperial para Fahrenheit, standard para Kelvin)

    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=${unidade}&appid=${apiKey}`);
        const dados = await resposta.json();

        atualizarPagina(dados);
    } catch (erro) {
        console.error('Erro ao obter a previsão do tempo:', erro);
    }
}

function atualizarPagina(dados) {
    const container = document.getElementById('clima-container');
    const iconElement = document.getElementById('clima-icon');
    const descricaoElement = document.getElementById('clima-descricao');
    const temperaturaElement = document.getElementById('clima-temperatura');

    // Atualiza o ícone, descrição e temperatura
    const icone = dados.weather[0].icon;
    const descricao = dados.weather[0].description;
    const temperatura = `${Math.round(dados.main.temp)}°C`;

    iconElement.src = `http://openweathermap.org/img/wn/${icone}.png`;
    descricaoElement.textContent = descricao;
    temperaturaElement.textContent = temperatura;

    // Atualiza o fundo com base na hora do dia
    const corDeFundo = obterCorDeFundoHora();
    container.style.backgroundColor = corDeFundo;
}

function obterCorDeFundoHora() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const cores = [
        '#000000',
        '#1a003b',
        '#0d003d',
        '#0b006d',
        '#0051ff',
        '#0074f8',
        '#00a2ff',
        '#00a2ff',
        '#0074f8',
        '#0051ff',
        '#0b006d',
        '#0d003d',
        '#1a003b',
        '#000000',
        '#1a003b',
        '#0d003d',
        '#0b006d',
        '#0051ff',
        '#0074f8',
        '#00a2ff',
        '#00a2ff',
        '#0074f8',
        '#0051ff'
    ];

    return cores[horaAtual];
}

