import app from "./app.js"
import { connectDB } from "./db.js";

const port = 4000

connectDB();
app.listen(port);
console.log('servidor escuchando en el puerto:' + port);