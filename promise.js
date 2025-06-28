let car = {
  brand: "honda city",
  price: "16 lacks",
  isavailble: true,
};

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve(car);
    } else {
      reject("rejected due to error");
    }
  }, 1000);
});

promise
  .then((data) => console.log("these are your car details", data))
  .catch((error) => console.log(error));
