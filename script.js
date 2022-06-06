const getWeek = function () {
  let today = new Date().getDay();
  let week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  for (index = 0; index < week.length; index++) {
    if (index >= 5) {
      //вывод курсивом
      week[index] = week[index].italics();
    }
    if (index + 1 == today) {
      //   // вывести жирным
      week[index] = week[index].bold();
      // }
    }
  }
  document.write(week);
};

getWeek();
