let arr = [100, 100, 99, 98, 98, 97];

function thirdMaxium (arr){
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for(let i=0; i<arr.length; i++){
        
        if(arr[i]>max){
            thirdMax = secondMax
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i] > secondMax){
            thirdMax = secondMax
            secondMax = arr[i];
        }
        else if (arr[i]> thirdMax){
            thirdMax = arr[i]
        }
    }
    return thirdMax;
}

console.log(thirdMaxium(arr))
