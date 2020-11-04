const five = 5;
const three = 3;
let sugar = prompt("설탕의 무게")*1;

let bagcount = 0;

while (true) {
    if (sugar % 5 === 0) {
        bagcount += sugar / 5;
        break;
    } else if(sugar <= 0) {
        bagcount = -1;
    }

    sugar -= 3;
    bagcount ++;

}
  console.log(bagcount);