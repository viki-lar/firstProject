"use strict";

//объявление переменных

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  rollback: 10,

  servicePercentPrice: 0,
  allServicePrices: 0,
  servise01: "",
  servise02: "",
  asking: function () {
    appData.title = prompt("Как называется Ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );
    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = Boolean(confirm("Нужен ли адаптив на сайте?"));
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function (price) {
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
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.servise01 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.servise02 = prompt("Какой дополнительный тип услуги нужен?");
      }
      do {
        sum = +prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(sum));
    }
    return sum;
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.substring(1).toLowerCase()
    );
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);

    for (let key in appData) {
      console.log("ключ: " + key + "" + "значение:" + " " + appData[key]);
    }
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
};

appData.start();
