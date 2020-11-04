let month = 0;
let string = "월";

for (month = 1; month <=12; month ++) {
    if (month % 2 == 0) {
        console.log(`${month}${string}`);
    }
}