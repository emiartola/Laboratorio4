import { HojaRuta } from "./HojaRuta";

export class Vehiculo {
  patente: string;
  marca: string;
  modelo: string;
  hojasDeRutas: HojaRuta[] = [];

  constructor() {
    this.patente = "";
    this.marca = "";
    this.modelo = "";
    this.hojasDeRutas = [];
  }

  calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date) {
    var kmTotalRecorridos: number = 0;
    if (this.hojasDeRutas != null) {
      this.hojasDeRutas.forEach((hojaRuta) => {
        if (hojaRuta.fecha >= fechaDesde && hojaRuta.fecha <= fechaHasta) {
          kmTotalRecorridos += hojaRuta.calcularTotalKilometros();
        }
      });
    }
    return kmTotalRecorridos;
  }
}
