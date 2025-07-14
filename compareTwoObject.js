function compareObj(obj1, obj2){
    if(obj1 === obj2) return true
    if(typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)
    if(key1.length !== key2.length) return false

    for(let keys of key1){
        if(!key2.includes(keys)) return false
        if(!compareObj(obj1[keys], obj2[keys])) return false
    }
    return true
}

const obj1 = {
  name: "Shivam",
  address: { city: "Lucknow", pincode: 226001 },
  hobbies: ["coding", "reading"]
};

const obj2 = {
  name: "Shivam",
  address: { city: "Lucknow", pincode: 226001 },
  hobbies: ["coding", "reading"]
};

console.log(compareObj(obj1, obj2))