// this is first method without using in build methods 

function palindromeNum (n){
    let givenNum = n
    let newNum=0;
    while(n > 0 ){
        let p = n%10
        newNum = newNum*10+p
        n = Math.floor(n/10)
    }
    return newNum === givenNum
}

console.log(palindromeNum(121))



//second method 

function checkPalindrome (num){
    let srt = num.toString();
    let reversedStr = srt.split(" ").reverse().join(" ")
    return reversedStr === srt
}

console.log(checkPalindrome(121))