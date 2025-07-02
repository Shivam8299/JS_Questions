let number = require("readline-sync");
let userInput = parseInt(number.question("enter a number :- "));
if (userInput % 2 === 0) {
  console.log("please enter only odd numbers ex-7,9,5");
} else {
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      if (i === Math.floor(userInput / 2) || j === Math.floor(userInput / 2)) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}
