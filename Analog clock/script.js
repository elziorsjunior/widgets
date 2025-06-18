// Get references to DOM elements
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeToggle = document.querySelector(".input"); // <- Agora estamos pegando o input do switch

// Função para atualizar o modo de tema
function setThemeMode(isDark) {
  if (isDark) {
    body.classList.add("dark");
    localStorage.setItem("mode", "Dark Mode");
    modeToggle.checked = true;
  } else {
    body.classList.remove("dark");
    localStorage.setItem("mode", "Light Mode");
    modeToggle.checked = false;
  }
}

// Ao carregar a página, verifica o localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  setThemeMode(true);
}

// Escuta a troca do switch
modeToggle.addEventListener("change", () => {
  setThemeMode(modeToggle.checked);
});

// Atualiza os ponteiros do relógio
const updateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = ((date.getHours() % 12) / 12) * 360 + (date.getMinutes() / 60) * 30; // Ajuste melhor de hora

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();
