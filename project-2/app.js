const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.querySelector("#green");
const text = document.querySelector(".text");

function switchRed() {
  text.innerHTML = "stop";
  text.style.color = "red";

  const activeBtn = document.querySelector(".btn.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }

  redBtn.classList.add("active");
}

redBtn.onclick = switchRed;

function switchYellow() {
  text.innerHTML = "wait";
  text.style.color = "yellow";

  const activeBtn = document.querySelector(".btn.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }

  yellowBtn.classList.add("active");
}

yellowBtn.onclick = switchYellow;

function switchGreen() {
  text.innerHTML = "Go";
  text.style.color = "green";

  const activeBtn = document.querySelector(".btn.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }

  greenBtn.classList.add("active");
}

greenBtn.onclick = switchGreen;
