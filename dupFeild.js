// function duplicateFeild(arr) {
//  let present = new Set()
// let unique = arr.filter(ele =>{
//   if(present.has(ele.email)){
//     return false
//   }
//   present.add(ele.email)
//   return true
// })
//   return unique;
// }

// console.log(
//   duplicateFeild([
//     { name: "Alice", email: "a@gmail.com" },
//     { name: "Bob", email: "b@gmail.com" },
//     { name: "Alice2", email: "a@gmail.com" },
//   ])
// );


// function uniqueFeild (arr){
//   let res =[]
//   for(let i=0; i<arr.length; i++){
//     let count =0;
//     for(let j=0; j<arr.length; j++){
//       if(arr[i].email === arr[j].email){
//         count++
//       }
//     }
//     if(count === 1){
//       res.push(arr[i])
//     }
//   }
//   return res

// }

// console.log(
//   uniqueFeild([
//     { name: "Alice", email: "a@gmail.com" },
//     { name: "Bob", email: "b@gmail.com" },
//     { name: "Alice2", email: "a@gmail.com" },
//   ])
// );



function duplicateFeild (arr){
  let unique = new Set();
  let res = arr.filter(ele =>{
    if(unique.has(ele.email)) return false
    unique.add(ele.email)
    return true
  })
  return res
}
console.log(
  duplicateFeild([
    { name: "Alice", email: "a@gmail.com" },
    { name: "Bob", email: "b@gmail.com" },
    { name: "Alice2", email: "a@gmail.com" },
  ])
);