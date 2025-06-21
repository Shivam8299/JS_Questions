// pure function : pure function is function that take always produce same output for the same input, it cannot modify the state and it have no side effects

// example

const sum = (a,b) => a+b;
console.log(sum(2,4))
console.log(sum(2,4))

//impure function : impure function is a function that can produce different output for the same input, it has side effect and it can also modify the state

//for example

let total = 0;

function add(a){
    const value = total += a
    return value
}

console.log(add(5))
console.log(add(5))