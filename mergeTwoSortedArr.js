arr1 = [1, 3, 5, 7];
arr2 = [2, 4, 6, 8];
let result = [];
let i =0;
let j=0;

while(i<arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++
    }
    else{
        result.push(arr2[j])
        j++
    }
}
while(i< arr1.length){
        result.push(arr1[i])
        i++
    }

    while(j< arr2.length){
        result.push(arr2[j])
        j++
    }

console.log(result)