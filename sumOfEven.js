function nestedArr(arr){
    let newArr = arr.flat(Infinity)
    let sum =0;
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]%2 === 0 ){
            sum+=newArr[i]
        }
    }
    return sum
}
console.log(nestedArr([1, 2, [3, 4, [6, 7]], 8]))