import { Request, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Contact from '../models/contact';

export const create = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const contact = await Contact.create(payload);
    return res.status(HttpStatusCodes.OK).send(contact);
  } catch (err) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}

export const list = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const filter = {
      lastname: new RegExp(".*\\b"+q+".*\\b")
    }
    const contacts = await Contact.find(filter);
    return res.status(HttpStatusCodes.OK).send(contacts);
  } catch (err) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    return res.status(HttpStatusCodes.OK).send(contact);
  } catch (err) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    return res.status(HttpStatusCodes.OK).send();
  } catch (err) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const contact = await Contact.findByIdAndUpdate(id, payload);
    return res.status(HttpStatusCodes.OK).send(contact);
  } catch (err) {
    console.log('Failed to update the contact: ', err);
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
}
