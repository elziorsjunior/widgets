// Função para atualizar o calendário
function updateCalendar() {
  const now = new Date();
  
  // Opções de localidade para garantir que o dia e mês sejam exibidos em português
  const options = { weekday: 'long', month: 'long' };
  
  // Nome do dia da semana em português e em caixa alta
  const weekday = now.toLocaleString('pt-BR', { weekday: 'long' }).toUpperCase(); 
  
  // Dia do mês com dois dígitos
  const day = String(now.getDate()).padStart(2, '0'); 
  
  // Mês em português e em caixa alta
  const month = now.toLocaleString('pt-BR', { month: 'long' }).toUpperCase(); 

  // Atualizar o conteúdo do calendário com as informações formatadas
  document.getElementById('weekday').textContent = weekday; // Nome do dia da semana
  document.getElementById('day').textContent = day; // Dia do mês
  document.getElementById('month').textContent = month; // Nome do mês
}

// Alternar entre pequeno e grande com clique único
document.getElementById('calendar-container').addEventListener('click', function() {
  if (this.classList.contains('small')) {
    this.classList.remove('small');
    this.classList.add('large');
  } else if (this.classList.contains('large')) {
    this.classList.remove('large');
    this.classList.add('small');
  }
});

// Alternar entre grande e fullscreen com duplo clique
document.getElementById('calendar-container').addEventListener('dblclick', function() {
  this.classList.toggle('fullscreen');
});

// Inicializar o calendário
updateCalendar();
