console.log("Портфолио успешно загружено!");

const projectCard = document.querySelector(".project-card");

projectCard.addEventListener("click", function() {alert("Это мой первый учебный проект!");});
// Приветствие при открытии сайта
console.log("Добро пожаловать в моё портфолио!");

// Показываем текущий год автоматически
const year = new Date().getFullYear();
document.querySelector("footer p").textContent =
    "© " + year + " Моё портфолио";