import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getContrato,
  getContratos,
  createContratos,
  deleteContratos,
  updateContrato,
} from "../controllers/contratos.controller.js";
import { validateShema } from "../middlewares/validator.middlewares.js";
import { CrearContratoSchema } from "../schemas/contrato.shema.js";

const router = Router();

router.get("/contrato", authRequired, getContratos);

router.get("/contrato/:id", authRequired, getContrato);

router.post(
  "/contrato",
  authRequired,
  createContratos
);

router.delete("/contrato/:id", authRequired, deleteContratos);

router.put("/contrato/:id", authRequired, updateContrato);

export default router;
