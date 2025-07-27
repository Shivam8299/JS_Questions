// Input: "I love JavaScript very much"
// Output: "JavaScript"

function longestWord(str){
    let max = 0;
    let res = "";
    let newStr = str.trim().split(" ");
    for(let i=0; i<newStr.length; i++){
        if(newStr[i].length> max){
           max = newStr[i].length;
           res = newStr[i]
        }
    }
    return res;
}

console.log(longestWord("I love JavaScript very much"))
