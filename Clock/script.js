// Atualizar hora
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
  }
  
  // Alternar entre pequeno e grande com clique único
  document.getElementById('clock-container').addEventListener('click', function() {
    if (this.classList.contains('small')) {
      this.classList.remove('small');
      this.classList.add('large');
    } else if (this.classList.contains('large')) {
      this.classList.remove('large');
      this.classList.add('small');
    }
  });
  
  // Alternar entre grande e fullscreen com duplo clique
  document.getElementById('clock-container').addEventListener('dblclick', function() {
    this.classList.toggle('fullscreen');
  });
  
  // Inicializar relógio
  setInterval(updateTime, 1000); // Atualiza a cada segundo
  updateTime(); // Inicializar ao carregar
  