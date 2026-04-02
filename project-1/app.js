const btnMinus = document.querySelector("#minus");
const btnPlus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
const span = document.querySelector("span");

let count = 0;

function color() {
  if (count > 0) {
    span.style.color = "hsl(210, 94%, 50%)";
  } else if (count < 0) {
    span.style.color = "hsl(0, 100%, 41%)";
  } else {
    span.style.color = "white";
  }
}

btnPlus.addEventListener("click", () => {
  count++;
  span.innerHTML = count;
  color();
});

btnMinus.addEventListener("click", () => {  
  count--;
  span.innerHTML = count;
  color();
});

reset.addEventListener("click", () => {
  count = 0;
  span.innerHTML = count;
  color();
});
