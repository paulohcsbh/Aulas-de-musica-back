"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var hello_router_1 = __importDefault(require("./routers/hello-router"));
var app = (0, express_1.default)();
app.use("/hello", hello_router_1.default);
app.listen(5000, function () { return console.log("Server running in port 5000"); });
