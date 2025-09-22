function missingNum (arr){
  let n = arr.length+1
  let total = (n*(n+1))/2
let sum = arr.reduce((a,b)=>a+b,0)
return total-sum
}

console.log(missingNum([1, 2, 3, 5, 6, 7, 8]))