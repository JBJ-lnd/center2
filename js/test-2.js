const BlackJacknum = 21;
let sum = 0;

for(;;) {
    let number = prompt("숫자를 입력해주세요.")*1;
    sum += number;

    if(sum === BlackJacknum) {
        alert("승리하였습니다!")
        break;
    }else if(sum > BlackJacknum) {
        alert("실패하셨습니다.")
        break;
    }
}