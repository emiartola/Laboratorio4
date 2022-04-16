import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalleFactura";

export class Factura {
  letra: string;
  numero: number;
  recargo: number;
  tipoPago: string;
  totalItems: number;
  totalFinal: number;
  fecha: Date;
  cliente: Cliente;
  detallesFacturas: DetalleFactura[] = [];

  constructor(
    letra: string,
    numero: number,
    recargo: number,
    tipoPago: string,
    totalItems: number,
    totalFinal: number,
    fecha: Date,
    cliente: Cliente
  ) {
    this.letra = letra;
    this.numero = numero;
    this.recargo = recargo;
    this.tipoPago = tipoPago;
    this.totalItems = totalItems;
    this.totalFinal = totalFinal;
    this.fecha = fecha;
    this.cliente = cliente;
  }

  calcularTotalItems() {
    if (this.detallesFacturas != null) {
      this.detallesFacturas.map((detalle) => {
        this.totalItems += detalle.calcularSubTotal();
      });
    }
    return this.totalItems;
  }

  calcularTotalFinal() {
    return (this.totalFinal = this.totalItems + this.recargo);
  }
}
