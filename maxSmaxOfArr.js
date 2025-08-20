function max_second_of_array (arr){
    if(arr.length < 2){
        return 'length of array should be 2 or mo'
    }
    let max = -Infinity
    let sMax = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            sMax = max;
            max = arr[i];
        }
        else if(arr[i]> sMax && arr[i] < max){
            sMax = arr[i];
        }
    }
    return (sMax === -Infinity) ? null : sMax + max
}

console.log(max_second_of_array([1,2,3,4,5,5]))