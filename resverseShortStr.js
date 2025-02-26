const resverseStr = (str)=>{
    const newArr = str.trim().split(" ")
    const result = newArr.map(e=>e.split("").sort().join("")).join(' ')
    return result
}
console.log(resverseStr("    this is your book"))

