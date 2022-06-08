const getWeek = function () {
  const list = document.querySelector("ul");

  console.log(list);
  let today = new Date().getDay() - 1;
  let week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  for (let index in week) {
    let newLi = document.createElement("li");
    newLi.textContent = week[index];
    list.append(newLi);
    //вывод курсивом
    if (index >= 5) {
      newLi.classList.add("italic");
    }
    // вывод жирным
    if (index == today) {
      newLi.classList.add("bold");
    }
  }
};

getWeek();
