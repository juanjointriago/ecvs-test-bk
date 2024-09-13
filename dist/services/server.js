"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainServer = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const contact_routes_1 = __importDefault(require("../routes/contact.routes"));
class MainServer {
    //constructor
    constructor() {
        var _a;
        this.apiPaths = {
            contacts: "/api/contacts",
        };
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8095";
        this.middlewares();
        this.server = (0, http_1.createServer)(this.app);
    }
    middlewares() {
        var _a, _b, _c;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use(express_1.default.json());
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        (_c = this.app) === null || _c === void 0 ? void 0 : _c.use((0, cors_1.default)());
    }
    //routes
    routes() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use(this.apiPaths.contacts, contact_routes_1.default);
    }
    //init server
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            this.routes();
            (_a = this.server) === null || _a === void 0 ? void 0 : _a.listen(this.port, () => {
                console.log(`Server running on http://localhost:${this.port}`);
            });
        });
    }
}
exports.MainServer = MainServer;
