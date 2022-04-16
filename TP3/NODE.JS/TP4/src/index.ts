import express from "express";
import { Empleado } from "./entidad/empleado";
import { crearEmpleado, getEmpleado, getEmpleados } from "./querys";
import routes from './rutas';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(3000, () => console.log("Servidor en puerto 3000", 3000));


