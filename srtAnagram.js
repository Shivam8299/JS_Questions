// function anagram(a, b) {
//   if (a.length !== b.length) return false;
//   let feq = {};
//   for (let i = 0; i < a.length; i++) {
//     if (feq[a[i]]) {
//       feq[a[i]] += 1;
//     } else {
//       feq[a[i]] = 1;
//     }
//   }
//   for (let j = 0; j < b.length; j++) {
//     if (feq[b[j]] === undefined || feq[b[j]] === 0) {
//       return false;
//     } else {
//       feq[b[j]] -= 1;
//     }
//   }
//   return true;
// }

// console.log(anagram("silent", "listen"));


// function ana(a,b){
//   if(a.length !== b.length) return false
// let res = {}
// for(let i=0; i<a.length; i++){
//   if(res[a[i]]){
//     res[a[i]]+=1
//   }
//   else{
//     res[a[i]] =1
//   }
// }
// for(let i=0; i<b.length; i++){
//   if(res[b[i]] === 0 || res[b[i]] === undefined){
//     return false
//   }
//   else{
//     res[b[i]] -=1
//   }
// }
// return true
// }


function anagram (x,y){
  let a = x.trim().toLowerCase()
  let b = y.trim().toLowerCase()
  if(a.length !== b.length) return false
  let res = {}
  for(let i=0; i<a.length; i++){
    if(res[a[i]]){
      res[a[i]]+=1
    }
    else{
      res[a[i]] =1
    }
  }
  for(let i=0; i<b.length; i++){
    if(res[b[i]]===0 || res[b[i]] === undefined){
      return false
    }
    else{
      res[b[i]]-=1;
    }
  }
  return true
}
console.log(anagram('listen', "siLent"))