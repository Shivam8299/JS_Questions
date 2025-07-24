function targetValue(arr,target){
    let i=0;
    let j = arr.length-1
    while(i <= j){
        if(arr[i]+arr[j] === target){
            console.log(arr[i],arr[j])
            return;
           
        }
        else{
            i++;
            j--
        }
        
    }

}
targetValue([1,3,4,5,6,8],9)