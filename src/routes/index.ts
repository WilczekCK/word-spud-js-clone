import * as path from "path";
import * as express from "express";

import {router as game} from './game';
import {router as room} from './room';

const router = express.Router()

router.get(`/`, (req: any, res: any) => {
    res.sendFile(path.resolve(`./client/index.html`));
});

const routes = [ game, room, router ];

export { routes };