function fetchData(){
    return new Promise((resolve, reject)=>{
        let api = {
            name:"shivam",
            gender:"male",
            workExp:"fresher"
        }
        let statusCode = 200;
        setTimeout(()=>{
            if(statusCode ===200){
                resolve(JSON.stringify(api));
            }
            else{
                reject("some thing went wrong with API");
            }
        },1000)
    })
}

fetchData()
.then(data => console.log(`Data fatched : ${data}`))
.catch(e => console.log(e))

