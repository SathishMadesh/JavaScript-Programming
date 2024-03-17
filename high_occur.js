// Find the largest value whish has highest occurence in an sorted array
// array : [1,1,1,2,2,3,3,5,5,5]
// output : 5

function occurence(arr){
    let counts = {};
    let maxCount = 0;
    let mostRepeatedNum;

    for (let num of arr){
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] >= maxCount) {
            maxCount = counts[num];
            if (mostRepeatedNum === undefined || num > mostRepeatedNum){
                mostRepeatedNum = num;
            }
        }
    }
    return mostRepeatedNum;
}

console.log(occurence([1,1,1,2,2,3,3,5,5,5,6,6,6]));