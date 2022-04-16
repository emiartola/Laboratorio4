import { Detalle } from "./Detalle";

export class HojaRuta {
    fecha: Date;
    numero: Number;
    detallesRuta: Detalle[] = [];
  
    constructor() {
      this.fecha = new Date();
      this.numero = 0;
      this.detallesRuta = [];
    }
  
    calcularTotalKilometros(): number {
      let kilometrosTotales: number = 0;
      if (this.detallesRuta != null) {
        this.detallesRuta.forEach(
          (detalle) =>
            (kilometrosTotales +=
              <number>detalle.kmRegreso - <number>detalle.kmSalida)
        );
      }
      return kilometrosTotales;
    }
  }
  