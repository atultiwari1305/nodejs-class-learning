const http = require('http');
const fs = require('fs');

function readFileContent(inputFile, callback) {
    fs.readFile(inputFile, 'utf-8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

const server = http.createServer((req, res) => {
    readFileContent('input.txt', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading input file');
            return;
        }
        const reversedContent = content.split('').reverse().join('');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(reversedContent);
    });
});
server.listen(3000);