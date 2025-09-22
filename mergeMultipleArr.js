function merge(a,b,c){
    let newArr = [...a, ...b, ...c];
    let res = newArr.sort((a,b)=>a-b)

    return [ ... new Set(res)]
}

console.log(merge([1, 2, 3], [2, 3, 4], [5, 1]))