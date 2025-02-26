const capitalLatter = (str)=>{
    let res = str.split(" ").map(element => element[0].toUpperCase()+element.slice(1))
    return res.join(" ")
}

console.log(capitalLatter("i am shivam mishra"));