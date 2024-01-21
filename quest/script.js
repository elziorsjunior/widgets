document.addEventListener("DOMContentLoaded", function () {
    const tasksContainer = document.getElementById("tasks-container");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const completeAllBtn = document.getElementById("completeAllBtn");
    const experiencePointsElement = document.getElementById("experiencePoints");
    const levelElement = document.getElementById("level");

    let experiencePoints = 0;
    let level = 1;

    addTaskBtn.addEventListener("click", addTask);
    completeAllBtn.addEventListener("click", completeAllTasks);

    function addTask() {
        const taskText = prompt("Digite a descrição da tarefa:");
        if (taskText) {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", updateExperience);

            const taskDescription = document.createElement("span");
            taskDescription.textContent = taskText;

            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskDescription);

            tasksContainer.appendChild(taskElement);
        }
    }

    function completeAllTasks() {
        const checkboxes = document.querySelectorAll(".task input");
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
            updateExperience();
        });
    }

    function updateExperience() {
        const completedTasks = document.querySelectorAll(".task input:checked").length;
        experiencePoints = completedTasks * 10; // 10 pontos por tarefa concluída
        experiencePointsElement.textContent = experiencePoints;

        // Atualizar o nível a cada 50 pontos de experiência
        if (experiencePoints % 50 === 0) {
            level++;
            levelElement.textContent = level;
        }
    }
});
