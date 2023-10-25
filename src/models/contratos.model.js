import mongoose from "mongoose";

const contratoSchema = mongoose.Schema({
    nombre: {
        type: String,  //tipo de dato
        require: true, // para que sea requerido
        trim: true,    // para quitar los espacios en blanco
        //unique: true,// sirve para que ese dato sea unico
    },
    apellido: {
        type: String,
        require: true,
        trim: true,
    },
    documento: {
        type: String,
        require: true,
        trim: true,
    },
    fechaExpedicion: {
        type: String,
        require: true,
        trim: true,
    },
    sueldo: {
        type: String,
        require: true,
        trim: true,
    },
    cargo: {
        type: String,
        require: true,
        trim: true,
    },
    fechaInicio: {
        type: String,
        require: true,
        trim: true,
    },
    fechaFin: {
        type: String,
        require: true,
        trim: true,
    },
})

export default mongoose.model('contratos', contratoSchema)