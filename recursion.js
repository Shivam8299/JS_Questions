//for understand how recursion work

// function value (count){
//     console.log(count)
//     if(count<10){
//         value(count+1)
//     }
// }
// let x = 0;
// value(x)

// for print factorial og given num

// function factorial(value){
//     if(value == 0){
//         return 1
//     }
//     return value * factorial(value-1)
// }
// let val = 6
// console.log(factorial(val))

// function advancedCountByLevel(arr) {
//   const result = {};

//   function countHelper(array, level) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         countHelper(array[i], level + 1);
//       } else {
//         if (result[level]) {
//           result[level] += 1;
//         } else {
//           result[level] = 1;
//         }
//       }
//     }
//   }

//   countHelper(arr, 0);
//   return result;
// }

// console.log(advancedCountByLevel([1, [2, [3, [4]]], 1, [1, [2]]]));


// function arrayDepth(arr){
//   const result = {};
//   function counter(array, level){
//     for(let i=0; i<array.length; i++){
//       if(Array.isArray(array[i])){
//         counter(array[i], level+1)
//       }
//       else{
//         if(result[level]){
//           result[level] += 1
//         } else{
//           result[level] =1
//         } 
//       }
//     }
//   }

//   counter(arr,0)
//   return result;

// }
// console.log(arrayDepth([1,2,3,4,5,5 [2, [3, [4,5,7]]], 1, [1, [2]]]))


// function arrayDepth(arr){
//     let result = {};
//     let maxDepth=0;
//     function counter(array, level){
//       maxDepth = Math.max(maxDepth,level)
//       for(let i=0; i<array.length; i++){
//         if(Array.isArray(array[i])){
//           counter(array[i], level+1)
//         }
//         else{
//           if(result[level]){
//             result[level] +=1;
//           }
//           else{
//             result[level]=1;
//           }
//         }
//       }
//     }
//     counter(arr, 0)
//     return {
//       "result":result,
//       "maxDepth":maxDepth
//     };
// }

function arrayDepth(arr){
  let result = {};
  function depthCounter(array,level){
    for(let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){
        depthCounter(array[i], level+1)
      }
      else{
        if(result[level]){
          result[level]+=1;
        }
        else{
          result[level]=1;
        }
      }
    }
  }
  depthCounter(arr,0)
  return result
  
}

console.log(arrayDepth([1,2,3,4,5,5, [2, [3, [4,[1,3],7]]], 1, [1, [2]]]))
