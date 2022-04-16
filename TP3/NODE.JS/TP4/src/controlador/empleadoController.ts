import { Request, Response } from "express";
import { bd } from "../bdmysql";


export const getEmpleados = (request: Request, response: Response) => new Promise((resolve, reject) => {
    bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log('bd MySql: ', connection.threadId);
        connection.query('SELECT * FROM Empleado', (err, resultado) => {
            if (err) {
                console.error(err);
            }
            response.send(resultado);
        });
    });
});

export const getEmpleadoXId = (request: Request, response: Response) => new Promise((resolve, reject) => {
    const idEmpleado = parseInt(request.params.id);
    bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log('bd MySql: ', connection.threadId);
        connection.query('SELECT * FROM empleado WHERE id =?', [idEmpleado], (err, resultado) => {
            if (err) {
                console.error(err);
            }
            response.send(resultado);
        });
    });

});

export const crearEmpleado = (request: Request, response: Response) => new Promise((resolve, reject) => {
    const { apellido, nombre, dni, sector, fechaIngreso, activo } = request.body;
    var valor = [apellido, nombre, dni, sector, fechaIngreso, activo];
    bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        else {
            let sql: string = 'INSERT INTO empleado (apellido, nombre, dni, sector, fechaIngreso, activo) VALUES (?,?,?,?,?,?)';
            connection.query(sql, valor, (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.json({ message: 'ERROR!!, no se puede crear un empleado',err })
                }
                else {
                    response.json({ message: 'Empleado creado correctamente!!' })
                }
            });
        }

    });

});


export const updateEmpleado= (request: Request, response: Response) => new Promise((resolve, reject) => {
    //const idEmpleado = parseInt(request.params.id);
    const {id, apellido, nombre, dni, sector, fechaIngreso, activo } = request.body;
    var valor = [apellido, nombre, dni, sector, fechaIngreso, activo,id];
    bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        else {
            let sql: string = 'UPDATE empleado  SET  apellido=?, nombre=?, dni=?, sector=?, fechaIngreso=?, activo =? WHERE id =? ';
            connection.query(sql, valor, (err, resultado) => {
                if (err) {
                    console.error(err);
                    response.json({ message: 'ERROR!!, no se puede actualizar el empleado' })
                }
                else {
                    response.json({ message: 'Empleado actualizado correctamente!!' })
                }
            });
        }

    });

});

export const eliminarEmpleado = (request: Request, response: Response) => new Promise((resolve, reject) => {
    const idEmpleado = parseInt(request.params.id);
    bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        connection.query('DELETE FROM empleado WHERE id =?', [idEmpleado], (err, resultado) => {
            if (err) {
                console.error(err);
                response.json({ message: 'ERROR!!!  no se peude eliminar el empleado' });
            }
            else {
                response.json({ message: 'El empleado fue eliminado correctamente' })
            }
        });
    });

});