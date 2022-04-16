import { DetalleFactura } from "./detalleFactura";

export class Articulo{
    codigo:number;
    denominacion: string;
    precio: number;
    unidadMedida: string;
    detallesFacturas: DetalleFactura[] = [];

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: string){
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}