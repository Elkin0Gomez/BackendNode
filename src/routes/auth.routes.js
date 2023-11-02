import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import {validateShema} from '../middlewares/validator.middlewares.js'
import {regiterShema, loginSchema} from '../schemas/auth.shema.js'

const router = Router();

router.post('/register', validateShema(regiterShema), register);

router.post('/login', validateShema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router