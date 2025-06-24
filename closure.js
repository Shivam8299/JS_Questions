//In JavaScript, a closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.
// This means the inner function "remembers" the environment in which it was created, and it can continue to access and modify those outer variables due to the closure.


function totalValue (){
    let count = 0;
   
    return function value(){
        count +=1;
        return count
    }
}
const counter = totalValue();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())



