// pair the two values from the given array that has the diffrence of K=4
// given array : [9,6,5,2,1]
// output : (9,5)(6,2)(5,1)

function diffrence(arr){
    const k=4;
    result = [];
    for (let i=0; i < arr.length; i++){
        //console.log(arr[i]);
        for (let j=i; j < arr.length; j++){
            // console.log(arr[i],arr[j]);
            if (Math.abs(arr[i]-arr[j]) === k){  
                // Math.abs() gives the absolute value of the diffrence like if it's negative value, change it to positive
                result.push([arr[i],arr[j]]);
                
            }
        }
        
    }
    return result;
}

console.log(diffrence([9,6,5,2,1,10]));