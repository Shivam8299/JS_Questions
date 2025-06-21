//function curring 

// Function currying is a technique in JavaScript where a function is transformed into a series of nested functions, 
// each taking one argument at a time.

// a regular function 

function add (a,b,c) {
    return a+b+c
}

console.log(add(2,3,4))


// in function curring 

function sum (a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum(2)(3)(4))



//regular function in arrow function  

const multiply = (a,b,c,d) => (a*b*c*d)
console.log(multiply(1,2,3,4))


// function curring with arrow function 

const product = a => b => c => d => a*b*c*d
console.log(product(1)(2)(3)(4))