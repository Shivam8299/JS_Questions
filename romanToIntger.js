const numricNum = "CCXXXIV";
function getval (value){
    switch (value){
        case "I" :
            return 1;
        case "V" :
            return 5; 
        case "X" :
            return 10;
        case "L" :
            return 50;
        case "C" :
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return 0;  
    }
}

let sum = 0;
for(let i=0; i<numricNum.length; i++){
    const currentVal = getval(numricNum[i]);
    const nextVal = getval(numricNum[i+1]);
    if(currentVal<nextVal){
        sum-=currentVal;
    }
    else{
        sum+=currentVal;
    }

}

console.log(sum)