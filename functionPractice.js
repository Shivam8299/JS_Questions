
// for understanding the this keyword in different-different ways
// const obj = {
//   name: "Shivam",
//   greet: function () {
//     console.log(this.name);
//   }
// };
// obj.greet();

//for understanding the workflow of event loop

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");



// Object
const student = {
  name: "shivam",
  class: "x",
  rollNo : 10
}
// for (const value in student){
//   console.log(value, student[value])
// }
Object.entries(student).forEach(([key, value]) => {
  console.log(key, value);
});