const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");
const image = document.getElementById("image");

const data = {
  html: {
    text: `HTML (от англ. HyperText Markup Language - «язык гипертекстовой разметки») - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML-документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.`,
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  css: {
    text: `CSS (англ. Cascading Style Sheets - «каскадные таблицы стилей») - формальный язык декорирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.`,
    img: "https://cdn-icons-png.flaticon.com/512/732/732007.png",
  },
  js: {
    text: `JavaScript (англ. «джаваскрипт», аббр. JS) - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262). JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.`,
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
};

content.textContent = data.html.text;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const key = tab.dataset.tab;

    content.style.opacity = 0;
    image.style.opacity = 0;

    setTimeout(() => {
      content.textContent = data[key].text;
      image.src = data[key].img;

      content.style.opacity = 1;
      image.style.opacity = 1;
    }, 150);
  });
});
