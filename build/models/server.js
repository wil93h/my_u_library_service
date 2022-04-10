"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const book_1 = __importDefault(require("../routes/book"));
const administrator_1 = __importDefault(require("../routes/administrator"));
class Server {
    constructor() {
        this.apiPath = {
            users: '/api/users',
            books: '/api/books',
            administrators: '/api/admin'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.users, user_1.default);
        this.app.use(this.apiPath.books, book_1.default);
        this.app.use(this.apiPath.administrators, administrator_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map