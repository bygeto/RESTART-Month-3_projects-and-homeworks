const btn = document.querySelector(".btn");
const html = document.querySelector(".code");

function generateCode() {
  html.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const number = Math.floor(Math.random() * 10);
    const div = document.createElement("div");
    div.classList.add("block");
    div.innerText = number;
    html.appendChild(div);
  }
}

btn.addEventListener("click", generateCode);

generateCode();
