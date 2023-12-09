

// Adding n numbers using spread operater in function

function add(...num){
    console.log(num);
    let res = num.reduce((acc,curr) => acc + curr , 0);
    console.log(res);
}

add(1,2,3,4,5)