import * as path from "path"; //res.sendFile(path.resolve(`./client/${route}.html`));
import * as express from "express";

const router = express.Router()

router.get(`/game`, (req: any, res: any) => {
    res.send('Game route');
});

export {router};