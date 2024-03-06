// in this program we have to eleminate the specific character in a string

let string = "eleminate";

function eleChar(str){
    let result = [];
    for (let i=0; i<=str.length-1; i++){
        if (str[i] !== 'e'){
            result.push(str[i]);
        }
    }
    return result.join('');
}

console.log(eleChar(string));