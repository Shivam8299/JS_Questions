// Input: [1,2,3], [2,3,4] → Output: [2,3]

function intersection(arr, arr2){
    const value = []
    for(let item of arr2){
        if(arr.includes(item)){
            value.push(item)
        }
    }
    return value
}

console.log(intersection([1,2,3], [2,3,4]));

