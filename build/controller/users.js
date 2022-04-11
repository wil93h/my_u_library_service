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
exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield user_1.default.findAll({
        where: {
            role: 'admin'
        }
    });
    const students = yield user_1.default.findAll({
        where: {
            role: 'student'
        }
    });
    res.json({ admins, students });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    res.json({
        msg: 'success',
        success: 'true',
        user
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield user_1.default.create({ firstName: body.firstName, lastName: body.lastName, email: body.email, role: body.role === 1 ? 'admin' : 'student', status: 1 });
        yield user.save();
        res.json({
            msg: 'the data was saved',
            success: 'true',
            user
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
exports.postUser = postUser;
//# sourceMappingURL=users.js.map