// 이 코드는 알림창을 띄우는 코드입니다.
alert( 'Hello, world!' );

const PG_FEE = 0.03;

let a = 1;
let b = "line";
let c = 1523;
let title = "안녕하세요"

let sell_price = 20_000;
let pg_fee = sell_price * PG_FEE;

alert(`${typeof a}, ${typeof b}, ${typeof c}, ${typeof (a + b)}`);

let result = prompt(title, "기본값");
alert(result);

let isBoss = confirm("당신이 주인인가요?");
alert(isBoss);
