import { Request, Response } from "express";
import { Contact } from "../models/contact.model";
import { contacts } from "../data/data";

export const getAllContacts = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      success: true,
      error: false,
      data: contacts,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getContactByField = (req: Request, res: Response) => {
  try {
    
    console.log(contacts);
    const field = req.params.field;
    const value = req.params.value;
    const result = contacts.filter( (contact) => contact[field as keyof Contact] === value);
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
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
