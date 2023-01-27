import express from "express";
import db from "./database/connectDb.js";
import routes from "./routes/index.js"
import cors from "cors"

db.authenticate()
.then(() => {
    console.log("Banco Conectado")
})
.catch((err) => {
    console.log(`Falha de Conexão: ${err}`)
})


const app = express();
app.use(cors())
routes(app)
export default app;
