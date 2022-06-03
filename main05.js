/*2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)

— Статья про простые числа - КЛИК

— Рядом с каждым числом написать оба делителя данного числа

    Например: “Делители этого числа: 1 и n”
*/
"use strict";

num: for (let number = 2; number < 100; number++) {
  for (let div = 2; div < number; div++) {
    if (number % div == 0) continue num;
  }
  console.log(number, "делитель числа 1 и", number);
}
