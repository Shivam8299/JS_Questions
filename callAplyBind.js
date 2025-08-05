let name = {
    firstName: "Shivam",
    lastName: "Mishra",
    printFullName: function (city, school) {
        console.log(this.firstName +" "+ this.lastName + ", " + city+ ", "+ school)
    }
}

name.printFullName("Delhi", "delhi Public school")

let name2 ={
    firstName: "Rohit",
    lastName: "Gopale"
}

// The call() method lets you use someone else's function with your own object as this.
// You also give the function's arguments one by one.

name.printFullName.call(name2, "Lucknow" ,"swarachna")

// The apply() method is very similar to call(), except it takes arguments as an array or array-like object.

// use case of apply 
// when arguments are already in an array form and we dont want to unpack them 

name.printFullName.apply(name2, ["Lucknow" ,"swarachna"])

// The bind() method returns a new function where the this keyword is bound to the specified object. It does not invoke the function immediately.
  
// use case
// When we want to create a copy of a function with fixed context, often used in callbacks, event handlers, or delayed execution.

let printDetails = name.printFullName.bind(name2, "Lucknow" ,"swarachna")

printDetails()



