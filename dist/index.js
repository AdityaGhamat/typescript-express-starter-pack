"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "welcome to my server",
    });
});
app.listen(config_1.ServerConfig.PORT, () => {
    console.log(`Server started and running on ${config_1.ServerConfig.PORT}`);
});
