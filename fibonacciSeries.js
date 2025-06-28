

function fibonacciSeries (n=50){
    let a= 0;
    let b = 1;
    let result = [a];
    while (b<=n){
        result.push(b)
        let temp = b;
        b = a+b;
        a = temp;
    }
    return result

}

console.log(fibonacciSeries())