let str = "pineapple";
let freq ={}
for(let i=0; i<str.length; i++){
    if(freq[str[i]]){
        freq[str[i]]+=1;
    }
    else{
        freq[str[i]] = 1;
    }
}
console.log(freq)