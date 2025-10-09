const obj = {
  name: "Alice",
  age: 25,
  city: "New York"
};

function reverse(obj){
    let newObj = {}
    for( let item in obj ){
        newObj[obj[item]] = item;
    }
    return newObj

}




console.log(reverse(obj))