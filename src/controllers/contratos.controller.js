import Contrato from "../models/contratos.model.js";

export const getContratos = async (req, res) => {
  try {
    const contratos = await Contrato.find();
    res.json(contratos);
  } catch (error) {
    return res.status(404).json({ message: "Contratos no encontratos"})
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
