"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./services/server");
const server = new server_1.MainServer();
server.execute();
