function product(arr){
    let result = []
    let product = arr.reduce((a,b)=> a*b)
    for(let i=0; i<arr.length; i++){
        result.push(product/arr[i])
    }
    return result
}

console.log(product([1,2,3,4]))