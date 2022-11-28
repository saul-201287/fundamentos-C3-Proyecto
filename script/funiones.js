const ventas = [0,0,0,0,0,0,0,0,0,0,0,0];
const productos = ["Pan Frances", "Mini baguet", "Pan de muerto", "Bolillo", "Baguet", "Pan dulce", "Mediasnoches", "Cuernos", "Pan de Concha", "Tartala", "Panque", "Casuelas"]
const precios =  [4.00, 2.50,3.00,2.00,8.00,2.00,5.00,2.50,2.00,3.00,5.00,20.00]
function ventaPan(){
var p1 = document.getElementById("p1").value;
var p2 = document.getElementById("p2").value;
var p3 = document.getElementById("p3").value;
var p4 = document.getElementById("p4").value;
var p5 = document.getElementById("p5").value;
var p6 = document.getElementById("p6").value;
var p7 = document.getElementById("p7").value;
var p8 = document.getElementById("p8").value;
var p9 = document.getElementById("p9").value;
var p10 = document.getElementById("p10").value;
var p11 = document.getElementById("p11").value;
var p12 = document.getElementById("p12").value;
 if(p1>0){
   ventas[0]=p1;
    } if (p2 > 0) {
        ventas[1] = p2;
    } if (p3 > 0) {
        ventas[2] = p3;
    } if (p4 > 0) {
        ventas[3] = p4;
    } if (p5 > 0) {
        ventas[4] = p5;
    } if (p6 > 0) {
        ventas[5] = p6;
    } if (p7 > 0) {
        ventas[6] = p7;
    } if (p8 > 0) {
        ventas[7] = p8;
    } if (p9 > 0) {
        ventas[8] = p9;
    } if (p10 > 0) {
        ventas[9] = p10;
    } if (p11 > 0) {
        ventas[10] = p11;
    } if (p12 > 0) {
        ventas[11] = p12;
    }
    mostrarProductos();
}
var acumulador = 0.00;
function mostrarProductos(){
    var button = document.createElement("button");
    button.type = 'button';
    button.value = 'eliminar';
    var tabla = document.getElementById("tabla");
    var cadena = "";
    var total = document.getElementById("total");
    
    for (var i = 0; i <= ventas.length; i++) {
        if(ventas[i] >0){
            cadena += "<tr><td>" + productos[i] + "<td>$" + precios[i] + "<td>" + ventas[i] + " Pz<td>$" + precios[i] * ventas[i];
            acumulador +=(precios[i] * ventas[i]);
           
        }
    }
    total.innerHTML = " Total a pagar----------------- $" + acumulador;
    tabla.innerHTML=cadena ;

}
function total(){
alert("Compra realizada sastifactoriamente\nTotal a pagar: $"+acumulador)
}