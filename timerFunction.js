let timerFunction = (()=>{
    setInterval(()=>{
        var a = new Date;
        var hr = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        console.log(`The time is ${hr} : ${min} : ${sec}`)},1000)
})
timerFunction();