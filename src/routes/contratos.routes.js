import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getContrato, getContratos, createContratos, updateContratos, deleteContratos } from "../controllers/contratos.controller.js";

const router = Router();

router.get('/contrato', authRequired, getContratos)

router.get('/contrato/:id', authRequired, getContrato)

router.post('/contrato', authRequired, createContratos)

router.delete('/contrato/:id', authRequired, deleteContratos)

router.put('/contrato/:id', authRequired, updateContratos)


export default router