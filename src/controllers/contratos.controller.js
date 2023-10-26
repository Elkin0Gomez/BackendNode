import Contrato from "../models/contratos.model.js"

export const getContratos = async (req, res)=>{
    const contratos = await Contrato.find();
    res.json(contratos)
}

export const createContratos = async (req, res)=>{
    const { nombre, apellido, documento, fechaExpedicion, sueldo, cargo, fechaInicio, fechaFin} = req.body;

    const newContrato = new Contrato({
        nombre,
        apellido,
        documento,
        fechaExpedicion,
        sueldo,
        cargo,
        fechaInicio,
        fechaFin
    });
    const saveContrato = await newContrato.save();
    res.json(saveContrato)
}

export const getContrato = async (req, res)=>{
    const contrato = await Contrato.findById(req.params.id);
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    res.json(contrato)
}

export const updateContratos = async (req, res)=>{
    const contrato = await Contrato.findByIdAndDelete(req.params.id);
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    res.json(contrato)
}

export const deleteContratos = async (req, res)=>{
    const contrato = await Contrato.findByIdAndUpdate(req.params.id, req.body);
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    res.json(contrato)
}