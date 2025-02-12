function vowelCount(str){
    let x = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if(x.includes(char)){
            count ++;
        }
    }
    return count
}

console.log(vowelCount('I am Shivam'))