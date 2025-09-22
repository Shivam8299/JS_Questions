// function flatten(arr) {
//   let result = [];
//  for(let i=0; i<arr.length; i++){
//     if (Array.isArray(arr[i])) {
//       result.push(...flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   };
//   return result;
// }
// console.log(flatten([1,2,[1,3]]))




function flat(arr){
  let res = [];
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      res.push(...flat(arr[i]))
    }
    else{
      res.push(arr[i])
    }
  }
  return res
}
console.log(flat([1,2,[1,3]]))