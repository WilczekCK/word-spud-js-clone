import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);

let http = require("http");
let server = http.createServer(app);

const ioServer = socketio.Server;
const io = new ioServer(server);

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./client/index.html"));
});
  
io.on('connection', (socket) => {
    console.log('a user connected');
});


server.listen(3000, function() {
  console.log("listening on *:3000");
});