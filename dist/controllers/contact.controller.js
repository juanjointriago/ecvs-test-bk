"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactByField = exports.getAllContacts = void 0;
const data_1 = require("../data/data");
const getAllContacts = (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            error: false,
            data: data_1.contacts,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message,
        });
    }
};
exports.getAllContacts = getAllContacts;
const getContactByField = (req, res) => {
    try {
        console.log(data_1.contacts);
        const field = req.params.field;
        const value = req.params.value;
        const result = data_1.contacts.filter((contact) => contact[field] === value);
        if (!result) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Contact not found",
            });
        }
        return res.status(200).json({
            success: true,
            error: false,
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message,
        });
    }
};
exports.getContactByField = getContactByField;
