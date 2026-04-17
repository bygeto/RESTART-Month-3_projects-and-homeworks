const originalBlock = document.querySelector("#original");

originalBlock.innerHTML = "";

const originalDate = [1, 217, 334, 40, 53, 6, 790, 80, 999, 0];

function renderArrayItem(item) {
  const div = document.createElement("div");
  div.classList.add("color-box");
  div.innerHTML = item;
  originalBlock.appendChild(div);
}

// for (const item of originalDate) {
//   renderArrayItem(item);
// }

for (let i = 0; i < originalDate.length; i++) {
  renderArrayItem(originalDate[i]);
}

originalDate.forEach(() => {
  renderArrayItem(item);
});

const resultBlock = document.querySelector("#result");
Array.from(resultBlock.children).forEach(function (child) {
  child.remove();
});

function showResult(Array) {
  const resultHtml = "";

  Array.forEach(function (x) {
    const Html = `<div class="color-box">${x}</div>`;
    resultHtml += Html;
  });

  resultBlock.innerHTML = resultHtml;
}
