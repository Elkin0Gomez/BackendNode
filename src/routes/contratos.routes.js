import { Router } from "express";
import express from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getContrato,
  getContratos,
  createContratos,
  deleteContratos,
  updateContrato,
  generarDocumentoId
} from "../controllers/contratos.controller.js";


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

router.get('/generarDocumento/:id', generarDocumentoId);

export default router;
