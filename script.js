"use strict";

//объявление переменных
const nameTitle = document.getElementsByTagName("h1")[0];

const button = document.querySelector("#start");

const buttonPlus = document.querySelector(".screen-btn");

const percent = document.querySelectorAll(".other-items.percent");

const number = document.querySelectorAll(".other-items.number");

const inputType = document.querySelector(".rollback > div> input");

const span = document.querySelector(".rollback > div> span ");

const btnReset = document.querySelector("#reset");

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
    this.addTitle();
    button.addEventListener("click", () => {
      this.start();
    });
    button.addEventListener("click", () => {
      this.outputDisable();
    });
    buttonPlus.addEventListener("click", () => {
      this.addScreenBlock();
    });

    this.buttonDisable();

    inputRange.addEventListener("input", () => {
      this.addRollback();
    });
    btnReset.addEventListener("click", () => {
      this.reset();
    });
  },

  addTitle: function () {
    document.title = nameTitle.textContent;
  },

  start: function () {
    console.log(this);
    this.addScreens();
    this.addServises();
    this.addPrices();
    this.showResult();

    // appData.logger();
  },

  reset: function () {
    // блокировка элементов
    const input = document.querySelectorAll("input");
    const select = document.querySelectorAll("select");
    const allInput = [...input, ...select, buttonPlus];
    allInput.forEach((item) => {
      item.disabled = false;
    });

    // обнуление элементов
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      let selectName = select.options[select.selectedIndex].textContent;
      input.value = 0;
      select.value = "";
      console.log(select.options[0]);
    });

    percent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      check.checked = false;
    });

    number.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      check.checked = false;
    });

    inputRangeSpan.textContent = 0;
    inputRange.value = 0;

    this.screens = [];
    this.count = 0;
    this.screenPrice = 0;
    this.adaptive = true;
    this.fullPrice = 0;
    this.rollback = 0;
    this.servicePercentPrice = 0;
    this.servicePricePercent = 0;
    this.servicePriceNumber = 0;
    this.servisesPercent = {};
    this.servisesNumber = {};

    this.showResult();

    // смена кнопок
    button.setAttribute("style", "");
    btnReset.setAttribute("style", "display: none");
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricePercent + this.servicePriceNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.count;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServises: function () {
    percent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servisesPercent[label.textContent] = +input.value;
      }
    });

    number.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servisesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let key in this.servisesNumber) {
      this.servicePriceNumber += +this.servisesNumber[key];
    }

    for (let key in this.servisesPercent) {
      this.servicePricePercent +=
        this.screenPrice * (this.servisesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricePercent + this.servicePriceNumber;

    this.servicePercentPrice =
      this.fullPrice - (this.fullPrice * this.rollback) / 100;

    for (let screen of this.screens) {
      this.count += +screen.count;
    }
  },

  addRollback: function () {
    inputRangeSpan.textContent = inputRange.value;

    this.rollback = +inputRange.value;
  },

  // блокировка кнопки
  buttonDisable: function () {
    button.disabled = true;
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      select.addEventListener("input", () => {
        this.check();
      });
      input.addEventListener("input", () => {
        this.check();
      });
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

  // блокировка данных
  outputDisable: function () {
    const input = document.querySelectorAll("input");

    const select = document.querySelectorAll("select");
    const allInput = [...input, ...select, buttonPlus];
    allInput.forEach((item) => {
      item.disabled = true;
    });
    button.setAttribute("style", "display: none");
    btnReset.setAttribute("style", "");
  },

  // // вывод в консоль
  // logger: function () {
  //   console.log(appData.fullPrice);
  //   console.log(appData.servicePercentPrice);
  //   console.log(appData.screens);
  // },
};

appData.init();
