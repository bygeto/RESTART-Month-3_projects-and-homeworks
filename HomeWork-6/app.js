const dollars = [100, 150, 200, 250, 300, 350];
const rate = 87.43;
const task1 = document.getElementById("task1");

const soms = dollars.map((item) => (item * rate).toFixed(2) + " сом");

task1.innerHTML =
  "Доллары: " + dollars.join(", ") + "<br><br>Сомы: " + soms.join(", ");

const numbers = [2, 4, 9, 14, 25, 17, 6];
const task2 = document.getElementById("task2");

const squares = numbers.map((item) => item * item);

task2.innerHTML =
  "Числа: " + numbers.join(", ") + "<br><br>Квадраты: " + squares.join(", ");

const scores = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
const task3 = document.getElementById("task3");

const grades = scores.map((item) => {
  if (item === 5) return "A";
  if (item === 4) return "B";
  if (item === 3) return "C";
});

task3.innerHTML =
  "Оценки: " + scores.join(", ") + "<br><br>Буквы: " + grades.join(", ");

const cards = [
  "9128 4567 2301 5984",
  "9356 8821 4407 3219",
  "4789 2103 5568 7721",
  "9821 3345 6227 9032",
  "6011 7455 2088 1193",
  "9782 5539 1620 8476",
  "4530 7291 9345 6608",
];

const task4 = document.getElementById("task4");

const cardsResult = cards.map((item) => {
  if (item.startsWith("9")) {
    return "🇰🇬 " + item;
  }
  return item;
});

task4.innerHTML =
  "Карты: " + cards.join(", ") + "<br><br>Результат: " + cardsResult.join(", ");

const phones = [
  "0700 123 456",
  "0770 234 567",
  "0550 345 678",
  "0551 456 789",
  "0555 567 890",
  "0705 678 901",
  "0707 789 012",
  "0755 890 123",
  "0500 901 234",
  "0505 012 345",
];

const task5 = document.getElementById("task5");

const mega = phones.filter((item) => item[2] === "5");

task5.innerHTML =
  "Все: " + phones.join(", ") + "<br><br>MEGA: " + mega.join(", ");

const carNumbers = [
  "01 KG 123 ABC",
  "02 KG 456 DEF",
  "03 KG 789 GHI",
  "01 KG 321 JKL",
  "05 KG 654 MNO",
  "06 KG 987 PQR",
  "07 KG 111 STU",
  "01 KG 222 VWX",
  "09 KG 333 YZA",
  "01 KG 444 BCD",
];

const task6 = document.getElementById("task6");

const bishkek = carNumbers.filter((item) => item.startsWith("01"));

task6.innerHTML =
  "Все: " + carNumbers.join(", ") + "<br><br>Бишкек: " + bishkek.join(", ");
