const textField = document.getElementById("textarea");
const total = document.getElementById("total-counter");
const left = document.getElementById("remaining-counter");

textField.addEventListener("input", () => {
  const text = textField.value;
  total.innerHTML = text.length;
  left.innerHTML = 50 - text.length;
  textField.value = text.slice(0, 50);
});
