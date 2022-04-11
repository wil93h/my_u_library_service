"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("sql5484973", "sql5484973", "IhYpH1fuJ4", {
    host: "sql5.freesqldatabase.com ",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map