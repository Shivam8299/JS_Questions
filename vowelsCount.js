// function vowelCount(str){
//     let x = 'aeiouAEIOU';
//     let count = 0;
//     for(let char of str){
//         if(x.includes(char)){
//             count ++;
//         }
//     }
//     return count
// }

// console.log(vowelCount('I am Shivam'))


function vovelCount(str){
    let vovel = 'aeiouAEIOU'
    let count = 0;
    for(let i=0; i<str.trim().length; i++){
        if(vovel.includes(str[i])){
            count ++
        }
    }
    return count 
}

console.log(vovelCount('aeiou'))