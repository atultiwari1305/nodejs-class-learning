const http = require('http');

function reqListener(req,res){
    console.log(req);
    setTimeout(()=>{
        console.log("Ended");
        process.exit;
    },5000);
}
const server = http.createServer(reqListener);
server.listen(3000);