function perfectSquare (num){
   let val = Math.floor(Math.sqrt(num))
   if(val * val === num){
    return true
   }
   else{
    return false
   }
    
}
console.log(perfectSquare(17))