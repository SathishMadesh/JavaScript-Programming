// Check the two strings and print true if they are anagrams

let str1 = "Mary";
let str2 = "Army";

const strArr1 = str1.toLowerCase().split('').sort().join('');
const strArr2 = str2.toLowerCase().split('').sort().join('');
 
if(strArr1 === strArr2){
    console.log("true");
} else {
    console.log("false");    
}
