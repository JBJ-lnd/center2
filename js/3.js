let a = 0;
let b = 1;
let hap = 0;
let input = prompt("숫자를 입력해주세요.")

for (let num = 1; num < input; num ++) {
    hap = a + b;
    a = b;
    b = hap;
    num = hap;
    console.log(num);    
}