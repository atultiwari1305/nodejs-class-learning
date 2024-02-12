const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Atul Server</title></head>');
    res.write('<body><h1>THIS IS DONE USING LINE BY LINE CODE</h1></body>');
    res.write('</body>');
    res.end();
});
server.listen(3000);