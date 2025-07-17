// for check how nested this array

function arrayDepth(arr){
    let currecntDepth =0;
    let maxDepth =0;
    let srt = JSON.stringify(arr)
    for(let i=0; i<srt.length; i++){
        if(srt[i] === "["){
            currecntDepth ++;
            maxDepth = Math.max(currecntDepth, maxDepth)
        }
        else if(srt[i] === "]"){
            currecntDepth --
        }
        
    }
    return maxDepth
}

console.log(arrayDepth([1, [2, [3, [4]]], 1, [1, [2]]]));




// function depthOfArr(arr){
//     let result = {}
//     function counter(array, level){
//         for(let i=0; i<array.length; i++){
//             if(Array.isArray(array[i])){
//                 counter(array[i], level+1);
//             }
//             else{
//                 if(result[level]){
//                     result[level]+=1;
//                 }
//                 else{
//                     result[level] = 1;
//                 }
//             }
//         }
//     }
//     counter(arr,0)
//     return result
// }

// console.log(depthOfArr([1, [2, [3, [4]]], 1, [1, [2]]]));


