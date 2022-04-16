import {Router} from 'express'
import {getEmpleados, crearEmpleado, getEmpleadoXId,eliminarEmpleado, updateEmpleado} from './controlador/empleadoController';


const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));


ruta.get('/empleados', getEmpleados);
ruta.get('/empleados/:id', getEmpleadoXId);
ruta.post('/insertar', crearEmpleado);
ruta.put('/actualizar/:id', updateEmpleado);
ruta.delete('/eliminar/:id', eliminarEmpleado);

export default ruta;