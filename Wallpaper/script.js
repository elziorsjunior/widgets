document.addEventListener('DOMContentLoaded', function() {
  // Verificar se a API do Wallpaper Engine está disponível
  if (typeof wallpaperEngine !== 'undefined') {
    wallpaperEngine.on("ready", function() {
      console.log("Wallpaper Engine ready");

      // Manipulação do vídeo e elementos via API do Wallpaper Engine se necessário
      wallpaperEngine.on("propertyChange", function(e) {
        if (e.propertyName === 'video') {
          document.getElementById('background-video').src = e.value;
        }
      });
    });
  }
});
