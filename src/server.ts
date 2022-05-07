import {app} from './app';
import * as socketio from "socket.io";

/* Node */
const http = require("http");
let server = http.createServer(app);

server.listen(3000, function() {
  console.log("listening on *:3000");
});

/* Socket */
const ioServer = socketio.Server;
const io = new ioServer(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

export {server, io};