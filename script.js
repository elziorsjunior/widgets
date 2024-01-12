function updateClock() {
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  document.getElementById('clock-content').innerText = time;
}

function updateMoments() {
  // Lógica para atualizar o conteúdo de momentos
  const momentsContent = "Momento 1\nDas 08:00 até 09:00";
  document.getElementById('moments-content').innerText = momentsContent;
}

function updateTasks() {
  // Lógica para atualizar o conteúdo de tarefas
  const tasksContent = "Tarefa 1\nRealizar algo importante";
  document.getElementById('tasks-content').innerText = tasksContent;
}

function updateWidgets() {
  updateClock();
  updateMoments();
  updateTasks();
}

setInterval(updateWidgets, 1000);
updateWidgets(); // Atualizar widgets imediatamente
