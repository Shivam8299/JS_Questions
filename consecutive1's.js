function mostConsecutive(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}

console.log(
  mostConsecutive([1, 2, 3, 1, 1, 1, 1, 3, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1])
);
