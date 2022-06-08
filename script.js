"use strict";

const asside = document.querySelector(".books");
const book = document.querySelectorAll(".book");
const adv = document.querySelector(".adv");
const body = document.querySelector("body");
const nameBook = document.querySelectorAll("h2 > a");
const bookContent = document.querySelectorAll("ul >li");
const newChapter = document.createElement("li");

//Восстановить порядок книг

asside.append(book[2]);
asside.prepend(book[1]);
book[3].before(book[4]);

//Заменить картинку заднего фона на другую из папки image

body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

nameBook[4].textContent = "Книга 3. this и Прототипы Объектов";

// удаление рекламы
adv.remove();

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// вторая книга
bookContent[10].before(bookContent[2]);
bookContent[9].before(bookContent[7]);
bookContent[4].before(bookContent[6]);
bookContent[4].before(bookContent[8]);

// пятая книга
bookContent[48].before(bookContent[55]);
bookContent[52].before(bookContent[48]);
bookContent[54].before(bookContent[51]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

newChapter.textContent = "Глава 8: За пределами ES6";
bookContent[25].append(newChapter);
