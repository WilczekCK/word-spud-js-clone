"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const path = require("path");
const express = require("express");
const game_1 = require("./game");
const room_1 = require("./room");
const router = express.Router();
router.get(`/`, (req, res) => {
    res.sendFile(path.resolve(`./client/index.html`));
});
const routes = [game_1.router, room_1.router, router];
exports.routes = routes;
//# sourceMappingURL=index.js.map