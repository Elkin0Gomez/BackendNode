import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,  //tipo de dato
        require: true, // para que sea requerido
        trim: true,    // para quitar los espacios en blanco
        //unique: true,// sirve para que ese dato sea unico
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
},{
    timestamps: true
})

export default mongoose.model('User', userSchema)