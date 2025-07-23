/*A Higher-Order Function is a function that either takes another function as an argument, returns a function, or does both. In JavaScript, functions like map, filter, and reduce are great examples of higher-order functions because they take callback functions to operate on each element of an array. Higher-order functions are a key part of functional programming and help us write cleaner, reusable, and more expressive code */



let arr = [1,2,3,45,6]
let newArr = arr.map((item)=>{
    return item*2
})

// console.log(newArr)

let filterItem = arr.filter((item)=>item> 40)
// console.log(filterItem)

let res = arr.reduce((acc,pre)=>acc+pre);
// console.log(res);

let findItem = arr.find(item => item === 1);
console.log(findItem)

let fillArr = arr.fill(7,3,4)
console.log(fillArr)
