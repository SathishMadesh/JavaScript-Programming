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

function palindrome1(x){
    x = x.toString();
    rev_x = x.split('').reverse().join('');
    if (x < 0){
        console.log(x," is not a palindrom");
    } else if (x === rev_x){
        console.log(x," is palindrom");
    } else {
        console.log(x, "is not a palindrom");
    }
}

palindrome1(12321);
palindrome1("hello");