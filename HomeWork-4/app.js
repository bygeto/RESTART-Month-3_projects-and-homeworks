const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.querySelector("#green");
const text = document.querySelector(".text");

function clearActive() {
  const activeBtn = document.querySelector(".btn.active");
  if (activeBtn) activeBtn.classList.remove("active");
}

function reset() {
  clearActive();
  text.innerHTML = "geeks";
  text.style.color = "#94a3b8";
}

function switchRed() {
  clearActive();
  redBtn.classList.add("active");
  text.innerHTML = "STOP";
  text.style.color = "red";
}

function switchYellow() {
  clearActive();
  yellowBtn.classList.add("active");
  text.innerHTML = "WAIT";
  text.style.color = "yellow";
}

function switchGreen() {
  clearActive();
  greenBtn.classList.add("active");
  text.innerHTML = "GO";
  text.style.color = "green";
}

redBtn.addEventListener("mouseenter", switchRed);
redBtn.addEventListener("mouseleave", reset);

yellowBtn.addEventListener("mouseenter", switchYellow);
yellowBtn.addEventListener("mouseleave", reset);

greenBtn.addEventListener("mouseenter", switchGreen);
greenBtn.addEventListener("mouseleave", reset);
