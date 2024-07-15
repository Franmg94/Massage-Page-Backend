import { Router } from 'express';
import { signup, login, verify } from '../controllers/auth.controllers';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', verify);

export default router;
