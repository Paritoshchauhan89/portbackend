import express from 'express';
import { addUser} from '../controller/user-controller.js'; 

const router = express.Router();


router.post('/contact', addUser);

export default router;