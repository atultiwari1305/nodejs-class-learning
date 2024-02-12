const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    const htmlScript = fs.readFileSync('index.html', 'utf8');
    res.write(htmlScript);
    res.end();q
});
server.listen(5000);