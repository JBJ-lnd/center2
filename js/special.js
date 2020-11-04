const TARGET_STRING = "AAABBBCCC";

let result = "";
let nowCharacter = "";
let nowCharacterCount = 0;

for (const char of TARGET_STRING) {
    console.log(char);
    if (!nowCharacter) {
        nowCharacter = char;
        nowCharacterCount ++;
    } else {
        if (nowCharacter === char) {
            nowCharacterCount ++;
        }
        else {
            if (nowCharacterCount === 1) {
                result += `${nowCharacter}`;    
            }
            else {
                result += `${nowCharacterCount}${nowCharacter}`;
            }
            nowCharacter = char;
            nowCharacterCount = 1;
        }
    }
}
if (nowCharacterCount === 1) {
    result += `${nowCharacter}`;    
}
else {
    result += `${nowCharacterCount}${nowCharacter}`;
}

console.log(result);