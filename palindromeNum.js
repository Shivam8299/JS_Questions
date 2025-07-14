// this is first method without using in build methods 

// function palindromeNum (n){
//     let givenNum = n
//     let newNum=0;
//     while(n > 0 ){
//         let p = n%10
//         newNum = (newNum*10)+p
//         n = Math.floor(n/10)
//     }
//     return newNum === givenNum
// }

// console.log(palindromeNum(121))



//second method 

// function checkPalindrome (num){
//     let srt = num.toString();
//     let reversedStr = srt.split('').reverse().join('')
//     return reversedStr 
// }

// console.log(checkPalindrome(123))


function palindrome(num){
    let newNum = num;
    let result = 0;
    for(let i = num; num>0; i++  ){
        let p = num % 10;
        result = result * 10 + p
        num = Math.floor(num/10)
    }
    return newNum === result
}

console.log(palindrome(121))
