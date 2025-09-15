function anagram(a, b) {
  if (a.length !== b.length) return false;
  let feq = {};
  for (let i = 0; i < a.length; i++) {
    if (feq[a[i]]) {
      feq[a[i]] += 1;
    } else {
      feq[a[i]] = 1;
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (feq[b[j]] === undefined || feq[b[j]] === 0) {
      return false;
    } else {
      feq[b[j]] -= 1;
    }
  }
  return true;
}

console.log(anagram("silent", "listen"));
