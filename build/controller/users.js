"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "getUsers",
        tex: req.params
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUser",
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postUser",
        body
    });
};
exports.postUser = postUser;
//# sourceMappingURL=users.js.map