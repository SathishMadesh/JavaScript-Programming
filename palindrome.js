// find givn input number or str is palindrome or not

function palindrome(x){
    if (x < 0) return false;

    x = x.toString();

    let left = 0;
    let right = x.length-1;

    while (left < right) {
        if (x[left] !== x[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
}

console.log(palindrome(12321));

console.log(palindrome("hello"));