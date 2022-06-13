"use strict";

//объявление переменных
const nameTitle = document.getElementsByTagName("h1")[0];

const button = document.querySelector("#start");

const buttonPlus = document.querySelector(".screen-btn");

const percent = document.querySelectorAll(".other-items.percent");

const number = document.querySelectorAll(".other-items.number");

const inputType = document.querySelector(".rollback > div> input");

const span = document.querySelector(".rollback > div> span ");

let total = document.getElementsByClassName("total-input")[0];
let totalCount = document.getElementsByClassName("total-input")[1];
let totalCountOther = document.getElementsByClassName("total-input")[2];
let fullTotalCount = document.getElementsByClassName("total-input")[3];
let totalCountRollback = document.getElementsByClassName("total-input")[4];

let inputRange = document.querySelector("input[type=range]");
let inputRangeSpan = document.querySelector(".range-value");

let screens = document.querySelectorAll(".screen");
let select = document.querySelector("select");

const appData = {
  title: "",
  screens: [],
  count: 0,
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  rollback: 0,
  servicePercentPrice: 0,
  servicePricePercent: 0,
  servicePriceNumber: 0,
  servisesPercent: {},
  servisesNumber: {},

  init: function () {
    appData.addTitle();

    button.addEventListener("click", appData.start);

    buttonPlus.addEventListener("click", appData.addScreenBlock);

    appData.buttonDisable();

    inputRange.addEventListener("input", appData.addRollback);
  },

  addTitle: function () {
    document.title = nameTitle.textContent;
  },

  start: function () {
    appData.addScreens();
    appData.addServises();
    appData.addPrices();
    appData.showResult();
    console.log(appData);

    // appData.logger();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricePercent + appData.servicePriceNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.count;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServises: function () {
    percent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servisesPercent[label.textContent] = +input.value;
      }
    });

    number.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servisesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.servisesNumber) {
      appData.servicePriceNumber += +appData.servisesNumber[key];
    }

    for (let key in appData.servisesPercent) {
      appData.servicePricePercent +=
        appData.screenPrice * (appData.servisesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricePercent +
      appData.servicePriceNumber;

    appData.servicePercentPrice =
      appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;

    for (let screen of appData.screens) {
      appData.count += +screen.count;
    }
  },

  addRollback: function () {
    inputRangeSpan.textContent = inputRange.value;
    appData.rollback = +inputRange.value;
  },

  buttonDisable: function () {
    button.disabled = true;
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      select.addEventListener("input", appData.check);
      input.addEventListener("input", appData.check);
    });
  },

  check: function () {
    const mainElement = document.querySelector(".main-controls__views");
    const select = mainElement.querySelectorAll("select");
    const input = mainElement.querySelectorAll("input");
    button.disabled = false;

    const items = [...select, ...input];

    items.forEach((item) => {
      if (item.value == "") {
        button.disabled = true;
      }
    });
  },

  // // вывод в консоль
  // logger: function () {
  //   console.log(appData.fullPrice);
  //   console.log(appData.servicePercentPrice);
  //   console.log(appData.screens);
  // },
};

appData.init();
