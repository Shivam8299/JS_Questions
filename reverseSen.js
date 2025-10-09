let str = "Welcome to the Navgurukul"
function reverseStr (str){
let newStr = str.trim().split(" ")
let res = []
for(let i=0; i<newStr.length; i++){
    let word = newStr[i].split("").reverse().join("")
    res.push(word)

}
return res.join(" ")
}
console.log(reverseStr(str))