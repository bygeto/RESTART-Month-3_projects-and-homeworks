// const buttons = document.querySelectorAll(".size-btn");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     buttons.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");
//   });
// });

// function renderTetris(count) {
//   const tetrisField = document.getElementById("tetris");
//   tetrisField.innerHTML = "";

//   for (let i = 0; i < count; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     tetrisField.append(cell);
//   }
// }

const buttonDiv = document.querySelector(".buttons");

function changeSize(e) {
  const clickedItem = e.target;

  if (clickedItem.classList.contains("size-btn")) {
    const activeBtn = document.querySelector(".size-btn.active");
    if (activeBtn !== null) activeBtn.classList.remove("active");

    const selectedSize = clickedItem.innerText;
    clickedItem.classList.add("active");

    if (selectedSize === "S") {
      renderTetris(100);
    } else if (selectedSize === "M") {
      renderTetris(200);
    } else if (selectedSize === "L") {
      renderTetris(300);
    }
  }
}

function getColor() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#A833FF",
    "#33FFF5",
    "#FF8F33",
    "#8FFF33",
    "#338FFF",
    "#FF3380",
    "#80FF33",
    "#3380FF",
    "#FF8033",
    "#33FF80",
    "#8033FF",
    "#FF3333",
    "#33FF33",
    "#3333FF",
    "#FF33FF",
    "#33FFFF",
    "#FFFF33",
    "#FF6633",
    "#66FF33",
    "#3366FF",
    "#FF3366",
    "#66FF66",
    "#6666FF",
    "#FF9966",
    "#99FF66",
    "#6699FF",
    "#FF6699",
    "#99FF99",
    "#9999FF",
    "#FFCC66",
    "#CCFF66",
    "#66CCFF",
    "#FF66CC",
    "#CCFFCC",
    "#CCCCFF",
    "#FFCC99",
    "#CCFF99",
    "#99CCFF",
    "#FF99CC",
    "#99FFCC",
    "#CC99FF",
    "#FFCC33",
    "#CCFF33",
    "#33CCFF",
    "#FF33CC",
    "#33FFCC",
    "#CC33FF",
    "#FFCC00",
    "#CCFF00",
    "#00CCFF",
    "#FF00CC",
    "#00FFCC",
    "#CC00FF",
    "#FF9900",
    "#99FF00",
    "#0099FF",
    "#FF0099",
    "#00FF99",
    "#9900FF",
    "#FF6600",
    "#66FF00",
    "#0066FF",
    "#FF0066",
    "#00FF66",
    "#6600FF",
    "#FF3300",
    "#33FF00",
    "#0033FF",
    "#FF0033",
    "#00FF33",
    "#3300FF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FF00FF",
    "#00FFFF",
    "#FFFF00",
    "#E74C3C",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#1ABC9C",
    "#F39C12",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#16A085",
    "#D35400",
    "#C0392B",
    "#BDC3C7",
    "#7F8C8D",
    "#34495E",
    "#95A5A6",
    "#F1C40F",
    "#E67E22",
    "#ECF0F1",
    "#2C3E50",
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#B983FF",
    "#FF8FAB",
    "#8AC926",
    "#1982C4",
    "#6A4C93",
    "#FFCA3A",
    "#FF595E",
    "#1982C4",
    "#8AC926",
    "#FFCA3A",
    "#6A4C93",
    "#FF924C",
    "#CDB4DB",
    "#FFC8DD",
    "#BDE0FE",
    "#A2D2FF",
    "#D0F4DE",
    "#FDE2E4",
    "#FFF1E6",
    "#E2F0CB",
    "#CDEAC0",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#FFFFFC",
    "#E63946",
    "#F1FAEE",
    "#A8DADC",
    "#457B9D",
    "#1D3557",
    "#F4A261",
    "#E76F51",
    "#2A9D8F",
    "#264653",
    "#E9C46A",
    "#F77F00",
    "#FCBF49",
    "#EAE2B7",
    "#003049",
    "#D62828",
    "#F77F00",
    "#FCBF49",
    "#2EC4B6",
    "#FF9F1C",
    "#E71D36",
    "#011627",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#F72585",
    "#B5179E",
    "#7209B7",
    "#560BAD",
    "#480CA8",
    "#3A0CA3",
    "#3F37C9",
    "#4361EE",
    "#4895EF",
    "#4CC9F0",
    "#00F5D4",
    "#06D6A0",
    "#118AB2",
    "#073B4C",
    "#FFD166",
    "#EF476F",
    "#8338EC",
    "#3A86FF",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#00A8E8",
    "#007EA7",
    "#003459",
    "#00171F",
    "#F45B69",
    "#FFFD82",
    "#2EC4B6",
    "#E71D36",
    "#FF9F1C",
    "#011627",
    "#D81159",
    "#8F2D56",
    "#218380",
    "#FBB13C",
    "#73D2DE",
    "#EE964B",
    "#F95738",
    "#0D3B66",
    "#FAF0CA",
    "#F4D35E",
    "#EE964B",
    "#F95738",
    "#E0FBFC",
    "#C2DFE3",
    "#9DB4C0",
    "#5C6B73",
    "#253237",
    "#F7B267",
    "#F79D65",
    "#F4845F",
    "#F27059",
    "#84A59D",
    "#F6BD60",
    "#F7EDE2",
    "#F5CAC3",
    "#CDB4DB",
    "#FFC8DD",
    "#FFAFCC",
    "#BDE0FE",
    "#A2D2FF",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function hoverCell(e) {
  const hoveredItem = e.target;
  const color = getColor();
  hoveredItem.style.backgroundColor = color;
  hoveredItem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  hoveredItem.style.transition = "none";
}

buttonDiv.addEventListener("click", changeSize);

function renderTetris(count) {
  const tetrisField = document.getElementById("tetris");
  tetrisField.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mouseenter", hoverCell);
    cell.addEventListener("mouseleave", function (e) {
      const hoverCell = e.target;
      hoverCell.style.backgroundColor =
        "linear-gradient(145deg, #1f1f2e, #151521)";
      hoverCell.style.boxShadow = "none";
      hoverCell.style.transition = "all 2s ease-in";
    });

    tetrisField.appendChild(cell);
  }
}
