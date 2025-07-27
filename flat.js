// Input: [1, [2, [3, 4]], 5] → Output: [1,2,3,4,5]

function flatNestedArray(arr){
    return arr.flat(Infinity)
}
console.log(flatNestedArray([1, [2, [3, 4]], 5]))
