import { Router } from "express";
import { createMessage, getMessages } from "../controllers/message.controlles";

const router = Router();

router.post('/', createMessage);
router.get('/', getMessages);

export default router;