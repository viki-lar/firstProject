"use strict";
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
