"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const app_1 = require("../app");
app_1.app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(`./client/index.html`));
});
//# sourceMappingURL=index.js.map