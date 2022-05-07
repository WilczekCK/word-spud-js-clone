"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const router = express.Router();
exports.router = router;
router.get(`/room`, (req, res) => {
    res.send('Room route');
});
//# sourceMappingURL=room.js.map