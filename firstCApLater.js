let str = "i am learnig problem solving";

const newStr = str.split(" ").map(element => element[0].toLocaleUpperCase()+ element.slice(1)).join(" ")
console.log(newStr)