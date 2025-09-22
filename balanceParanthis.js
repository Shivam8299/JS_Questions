function balanced(str){
    let arr =[]
   let p = {
    ")":"(",
    "}":"{",
    "]":"["
   }
   for(let i=0; i<str.length; i++){
    if(str[i]==="{" || str[i]==="[" || str[i]==="("){
        arr.push(str[i])
    }
    else if((str[i]==="}" || str[i]==="]" || str[i]===")")){
        if(arr.length === 0 || arr.pop() !== p[str[i]]){
            return false
        }
    }
   }
return arr.length === 0
}


console.log(balanced("{[()]}")); 
console.log(balanced("([)]")); 
