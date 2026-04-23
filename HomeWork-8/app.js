const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiValue = document.getElementById("bmiValue");
const bmiText = document.getElementById("bmiText");

function calculateBMI() {
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (!height || !weight) {
    bmiValue.textContent = "";
    bmiText.textContent = "";
    return;
  }
  if (height > 3) {
    height = height / 100;
  }
  if (height <= 0 || weight <= 0) {
    bmiText.textContent = "Ошибка ввода";
    bmiValue.textContent = "";
    return;
  }
  if (height < 0.5 || height > 3) {
    bmiText.textContent = "Некорректный рост";
    bmiValue.textContent = "";
    return;
  }

  if (weight < 10 || weight > 500) {
    bmiText.textContent = "Некорректный вес";
    bmiValue.textContent = "";
    return;
  }

  const bmi = weight / (height * height);
  const result = bmi.toFixed(1);

  bmiValue.textContent = result;
  bmiValue.className = "bmi";

  if (bmi < 16) {
    bmiText.textContent = "Сильный дефицит массы";
    bmiValue.classList.add("red");
  } else if (bmi < 18.5) {
    bmiText.textContent = "Недостаток массы";
    bmiValue.classList.add("orange");
  } else if (bmi < 25) {
    bmiText.textContent = "Норма";
    bmiValue.classList.add("green");
  } else if (bmi < 30) {
    bmiText.textContent = "Избыточный вес";
    bmiValue.classList.add("orange");
  } else if (bmi < 35) {
    bmiText.textContent = "Ожирение I степени";
    bmiValue.classList.add("red");
  } else if (bmi < 40) {
    bmiText.textContent = "Ожирение II степени";
    bmiValue.classList.add("red");
  } else {
    bmiText.textContent = "Ожирение III степени";
    bmiValue.classList.add("red");
  }
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);
