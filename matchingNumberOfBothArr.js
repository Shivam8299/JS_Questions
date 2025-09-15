function matchingArr (arr1, arr2){
    let matched = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                matched.push(arr1[i])
                arr2.splice(j, 1)
                break;
            }
        }
    }
    return matched
}

console.log(matchingArr([1, 2, 3], [2, 3, 4])); 
console.log(matchingArr([1, 2, 3], [4, 5, 6])); 
console.log(matchingArr([1, 2, 3], [1, 2, 3])); 
console.log(matchingArr([1, 2, 2, 3], [2, 2, 2, 4])); 
console.log(matchingArr([], [1, 2, 3])); 
console.log(matchingArr([-1, -2, -3], [-3, -4, -5])); 
console.log(matchingArr([1, -2, 3, -4], [-4, 3, 5])); 
console.log(matchingArr(["apple", "banana", "cherry"], ["banana", "cherry", "date"])); 



