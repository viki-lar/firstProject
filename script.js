"use strict";

//объявление переменных

let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let rollback = 48;
let percent;
let servicePercentPrice;
let allServicePrices;
let servise01;
let servise02;

//объявление функций
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  adaptive = Boolean(confirm("Нужен ли адаптив на сайте?"));
};

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

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      servise01 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      servise02 = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
    console.log(sum);
  }
  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
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
asking();
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
fullPrice = getFullPrice();
percent = fullPrice * (rollback / 100);
servicePercentPrice = getServicePercentPrices(fullPrice, percent);
allServicePrices = getAllServicePrices();
title = getTitle(title);

// вывод в консоль

console.log(fullPrice);
console.log(percent);
console.log(servicePercentPrice);
console.log(allServicePrices);
console.log(servise01);
console.log(servise02);

console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
