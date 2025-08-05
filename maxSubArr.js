// this brute force code for print all the sub arrray of an array;

function printSubArr(arr){
    for(let start = 0; start<arr.length; start++){
        for(let end = start; end<arr.length; end++){
            for(let i = start; i<=end; i++){
                process.stdout.write(arr[i] + " ");

            }
            console.log()
        }
    }
}

// console.log(printSubArr([1,2,3,4,5]));


function maxSubArr(arr){
    let maxSum = -Infinity;
    for(let start = 0; start<arr.length; start++){
        let currentSum = 0;
        for(let end = start; end<arr.length; end++){
            currentSum += arr[end];
            maxSum = Math.max(maxSum, currentSum)
        }
    }
    return maxSum
}

// console.log(maxSubArr([1,-2,3,4,-5]))

// kadane's algorithem for print maximum sub array in array

function maxSubArrWithKadansAlorithem(arr){
    let maxSum = -Infinity;
    let currentSum = 0;
    for(let i = 0; i<arr.length; i++){
        currentSum += arr[i]
        maxSum = Math.max(maxSum, currentSum)
        if(currentSum < 0){
            currentSum = 0;
        }
        
    }
    return maxSum
}

console.log(maxSubArrWithKadansAlorithem([-1,2,-3,4,-5]))