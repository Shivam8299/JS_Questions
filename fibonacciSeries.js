

function fibonacciSeries(n) {
  let a = 0, b = 1;
  let result = [];
  while (b <= n) {
    result.push(b);

    let temp = b;    
    b = a + b;        
    a = temp;         
  }

  return result;
}

console.log(fibonacciSeries(100))