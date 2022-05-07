import * as path from "path";
import * as express from "express";
import { app } from '../app';

import {router as game} from './game';
import {router as room} from './room';
const routes = [ game, room ];

export { routes };