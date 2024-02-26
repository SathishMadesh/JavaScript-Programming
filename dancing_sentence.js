class DancingSentence {
    makeDancing(str) {

        let isUpperCase = true;
        const result = [];
        
        for (const char of str) {
            if (char === ' ') {
                result.push(' ')
            } else {
                result.push(isUpperCase ? char.toUpperCase() : char.toLowerCase());
                isUpperCase = !isUpperCase;
            }
        }
        
        return result.join('');
    }
}

const dancing = new DancingSentence();
const str1 = "This is a dancing sentence";
const finalResult = dancing.makeDancing(str1);
console.log(finalResult);

const str4 = "This is   a dancing sentence";
console.log(dancing.makeDancing(str4));

const str2 = "aaaaaaaaaaaaa";
console.log(dancing.makeDancing(str2));

const str3 = "z";
console.log(dancing.makeDancing(str3));

const arr = [1,2, 45,12, 46, 900];

let filterMethod = arr.filter(function(num){
    return num % 2 == 0;
})
console.log(filterMethod);

let mapMethod = arr.map(function(num,i){
 return num * num[i]
})