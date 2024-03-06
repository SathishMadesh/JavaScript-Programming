// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiple of 3 and 5.

for (let i = 1; i<=100 ; i++){
    if ( i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz", i);
    } else if(i%3 === 0){
        console.log("Fizz", i);
    } else if(i%5 ===0){
        console.log("Buzz", i);
    }
}
