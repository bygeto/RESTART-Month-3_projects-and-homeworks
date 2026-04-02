const coins = document.querySelector(".coin");
const energy = document.querySelector(".power");
const btnHamster = document.getElementById("counter");

btnHamster.addEventListener("click", () => {
  let coin = Number(coins.innerHTML);
  let power = Number(energy.innerHTML);
  if (power >= 5) {
    coin = coin + 5;
    coins.textContent = coin;
    power = power - 5;
    energy.textContent = power;
  }
});
