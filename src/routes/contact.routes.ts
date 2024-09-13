import { Router } from 'express';
import { getAllContacts, getContactByField } from '../controllers/contact.controller';


const router = Router();

router.get('/', getAllContacts);
router.get('/:field/:value', getContactByField);

export default router;