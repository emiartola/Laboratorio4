import { Vehiculo } from "./Vehiculo";
import { HojaRuta } from "./HojaRuta";
import { Detalle } from "./Detalle";

export class TestA {
  vehiculo: Vehiculo;

  hojaRuta1: HojaRuta;
  hojaRuta2: HojaRuta;
  hojaRuta3: HojaRuta;

  constructor() {

    this.vehiculo = new Vehiculo();

    this.hojaRuta1 = new HojaRuta();
    this.hojaRuta2 = new HojaRuta();
    this.hojaRuta3 = new HojaRuta();
  }

  asignarValores(){
    let detalle1 : Detalle = new Detalle();
    detalle1.kmSalida = 1000;
    detalle1.kmRegreso = 1050;
    detalle1.horaSalida = 15;
    detalle1.horaRegreso = 20;
    detalle1.minutoSalida = 30;
    detalle1.minutoRegreso = 15;
    let detalle2 : Detalle = new Detalle();
    detalle2.kmSalida = 1050;
    detalle2.kmRegreso = 1100;
    detalle2.horaSalida = 10;
    detalle2.horaRegreso = 13;
    detalle2.minutoSalida = 45;
    detalle2.minutoRegreso = 30;
    let detalle3 : Detalle = new Detalle();
    detalle3.kmSalida = 1100;
    detalle3.kmRegreso = 1150;
    detalle3.horaSalida = 8;
    detalle3.horaRegreso = 12;
    detalle3.minutoSalida = 15;
    detalle3.minutoRegreso = 10;
    let detalle4 : Detalle = new Detalle();
    detalle4.kmSalida = 1150;
    detalle4.kmRegreso = 1200;
    detalle4.horaSalida = 9;
    detalle4.horaRegreso = 14;
    detalle4.minutoSalida = 10;
    detalle4.minutoRegreso = 30;
    let detalle5 : Detalle = new Detalle();
    detalle5.kmSalida = 1200;
    detalle5.kmRegreso = 1250;
    detalle5.horaSalida = 11;
    detalle5.horaRegreso = 15;
    detalle5.minutoSalida = 25;
    detalle5.minutoRegreso = 15;
    let detalle6 : Detalle = new Detalle();
    detalle6.kmSalida = 1250;
    detalle6.kmRegreso = 1300;
    detalle6.horaSalida = 12;
    detalle6.horaRegreso = 15;
    detalle6.minutoSalida = 30;
    detalle6.minutoRegreso = 10;
    let detalle7 : Detalle = new Detalle();
    detalle7.kmSalida = 1300;
    detalle7.kmRegreso = 1350;
    detalle7.horaSalida = 10;
    detalle7.horaRegreso = 16;
    detalle7.minutoSalida = 20;
    detalle7.minutoRegreso = 15;
    let detalle8 : Detalle = new Detalle();
    detalle8.kmSalida = 1350;
    detalle8.kmRegreso = 1400;
    detalle8.horaSalida = 8;
    detalle8.horaRegreso = 11;
    detalle8.minutoSalida = 10;
    detalle8.minutoRegreso = 45;
    let detalle9 : Detalle = new Detalle();
    detalle9.kmSalida = 1400;
    detalle9.kmRegreso = 1450;
    detalle9.horaSalida = 7;
    detalle9.horaRegreso = 12;
    detalle9.minutoSalida = 45;
    detalle9.minutoRegreso = 30;

    this.hojaRuta1.fecha = new Date("2021-01-20");
    this.hojaRuta1.numero = 125;

    this.hojaRuta2.fecha = new Date("2021-03-11");
    this.hojaRuta2.numero = 228;

    this.hojaRuta3.fecha = new Date("2021-04-15");
    this.hojaRuta3.numero = 369;

    this.vehiculo.patente = "MHO-789";
    this.vehiculo.marca = "Ford";
    this.vehiculo.modelo = "Ka";

    this.hojaRuta1.detallesRuta.push(detalle1);
    this.hojaRuta1.detallesRuta.push(detalle2);
    this.hojaRuta1.detallesRuta.push(detalle3);

    this.hojaRuta2.detallesRuta.push(detalle4);
    this.hojaRuta2.detallesRuta.push(detalle5);
    this.hojaRuta2.detallesRuta.push(detalle6);

    this.hojaRuta3.detallesRuta.push(detalle7);
    this.hojaRuta3.detallesRuta.push(detalle8);
    this.hojaRuta3.detallesRuta.push(detalle9);

    this.vehiculo.hojasDeRutas.push(this.hojaRuta1);
    this.vehiculo.hojasDeRutas.push(this.hojaRuta2);
    this.vehiculo.hojasDeRutas.push(this.hojaRuta3);
  }

  calcularKm(){
    let totalKilometros = this.hojaRuta1.calcularTotalKilometros();
    return totalKilometros;
  }
}

let test = new TestA();
test.asignarValores();
console.log(test.calcularKm());
document.body.innerHTML = String(test.calcularKm()); 
