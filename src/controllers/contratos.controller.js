import Contrato from "../models/contratos.model.js";
import fs from "fs";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

export const getContratos = async (req, res) => {
  try {
    const contratos = await Contrato.find();
    res.json(contratos);
  } catch (error) {
    return res.status(404).json({ message: "Contratos no encontratos" });
  }
};

export const createContratos = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      documento,
      fechaExpedicion,
      sueldo,
      cargo,
      fechaInicio,
      fechaFin,
    } = req.body;

    console.log(req.user);
    const newContrato = new Contrato({
      nombre,
      apellido,
      documento,
      fechaExpedicion,
      sueldo,
      cargo,
      fechaInicio,
      fechaFin,
      user: req.user.id,
    });
    const saveContrato = await newContrato.save();
    res.json(saveContrato);
  } catch (error) {
    return res.status(404).json({ message: "Algo fue mal" });
  }
};

export const getContrato = async (req, res) => {
  try {
    const contrato = await Contrato.findById(req.params.id);
    if (!contrato)
      return res.status(404).json({ message: "Contrato no encontrado" });
    res.json(contrato);
  } catch (error) {
    return res.status(404).json({ message: "Contrato no encontrado" });
  }
};

export const deleteContratos = async (req, res) => {
  try {
    const contrato = await Contrato.findByIdAndDelete(req.params.id);
    if (!contrato)
      return res.status(404).json({ message: "Contrato no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Contrato no encontrado" });
  }
};

export const updateContrato = async (req, res) => {
  try {
    const contrato = await Contrato.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!contrato)
      return res.status(404).json({ message: "Contrato no encontrado" });
    res.json(contrato);
  } catch (error) {
    return res.status(404).json({ message: "Contrato no encontrado" });
  }
};

export const generarDocumentoId = async (req, res) => {
  try {
    const contrato = await Contrato.findById(req.params.id);

    if (!contrato) {
      return res.status(404).json({ message: "Contrato no encontrado" });
    }

    const templatePath =
      "C:\\Users\\Usuario\\Documents\\CONTRATOSEJEMPLOS\\plantillaContrato.docx";
    const outputPath = `C:\\Users\\Usuario\\Documents\\CONTRATOSEJEMPLOS\\nuevoContrato_${contrato.nombre}.docx`;

    const content = fs.readFileSync(templatePath);
    const zip = new PizZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);

    const data = {
      "NOMBRE": contrato.nombre,
      "APELLIDO": contrato.apellido,
      "DOCUMENTO": contrato.documento,
      "FECHA_EXPEDICION": contrato.fechaExpedicion,
      "SUELDO": contrato.sueldo,
      "CARGO": contrato.cargo,
      "FECHA_INICIO": contrato.fechaInicio,
      "FECHA_FIN": contrato.fechaFin,
    };    

    console.log(data);

    doc.setData(data);

    try {
      doc.render();
    } catch (error) {
      console.error("Error durante la renderización del documento:", error);
      console.error("Detalles de errores:", error.properties.errors);
    
      return res.status(500).json({
        error: "Error interno del servidor",
        errorMessage: error.message,
        stackTrace: error.stack,
      });
    }

    const buf = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync(outputPath, buf);

    console.log("Documento de Word generado correctamente:", outputPath);

    res
      .status(200)
      .json({
        message: "Documento de Word generado correctamente",
        outputPath,
      });
  } catch (error) {
    console.error("Error al generar documento de Word:", error);
    res
      .status(500)
      .json({
        error: "Error interno del servidor",
        errorMessage: error.message,
        stackTrace: error.stack,
      });
  }
};
