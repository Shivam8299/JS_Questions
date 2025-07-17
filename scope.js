// let success = false
// const api = {
//   name: "Shivam",
//   getData: async function() {
//     if(success)
//     return(`hii ${this.name}`);
//     else{
//         throw new Error("failed")
//     }
//   }
// };
// // async function getData(p) {
// //     if(success){
// //         return("data fetched successfully")
// //     }
// //     else{
// //         throw new Error("fatching failed") 
// //     }
// // }

// function Retry (asfun, attempts, delay){
//     return async function (...param){
//         while(attempts --){
//             try {
//                 return await asfun.apply(this,param)
//             } catch (error) {
//                 if(attempts===0){
//                     throw new Error("all attempts have failed")
//                 }
//                 console.log("retrying................")
//                 await new Promise((res)=>setTimeout(res,delay))
//             }
//         }
//     }
// }

// const result = Retry(api.getData.bind(api),5,2000)
// result().then((data)=>console.log(data))
// .catch(e => console.log(e))


function arrayDep(arr){
    let res= {};
    function Counter(array, depth) {
       for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i])){
            Counter(array[i], depth + 1)
        }
        else{
            if(res[depth]){
                res[depth] +=1;
            }
            else{
                res[depth] = 1
            }
        }
       }
    }
    Counter(arr,0)
    return res
}

console.log(arrayDep([1,2,3,4,5,5, [2, [3, [4,[1,3],7]]], 1, [1, [2]]]))