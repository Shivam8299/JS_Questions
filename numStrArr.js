// In an array number or string only add numbers those are not string

function numStrArray(arr){
    let sum = 0;
    for(let item of arr){
        if(typeof item === 'string'){
            continue;
        }
        else{
            sum += item;
        }
    }
    return sum
}

console.log(numStrArray([1,'shivam',5,'question','addEven','tListener',6]))