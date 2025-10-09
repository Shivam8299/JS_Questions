function multiply (a,b){
    let res =""
    for(let i=0; i<a; i++){
        let row =""
        for(let j=0; j<b; j++){
            row +=(i*j)+" "
        }
        res += row + "\n"
    }
    return res.trim()
}

console.log(multiply(3,4))