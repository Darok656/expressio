var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var messages = [
    {
      author: "Carlos",
      text: "Hola! que tal?",
    },
    {
      author: "Pepe",
      text: "Muy bien! y tu??",
    },
    {
      author: "Paco",
      text: "Genial!",
    },
  ];

app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.status(200).send("hola mund cesar");
});

io.on('connection', function (socket) {
    console.log("alguien conecto");
    socket.emit('messages', messages);
});

server.listen(8080, function () {
    console.log("Servidor corriendo en http://localhost:8080");
});