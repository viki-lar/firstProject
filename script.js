"use strict";

//объявление переменных

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
let allServicePrices;

//объявление функций

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  switch (true) {
    case price >= 30000:
      return "Даем скидку в 10%";
    case price >= 15000:
    case price < 30000:
      return "Даем скидку в 5%";
    case price < 15000:
    case price >= 0:
      return "Скидка не предусмотрена";
    default:
      return "Что-то пошло не так";
  }
};

const getAllServicePrices = function (priceServise01, priceServise02) {
  return priceServise01 + priceServise02;
};

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
}

const getTitle = function (nameTitle) {
  nameTitle = nameTitle.replace(/^\s/, "");
  nameTitle = nameTitle.toLowerCase();
  return nameTitle.charAt(0).toUpperCase() + nameTitle.substring(1);
};

const getServicePercentPrices = function (totalPrice, percentPrice) {
  return totalPrice - percentPrice;
};

// блок функционала
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
servicePercentPrice = getServicePercentPrices(fullPrice, percent);
allServicePrices = getAllServicePrices(servisePrice1, servisePrice2);

// вывод в консоль
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
