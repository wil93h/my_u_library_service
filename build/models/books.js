"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Book = connection_1.default.define('books', {
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
    },
    published_year: {
        type: sequelize_1.DataTypes.STRING,
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
    },
    qty: {
        type: sequelize_1.DataTypes.FLOAT,
    },
});
exports.default = Book;
//# sourceMappingURL=books.js.map