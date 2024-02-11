const fetchData = (callback) =>{
    callback("Train Started!");
}

setTimeout(()=>{
    fetchData((status)=>{
        console.log(status);
    })
},5000);