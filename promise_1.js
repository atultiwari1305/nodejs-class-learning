const myPromise = new Promise((myResolve,myReject)=>{
    myResolve();
})

console.log(myPromise);

myPromise.then(()=>{
    console.log("Success");
}).catch(()=>{
    console.log("Failed");
})