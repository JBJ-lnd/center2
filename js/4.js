let a = prompt("고정 비용");
let b = prompt("가변 비용");
let c = prompt("판매 비용");
let d = c - b;

if (d <= 0) {
    console.log("X");
    } else {
    console.log(parseInt(a / (c - b)));
 }