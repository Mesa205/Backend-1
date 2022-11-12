import express from "express";
import cors from "cors";
import morgan from "morgan";


//ruta de usuarios
import userRoute from "./routers/ejemploRouter.js"


const app =  express();



app.set("Port", 4000);

// app.get('/', (req, res) => {
//     res.json({
//         ok: true,
//         dat: "",
//         message: "probando",
//     })
//   })

app.use(morgan("dev"));
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/usuarios", userRoute)

app.listen(app.get("Port"), () => {
    console.log("Servidor escuchandoo por el puerto", app.get("Port"))
})