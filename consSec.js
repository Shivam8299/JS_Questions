// function longestCon(arr){
//     if(arr.length === 0) return 0
//     let newArr = arr.sort((a,b)=>a-b)
//     let max = 1
//     let cur = 1
//     for(let i=0; i<newArr.length-1; i++){
//         if(arr[i] === arr[i+1]) continue
//         if(newArr[i]+1 === newArr[i+1]){
//             cur++
//             max = Math.max(max, cur)
//         }
//         else{
//             cur=1
//         }
//     }
//     return max
// }

// console.log(longestCon([100, 4, 200, 1,1,1,2,2,2,2,3,3]))

function continueNum(arr) {
  let a=arr.sort((a, b) => a - b);
  let max = 1;
  let cur = 1;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) continue;
    if (a[i] + 1 === a[i + 1]) {
      cur++;
      max = Math.max(max, cur);
    }else{
      cur = 1;
    }
  }
  return max;
}
console.log(continueNum([100, 4, 200, 1, 1, 1, 2, 2, 2, 2, 3, 3]));
