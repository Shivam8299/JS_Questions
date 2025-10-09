function subArr(arr){
    let zero=0;
    let one = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        zero ++
    }
    else{
        one++
    }
}
let res = Math.min(zero, one)
return res*2
}
console.log(subArr([1, 1, 1, 0, 0, 1]))