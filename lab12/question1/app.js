const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', function(req, res){
    let img = fs.readFileSync('./img/MIU.jpg');
    res.writeHead(200, {'Content-Type':'image/jpg'});
    res.write(img);
    res.end();
});
server.listen(3100);