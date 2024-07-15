"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = (0, express_1.Router)();
router.post('/signup', auth_controllers_1.signup);
router.post('/login', auth_controllers_1.login);
router.get('/verify', auth_controllers_1.verify);
exports.default = router;
