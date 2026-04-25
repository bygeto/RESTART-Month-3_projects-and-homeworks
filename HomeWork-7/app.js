function checkINN() {
  const inn = document.getElementById("innInput").value;
  const card = document.getElementById("card");
  const typeText = document.getElementById("type");
  const ageText = document.getElementById("age");

  if (inn.length < 10) return;

  const firstDigit = inn[0];
  const year = parseInt(inn.substring(5, 9));
  const currentYear = 2026;
  const age = currentYear - year;

  let type = "";
  let color = "";

  if (firstDigit === "1") {
    type = "Женщина";
    color = "#a855f7";
  } else if (firstDigit === "2") {
    type = "Мужчина";
    color = "#3b82f6";
  } else if (firstDigit === "0") {
    type = "Компания";
    color = "#6b7280";
  } else {
    type = "Неизвестно";
    color = "#444";
  }

  typeText.textContent = "Тип: " + type;
  ageText.textContent = "Возраст: " + age;

  card.style.background = color;
  card.classList.remove("hidden");
}
