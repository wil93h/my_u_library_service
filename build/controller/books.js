"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBook = exports.getBook = exports.getBooks = void 0;
const getBooks = (req, res) => {
    res.json({
        msg: "getBooks",
        tex: req.params
    });
};
exports.getBooks = getBooks;
const getBook = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getBook",
        id
    });
};
exports.getBook = getBook;
const postBook = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postBook",
        body
    });
};
exports.postBook = postBook;
//# sourceMappingURL=books.js.map