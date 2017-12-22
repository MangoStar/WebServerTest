let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000);
console.log(__dirname);
console.log("Server is running...");

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Index.html');
});

io.sockets.on('connection', function(socket) {
});
