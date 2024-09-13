"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const router = (0, express_1.Router)();
router.get('/', contact_controller_1.getAllContacts);
router.get('/:field/:value', contact_controller_1.getContactByField);
exports.default = router;
