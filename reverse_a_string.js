//riverse a string using recursive function


let string = "hello";

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution(string));

function solution1(str) {
    let reverseStr = [];
    for(let i = str.length-1; i >=0; i--){
        reverseStr.push(str[i]);
    }
    return reverseStr.join('');
}

console.log(solution1(string));

// reversre a each words in an given string

let orgStr = "reversre a each words in an given string";

function reverseWords(str){
    const result = [];
    const words = str.split(' ');
    words.forEach((word) => {
        console.log(word);
        let reverse = word.split('').reverse().join('');
        result.push(reverse);
    });
    return result.join(' ');
}

console.log(reverseWords(orgStr));