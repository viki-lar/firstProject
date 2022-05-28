let num = 266219;
let total = 1;
let a;

for (num; num > 0; num = Math.trunc(num / 10)) {
  a = num % 10;
  total = total * a;
}

total = "" + total ** 3;

console.log(total.substring(0, 2));
