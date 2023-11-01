import mongoose from "mongoose";

const contratoSchema = mongoose.Schema({
    nombre: {
        type: String,  //tipo de dato
        required: true, // para que sea requerido
        trim: true,    // para quitar los espacios en blanco
        //unique: true,// sirve para que ese dato sea unico
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    documento: {
        type: String,
        required: true,
        trim: true,
    },
    fechaExpedicion: {
        type: String,
        required: true,
        trim: true,
    },
    sueldo: {
        type: String,
        required: true,
        trim: true,
    },
    cargo: {
        type: String,
        required: true,
        trim: true,
    },
    fechaInicio: {
        type: String,
        required: true,
        trim: true,
    },
    fechaFin: {
        type: String,
        require: true,
        trim: true,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('contratos', contratoSchema)