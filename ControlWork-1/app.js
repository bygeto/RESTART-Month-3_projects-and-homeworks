const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const btn = document.getElementById("compareBtn");

btn.addEventListener("click", () => {
  const value1 = Number(num1.value);
  const value2 = Number(num2.value);

  if (value1 > value2) {
    result.textContent = ">";
  } else if (value1 < value2) {
    result.textContent = "<";
  } else {
    result.textContent = "=";
  }
});
