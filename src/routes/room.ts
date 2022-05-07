import * as path from "path"; //res.sendFile(path.resolve(`./client/${route}.html`));
import { app } from '../app';

app.get(`/room`, (req: any, res: any) => {
    res.send('Room route');
});