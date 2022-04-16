import { Articulo } from "./articulo";
import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalleFactura";
import { Factura } from "./factura";

export class TestB{
    mostrar(){
        let cliente = new Cliente(10, "Jumbo SA", 204567898);
        let articulo1 =  new Articulo(213, "Galletas", 80.9, "kg");
        let articulo2 =  new Articulo(214, "Gaseosa", 215.3, "lt");
        let articulo3 =  new Articulo(215, "Aceite", 99.9, "lt");
        let articulo4 =  new Articulo(216, "Café", 250, "kg");
        let articulo5 =  new Articulo(217, "Tomate", 120, "kg");
        let factura1 = new Factura("B", 4568, 200, "TC", 0, 0, new Date("2019-01-16"), cliente);
        let factura2 = new Factura("A", 5639, 50, "TD", 0, 0, new Date("2020-05-20"), cliente);
        let factura3 = new Factura("A", 8742, 100, "TD", 0, 0, new Date("2017-12-8"), cliente);
        let detalleFactura1 = new DetalleFactura(3, 120, factura1, articulo1);
        let detalleFactura2 = new DetalleFactura(2, 350, factura2, articulo2);
        let detalleFactura3 = new DetalleFactura(4, 115, factura3, articulo3);
        
        cliente.facturas.push(factura1);
        cliente.facturas.push(factura2);
        cliente.facturas.push(factura3);

        articulo1.detallesFacturas.push(detalleFactura1);
        articulo1.detallesFacturas.push(detalleFactura2);

        factura1.detallesFacturas.push(detalleFactura1);
        factura2.detallesFacturas.push(detalleFactura1);
        factura2.detallesFacturas.push(detalleFactura2);
        factura3.detallesFacturas.push(detalleFactura3);

        const subtotal = document.getElementById("subtotal");
        if (subtotal == null) {
          alert("oops");
        } else {
            subtotal.innerHTML = "El subtotal es: $ " + detalleFactura1.calcularSubTotal().toFixed(2);
        }
        factura1.calcularTotalItems();
        factura3.calcularTotalItems();
        const totalItems = document.getElementById("totalItems");
        if (totalItems == null) {
          alert("oops");
        } else {
            totalItems.innerHTML = "El total de los items de la factura Nro " + factura2.numero  + " es: $ " + factura2.calcularTotalItems().toFixed(2);
        }
        const totalFinal = document.getElementById("totalFinal");
        if (totalFinal == null) {
          alert("oops");
        } else {
            totalFinal.innerHTML = "El total final de la factura Nro " + factura2.numero + " con recargo de $ "+ factura2.recargo  + " es de $ " + factura2.calcularTotalFinal().toFixed(2);
        }
        const facturadoPorTipo = document.getElementById("facturadoPorTipo");
        if (facturadoPorTipo == null) {
          alert("oops");
        } else {
            facturadoPorTipo.innerHTML = "El total facturado por tipo de pago <u>"+ factura2.tipoPago + "</u> de las facturas Nro " + factura2.numero + " y " + factura3.numero + " es: $ " + cliente.totalFacturadoXTipoPago("TD").toFixed(2);
        }
    }
}