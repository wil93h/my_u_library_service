"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administrators_1 = require("../controller/administrators");
const router = (0, express_1.Router)();
router.get("/", administrators_1.getAdministrators);
router.get("/:id", administrators_1.getAdministrator);
router.post("/", administrators_1.postAdministrator);
exports.default = router;
//# sourceMappingURL=administrator.js.map