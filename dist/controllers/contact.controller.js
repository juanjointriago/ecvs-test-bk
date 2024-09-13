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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactByField = exports.getAllContacts = void 0;
const data_1 = require("../data/data");
const getAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('aqui llega');
    try {
        return yield res.status(200).json({
            success: true,
            error: false,
            data: data_1.contacts,
        });
    }
    catch (error) {
        return yield res.status(500).json({
            success: false,
            error: true,
            message: error.message,
        });
    }
});
exports.getAllContacts = getAllContacts;
const getContactByField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data_1.contacts);
    try {
        const { field, value } = req.body;
        console.log({ body: req.body });
        const result = data_1.contacts.filter((contact) => contact[field] === value);
        if (!result) {
            return yield res.status(404).json({
                success: false,
                error: true,
                message: "Contact not found",
            });
        }
        return yield res.status(200).json({
            success: true,
            error: false,
            data: result,
        });
    }
    catch (error) {
        return yield res.status(500).json({
            success: false,
            error: true,
            message: error.message,
        });
    }
});
exports.getContactByField = getContactByField;
