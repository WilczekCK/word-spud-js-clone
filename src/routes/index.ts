import * as path from "path";
import { app } from '../app';

app.get(`/`, (req: any, res: any) => {
    res.sendFile(path.resolve(`./client/index.html`));
});