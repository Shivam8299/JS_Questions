// const success = 1;
// const promise = new Promise((resolve, reject)=>{
//     if(success){
//         resolve("data fatched")
//     }
//     else {
//         reject("something went wrong")
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((e)=>{
// console.log(e)
// })


// const result = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello Shivam")
//     },1000)
// })

// result.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })




                                        // Q: Create a Promise that:

                                        // Resolves with "Success" if isLoggedIn = true

                                        // Rejects with "Unauthorized" if isLoggedIn = false


// const isLoggedIn = true;
// const promise = new Promise((resolve, reject)=>{
//     if(isLoggedIn){
//         resolve("success")
//     }
//     else {
//         reject("Unauthorized")
//     }
// })

// promise.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })




                //  3. Promise Chaining
                // Q: Chain .then() methods to:
                // Multiply a number by 2
                // Then add 10
                // Then log the final result


// Promise.resolve(5).then((num)=>{
//     return num * 2
// })
// .then((result)=>{
//     return result +10
// }).then((final)=>{
//     console.log(final)
// })
// .catch((e)=>{
//     console.log(e)
// })

                            // convert callback in promises

                            // function getData(callback) {
                            // setTimeout(() => {
                            //   callback("Data loaded");
                            // }, 1000);
                            // }

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("data loaded")
//     },1000)
// })
// promise.then(console.log)
// .catch((e)=>{
//     console.log(e)
// })


                    // Write a function fetchData() that returns a Promise and resolves after 2 seconds with:


function fetchData (status){
    return new Promise((resolve, reject)=>{
        if(status === 200){
            setTimeout(()=>{
                resolve({ status: 200, message: "Data received" })
            },2000)
        }
        else {
            reject("something went wrong")
        }

    })
}

fetchData(210).then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})