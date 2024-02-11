var i = 5;
const bombTimer = setInterval(()=>{
    console.log(`The Bomb is going to blast in ${i--}`)
},1000);

setTimeout(()=>{
    console.log("💣💣💣💣💣💣💣💣💣💣");
    clearInterval(bombTimer);
},6000);