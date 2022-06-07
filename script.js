"use strict";

//объявление переменных

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  rollback: 10,

  servicePercentPrice: 0,
  allServicePrices: 0,
  servises: {},

  // опрос
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется Ваш проект?",
        "Калькулятор верстки"
      );
    } while (appData.isNumber(appData.title));

    appData.adaptive = Boolean(confirm("Нужен ли адаптив на сайте?"));

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(name));

      do {
        price = +prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      // создаем массив объектов
      appData.screens.push({ id: i, name: name + i, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));

      do {
        price = +prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      appData.servises[name] = +price;
    }
  },

  // рассчет стоимости экранов

  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }

    appData.screenPrice = appData.screens.reduce((total, item) => {
      return +total.price + item.price;
    });

    for (let key in appData.servises) {
      appData.allServicePrices += +appData.servises[key];
    }
  },

  // проверка на число
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  // расчет скидки
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

  // рассчет полной стоимости
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  // редактирование заголовка
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.substring(1).toLowerCase();
  },

  // рассчет остатка без отката посреднику
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  // вывод в консоль
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
};

appData.start();
