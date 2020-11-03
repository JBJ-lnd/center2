const PASSWORD = "12345";
const ID = "sol1234"

id = prompt("아이디를 맞추세요");
password = prompt("비밀번호를 맞추세요")

if(id === ID && password === PASSWORD) {
    alert('로그인 되었습니다!');
} else if (id !== ID && password === PASSWORD) {
    alert('로그인에 실패하였습니다! 아이디를 확인해주세요');
} else {
    alert('로그인에 실패하였습니다!');
}
