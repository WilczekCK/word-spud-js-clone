"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const router = express.Router();
exports.router = router;
router.get(`/game`, (req, res) => {
    res.send('Game route');
});
//# sourceMappingURL=game.js.map