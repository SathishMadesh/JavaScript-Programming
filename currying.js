function add(a){
    return function (b){
        return a+b;
    }
};

console.log(add(2)(3));

function multiply(a,b){
    if (arguments.length === 2){
        return a*b;
    } else {
        return function (b){
            return a*b;
        }
    }
}

console.log(multiply(2)(3));
console.log(multiply(2,3));