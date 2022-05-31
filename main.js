"use strict";

//вывод в консоль дней недели в зависимости от выбранного языка
let lang = prompt("Выбор языка: ru или en");
let weekRus = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресеньe",
];
let weekEng = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let arr = [
  ["ru", weekRus],
  ["en", weekEng],
];

if (lang == "ru") {
  console.log(weekRus);
} else if (lang == "en") {
  console.log(weekEng);
} else {
  console.log("Ошибка ввода");
}

switch (true) {
  case lang == "ru":
    console.log(weekRus);
    break;
  case lang == "en":
    console.log(weekEng);
    break;
  default:
    console.log("Ошибка ввода");
}

lang == arr[0][0]
  ? console.log(arr[0][1])
  : lang == arr[1][0]
  ? console.log(arr[1][1])
  : console.log("Ошибка ввода");

// вывод должности в зависимости от имени

let namePerson = prompt("Введите имя");
namePerson == "Артем"
  ? console.log("Директор", namePerson)
  : namePerson == "Александр"
  ? console.log("Преподаватель", namePerson)
  : console.log("Студент", namePerson);
