function product (arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        let product = 1;
        for(let j=0; j<arr.length; j++){
            if(i !== j){
                product *=arr[j]
            }
        }
        res.push(product)
    }
    return res
}
console.log(product([1,2,3,4]))