const body = document.querySelector("body");
console.log(body);
const time = new Date();

let divTime = document.createElement("div");
body.textContent = time.toLocaleString();

console.log(time);
