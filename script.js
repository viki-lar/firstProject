let title = "First Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25;
let rollback = 48;
let fullPrice = 130;
let adaptive = true;
let percent = fullPrice * (rollback / 100);

console.log("Привет, Мир!");
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов",
  screenPrice,
  "долларов \nСтоимость разработки сайта",
  fullPrice,
  " долларов"
);
screens = screens.toLowerCase();
console.log(screens.split(", "));
console.log(percent);
