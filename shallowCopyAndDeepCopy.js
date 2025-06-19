//trying to understanding how i can make shallow copy and deep copy with the js object 

const obj = {
    name: "shivam",
    address:{city: "Lucknow"},
    hobby: "coding"
}

// const shallowCopy = Object.assign({},obj);
const shallowCopy = {...obj}
const deepCopy = JSON.parse(JSON.stringify(obj))
obj.address.city = "Sitapur"
console.log(deepCopy.address.city)
console.log(shallowCopy.address.city)

