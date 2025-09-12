function anagram (a,b){
    if(a.length !== b.length) return "not anagrams"
    let feq = {}
    for(let i=0; i<a.length; i++){
        if(feq[a[i]]){
           feq[a[i]]+=1;
        }
        else{
            feq[a[i]] = 1;
        }
    }
    for(let j=0; j<b.length; j++){
        if(feq[b[j]] === undefined ||feq[b[j]] ===0 ){
            return "not anagrams"
        }
        else{
           feq[b[j]]-=1 
        }
    }
    return "anagrams"
}

console.log(anagram("silent", "listen"))