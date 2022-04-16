import { Factura } from "./factura";

export class Cliente {
  numero: number;
  razonSocial: string;
  cuit: number;
  facturas: Factura[] = [];

  constructor(numero: number, razonSocial: string, cuit: number) {
    this.numero = numero;
    this.razonSocial = razonSocial;
    this.cuit = cuit;
  }

  totalFacturadoXTipoPago(tipoPago: string | null) {
    let totalFacturado = 0;
    if (this.facturas != null) {
      this.facturas.map((factura) => {
        if (tipoPago === "E") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        } else if (tipoPago === "TD") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        } else if (tipoPago === "TC") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        } else if (tipoPago === "TR") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        } else if (tipoPago === "CC") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        } else {
          totalFacturado += factura.calcularTotalFinal();
        }
      });
    }
    return totalFacturado;
  }
}
