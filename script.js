"use strict";

let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
let adaptive = Boolean(confirm("Нужен ли адаптив на сайте?"));
let servise01 = prompt("Какой дополнительный тип услуги нужен?");
let servisePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let servise02 = prompt("Какой дополнительный тип услуги нужен?");
let servisePrice2 = parseInt(prompt("Сколько это будет стоить?"));
let fullPrice = screenPrice + servisePrice1 + servisePrice2;
let rollback = 48;
let percent = fullPrice * (rollback / 100);
let servicePercentPrice = Math.ceil(fullPrice - percent);
console.log(servicePercentPrice);

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000:
  case fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000:
  case fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что-то пошло не так");
    break;
}

console.log("Привет, Мир!");
console.log(typeof title);
console.log(fullPrice);
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
