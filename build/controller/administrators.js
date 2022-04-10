"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAdministrator = exports.getAdministrator = exports.getAdministrators = void 0;
const getAdministrators = (req, res) => {
    res.json({
        msg: "getAdministrators",
        tex: req.params
    });
};
exports.getAdministrators = getAdministrators;
const getAdministrator = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getAdministrator",
        id
    });
};
exports.getAdministrator = getAdministrator;
const postAdministrator = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postAdministrator",
        body
    });
};
exports.postAdministrator = postAdministrator;
//# sourceMappingURL=administrators.js.map