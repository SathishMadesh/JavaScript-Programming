function add(...num) {
    const addNext = function (...nextNum) {
      if (nextNum.length === 0) {
        // If no more arguments, return the result
        return num.reduce((acc, curr) => acc + curr, 0);
      } else {
        // If there are more arguments, return a new curried function
        return add(...num, ...nextNum);
      }
    };
  
    // Return the curried function
    return addNext;
  }
  
  console.log(add(1, 2, 3, 4, 5)());   // Output: 15
  console.log(add(1)(3)(5)());         // Output: 9
  