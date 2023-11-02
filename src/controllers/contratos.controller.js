import Contrato from "../models/contratos.model.js"

export const getContratos = async (req, res)=>{
    const contratos = await Contrato.find();
    res.json(contratos)
}

export const createContratos = async (req, res)=>{
    const { nombre, apellido, documento, fechaExpedicion, sueldo, cargo, fechaInicio, fechaFin} = req.body;

    console.log(req.user)
    const newContrato = new Contrato({
        nombre,
        apellido,
        documento,
        fechaExpedicion,
        sueldo,
        cargo,
        fechaInicio,
        fechaFin,
        user: req.user.id
    });
    const saveContrato = await newContrato.save();
    res.json(saveContrato)
}

export const getContrato = async (req, res)=>{
    const contrato = await Contrato.findById(req.params.id);
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    res.json(contrato)
}

export const deleteContratos = async (req, res)=>{
    const contrato = await Contrato.findByIdAndDelete(req.params.id);
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    return res.sendStatus(204);
}

export const updateContrato = async (req, res)=>{
    const contrato = await Contrato.findByIdAndUpdate(req.params.id, req.body,{        new : true     });
    if(!contrato) return res.status(404).json({message: "Contrato no encontrado"});
    res.json(contrato)
}                                                       