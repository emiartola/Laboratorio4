import { Articulo } from "./articulo";
import { Factura } from "./factura";

export class DetalleFactura {
  cantidad: number;
  subtotal: number;
  factura: Factura;
  articulo: Articulo;

  constructor(
    cantidad: number,
    subtotal: number,
    factura: Factura,
    articulo: Articulo
  ) {
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.factura = factura;
    this.articulo = articulo;
  }

  calcularSubTotal() {
    return (this.subtotal = this.cantidad * this.articulo.precio);
  }
}
