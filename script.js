"use strict";

let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
let adaptive = Boolean(confirm("Нужен ли адаптив на сайте?"));
let servise01 = prompt("Какой дополнительный тип услуги нужен?");
let servisePrice1 = Number(prompt("Сколько это будет стоить?"));
let servise02 = prompt("Какой дополнительный тип услуги нужен?");
let servisePrice2 = Number(prompt("Сколько это будет стоить?"));
let fullPrice = screenPrice + servisePrice1 + servisePrice2;
let rollback = 48;
let percent = fullPrice * (rollback / 100);
let servicePercentPrice = Math.ceil(fullPrice - percent);

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
