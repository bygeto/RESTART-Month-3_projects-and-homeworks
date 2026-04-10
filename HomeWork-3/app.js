const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("block")) return;

  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
});
