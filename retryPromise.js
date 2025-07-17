// We need to implement a retry mechanism for our asynchronous operations. Your task is to create a retry function in JavaScript that can wrap around other functions to add retry functionality. Consider the following requirements:

// 1. The retry wrapper should accept configuration options such as maximum number of attempts, delay between retries.
// 2. Ensure that the original function's context (this) and arguments are preserved.
// 3. Provide appropriate error handling and reporting.
// function retryWrapper(asyncOpe, maxNoOfAttempts)

// function retryWrapper(asyncFn, maxAttempts = 3, delay = 1000) {
//   return async function (...args) {
//     let attempt = 0;

//     while (attempt < maxAttempts) {
//       try {
//         return await asyncFn.apply(this, args); // keep context and arguments
//       } catch (error) {
//         attempt++;
//         if (attempt === maxAttempts) {
//           throw new Error(`Failed after ${maxAttempts} attempts: ${error.message}`);
//         }
//         console.log(`Retrying... attempt ${attempt}`);
//         await new Promise((res) => setTimeout(res, delay));
//       }
//     }
//   };
// }

// // Example usage
// async function fetchData() {
//   const random = Math.random();
//   if (random < 0.9) {
//     throw new Error("Random failure");
//   }
//   return "Data loaded";
// }

// const fetchWithRetry = retryWrapper(fetchData, 3, 1000);

// fetchWithRetry().then(console.log).catch(console.error);


// +++++++++++++++++++++++ problem statement++++++++++++++++

/*
1 baar nahi chale to dubara try karein

Max kuch attempts karein (like 3)

Har attempt ke beech me wait karein (like 1 second)

Agar sab fail ho jaye to finally error throw karein
*/

// function retry(asyncFn, maxA = 5 , delay=1000){
//     return async function (...args){
//        while(maxA--){
//            try {
//             return await asyncFn.apply(this, args)
//            } 
//            catch (error) {

//             if(maxA === 0){
//                 throw new Error('all attempts has beed failed')
//             }
//             console.log(`retrying ${maxA} time more`)
//             await new Promise((res) => setTimeout(res, delay))
//              } 
//         }
//     }
// }

// const fetchData = async()=>{
//     const randomVal = Math.random()
//     if(randomVal<0.9){
//         throw new Error("random failed!!")
//     }
//     else {
//         return "data loaded!!"
//     }
// }

// const finalResult = retry(fetchData,5,1000)

// finalResult().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


// function retry(asfun,maxattempt = 6, delay = 1500 ){
//     return async function (...agr){
//         while(maxattempt--){
//             try {
//                 return await asfun.apply(this, agr)
//             } catch (error) {
//                 if(maxattempt === 0){
//                     throw new Error("all attemps has been failed!!");
//                 }
//                 console.log(`retring ${maxattempt} more attempts are left!!!! `)
//                 await new Promise(res => setTimeout(res,delay))
//             }
//         }
//     }

// }

// let success = true;
// const fetchData = async ()=>{
//     if(!success){
//         return "data loaded successfully"
//     }
//     else {
//        throw new Error("random failed"); 
//     }
// }

// const result = retry(fetchData)
// result().then((data)=>console.log(data)).catch((e)=>console.log(e))



// let success = false;
//   async function fetchData(){
//     if(success){
//         return "data fatched successfully"
//     }
//     else {
//         throw new Error("something went wrong")
//     }
// }
// function retry(asFun, attempt = 6 , delay= 1000){
//     return async function(...arg){
//         while(attempt --){
//             try {
//                 return await asFun.apply(this, arg)
//             } catch (error) {
//                 if(attempt === 0){
//                     throw new Error("all attemps have failed");
//                 }
//                 console.log(`Retrying ${attempt} are left!!!`)
//                 await new Promise(res => setTimeout(res,delay))
                
//             }
//         }
//     }
// }
// const result = retry(fetchData)
// result().
// then(data=>console.log(data))
// .catch(e=>console.log(e))



// let success = false;
// async function getData() {
//     if(success){
//         return ("data loadded successfully")
//     }
//     else{
//         throw new Error('data fatching failed')
//     }
// }

// function retryWrapper (asfun, attempt, delay){
//     return async function(...args) {
//         while(attempt --){
//             try {
//                 return await asfun.apply(this,args)
//             } catch (error) {
//                 if(attempt ===0){
//                     throw new Error("all attemps are failed")
//                 }
//                 console.log(`Retrying ${attempt} more attempts are left`)
//                 await new Promise((res)=>setTimeout(res,delay))
               
//             }
//         }
//     }
// }

// const result = retryWrapper(getData,5,1000)
// result().then(data=>console.log(data))
// .catch(e=> console.log(e))


// function retryWrapper(fetchData, maxAttempts, delay) {
//     return async function(...params){
//         while(maxAttempts --){
//             try {
//                 return await fetchData.apply(this, params)
//             } catch (error) {
                
//                 if(maxAttempts ===0){
//                     throw new Error("all attempts are  failed")
//                 }
//                 else{
//                     console.log(`retrying ${maxAttempts} more attemps are left!!`)
//                     await new Promise(res=>setTimeout(res,delay))
//                 }
                
//             }
//         }
//     }
    
// }
// let success = false
// async function getData() {
//     if(success){
//         return("data fatched successfully")
//     }
//     else{
//         throw new Error("fatching failed")
//     }
// }

// const result = retryWrapper(getData,5,2000)
// result().then(data => console.log(data))
// .catch(e => console.log(e))


const data = async()=>{
    if(success){
        return("data fatech successfully")
    }
    else{
        throw new Error("fathing failed")
    }
}

function retry(fn, attempts, delay){
    return async function(...params){
        while(attempts --){
            try {
                return await fn(this,params)
            } catch (error) {
                if(attempts === 0){
                    throw new Error("all attempts have failed")
                }
                console.log("retrying.....")
                await new Promise(res => setTimeout(res,de))
            }
        }
    }
}

const result = retry(data,5,1000)
result().then(data => console.log(data)).catch(e => console.log(e))