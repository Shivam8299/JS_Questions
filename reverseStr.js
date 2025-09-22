function reverseStr (str){
    let newStr = "";
    let n=str.length-1;
    for(let i=n; i>=0; i--){
        newStr+=str[i]
    }
    return newStr
}
console.log(reverseStr("dcba"))