let arr = [1, 2, 3, 5, 6, 7, 8];
function missingNum(arr) {
  let n = arr.length + 1;
  let val = (n * (n + 1)) / 2;
  let sumArr = arr.reduce((a, b) => a + b);
  return val - sumArr;
}

console.log(missingNum(arr));
