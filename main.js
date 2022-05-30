"use strict";

//вывод в консоль дней недели в зависимости от выбранного языка
let lang = confirm("Выбор языка: русский?");
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
  "Понедельник, Вторник,  Среда,  Четверг,  Пятница,  Суббота,  Воскресеньe",
  "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
];

if (lang == true) {
  console.log(weekRus);
} else {
  console.log(weekEng);
}

switch (true) {
  case lang == true:
    console.log(weekRus);
    break;
  default:
    console.log(weekEng);
}

console.log(arr[Number(!lang)]);

// вывод должности в зависимости от имени

let namePerson = prompt("Введите имя");
namePerson == "Артем"
  ? console.log("Директор", namePerson)
  : namePerson == "Александр"
  ? console.log("Преподаватель", namePerson)
  : console.log("Студент", namePerson);
