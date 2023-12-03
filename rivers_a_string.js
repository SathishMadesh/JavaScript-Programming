//riverse a string using recursive function


let string = "hello";

function solution(str) {
    // Termination condition: if the string length is zero or one, return the string
    if (str.length <= 1) {
        return str;
    }

    // Make the recursive call with the string excluding the last character
    return str.slice(-1) + solution(str.slice(0, -1));
}


console.log(solution(string));