const http = require('http');

function reqListener(req,res){
    console.log(req);
    // process.exit();
}
const server = http.createServer(reqListener);
server.listen(3000);