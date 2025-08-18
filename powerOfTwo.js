function power_of_two (number){
    if(number === 1) return true
    if(number <= 0) return false
    for(let i = number; i>1; i=i/2){
        if(i%2 !==0){
            return false
        }
    }
    return true
}

console.log(power_of_two(17))