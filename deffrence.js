// pair the two values from the given array that has the deffrence of K=4
// given array : [9,6,5,2,1]
// output : (9,5)(6,2)(5,1)

function deffrence(arr){
    const k=4;
    for (let i=0; i < arr.length; i++){
        //console.log(arr[i]);
        for (let j=i; j < arr.length; j++){
            // console.log(arr[i],arr[j]);
            if (arr[i]-arr[j] === k){
                console.log(arr[i],arr[j]);
            }
        }
    }
}

deffrence([9,6,5,2,1]);