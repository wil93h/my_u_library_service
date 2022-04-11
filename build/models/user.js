"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('user', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    // },    
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map