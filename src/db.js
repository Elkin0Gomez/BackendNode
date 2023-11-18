import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/contratosFesc');
        console.log('DB conectada');
    } catch (error) {
        console.error(error);
    }
};

// export const obtenerDatosDesdeMongoDB = async () => {
//     try {
//       await connectDB();
//       const datos = await Contrato.find().lean();
//       return datos;
//     } catch (error) {
//       console.error("Error al obtener datos desde MongoDB:", error);
//       throw error;
//     }
//   };