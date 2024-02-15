const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
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
        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=');
            fs.appendFileSync('cse.txt',message[1]);
        })

        fs.writeFileSync("hello.txt","SAMPLES");
        res.setHeader('Location','/');
        res.statusCode = 302;
        return res.end();
    }
})
myServer.listen(3000);