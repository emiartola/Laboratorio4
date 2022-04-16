import express from "express";
import rutas from './rutas';

const app = express();

app.use(rutas);

app.listen(5000, () => {
 console.log("Servidor en puerto 5000", 5000);
})

