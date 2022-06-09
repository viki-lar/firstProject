"use strict";

//объявление переменных

const clock = function () {
  const timeOne = document.querySelector(".today");
  const now = document.querySelector(".time");
  const today = new Date();
  const day = today.getDate();
  let dayWeek = today.getDay() - 1;
  let month = today.getMonth();
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  let nameHours;
  let nameMinutes;
  let nameSeconds;
  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const nameMonth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  for (let key in week) {
    if (dayWeek == key) {
      dayWeek = week[key];
    }
  }

  for (let key in nameMonth) {
    if (month == key) {
      month = nameMonth[key];
    }
  }

  if (hours % 10 == 1 && hours != 11) {
    nameHours = "час";
  } else if (hours % 10 <= 4 && hours != 0) {
    nameHours = "часа";
  } else {
    nameHours = "часов";
  }

  if (minutes % 10 == 1 && minutes != 11) {
    nameMinutes = "минута";
  } else if (
    minutes % 10 <= 4 &&
    minutes != 11 &&
    minutes != 12 &&
    minutes != 13 &&
    minutes != 14 &&
    minutes % 10 != 0
  ) {
    nameMinutes = "минуты";
  } else {
    nameMinutes = "минут";
  }

  if (seconds % 10 == 1 && seconds != 11) {
    nameSeconds = "секунда";
  } else if (
    seconds % 10 <= 4 &&
    seconds % 10 != 0 &&
    seconds != 12 &&
    seconds != 13 &&
    seconds != 14
  ) {
    nameSeconds = "секунды";
  } else {
    nameSeconds = "секунд";
  }

  timeOne.textContent =
    "Сегодня" +
    " " +
    dayWeek +
    ", " +
    day +
    " " +
    month +
    " " +
    year +
    " " +
    "года" +
    ", " +
    hours +
    " " +
    nameHours +
    " " +
    minutes +
    " " +
    nameMinutes +
    " " +
    seconds +
    " " +
    nameSeconds;

  //
  const time = function () {
    now.textContent =
      today.toLocaleDateString() + "-" + today.toLocaleTimeString();
  };
  time();
};
setInterval(clock, 1000);
clock();
