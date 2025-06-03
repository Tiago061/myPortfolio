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
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./database/mongodb");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const hostName = 'localhost';
        const port = 3000;
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        if (!process.env.MONGO_CS || !process.env.MONGO_DB_NAME) {
            throw new Error("Variáveis de ambiente do MongoDB não configuradas!");
        }
        const mongoConnection = yield mongodb_1.Mongo.connect({
            mongoConnectionString: process.env.MONGO_CS,
            mongoDbName: process.env.MONGO_DB_NAME,
        });
        console.log(mongoConnection);
        app.get('/', (req, res) => {
            res.send("Welcome in My Portfolio");
        });
        app.listen(port, () => {
            console.log(`Server running on: http://${hostName}:${port}`);
        });
    });
}
main();
//# sourceMappingURL=index.js.map