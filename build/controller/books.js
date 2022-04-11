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
exports.postBook = exports.getBook = exports.getBooks = void 0;
const books_1 = __importDefault(require("../models/books"));
const getBooks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield books_1.default.findAll();
    res.json({
        msg: 'success',
        success: 'true',
        books
    });
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield books_1.default.findByPk(id);
    res.json({
        msg: 'success',
        success: 'true',
        book
    });
});
exports.getBook = getBook;
const postBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        // title,author,publishedYear,genre
        const book = yield books_1.default.create({ title: body.title, author: body.author, publishedYear: body.publishedYear, genre: body.genre, status: 1 });
        yield book.save();
        res.json({
            msg: 'the data was saved',
            success: 'true',
            book
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error,
            success: false
        });
    }
});
exports.postBook = postBook;
//# sourceMappingURL=books.js.map