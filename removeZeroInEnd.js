function removeZeroInEnd (arr){
    let a = arr.length
    const nonZeroELement = arr.filter(element => element !== 0)
    let b = nonZeroELement.length
    let totalZeroes = a-b;
    for(let i=0; i<totalZeroes; i++){
        nonZeroELement.push(0)
    }
    return nonZeroELement
}
console.log(removeZeroInEnd([1,2,3,0,0,4,5,0,5]))