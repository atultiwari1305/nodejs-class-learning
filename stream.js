const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter your Atul Name: </title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button>SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    }


    if(url==='/message' && method ==='POST'){

        req.on('data',(chunk)=>{
            console.log(chunk);
        })

        fs.writeFileSync("hello.txt","SAMPLES");
        res.setHeader('Location','/');
        res.statusCode = 302;
        return res.end();
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Atul Server</title></head>');
    res.write('<body><h1>THIS IS DONE USING LINE BY LINE CODE</h1></body>');
    res.write('</html>');
    res.end();    
})
server.listen(3000);