// Input: ["flower","flow","flight"] → Output: "fl"

// function longestPrefix(arr) {
//   let result = "";
//   if (arr.length === 0) return "";
//   let sortedStr = arr.sort();
//   let first = sortedStr[0];
//   let last = sortedStr[sortedStr.length - 1];
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] === last[i]) {
//       result += first[i];
//     } else {
//       break;
//     }
//   }
//   return result;
// }
// console.log(longestPrefix(["apple", "ape", "april"]));




function prefix (arr){
  if(arr.length === 0) return ""
  let sortedArr = arr.sort()
  let first = sortedArr[0];
  let last = sortedArr[sortedArr.length-1]
  let res =""
  for(let i=0; i<first.length; i++){
    if(first[i] === last[i]){
      res+=first[i]
    }
    else{
      break;
    }
  }
  return res
}
console.log(prefix(["flower","flow","flight"]))
