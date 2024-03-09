// Função para inicializar o mapa
function initMap() {
    // Cria um objeto de mapa e especifica o elemento DOM para exibi-lo
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Centro do mapa (inicializado em uma posição padrão)
        zoom: 15, // Zoom do mapa
    });

    // Obtém a localização do usuário
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Define a posição do mapa para a localização do usuário
                map.setCenter(pos);

                // Cria um marcador para a posição atual do usuário
                const marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "Você está aqui!",
                });
            },
            () => {
                // Caso haja um erro ao obter a localização
                handleLocationError(true, map.getCenter());
            }
        );
    } else {
        // Caso o navegador não suporte geolocalização
        handleLocationError(false, map.getCenter());
    }
}

// Função para tratar erros na obtenção da localização
function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Erro: O serviço de geolocalização falhou."
            : "Erro: Seu navegador não suporta geolocalização."
    );
    infoWindow.open(map);
}

