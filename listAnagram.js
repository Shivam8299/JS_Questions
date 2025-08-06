// Given an array of string, group all the anagrams togather;

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams (arr){
    let result = {}
    for(let i =0; i<arr.length; i++){
        let key = arr[i].split('').sort().join('');
        if(result[key]){
            result[key].push(arr[i])
        }
        else{
           result[key]=[arr[i]]
        }
    }
    return Object.values(result)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))



