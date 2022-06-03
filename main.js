"use strict";

/*1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
*/
let arr = [];
let newArr = [];

const inputArr = function (i) {
  for (i = 0; i < 7; i++) {
    arr[i] = prompt("введите многозначное число");
    if (arr[i].length == 1) {
    }
  }
};

const searchArr = function (y) {
  for (y = 0; y < 7; y++) {
    if (arr[y].charAt(0) == "2" || arr[y].charAt(0) == "4") {
      newArr[y] = arr[y];
    }
    newArr = newArr.filter(Boolean);
  }
  if (newArr.length == 0) {
    alert("массив не содержит элементы,начинающиеся с 2 или 4");
  }
};

inputArr(arr);
searchArr(newArr);

console.log(arr);
console.log(newArr);
