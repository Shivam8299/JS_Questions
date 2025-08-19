// 2,1,4,2,6,3..............................100,50

for (let i = 1; i <= 50; i++) {
  let even = 2 * i;  
  let num = i;       
  process.stdout.write(even + ", " + num);

  if (i !== 50) process.stdout.write(", "); 
}