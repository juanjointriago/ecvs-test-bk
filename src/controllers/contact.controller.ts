import { Request, Response } from "express";
import { Contact } from "../models/contact.model";
import { contacts } from "../data/data";

export const getAllContacts = async (req: Request, res: Response) => {
  console.log('aqui llega')
  try {
    return await res.status(200).json({
      success: true,
      error: false,
      data: contacts,
    });
  } catch (error: any) {
    return await res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getContactByField = async (req: Request, res: Response) => {
  console.log(contacts);
  try {
    const { field, value } = req.body;
    console.log({ body: req.body });
    const result = contacts.filter(
      (contact) => contact[field as keyof Contact] === value
    );
    if (!result) {
      return await res.status(404).json({
        success: false,
        error: true,
        message: "Contact not found",
      });
    }
    return await res.status(200).json({
      success: true,
      error: false,
      data: result,
    });
  } catch (error: any) {
    return await res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
