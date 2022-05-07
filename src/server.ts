import {app} from './app';
import * as http from 'http';
import * as socketio from "socket.io";

/* Node */  //res.sendFile(path.resolve(`./client/${route}.html`));

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