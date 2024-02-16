const http = require('http');
const myServer = http.createServer((req1,res1)=>{
    const url = req1.url;
    const method = req1.method;

    if(url==="/my"){
        res1.setHeader("Content-type","text/html");
        res1.write("<html><body><h1>MY NAME IS ATUL KUMAR TIWARI</h1></body></html>");
        res1.end();
    }
    else if(url==="/father"){
        res1.setHeader("Content-type","text/html");
        res1.write("<html><body><h1>MY FATHER NAME IS ANILESH KUMAR TIWARI</h1></body></html>");
        res1.end();
    }
    else if(url==="/father/form"){
            res1.setHeader("Content-type","text/html");
            res1.write('<body><form action="/my" method="post"><input type="text" name="message"><button>SUBMIT</button></form></body>');
            res1.end();
        }
    else if(url==="/my" && method ==='POST'){
            res1.setHeader('Location','/my');
            res1.statusCode = 302;
            return res1.end();
        }
    

})
myServer.listen(3000);