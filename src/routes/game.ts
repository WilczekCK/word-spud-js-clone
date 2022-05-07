import * as path from "path"; //res.sendFile(path.resolve(`./client/${route}.html`));
import { app } from '../app';

app.get(`/game`, (req: any, res: any) => {
    res.send('Game route');
});