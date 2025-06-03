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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongodb_1 = require("mongodb");
exports.Mongo = {
    client: null,
    db: null,
    connect(_a) {
        return __awaiter(this, arguments, void 0, function* ({ mongoConnectionString, mongoDbName }) {
            try {
                // Conecta ao servidor MongoDB
                this.client = new mongodb_1.MongoClient(mongoConnectionString);
                yield this.client.connect();
                // Seleciona o banco de dados
                this.db = this.client.db(mongoDbName);
                console.log(' Connected in MongoDB successful');
                return this.db;
            }
            catch (error) {
                console.error('Failed to connect to MongoDB:', error);
                throw error;
            }
        });
    },
};
//# sourceMappingURL=mongodb.js.map