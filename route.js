const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Module learning</title></head>');
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
            fs.appendFileSync('routing.txt',message[1]);
        })

        res.setHeader('Location','/');
        res.statusCode = 302;
        return res.end();
    }
}
// module.exports=requestHandler;

//for more than one function we use like this and use it in the application program

//method 1----------------------------------------------
// module.exports = {
//     handler : requestHandler,
//     someText : "Today we learned about module creation and its uses"
// }

//method 2----------------------------------------------
// exports.handler = requestHandler;
// exports.someText = "Method 2 of multifunction calling is being used";

//method 3----------------------------------------------
module.exports.handler = requestHandler;
module.exports.someText = "Method 3 of multifunction calling is being used";