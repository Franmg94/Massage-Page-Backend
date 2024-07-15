"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controlles_1 = require("../controllers/message.controlles");
const router = (0, express_1.Router)();
router.post('/', message_controlles_1.createMessage);
router.get('/', message_controlles_1.getMessages);
exports.default = router;
